-- =====================================================================
--  Script 05 — Consultas SQL (relatórios e validação) — MySQL 8
-- ---------------------------------------------------------------------
--  Data de referência ("hoje") da base fictícia: 06/11/2026.
--  As datas fixas abaixo garantem resultados reproduzíveis; em produção
--  basta trocá-las por CURDATE() / intervalos dinâmicos.
--  Os resultados documentados referem-se à base logo após a carga
--  (antes da demonstração transacional do script 04).
-- =====================================================================
USE academia;

-- =====================================================================
-- C01 — JOIN SIMPLES: grade semanal de aulas com o nome da modalidade
-- =====================================================================
SELECT a.id_aula,
       mo.nome                                         AS modalidade,
       ELT(a.dia_semana, 'Domingo', 'Segunda', 'Terça', 'Quarta',
                         'Quinta', 'Sexta', 'Sábado')   AS dia,
       TIME_FORMAT(a.horario_inicio, '%H:%i')          AS inicio,
       TIME_FORMAT(a.horario_fim,    '%H:%i')          AS fim,
       a.sala,
       a.capacidade
  FROM aula a
 INNER JOIN modalidade mo ON mo.id_modalidade = a.id_modalidade
 ORDER BY a.dia_semana, a.horario_inicio;

-- =====================================================================
-- C02 — JOIN MÚLTIPLO (7 tabelas): ficha de treinos dos alunos ATIVOS
--        aluno -> matrícula -> plano -> inscrição -> aula -> modalidade
--        -> instrutor
-- =====================================================================
SELECT al.nome                                         AS aluno,
       pl.nome                                         AS plano,
       mo.nome                                         AS modalidade,
       ins.nome                                        AS instrutor,
       ELT(au.dia_semana, 'Domingo', 'Segunda', 'Terça', 'Quarta',
                          'Quinta', 'Sexta', 'Sábado') AS dia,
       TIME_FORMAT(au.horario_inicio, '%H:%i')         AS horario
  FROM aluno al
  JOIN matricula      ma  ON ma.id_aluno      = al.id_aluno
                         AND ma.status        = 'ATIVA'
  JOIN plano          pl  ON pl.id_plano      = ma.id_plano
  JOIN inscricao_aula ia  ON ia.id_aluno      = al.id_aluno
                         AND ia.ativa         = TRUE
  JOIN aula           au  ON au.id_aula       = ia.id_aula
  JOIN modalidade     mo  ON mo.id_modalidade = au.id_modalidade
  JOIN instrutor      ins ON ins.id_instrutor = au.id_instrutor
 ORDER BY al.nome, au.dia_semana, au.horario_inicio;

-- =====================================================================
-- C03 — GROUP BY: matrículas vigentes e receita mensal prevista por plano
--        (LEFT JOIN para exibir também planos sem nenhuma matrícula)
-- =====================================================================
SELECT pl.nome                                    AS plano,
       pl.valor_mensal,
       COUNT(ma.id_matricula)                     AS matriculas_vigentes,
       COUNT(ma.id_matricula) * pl.valor_mensal   AS receita_mensal_prevista
  FROM plano pl
  LEFT JOIN matricula ma ON ma.id_plano = pl.id_plano
                        AND ma.status IN ('ATIVA', 'SUSPENSA')
 GROUP BY pl.id_plano, pl.nome, pl.valor_mensal
 ORDER BY matriculas_vigentes DESC, pl.nome;

-- =====================================================================
-- C04 — HAVING: alunos que praticam 2 ou mais modalidades diferentes
--        (público-alvo para upgrade de plano / fidelização)
-- =====================================================================
SELECT al.nome                                              AS aluno,
       COUNT(DISTINCT au.id_modalidade)                     AS qtd_modalidades,
       COUNT(*)                                             AS qtd_turmas,
       GROUP_CONCAT(DISTINCT mo.nome ORDER BY mo.nome SEPARATOR ', ') AS modalidades
  FROM inscricao_aula ia
  JOIN aluno      al ON al.id_aluno      = ia.id_aluno
  JOIN aula       au ON au.id_aula       = ia.id_aula
  JOIN modalidade mo ON mo.id_modalidade = au.id_modalidade
 WHERE ia.ativa = TRUE
 GROUP BY al.id_aluno, al.nome
