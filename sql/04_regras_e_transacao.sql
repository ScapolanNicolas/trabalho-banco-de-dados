-- =====================================================================
--  Script 04 — Regras de negócio (triggers) e operação TRANSACIONAL
--  MySQL 8.0+
-- ---------------------------------------------------------------------
--  As triggers são criadas DEPOIS da carga (script 03) porque a carga
--  representa a importação de dados históricos (ex.: frequências de
--  alunos que hoje já estão cancelados). Daqui em diante, toda nova
--  operação passa pelas validações abaixo.
--
--  ATENÇÃO (MySQL Workbench): os cenários 2 e 3 da demonstração geram
--  ERRO DE PROPÓSITO para provar o ROLLBACK. Execute a demonstração
--  bloco a bloco (Ctrl+Enter) ou habilite "Continue on SQL error".
-- =====================================================================
USE academia;

DROP TRIGGER   IF EXISTS trg_inscricao_aula_bi;
DROP TRIGGER   IF EXISTS trg_frequencia_bi;
DROP PROCEDURE IF EXISTS sp_registrar_pagamento;

DELIMITER $$

-- ---------------------------------------------------------------------
-- TRIGGER 1 — valida a inscrição de um aluno em uma aula
--   RN05: só aluno com matrícula ATIVA pode se inscrever
--   RN06: respeita o limite de modalidades do plano
--   RN07: respeita a capacidade da turma
-- ---------------------------------------------------------------------
CREATE TRIGGER trg_inscricao_aula_bi
BEFORE INSERT ON inscricao_aula
FOR EACH ROW
BEGIN
    DECLARE v_limite      TINYINT  DEFAULT NULL;
    DECLARE v_inscritas   INT      DEFAULT 0;
    DECLARE v_capacidade  SMALLINT DEFAULT 0;
    DECLARE v_ocupacao    INT      DEFAULT 0;

    SELECT p.limite_aulas INTO v_limite
      FROM matricula m
      JOIN plano p ON p.id_plano = m.id_plano
     WHERE m.id_aluno = NEW.id_aluno
       AND m.status   = 'ATIVA';

    IF v_limite IS NULL THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'RN05: aluno sem matrícula ATIVA não pode se inscrever em aulas.';
    END IF;

    SELECT COUNT(*) INTO v_inscritas
      FROM inscricao_aula
     WHERE id_aluno = NEW.id_aluno AND ativa = TRUE;

    IF v_inscritas >= v_limite THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'RN06: limite de modalidades do plano atingido.';
    END IF;

    SELECT capacidade INTO v_capacidade FROM aula WHERE id_aula = NEW.id_aula;

    SELECT COUNT(*) INTO v_ocupacao
      FROM inscricao_aula
     WHERE id_aula = NEW.id_aula AND ativa = TRUE;

    IF v_ocupacao >= v_capacidade THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'RN07: turma lotada (capacidade máxima atingida).';
    END IF;
END$$

-- ---------------------------------------------------------------------
-- TRIGGER 2 — valida o check-in (frequência)
--   RN08: a data precisa cair no dia da semana da aula e não pode ser futura
--   RN09: inscrição ativa e matrícula ATIVA (suspensa não faz check-in)
-- ---------------------------------------------------------------------
CREATE TRIGGER trg_frequencia_bi
BEFORE INSERT ON frequencia
FOR EACH ROW
BEGIN
    DECLARE v_dia_semana  TINYINT DEFAULT NULL;
    DECLARE v_ativa       BOOLEAN DEFAULT NULL;
    DECLARE v_matriculas  INT     DEFAULT 0;

    SELECT dia_semana INTO v_dia_semana FROM aula WHERE id_aula = NEW.id_aula;

    IF DAYOFWEEK(NEW.data_aula) <> v_dia_semana THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'RN08: a data informada não corresponde ao dia da semana da aula.';
    END IF;

    IF NEW.data_aula > CURRENT_DATE THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'RN08: não é possível registrar presença em data futura.';
    END IF;

    SELECT ativa INTO v_ativa
      FROM inscricao_aula
     WHERE id_aluno = NEW.id_aluno AND id_aula = NEW.id_aula;

    IF v_ativa IS NULL OR v_ativa = FALSE THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'RN09: aluno não possui inscrição ativa nesta aula.';
    END IF;

    SELECT COUNT(*) INTO v_matriculas
      FROM matricula
     WHERE id_aluno = NEW.id_aluno AND status = 'ATIVA';

    IF v_matriculas = 0 THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'RN09: matrícula não está ATIVA (suspensa ou cancelada).';
    END IF;
