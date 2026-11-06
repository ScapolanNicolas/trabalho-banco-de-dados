-- =====================================================================
--  PROJETO DE BANCO DE DADOS — SISTEMA DE GESTÃO DE ACADEMIA
--  Script 01 — Criação do banco de dados e das tabelas
--  SGBD alvo: MySQL 8.0.16+ (CHECK constraints e DEFAULT por expressão)
-- =====================================================================
--  Ordem de execução dos scripts:
--    01_criacao.sql   -> estrutura (tabelas, PK, FK, CHECK, UNIQUE...)
--    02_indices.sql   -> índices de desempenho
--    03_carga.sql     -> carga de dados fictícios
--    04_regras_e_transacao.sql -> triggers + procedure transacional
--    05_consultas.sql -> consultas de validação / relatórios
-- =====================================================================

DROP DATABASE IF EXISTS academia;
CREATE DATABASE academia
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_0900_ai_ci;
USE academia;

-- ---------------------------------------------------------------------
-- 1) PLANO — planos comerciais oferecidos pela academia
-- ---------------------------------------------------------------------
CREATE TABLE plano (
    id_plano        INT            NOT NULL AUTO_INCREMENT,
    nome            VARCHAR(50)    NOT NULL,
    descricao       VARCHAR(255)   NULL,
    duracao_meses   TINYINT        NOT NULL,
    valor_mensal    DECIMAL(8,2)   NOT NULL,
    limite_aulas    TINYINT        NOT NULL DEFAULT 2,
    ativo           BOOLEAN        NOT NULL DEFAULT TRUE,
    CONSTRAINT pk_plano          PRIMARY KEY (id_plano),
    CONSTRAINT uk_plano_nome     UNIQUE (nome),
    CONSTRAINT ck_plano_duracao  CHECK (duracao_meses IN (1, 3, 6, 12)),
    CONSTRAINT ck_plano_valor    CHECK (valor_mensal > 0),
    CONSTRAINT ck_plano_limite   CHECK (limite_aulas BETWEEN 1 AND 7)
) ENGINE = InnoDB;

-- ---------------------------------------------------------------------
-- 2) ALUNO — clientes da academia
-- ---------------------------------------------------------------------
CREATE TABLE aluno (
    id_aluno         INT           NOT NULL AUTO_INCREMENT,
    nome             VARCHAR(100)  NOT NULL,
    cpf              CHAR(11)      NOT NULL,
    data_nascimento  DATE          NOT NULL,
    sexo             CHAR(1)       NOT NULL,
    email            VARCHAR(120)  NOT NULL,
    telefone         VARCHAR(15)   NOT NULL,
    data_cadastro    DATE          NOT NULL DEFAULT (CURRENT_DATE),
    CONSTRAINT pk_aluno            PRIMARY KEY (id_aluno),
    CONSTRAINT uk_aluno_cpf        UNIQUE (cpf),
    CONSTRAINT uk_aluno_email      UNIQUE (email),
    CONSTRAINT ck_aluno_cpf        CHECK (cpf REGEXP '^[0-9]{11}$'),
    CONSTRAINT ck_aluno_sexo       CHECK (sexo IN ('M', 'F', 'O')),
    CONSTRAINT ck_aluno_email      CHECK (email LIKE '%_@_%._%'),
    CONSTRAINT ck_aluno_nascimento CHECK (data_nascimento >= '1920-01-01'),
    CONSTRAINT ck_aluno_cadastro   CHECK (data_cadastro > data_nascimento)
) ENGINE = InnoDB;