HAVING COUNT(DISTINCT au.id_modalidade) >= 2
 ORDER BY qtd_modalidades DESC, al.nome;

-- =====================================================================
-- C05 — SUBCONSULTA (NOT EXISTS correlacionado + subconsulta escalar):
--        alunos com matrícula ATIVA que não fizeram check-in em
--        outubro/2026  ->  risco de evasão
-- =====================================================================
SELECT al.id_aluno,
       al.nome,
       al.telefone,
       pl.nome AS plano,
       (SELECT MAX(f2.data_aula)
          FROM frequencia f2
         WHERE f2.id_aluno = al.id_aluno)    AS ultima_presenca
  FROM aluno al
  JOIN matricula ma ON ma.id_aluno = al.id_aluno AND ma.status = 'ATIVA'
  JOIN plano     pl ON pl.id_plano = ma.id_plano
 WHERE NOT EXISTS (
         SELECT 1
           FROM frequencia f
          WHERE f.id_aluno = al.id_aluno
            AND f.data_aula BETWEEN '2026-10-01' AND '2026-10-31'
       )
 ORDER BY ultima_presenca;

-- =====================================================================
-- C06 — RANKING (função de janela RANK): instrutores por número de
--        presenças em suas aulas no trimestre ago–out/2026
-- =====================================================================
SELECT RANK() OVER (ORDER BY COUNT(f.id_frequencia) DESC) AS posicao,
       i.nome                                             AS instrutor,
       COUNT(DISTINCT a.id_aula)                          AS turmas,
       COUNT(f.id_frequencia)                             AS presencas,
       COUNT(DISTINCT f.id_aluno)                         AS alunos_distintos
  FROM instrutor i
  JOIN aula a            ON a.id_instrutor = i.id_instrutor
  LEFT JOIN frequencia f ON f.id_aula = a.id_aula
                        AND f.data_aula BETWEEN '2026-08-01' AND '2026-10-31'
 GROUP BY i.id_instrutor, i.nome
 ORDER BY posicao;

-- =====================================================================
-- C07 — CONSULTA POR PERÍODO: pagamentos recebidos em setembro/2026
-- =====================================================================
SELECT pg.id_pagamento,
       al.nome                                  AS aluno,
       pl.nome                                  AS plano,
       DATE_FORMAT(pg.competencia, '%m/%Y')     AS competencia,
       pg.data_pagamento,
       pg.forma_pagamento,
       pg.valor
  FROM pagamento pg
  JOIN matricula ma ON ma.id_matricula = pg.id_matricula
  JOIN aluno     al ON al.id_aluno     = ma.id_aluno
  JOIN plano     pl ON pl.id_plano     = ma.id_plano
 WHERE pg.status = 'PAGO'
   AND pg.data_pagamento BETWEEN '2026-09-01' AND '2026-09-30'
 ORDER BY pg.data_pagamento, al.nome;

-- C07-B — Totalizador do mesmo período por forma de pagamento (WITH ROLLUP)
SELECT IF(GROUPING(forma_pagamento) = 1, 'TOTAL GERAL', forma_pagamento) AS forma_pagamento,
       COUNT(*)    AS quantidade,
       SUM(valor)  AS total_recebido
  FROM pagamento
 WHERE status = 'PAGO'
   AND data_pagamento BETWEEN '2026-09-01' AND '2026-09-30'
 GROUP BY forma_pagamento WITH ROLLUP;

-- =====================================================================
-- C08 — TOP 5 ALUNOS MAIS FREQUENTES (ago–out/2026)
-- =====================================================================
SELECT al.nome                     AS aluno,
       COUNT(*)                    AS presencas,
       COUNT(DISTINCT f.id_aula)   AS turmas,
       MAX(f.data_aula)            AS ultima_presenca
  FROM frequencia f
  JOIN aluno al ON al.id_aluno = f.id_aluno
 WHERE f.data_aula BETWEEN '2026-08-01' AND '2026-10-31'
 GROUP BY al.id_aluno, al.nome
 ORDER BY presencas DESC, al.nome
 LIMIT 5;