END$$

-- ---------------------------------------------------------------------
-- PROCEDURE TRANSACIONAL — sp_registrar_pagamento
--
--  Passos (todos ou nenhum):
--    1. Bloqueia (FOR UPDATE) a parcela e a matrícula
--    2. Valida a parcela (existe? está em aberto? matrícula vigente?)
--    3. Marca a parcela como PAGA (data + forma de pagamento)
--    4. Se a matrícula estava SUSPENSA e não restou parcela ATRASADA,
--       reativa a matrícula (SUSPENSA -> ATIVA)
--    5. Registra o evento no histórico da matrícula
--    6. COMMIT  — ou ROLLBACK automático em qualquer erro
-- ---------------------------------------------------------------------
CREATE PROCEDURE sp_registrar_pagamento(
    IN p_id_pagamento    INT,
    IN p_forma_pagamento VARCHAR(15),
    IN p_data_pagamento  DATE
)
BEGIN
    DECLARE v_status_pag    VARCHAR(10) DEFAULT NULL;
    DECLARE v_id_matricula  INT         DEFAULT NULL;
    DECLARE v_status_mat    VARCHAR(10) DEFAULT NULL;
    DECLARE v_competencia   DATE        DEFAULT NULL;
    DECLARE v_atrasadas     INT         DEFAULT 0;

    -- Qualquer erro (SIGNAL, violação de CHECK/FK, deadlock...) desfaz tudo
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;   -- devolve o erro original para quem chamou
    END;

    START TRANSACTION;

    -- 1) Lê e BLOQUEIA a parcela e a matrícula (evita pagamento duplo concorrente)
    SELECT p.status, p.id_matricula, p.competencia, m.status
      INTO v_status_pag, v_id_matricula, v_competencia, v_status_mat
      FROM pagamento p
      JOIN matricula m ON m.id_matricula = p.id_matricula
     WHERE p.id_pagamento = p_id_pagamento
       FOR UPDATE;

    -- 2) Validações de negócio
    IF v_status_pag IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Pagamento inexistente.';
    END IF;

    IF v_status_pag NOT IN ('PENDENTE', 'ATRASADO') THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Parcela já quitada ou cancelada.';
    END IF;

    IF v_status_mat IN ('CANCELADA', 'ENCERRADA') THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Matrícula cancelada/encerrada não recebe pagamentos.';
    END IF;

    -- 3) Quita a parcela (CHECK ck_pagamento_forma valida a forma informada)
    UPDATE pagamento
       SET status          = 'PAGO',
           data_pagamento  = p_data_pagamento,
           forma_pagamento = p_forma_pagamento
     WHERE id_pagamento = p_id_pagamento;

    -- 4) Verifica se ainda existem parcelas em atraso
    SELECT COUNT(*) INTO v_atrasadas
      FROM pagamento
     WHERE id_matricula = v_id_matricula
       AND status = 'ATRASADO';

    IF v_status_mat = 'SUSPENSA' AND v_atrasadas = 0 THEN
        UPDATE matricula
           SET status = 'ATIVA'
         WHERE id_matricula = v_id_matricula;

        -- 5a) Histórico da reativação
        INSERT INTO historico_matricula (id_matricula, status_anterior, status_novo, motivo)
        VALUES (v_id_matricula, 'SUSPENSA', 'ATIVA',
                CONCAT('Reativada após quitação da parcela ', DATE_FORMAT(v_competencia, '%m/%Y'),
                       ' (pagamento #', p_id_pagamento, ' via ', p_forma_pagamento, ')'));
    ELSE
        -- 5b) Histórico do pagamento (situação mantida)
        INSERT INTO historico_matricula (id_matricula, status_anterior, status_novo, motivo)
        VALUES (v_id_matricula, v_status_mat, v_status_mat,
                CONCAT('Parcela ', DATE_FORMAT(v_competencia, '%m/%Y'), ' quitada (pagamento #',
                       p_id_pagamento, ' via ', p_forma_pagamento, '); parcelas ainda em atraso: ', v_atrasadas));
    END IF;

    -- 6) Confirma tudo
    COMMIT;

    SELECT 'Pagamento registrado com sucesso' AS resultado,
           p_id_pagamento AS id_pagamento,
           v_id_matricula AS id_matricula,
           (SELECT status FROM matricula WHERE id_matricula = v_id_matricula) AS situacao_matricula;