-- ---------------------------------------------------------------------
-- 3) INSTRUTOR — profissionais de educação física
-- ---------------------------------------------------------------------
CREATE TABLE instrutor (
    id_instrutor   INT           NOT NULL AUTO_INCREMENT,
    nome           VARCHAR(100)  NOT NULL,
    cpf            CHAR(11)      NOT NULL,
    cref           VARCHAR(15)   NOT NULL,
    email          VARCHAR(120)  NOT NULL,
    telefone       VARCHAR(15)   NOT NULL,
    data_admissao  DATE          NOT NULL,
    salario        DECIMAL(9,2)  NOT NULL,
    ativo          BOOLEAN       NOT NULL DEFAULT TRUE,
    CONSTRAINT pk_instrutor         PRIMARY KEY (id_instrutor),
    CONSTRAINT uk_instrutor_cpf     UNIQUE (cpf),
    CONSTRAINT uk_instrutor_cref    UNIQUE (cref),
    CONSTRAINT uk_instrutor_email   UNIQUE (email),
    CONSTRAINT ck_instrutor_cpf     CHECK (cpf REGEXP '^[0-9]{11}$'),
    CONSTRAINT ck_instrutor_salario CHECK (salario > 0)
) ENGINE = InnoDB;

-- ---------------------------------------------------------------------
-- 4) MODALIDADE — tipos de atividade (Yoga, Spinning, CrossFit...)
-- ---------------------------------------------------------------------
CREATE TABLE modalidade (
    id_modalidade  INT           NOT NULL AUTO_INCREMENT,
    nome           VARCHAR(50)   NOT NULL,
    descricao      VARCHAR(255)  NULL,
    intensidade    VARCHAR(10)   NOT NULL DEFAULT 'MODERADA',
    CONSTRAINT pk_modalidade             PRIMARY KEY (id_modalidade),
    CONSTRAINT uk_modalidade_nome        UNIQUE (nome),
    CONSTRAINT ck_modalidade_intensidade CHECK (intensidade IN ('LEVE', 'MODERADA', 'ALTA'))
) ENGINE = InnoDB;