-- =====================================================================
-- C09 — RECEITA POR MÊS (regime de caixa) com acumulado no ano
-- =====================================================================
SELECT DATE_FORMAT(data_pagamento, '%Y-%m')         AS mes,
       COUNT(*)                                     AS qtd_pagamentos,
       SUM(valor)                                   AS receita,
       ROUND(AVG(valor), 2)                         AS ticket_medio,
       SUM(SUM(valor)) OVER (ORDER BY DATE_FORMAT(data_pagamento, '%Y-%m'))
                                                    AS receita_acumulada
  FROM pagamento
 WHERE status = 'PAGO'
   AND data_pagamento >= '2026-01-01'
   AND data_pagamento <  '2027-01-01'
 GROUP BY DATE_FORMAT(data_pagamento, '%Y-%m')
 ORDER BY mes;

-- =====================================================================
-- C10 — MODALIDADE MAIS PROCURADA
--        Critério: nº de alunos com inscrição ativa; desempate pelo
--        nº de check-ins no trimestre. Usa CTEs + RANK (trata empates).
--        Para ver o ranking completo, remova o WHERE final.
-- =====================================================================
WITH inscritos AS (
    SELECT au.id_modalidade, COUNT(DISTINCT ia.id_aluno) AS qtd_inscritos
      FROM inscricao_aula ia
      JOIN aula au ON au.id_aula = ia.id_aula
     WHERE ia.ativa = TRUE
     GROUP BY au.id_modalidade
),
presencas AS (
    SELECT au.id_modalidade, COUNT(*) AS qtd_checkins
      FROM frequencia f
      JOIN aula au ON au.id_aula = f.id_aula
     WHERE f.data_aula BETWEEN '2026-08-01' AND '2026-10-31'
     GROUP BY au.id_modalidade
),
ranking AS (
    SELECT mo.nome                            AS modalidade,
           COALESCE(i.qtd_inscritos, 0)       AS alunos_inscritos,
           COALESCE(p.qtd_checkins, 0)        AS checkins_trimestre,
           RANK() OVER (ORDER BY COALESCE(i.qtd_inscritos, 0) DESC,
                                 COALESCE(p.qtd_checkins, 0)  DESC) AS posicao
      FROM modalidade mo
      LEFT JOIN inscritos i ON i.id_modalidade = mo.id_modalidade
      LEFT JOIN presencas p ON p.id_modalidade = mo.id_modalidade
)
SELECT posicao, modalidade, alunos_inscritos, checkins_trimestre
  FROM ranking
 WHERE posicao = 1;

-- =====================================================================
-- C11 — INADIMPLÊNCIA: parcelas em atraso, dias de atraso e total devido
--        por aluno (SUM ... OVER PARTITION BY)
-- =====================================================================
SELECT al.nome                                        AS aluno,
       al.telefone,
       ma.status                                      AS situacao_matricula,
       DATE_FORMAT(pg.competencia, '%m/%Y')           AS parcela,
       pg.data_vencimento,
       DATEDIFF('2026-11-06', pg.data_vencimento)     AS dias_em_atraso,
       pg.valor,
       SUM(pg.valor) OVER (PARTITION BY al.id_aluno)  AS total_devido_aluno
  FROM pagamento pg
  JOIN matricula ma ON ma.id_matricula = pg.id_matricula
  JOIN aluno     al ON al.id_aluno     = ma.id_aluno
 WHERE pg.status = 'ATRASADO'
 ORDER BY total_devido_aluno DESC, al.nome, pg.competencia;

-- =====================================================================
-- C12 — RANKING POR GRUPO: top 3 alunos mais assíduos de cada modalidade
--        (DENSE_RANK + PARTITION BY)
-- =====================================================================
WITH presencas_por_modalidade AS (
    SELECT mo.nome   AS modalidade,
           al.nome   AS aluno,
           COUNT(*)  AS presencas,
           DENSE_RANK() OVER (PARTITION BY mo.id_modalidade
                              ORDER BY COUNT(*) DESC) AS posicao
      FROM frequencia f
      JOIN aula       au ON au.id_aula       = f.id_aula
      JOIN modalidade mo ON mo.id_modalidade = au.id_modalidade
      JOIN aluno      al ON al.id_aluno      = f.id_aluno
     WHERE f.data_aula BETWEEN '2026-08-01' AND '2026-10-31'
     GROUP BY mo.id_modalidade, mo.nome, al.id_aluno, al.nome
)
SELECT modalidade, posicao, aluno, presencas
  FROM presencas_por_modalidade
 WHERE posicao <= 3
 ORDER BY modalidade, posicao, aluno;
