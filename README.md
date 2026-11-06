# Trabalho de Banco de Dados — Sistema de Gestão de Academia

Projeto da disciplina de Banco de Dados (Mackenzie): modelagem e implementação de um banco relacional em **MySQL 8** para a "Academia Movimento" (empresa fictícia).

📄 **Documentação completa:** [Documentacao_Projeto_Academia.md](Documentacao_Projeto_Academia.md). Inclui requisitos, DER, dicionário de dados, normalização, índices, transação, consultas com resultados, validação dos requisitos e roteiro da apresentação.

## Estrutura

```
├── Documentacao_Projeto_Academia.md   # documento principal (seções 1 a 12)
├── sql/
│   ├── 01_criacao.sql                 # banco + 11 tabelas (PK, FK, CHECK, UNIQUE, DEFAULT)
│   ├── 02_indices.sql                 # 3 índices justificados
│   ├── 03_carga.sql                   # 804 registros fictícios
│   ├── 04_regras_e_transacao.sql      # triggers + procedure transacional + demonstração
│   └── 05_consultas.sql               # 12 consultas (JOIN, GROUP BY, HAVING, subconsulta, ranking...)
└── web/                               # bônus: protótipo de interface (HTML/CSS/JS/Bootstrap)
    ├── index.html
    ├── css/estilo.css
    └── js/app.js, js/dados.js
```

## Como executar o banco

1. Instale o **MySQL 8.0.16+** e o **MySQL Workbench**.
2. Execute os scripts **nesta ordem**:
   1. `sql/01_criacao.sql`
   2. `sql/02_indices.sql`
   3. `sql/03_carga.sql`
   4. `sql/05_consultas.sql` (consultas; os resultados esperados estão na documentação)
   5. `sql/04_regras_e_transacao.sql` (por último, porque **altera** dados)
3. No script 04, os cenários 2 e 3 geram **erro de propósito** para demonstrar o ROLLBACK. Execute bloco a bloco (Ctrl+Enter) ou ative *Continue on SQL Query Error*.

## Como abrir o protótipo web

Abra `web/index.html` no navegador (é preciso internet para carregar Bootstrap e Chart.js). Não é preciso servidor nem banco: os dados fictícios estão em `web/js/dados.js`.

## Requisitos atendidos

| Requisito | Entregue |
|---|---|
| ≥ 6 tabelas | 11 tabelas |
| PK e FK | 11 PKs, 11 FKs (2 compostas) |
| Relacionamentos 1:N e N:N | 7 × 1:N e 2 × N:N |
| Restrições de integridade | 25 CHECKs, 12 UNIQUEs, NOT NULL, DEFAULT, 2 triggers |
| Normalização até 3FN | Seção 4 da documentação |
| ≥ 2 índices justificados | 3 índices |
| ≥ 1 transação | `sp_registrar_pagamento` + ROLLBACK manual |
| ≥ 100 registros | 804 registros |
| ≥ 10 consultas | 12 consultas |
| Interface gráfica (bônus) | Protótipo em `web/` |

## Grupo

_(preencher nomes e RAs)_
