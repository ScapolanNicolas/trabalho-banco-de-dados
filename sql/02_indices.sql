-- =====================================================================
--  Script 02 — Índices de desempenho (MySQL 8)
-- ---------------------------------------------------------------------
--  Observação: o InnoDB já cria índices automaticamente para PRIMARY KEY,
--  UNIQUE e para as colunas de FOREIGN KEY. Os índices abaixo atendem
--  padrões de consulta que NÃO são cobertos por esses índices automáticos.
-- =====================================================================
USE academia;

-- ---------------------------------------------------------------------
-- ÍNDICE 1 — pagamento(status, data_pagamento)
-- Objetivo : acelerar relatórios financeiros por período
--            (receita por mês, pagamentos recebidos entre datas).
-- Por quê  : essas consultas filtram status = 'PAGO' e um intervalo
--            em data_pagamento. Com a igualdade na 1ª coluna e o
--            intervalo na 2ª, o MySQL faz um "range scan" apenas nas
--            linhas pagas do período, em vez de varrer a tabela inteira.
-- Consultas: C07 (pagamentos do período) e C09 (receita por mês).
-- ---------------------------------------------------------------------
CREATE INDEX idx_pagamento_status_data
    ON pagamento (status, data_pagamento);

-- ---------------------------------------------------------------------
-- ÍNDICE 2 — frequencia(data_aula, id_aula)
-- Objetivo : acelerar análises de frequência por período.
-- Por quê  : a tabela frequencia é a que mais cresce (um registro por
--            aluno por aula). O UNIQUE existente começa por id_aluno,
--            logo NÃO serve para filtros por data. Este índice permite
--            localizar rapidamente os check-ins de um intervalo de datas
--            e já entrega id_aula para a junção com aula/modalidade.
-- Consultas: C05 (alunos sem frequência recente), C06 (ranking de
--            instrutores), C08 (top 5 alunos) e C10 (modalidade mais
--            procurada).
-- ---------------------------------------------------------------------
CREATE INDEX idx_frequencia_data_aula
    ON frequencia (data_aula, id_aula);

-- ---------------------------------------------------------------------
-- ÍNDICE 3 — aluno(nome)
-- Objetivo : busca de alunos pelo nome na recepção / interface.
-- Por quê  : buscas do tipo  WHERE nome LIKE 'Ana%'  (prefixo) usam o
--            índice B-Tree e evitam full scan na tabela de alunos.
-- Consultas: tela "Consulta de alunos" do protótipo e C02.
-- ---------------------------------------------------------------------
CREATE INDEX idx_aluno_nome
    ON aluno (nome);

-- Conferência
SHOW INDEX FROM pagamento;
SHOW INDEX FROM frequencia;
SHOW INDEX FROM aluno;