END$$

DELIMITER ;


-- =====================================================================
--  DEMONSTRAÇÃO
--  Aluno 14 (Lucas Pereira Campos) — matrícula 14 está SUSPENSA porque a
--  parcela 10/2026 (pagamento #91) venceu em 10/10/2026 e não foi paga.
-- =====================================================================

-- ESTADO ANTES ---------------------------------------------------------
SELECT m.id_matricula, a.nome, m.status AS situacao_matricula
  FROM matricula m JOIN aluno a ON a.id_aluno = m.id_aluno
 WHERE m.id_matricula = 14;

SELECT id_pagamento, competencia, data_vencimento, valor, status
  FROM pagamento WHERE id_matricula = 14 ORDER BY competencia;

-- CENÁRIO 1 — SUCESSO (COMMIT) -----------------------------------------
-- Quita a parcela atrasada -> matrícula volta a ATIVA -> histórico gravado
CALL sp_registrar_pagamento(91, 'PIX', '2026-11-06');

SELECT id_pagamento, status, data_pagamento, forma_pagamento
  FROM pagamento WHERE id_pagamento = 91;                 -- PAGO
SELECT id_matricula, status FROM matricula WHERE id_matricula = 14;   -- ATIVA
SELECT * FROM historico_matricula WHERE id_matricula = 14 ORDER BY data_hora;

-- CENÁRIO 2 — FALHA DE REGRA DE NEGÓCIO (ROLLBACK) ---------------------
-- Tentar pagar de novo a mesma parcela -> erro 1644 "Parcela já quitada"
-- Nada é alterado e nenhum histórico é gravado.
CALL sp_registrar_pagamento(91, 'PIX', '2026-11-06');

-- CENÁRIO 3 — FALHA DE INTEGRIDADE NO MEIO DA TRANSAÇÃO (ROLLBACK) -----
-- Forma de pagamento inválida viola o CHECK ck_pagamento_forma (erro 3819).
-- O handler executa ROLLBACK: a parcela #47 continua ATRASADA.
CALL sp_registrar_pagamento(47, 'CHEQUE', '2026-11-06');
SELECT id_pagamento, status FROM pagamento WHERE id_pagamento = 47;   -- ATRASADO

-- CENÁRIO 4 — TRANSAÇÃO MANUAL COM ROLLBACK EXPLÍCITO -------------------
-- Simula o cancelamento da matrícula 22; o operador desiste e desfaz.
START TRANSACTION;

    UPDATE matricula
       SET status = 'CANCELADA', data_fim = '2026-11-06'
     WHERE id_matricula = 22;

    UPDATE pagamento
       SET status = 'CANCELADO'
     WHERE id_matricula = 22 AND status IN ('PENDENTE', 'ATRASADO');

    INSERT INTO historico_matricula (id_matricula, status_anterior, status_novo, motivo)
    VALUES (22, 'SUSPENSA', 'CANCELADA', 'Cancelamento por inadimplência (simulação)');

    -- Dentro da transação as alterações são visíveis:
    SELECT id_matricula, status, data_fim FROM matricula WHERE id_matricula = 22;

ROLLBACK;

-- Após o ROLLBACK tudo volta ao estado original (SUSPENSA, parcelas ATRASADAS)
SELECT id_matricula, status, data_fim FROM matricula WHERE id_matricula = 22;
SELECT id_pagamento, competencia, status FROM pagamento WHERE id_matricula = 22 ORDER BY competencia;

-- TESTES DAS TRIGGERS (devem gerar erro) --------------------------------
-- RN05: aluno 22 está com matrícula SUSPENSA -> não pode se inscrever
-- INSERT INTO inscricao_aula (id_aluno, id_aula) VALUES (22, 3);
-- RN08: 2026-10-05 é segunda-feira, mas a aula 3 (Yoga) é às terças
-- INSERT INTO frequencia (id_aluno, id_aula, data_aula, hora_checkin) VALUES (1, 3, '2026-10-05', '07:55');