-- ---------------------------------------------------------------------
-- 5) INSTRUTOR_MODALIDADE — associativa N:N
--    Um instrutor é habilitado em várias modalidades e uma modalidade
--    pode ser ministrada por vários instrutores.
-- ---------------------------------------------------------------------
CREATE TABLE instrutor_modalidade (
    id_instrutor      INT   NOT NULL,
    id_modalidade     INT   NOT NULL,
    data_habilitacao  DATE  NOT NULL,
    CONSTRAINT pk_instrutor_modalidade PRIMARY KEY (id_instrutor, id_modalidade),
    CONSTRAINT fk_im_instrutor  FOREIGN KEY (id_instrutor)
        REFERENCES instrutor (id_instrutor)   ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT fk_im_modalidade FOREIGN KEY (id_modalidade)
        REFERENCES modalidade (id_modalidade) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB;

-- ---------------------------------------------------------------------
-- 6) AULA — turma semanal recorrente (grade horária)
--    A FK composta (id_instrutor, id_modalidade) garante que só um
--    instrutor HABILITADO na modalidade pode ministrar a aula.
--    dia_semana segue a convenção do MySQL DAYOFWEEK(): 1=Dom ... 7=Sáb
-- ---------------------------------------------------------------------
CREATE TABLE aula (
    id_aula         INT          NOT NULL AUTO_INCREMENT,
    id_modalidade   INT          NOT NULL,
    id_instrutor    INT          NOT NULL,
    dia_semana      TINYINT      NOT NULL,
    horario_inicio  TIME         NOT NULL,
    horario_fim     TIME         NOT NULL,
    sala            VARCHAR(30)  NOT NULL,
    capacidade      SMALLINT     NOT NULL DEFAULT 20,
    CONSTRAINT pk_aula              PRIMARY KEY (id_aula),
    CONSTRAINT uk_aula_sala_horario UNIQUE (sala, dia_semana, horario_inicio),
    CONSTRAINT uk_aula_instr_horario UNIQUE (id_instrutor, dia_semana, horario_inicio),
    CONSTRAINT ck_aula_dia          CHECK (dia_semana BETWEEN 1 AND 7),
    CONSTRAINT ck_aula_horario      CHECK (horario_fim > horario_inicio),
    CONSTRAINT ck_aula_capacidade   CHECK (capacidade BETWEEN 1 AND 60),
    CONSTRAINT fk_aula_modalidade   FOREIGN KEY (id_modalidade)
        REFERENCES modalidade (id_modalidade) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT fk_aula_habilitacao  FOREIGN KEY (id_instrutor, id_modalidade)
        REFERENCES instrutor_modalidade (id_instrutor, id_modalidade)
        ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB;

-- ---------------------------------------------------------------------
-- 7) MATRICULA — vínculo contratual Aluno x Plano
--    A coluna gerada aluno_vigente + UNIQUE impede que um mesmo aluno
--    tenha DUAS matrículas vigentes (ATIVA ou SUSPENSA) ao mesmo tempo.
--    Para matrículas encerradas/canceladas ela vale NULL, e o MySQL
--    permite vários NULLs num índice UNIQUE.
-- ---------------------------------------------------------------------
CREATE TABLE matricula (
    id_matricula    INT          NOT NULL AUTO_INCREMENT,
    id_aluno        INT          NOT NULL,
    id_plano        INT          NOT NULL,
    data_inicio     DATE         NOT NULL,
    data_fim        DATE         NULL,
    dia_vencimento  TINYINT      NOT NULL DEFAULT 10,
    status          VARCHAR(10)  NOT NULL DEFAULT 'ATIVA',
    aluno_vigente   INT GENERATED ALWAYS AS (
                        CASE WHEN status IN ('ATIVA', 'SUSPENSA') THEN id_aluno END
                    ) STORED,
    CONSTRAINT pk_matricula            PRIMARY KEY (id_matricula),
    CONSTRAINT uk_matricula_vigente    UNIQUE (aluno_vigente),
    CONSTRAINT ck_matricula_status     CHECK (status IN ('ATIVA', 'SUSPENSA', 'CANCELADA', 'ENCERRADA')),
    CONSTRAINT ck_matricula_vencimento CHECK (dia_vencimento BETWEEN 1 AND 28),
    CONSTRAINT ck_matricula_periodo    CHECK (data_fim IS NULL OR data_fim >= data_inicio),
    CONSTRAINT ck_matricula_fim        CHECK (status IN ('ATIVA', 'SUSPENSA') OR data_fim IS NOT NULL),
    CONSTRAINT fk_matricula_aluno FOREIGN KEY (id_aluno)
        REFERENCES aluno (id_aluno) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT fk_matricula_plano FOREIGN KEY (id_plano)
        REFERENCES plano (id_plano) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB;

-- ---------------------------------------------------------------------
-- 8) INSCRICAO_AULA — associativa N:N Aluno x Aula
--    Inscrições não são apagadas: ao sair da turma, ativa = FALSE
--    (preserva o histórico de frequência).
-- ---------------------------------------------------------------------
CREATE TABLE inscricao_aula (
    id_aluno        INT      NOT NULL,
    id_aula         INT      NOT NULL,
    data_inscricao  DATE     NOT NULL DEFAULT (CURRENT_DATE),
    ativa           BOOLEAN  NOT NULL DEFAULT TRUE,
    CONSTRAINT pk_inscricao_aula PRIMARY KEY (id_aluno, id_aula),
    CONSTRAINT fk_inscricao_aluno FOREIGN KEY (id_aluno)
        REFERENCES aluno (id_aluno) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT fk_inscricao_aula  FOREIGN KEY (id_aula)
        REFERENCES aula (id_aula)   ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB;

-- ---------------------------------------------------------------------
-- 9) FREQUENCIA — check-in do aluno em uma ocorrência da aula
--    A FK composta para inscricao_aula garante que o aluno só registra
--    presença em aulas nas quais está inscrito.
-- ---------------------------------------------------------------------
CREATE TABLE frequencia (
    id_frequencia  INT   NOT NULL AUTO_INCREMENT,
    id_aluno       INT   NOT NULL,
    id_aula        INT   NOT NULL,
    data_aula      DATE  NOT NULL,
    hora_checkin   TIME  NOT NULL,
    CONSTRAINT pk_frequencia          PRIMARY KEY (id_frequencia),
    CONSTRAINT uk_frequencia_presenca UNIQUE (id_aluno, id_aula, data_aula),
    CONSTRAINT fk_frequencia_inscricao FOREIGN KEY (id_aluno, id_aula)
        REFERENCES inscricao_aula (id_aluno, id_aula)
        ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB;

-- ---------------------------------------------------------------------
-- 10) PAGAMENTO — mensalidade (parcela) de uma matrícula
-- ---------------------------------------------------------------------
CREATE TABLE pagamento (
    id_pagamento     INT           NOT NULL AUTO_INCREMENT,
    id_matricula     INT           NOT NULL,
    competencia      DATE          NOT NULL,
    data_vencimento  DATE          NOT NULL,
    valor            DECIMAL(8,2)  NOT NULL,
    data_pagamento   DATE          NULL,
    forma_pagamento  VARCHAR(15)   NULL,
    status           VARCHAR(10)   NOT NULL DEFAULT 'PENDENTE',
    CONSTRAINT pk_pagamento              PRIMARY KEY (id_pagamento),
    CONSTRAINT uk_pagamento_competencia  UNIQUE (id_matricula, competencia),
    CONSTRAINT ck_pagamento_competencia  CHECK (DAY(competencia) = 1),
    CONSTRAINT ck_pagamento_valor        CHECK (valor > 0),
    CONSTRAINT ck_pagamento_status       CHECK (status IN ('PENDENTE', 'PAGO', 'ATRASADO', 'CANCELADO')),
    CONSTRAINT ck_pagamento_forma        CHECK (forma_pagamento IS NULL OR forma_pagamento IN
                                               ('PIX', 'CARTAO_CREDITO', 'CARTAO_DEBITO', 'DINHEIRO', 'BOLETO')),
    -- Coerência: pago <=> possui data e forma de pagamento
    CONSTRAINT ck_pagamento_quitacao     CHECK (
        (status = 'PAGO'  AND data_pagamento IS NOT NULL AND forma_pagamento IS NOT NULL)
     OR (status <> 'PAGO' AND data_pagamento IS NULL     AND forma_pagamento IS NULL)
    ),
    CONSTRAINT fk_pagamento_matricula FOREIGN KEY (id_matricula)
        REFERENCES matricula (id_matricula) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB;

-- ---------------------------------------------------------------------
-- 11) HISTORICO_MATRICULA — trilha de auditoria das mudanças de situação
-- ---------------------------------------------------------------------
CREATE TABLE historico_matricula (
    id_historico     INT           NOT NULL AUTO_INCREMENT,
    id_matricula     INT           NOT NULL,
    status_anterior  VARCHAR(10)   NULL,
    status_novo      VARCHAR(10)   NOT NULL,
    data_hora        DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    motivo           VARCHAR(255)  NOT NULL,
    CONSTRAINT pk_historico_matricula PRIMARY KEY (id_historico),
    CONSTRAINT ck_historico_anterior  CHECK (status_anterior IS NULL OR status_anterior IN
                                             ('ATIVA', 'SUSPENSA', 'CANCELADA', 'ENCERRADA')),
    CONSTRAINT ck_historico_novo      CHECK (status_novo IN ('ATIVA', 'SUSPENSA', 'CANCELADA', 'ENCERRADA')),
    CONSTRAINT fk_historico_matricula FOREIGN KEY (id_matricula)
        REFERENCES matricula (id_matricula) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB;

-- Conferência rápida
SHOW TABLES;
