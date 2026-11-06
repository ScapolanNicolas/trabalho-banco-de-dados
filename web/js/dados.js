// Dados fictícios gerados a partir da mesma carga do script sql/03_carga.sql
window.DADOS_INICIAIS = {
 "planos": [
  {
   "id": 1,
   "nome": "Mensal Essencial",
   "descricao": "Musculação livre + 1 modalidade coletiva",
   "duracao": 1,
   "valor": 129.9,
   "limite": 1,
   "ativo": true
  },
  {
   "id": 2,
   "nome": "Mensal Plus",
   "descricao": "Musculação livre + até 3 modalidades coletivas",
   "duracao": 1,
   "valor": 179.9,
   "limite": 3,
   "ativo": true
  },
  {
   "id": 3,
   "nome": "Trimestral",
   "descricao": "Fidelidade de 3 meses, até 2 modalidades",
   "duracao": 3,
   "valor": 159.9,
   "limite": 2,
   "ativo": true
  },
  {
   "id": 4,
   "nome": "Semestral",
   "descricao": "Fidelidade de 6 meses, até 3 modalidades",
   "duracao": 6,
   "valor": 139.9,
   "limite": 3,
   "ativo": true
  },
  {
   "id": 5,
   "nome": "Anual Premium",
   "descricao": "Fidelidade de 12 meses, até 4 modalidades e avaliação física",
   "duracao": 12,
   "valor": 119.9,
   "limite": 4,
   "ativo": true
  },
  {
   "id": 6,
   "nome": "Estudante (descontinuado)",
   "descricao": "Plano promocional encerrado em 2025",
   "duracao": 1,
   "valor": 99.9,
   "limite": 1,
   "ativo": false
  }
 ],
 "alunos": [
  {
   "id": 1,
   "nome": "Ana Beatriz Ferreira",
   "cpf": "31778486452",
   "nascimento": "2002-03-16",
   "sexo": "F",
   "email": "ana.ferreira71@email.com",
   "telefone": "(11) 99223-8846",
   "cadastro": "2026-05-08",
   "plano": 4,
   "status": "ATIVA",
   "vencimento": 15
  },
  {
   "id": 2,
   "nome": "Bruno Henrique Souza",
   "cpf": "02978753455",
   "nascimento": "1990-05-01",
   "sexo": "M",
   "email": "bruno.souza89@email.com",
   "telefone": "(11) 98955-8645",
   "cadastro": "2026-01-12",
   "plano": 5,
   "status": "ATIVA",
   "vencimento": 20
  },
  {
   "id": 3,
   "nome": "Camila Rodrigues Martins",
   "cpf": "45717847246",
   "nascimento": "2007-11-02",
   "sexo": "F",
   "email": "camila.martins55@email.com",
   "telefone": "(11) 98850-2053",
   "cadastro": "2026-05-11",
   "plano": 5,
   "status": "ATIVA",
   "vencimento": 10
  },
  {
   "id": 4,
   "nome": "Daniel Oliveira Pires",
   "cpf": "62701079896",
   "nascimento": "1978-04-24",
   "sexo": "M",
   "email": "daniel.pires11@email.com",
   "telefone": "(11) 94257-5060",
   "cadastro": "2026-04-08",
   "plano": 5,
   "status": "ATIVA",
   "vencimento": 5
  },
  {
   "id": 5,
   "nome": "Eduarda Carvalho Lopes",
   "cpf": "52059972817",
   "nascimento": "2006-05-22",
   "sexo": "F",
   "email": "eduarda.lopes29@email.com",
   "telefone": "(11) 98749-3149",
   "cadastro": "2025-10-23",
   "plano": 5,
   "status": "ATIVA",
   "vencimento": 20
  },
  {
   "id": 6,
   "nome": "Felipe Gomes Ribeiro",
   "cpf": "22948662826",
   "nascimento": "1977-07-22",
   "sexo": "M",
   "email": "felipe.ribeiro26@email.com",
   "telefone": "(11) 97160-1231",
   "cadastro": "2026-02-26",
   "plano": 4,
   "status": "ATIVA",
   "vencimento": 5
  },
  {
   "id": 7,
   "nome": "Gabriela Almeida Castro",
   "cpf": "50087547503",
   "nascimento": "1975-06-21",
   "sexo": "F",
   "email": "gabriela.castro16@email.com",
   "telefone": "(11) 99152-8644",
   "cadastro": "2025-11-07",
   "plano": 5,
   "status": "SUSPENSA",
   "vencimento": 20
  },
  {
   "id": 8,
   "nome": "Gustavo Barbosa Dias",
   "cpf": "36957931803",
   "nascimento": "1981-10-17",
   "sexo": "M",
   "email": "gustavo.dias52@email.com",
   "telefone": "(11) 91559-4202",
   "cadastro": "2025-12-27",
   "plano": 1,
   "status": "ATIVA",
   "vencimento": 10
  },
  {
   "id": 9,
   "nome": "Helena Cardoso Freitas",
   "cpf": "37028382281",
   "nascimento": "1975-08-28",
   "sexo": "F",
   "email": "helena.freitas85@email.com",
   "telefone": "(11) 94047-7389",
   "cadastro": "2026-07-06",
   "plano": 4,
   "status": "ATIVA",
   "vencimento": 10
  },
  {
   "id": 10,
   "nome": "Igor Fernandes Moreira",
   "cpf": "42524776468",
   "nascimento": "1998-02-13",
   "sexo": "M",
   "email": "igor.moreira60@email.com",
   "telefone": "(11) 93899-6337",
   "cadastro": "2026-06-30",
   "plano": 5,
   "status": "ATIVA",
   "vencimento": 20
  },
  {
   "id": 11,
   "nome": "Isabela Araújo Cunha",
   "cpf": "84133017501",
   "nascimento": "1979-09-26",
   "sexo": "F",
   "email": "isabela.cunha53@email.com",
   "telefone": "(11) 99930-3989",
   "cadastro": "2026-05-16",
   "plano": 4,
   "status": "CANCELADA",
   "vencimento": 5
  },
  {
   "id": 12,
   "nome": "João Pedro Batista",
   "cpf": "98319489393",
   "nascimento": "1994-09-22",
   "sexo": "M",
   "email": "joao.batista73@email.com",
   "telefone": "(11) 95828-5392",
   "cadastro": "2025-12-20",
   "plano": 2,
   "status": "ATIVA",
   "vencimento": 20
  },
  {
   "id": 13,
   "nome": "Larissa Monteiro Vieira",
   "cpf": "21052185479",
   "nascimento": "1988-02-14",
   "sexo": "F",
   "email": "larissa.vieira76@email.com",
   "telefone": "(11) 92047-5768",
   "cadastro": "2025-11-21",
   "plano": 2,
   "status": "ATIVA",
   "vencimento": 10
  },
  {
   "id": 14,
   "nome": "Lucas Pereira Campos",
   "cpf": "64600130472",
   "nascimento": "1988-02-01",
   "sexo": "M",
   "email": "lucas.campos16@email.com",
   "telefone": "(11) 92537-6739",
   "cadastro": "2026-02-11",
   "plano": 5,
   "status": "SUSPENSA",
   "vencimento": 10
  },
  {
   "id": 15,
   "nome": "Mariana Correia Duarte",
   "cpf": "39761584615",
   "nascimento": "1997-06-20",
   "sexo": "F",
   "email": "mariana.duarte38@email.com",
   "telefone": "(11) 96837-1944",
   "cadastro": "2025-10-20",
   "plano": 1,
   "status": "ATIVA",
   "vencimento": 15
  },
  {
   "id": 16,
   "nome": "Mateus Rocha Pinheiro",
   "cpf": "14659085368",
   "nascimento": "1993-05-24",
   "sexo": "M",
   "email": "mateus.pinheiro72@email.com",
   "telefone": "(11) 91919-2844",
   "cadastro": "2026-02-22",
   "plano": 5,
   "status": "ATIVA",
   "vencimento": 10
  },
  {
   "id": 17,
   "nome": "Natália Soares Fonseca",
   "cpf": "85940692516",
   "nascimento": "1979-01-05",
   "sexo": "F",
   "email": "natalia.fonseca54@email.com",
   "telefone": "(11) 97293-7179",
   "cadastro": "2025-12-02",
   "plano": 4,
   "status": "ATIVA",
   "vencimento": 10
  },
  {
   "id": 18,
   "nome": "Otávio Ramos Siqueira",
   "cpf": "08864230076",
   "nascimento": "1980-03-18",
   "sexo": "M",
   "email": "otavio.siqueira36@email.com",
   "telefone": "(11) 99866-8845",
   "cadastro": "2026-01-21",
   "plano": 3,
   "status": "ATIVA",
   "vencimento": 15
  },
  {
   "id": 19,
   "nome": "Paula Cristina Nunes",
   "cpf": "12808458568",
   "nascimento": "1980-11-19",
   "sexo": "F",
   "email": "paula.nunes8@email.com",
   "telefone": "(11) 91186-4978",
   "cadastro": "2026-03-11",
   "plano": 1,
   "status": "ATIVA",
   "vencimento": 15
  },
  {
   "id": 20,
   "nome": "Pedro Lucas Azevedo",
   "cpf": "65384535547",
   "nascimento": "2004-03-24",
   "sexo": "M",
   "email": "pedro.azevedo59@email.com",
   "telefone": "(11) 98496-9991",
   "cadastro": "2026-01-22",
   "plano": 5,
   "status": "ATIVA",
   "vencimento": 15
  },
  {
   "id": 21,
   "nome": "Rafaela Mendonça Reis",
   "cpf": "62705860207",
   "nascimento": "1984-03-21",
   "sexo": "F",
   "email": "rafaela.reis11@email.com",
   "telefone": "(11) 95899-7107",
   "cadastro": "2026-03-09",
   "plano": 3,
   "status": "ATIVA",
   "vencimento": 20
  },
  {
   "id": 22,
   "nome": "Renan Tavares Lima",
   "cpf": "39490668885",
   "nascimento": "1978-01-18",
   "sexo": "M",
   "email": "renan.lima83@email.com",
   "telefone": "(11) 93589-9335",
   "cadastro": "2025-12-10",
   "plano": 2,
   "status": "SUSPENSA",
   "vencimento": 5
  },
  {
   "id": 23,
   "nome": "Sabrina Xavier Coelho",
   "cpf": "44093244898",
   "nascimento": "1996-06-18",
   "sexo": "F",
   "email": "sabrina.coelho37@email.com",
   "telefone": "(11) 96852-3195",
   "cadastro": "2025-12-12",
   "plano": 3,
   "status": "ATIVA",
   "vencimento": 15
  },
  {
   "id": 24,
   "nome": "Samuel Antunes Prado",
   "cpf": "82802582216",
   "nascimento": "2002-07-12",
   "sexo": "M",
   "email": "samuel.prado4@email.com",
   "telefone": "(11) 92911-9437",
   "cadastro": "2025-10-05",
   "plano": 4,
   "status": "ATIVA",
   "vencimento": 5
  },
  {
   "id": 25,
   "nome": "Tatiane Brito Moraes",
   "cpf": "82993215736",
   "nascimento": "1995-05-07",
   "sexo": "F",
   "email": "tatiane.moraes14@email.com",
   "telefone": "(11) 92198-7245",
   "cadastro": "2025-11-02",
   "plano": 5,
   "status": "ATIVA",
   "vencimento": 10
  },
  {
   "id": 26,
   "nome": "Vinícius Lacerda Torres",
   "cpf": "71883579511",
   "nascimento": "1979-06-16",
   "sexo": "M",
   "email": "vinicius.torres11@email.com",
   "telefone": "(11) 92131-2439",
   "cadastro": "2026-03-04",
   "plano": 3,
   "status": "CANCELADA",
   "vencimento": 15
  },
  {
   "id": 27,
   "nome": "Yasmin Farias Queiroz",
   "cpf": "68855765221",
   "nascimento": "1986-03-11",
   "sexo": "F",
   "email": "yasmin.queiroz26@email.com",
   "telefone": "(11) 98585-4607",
   "cadastro": "2026-02-13",
   "plano": 4,
   "status": "ATIVA",
   "vencimento": 10
  },
  {
   "id": 28,
   "nome": "Alex Sandro Vidal",
   "cpf": "79264515410",
   "nascimento": "1996-04-05",
   "sexo": "O",
   "email": "alex.vidal57@email.com",
   "telefone": "(11) 95319-3381",
   "cadastro": "2026-04-28",
   "plano": 3,
   "status": "ATIVA",
   "vencimento": 20
  },
  {
   "id": 29,
   "nome": "Beatriz Leme Andrade",
   "cpf": "14497660800",
   "nascimento": "1993-03-18",
   "sexo": "F",
   "email": "beatriz.andrade92@email.com",
   "telefone": "(11) 96393-7711",
   "cadastro": "2026-01-28",
   "plano": 2,
   "status": "ATIVA",
   "vencimento": 10
  },
  {
   "id": 30,
   "nome": "Caio Rezende Matos",
   "cpf": "65506204817",
   "nascimento": "2006-09-07",
   "sexo": "M",
   "email": "caio.matos90@email.com",
   "telefone": "(11) 95131-3139",
   "cadastro": "2026-06-11",
   "plano": 5,
   "status": "ATIVA",
   "vencimento": 10
  }
 ],
 "pagamentos": [
  {
   "id": 1,
   "matricula": 1,
   "aluno": 1,
   "competencia": "2026-05",
   "vencimento": "2026-05-15",
   "valor": 139.9,
   "pagamento": "2026-05-18",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 2,
   "matricula": 1,
   "aluno": 1,
   "competencia": "2026-06",
   "vencimento": "2026-06-15",
   "valor": 139.9,
   "pagamento": "2026-06-16",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 3,
   "matricula": 1,
   "aluno": 1,
   "competencia": "2026-07",
   "vencimento": "2026-07-15",
   "valor": 139.9,
   "pagamento": "2026-07-14",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 4,
   "matricula": 1,
   "aluno": 1,
   "competencia": "2026-08",
   "vencimento": "2026-08-15",
   "valor": 139.9,
   "pagamento": "2026-08-09",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 5,
   "matricula": 1,
   "aluno": 1,
   "competencia": "2026-09",
   "vencimento": "2026-09-15",
   "valor": 139.9,
   "pagamento": "2026-09-19",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 6,
   "matricula": 1,
   "aluno": 1,
   "competencia": "2026-10",
   "vencimento": "2026-10-15",
   "valor": 139.9,
   "pagamento": "2026-10-19",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 7,
   "matricula": 1,
   "aluno": 1,
   "competencia": "2026-11",
   "vencimento": "2026-11-15",
   "valor": 139.9,
   "pagamento": null,
   "forma": null,
   "status": "PENDENTE"
  },
  {
   "id": 8,
   "matricula": 2,
   "aluno": 2,
   "competencia": "2026-05",
   "vencimento": "2026-05-20",
   "valor": 119.9,
   "pagamento": "2026-05-14",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 9,
   "matricula": 2,
   "aluno": 2,
   "competencia": "2026-06",
   "vencimento": "2026-06-20",
   "valor": 119.9,
   "pagamento": "2026-06-21",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 10,
   "matricula": 2,
   "aluno": 2,
   "competencia": "2026-07",
   "vencimento": "2026-07-20",
   "valor": 119.9,
   "pagamento": "2026-07-18",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 11,
   "matricula": 2,
   "aluno": 2,
   "competencia": "2026-08",
   "vencimento": "2026-08-20",
   "valor": 119.9,
   "pagamento": "2026-08-24",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 12,
   "matricula": 2,
   "aluno": 2,
   "competencia": "2026-09",
   "vencimento": "2026-09-20",
   "valor": 119.9,
   "pagamento": "2026-09-15",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 13,
   "matricula": 2,
   "aluno": 2,
   "competencia": "2026-10",
   "vencimento": "2026-10-20",
   "valor": 119.9,
   "pagamento": "2026-10-17",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 14,
   "matricula": 2,
   "aluno": 2,
   "competencia": "2026-11",
   "vencimento": "2026-11-20",
   "valor": 119.9,
   "pagamento": null,
   "forma": null,
   "status": "PENDENTE"
  },
  {
   "id": 15,
   "matricula": 3,
   "aluno": 3,
   "competencia": "2026-05",
   "vencimento": "2026-05-11",
   "valor": 119.9,
   "pagamento": "2026-05-11",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 16,
   "matricula": 3,
   "aluno": 3,
   "competencia": "2026-06",
   "vencimento": "2026-06-10",
   "valor": 119.9,
   "pagamento": "2026-06-05",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 17,
   "matricula": 3,
   "aluno": 3,
   "competencia": "2026-07",
   "vencimento": "2026-07-10",
   "valor": 119.9,
   "pagamento": "2026-07-09",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 18,
   "matricula": 3,
   "aluno": 3,
   "competencia": "2026-08",
   "vencimento": "2026-08-10",
   "valor": 119.9,
   "pagamento": "2026-08-11",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 19,
   "matricula": 3,
   "aluno": 3,
   "competencia": "2026-09",
   "vencimento": "2026-09-10",
   "valor": 119.9,
   "pagamento": "2026-09-13",
   "forma": "BOLETO",
   "status": "PAGO"
  },
  {
   "id": 20,
   "matricula": 3,
   "aluno": 3,
   "competencia": "2026-10",
   "vencimento": "2026-10-10",
   "valor": 119.9,
   "pagamento": "2026-10-06",
   "forma": "DINHEIRO",
   "status": "PAGO"
  },
  {
   "id": 21,
   "matricula": 3,
   "aluno": 3,
   "competencia": "2026-11",
   "vencimento": "2026-11-10",
   "valor": 119.9,
   "pagamento": null,
   "forma": null,
   "status": "PENDENTE"
  },
  {
   "id": 22,
   "matricula": 4,
   "aluno": 4,
   "competencia": "2026-05",
   "vencimento": "2026-05-05",
   "valor": 119.9,
   "pagamento": "2026-04-30",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 23,
   "matricula": 4,
   "aluno": 4,
   "competencia": "2026-06",
   "vencimento": "2026-06-05",
   "valor": 119.9,
   "pagamento": "2026-06-05",
   "forma": "DINHEIRO",
   "status": "PAGO"
  },
  {
   "id": 24,
   "matricula": 4,
   "aluno": 4,
   "competencia": "2026-07",
   "vencimento": "2026-07-05",
   "valor": 119.9,
   "pagamento": "2026-07-07",
   "forma": "BOLETO",
   "status": "PAGO"
  },
  {
   "id": 25,
   "matricula": 4,
   "aluno": 4,
   "competencia": "2026-08",
   "vencimento": "2026-08-05",
   "valor": 119.9,
   "pagamento": "2026-08-08",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 26,
   "matricula": 4,
   "aluno": 4,
   "competencia": "2026-09",
   "vencimento": "2026-09-05",
   "valor": 119.9,
   "pagamento": "2026-09-01",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 27,
   "matricula": 4,
   "aluno": 4,
   "competencia": "2026-10",
   "vencimento": "2026-10-05",
   "valor": 119.9,
   "pagamento": "2026-09-29",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 28,
   "matricula": 4,
   "aluno": 4,
   "competencia": "2026-11",
   "vencimento": "2026-11-05",
   "valor": 119.9,
   "pagamento": null,
   "forma": null,
   "status": "ATRASADO"
  },
  {
   "id": 29,
   "matricula": 5,
   "aluno": 5,
   "competencia": "2026-05",
   "vencimento": "2026-05-20",
   "valor": 119.9,
   "pagamento": "2026-05-14",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 30,
   "matricula": 5,
   "aluno": 5,
   "competencia": "2026-06",
   "vencimento": "2026-06-20",
   "valor": 119.9,
   "pagamento": "2026-06-22",
   "forma": "DINHEIRO",
   "status": "PAGO"
  },
  {
   "id": 31,
   "matricula": 5,
   "aluno": 5,
   "competencia": "2026-07",
   "vencimento": "2026-07-20",
   "valor": 119.9,
   "pagamento": "2026-07-22",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 32,
   "matricula": 5,
   "aluno": 5,
   "competencia": "2026-08",
   "vencimento": "2026-08-20",
   "valor": 119.9,
   "pagamento": "2026-08-21",
   "forma": "BOLETO",
   "status": "PAGO"
  },
  {
   "id": 33,
   "matricula": 5,
   "aluno": 5,
   "competencia": "2026-09",
   "vencimento": "2026-09-20",
   "valor": 119.9,
   "pagamento": "2026-09-24",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 34,
   "matricula": 5,
   "aluno": 5,
   "competencia": "2026-10",
   "vencimento": "2026-10-20",
   "valor": 119.9,
   "pagamento": "2026-10-19",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 35,
   "matricula": 5,
   "aluno": 5,
   "competencia": "2026-11",
   "vencimento": "2026-11-20",
   "valor": 119.9,
   "pagamento": null,
   "forma": null,
   "status": "PENDENTE"
  },
  {
   "id": 36,
   "matricula": 6,
   "aluno": 6,
   "competencia": "2026-05",
   "vencimento": "2026-05-05",
   "valor": 139.9,
   "pagamento": "2026-05-08",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 37,
   "matricula": 6,
   "aluno": 6,
   "competencia": "2026-06",
   "vencimento": "2026-06-05",
   "valor": 139.9,
   "pagamento": "2026-06-03",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 38,
   "matricula": 6,
   "aluno": 6,
   "competencia": "2026-07",
   "vencimento": "2026-07-05",
   "valor": 139.9,
   "pagamento": "2026-07-04",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 39,
   "matricula": 6,
   "aluno": 6,
   "competencia": "2026-08",
   "vencimento": "2026-08-05",
   "valor": 139.9,
   "pagamento": "2026-07-30",
   "forma": "BOLETO",
   "status": "PAGO"
  },
  {
   "id": 40,
   "matricula": 6,
   "aluno": 6,
   "competencia": "2026-09",
   "vencimento": "2026-09-05",
   "valor": 139.9,
   "pagamento": "2026-09-06",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 41,
   "matricula": 6,
   "aluno": 6,
   "competencia": "2026-10",
   "vencimento": "2026-10-05",
   "valor": 139.9,
   "pagamento": "2026-09-29",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 42,
   "matricula": 6,
   "aluno": 6,
   "competencia": "2026-11",
   "vencimento": "2026-11-05",
   "valor": 139.9,
   "pagamento": "2026-11-04",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 43,
   "matricula": 7,
   "aluno": 7,
   "competencia": "2026-05",
   "vencimento": "2026-05-20",
   "valor": 119.9,
   "pagamento": "2026-05-21",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 44,
   "matricula": 7,
   "aluno": 7,
   "competencia": "2026-06",
   "vencimento": "2026-06-20",
   "valor": 119.9,
   "pagamento": "2026-06-19",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 45,
   "matricula": 7,
   "aluno": 7,
   "competencia": "2026-07",
   "vencimento": "2026-07-20",
   "valor": 119.9,
   "pagamento": "2026-07-22",
   "forma": "DINHEIRO",
   "status": "PAGO"
  },
  {
   "id": 46,
   "matricula": 7,
   "aluno": 7,
   "competencia": "2026-08",
   "vencimento": "2026-08-20",
   "valor": 119.9,
   "pagamento": "2026-08-20",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 47,
   "matricula": 7,
   "aluno": 7,
   "competencia": "2026-09",
   "vencimento": "2026-09-20",
   "valor": 119.9,
   "pagamento": null,
   "forma": null,
   "status": "ATRASADO"
  },
  {
   "id": 48,
   "matricula": 7,
   "aluno": 7,
   "competencia": "2026-10",
   "vencimento": "2026-10-20",
   "valor": 119.9,
   "pagamento": null,
   "forma": null,
   "status": "ATRASADO"
  },
  {
   "id": 49,
   "matricula": 7,
   "aluno": 7,
   "competencia": "2026-11",
   "vencimento": "2026-11-20",
   "valor": 119.9,
   "pagamento": null,
   "forma": null,
   "status": "PENDENTE"
  },
  {
   "id": 50,
   "matricula": 8,
   "aluno": 8,
   "competencia": "2026-05",
   "vencimento": "2026-05-10",
   "valor": 129.9,
   "pagamento": "2026-05-13",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 51,
   "matricula": 8,
   "aluno": 8,
   "competencia": "2026-06",
   "vencimento": "2026-06-10",
   "valor": 129.9,
   "pagamento": "2026-06-10",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 52,
   "matricula": 8,
   "aluno": 8,
   "competencia": "2026-07",
   "vencimento": "2026-07-10",
   "valor": 129.9,
   "pagamento": "2026-07-14",
   "forma": "BOLETO",
   "status": "PAGO"
  },
  {
   "id": 53,
   "matricula": 8,
   "aluno": 8,
   "competencia": "2026-08",
   "vencimento": "2026-08-10",
   "valor": 129.9,
   "pagamento": "2026-08-12",
   "forma": "BOLETO",
   "status": "PAGO"
  },
  {
   "id": 54,
   "matricula": 8,
   "aluno": 8,
   "competencia": "2026-09",
   "vencimento": "2026-09-10",
   "valor": 129.9,
   "pagamento": "2026-09-12",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 55,
   "matricula": 8,
   "aluno": 8,
   "competencia": "2026-10",
   "vencimento": "2026-10-10",
   "valor": 129.9,
   "pagamento": "2026-10-11",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 56,
   "matricula": 8,
   "aluno": 8,
   "competencia": "2026-11",
   "vencimento": "2026-11-10",
   "valor": 129.9,
   "pagamento": null,
   "forma": null,
   "status": "PENDENTE"
  },
  {
   "id": 57,
   "matricula": 9,
   "aluno": 9,
   "competencia": "2026-07",
   "vencimento": "2026-07-10",
   "valor": 139.9,
   "pagamento": "2026-07-12",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 58,
   "matricula": 9,
   "aluno": 9,
   "competencia": "2026-08",
   "vencimento": "2026-08-10",
   "valor": 139.9,
   "pagamento": "2026-08-13",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 59,
   "matricula": 9,
   "aluno": 9,
   "competencia": "2026-09",
   "vencimento": "2026-09-10",
   "valor": 139.9,
   "pagamento": "2026-09-11",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 60,
   "matricula": 9,
   "aluno": 9,
   "competencia": "2026-10",
   "vencimento": "2026-10-10",
   "valor": 139.9,
   "pagamento": "2026-10-14",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 61,
   "matricula": 9,
   "aluno": 9,
   "competencia": "2026-11",
   "vencimento": "2026-11-10",
   "valor": 139.9,
   "pagamento": null,
   "forma": null,
   "status": "PENDENTE"
  },
  {
   "id": 62,
   "matricula": 10,
   "aluno": 10,
   "competencia": "2026-06",
   "vencimento": "2026-06-30",
   "valor": 119.9,
   "pagamento": "2026-06-30",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 63,
   "matricula": 10,
   "aluno": 10,
   "competencia": "2026-07",
   "vencimento": "2026-07-20",
   "valor": 119.9,
   "pagamento": "2026-07-15",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 64,
   "matricula": 10,
   "aluno": 10,
   "competencia": "2026-08",
   "vencimento": "2026-08-20",
   "valor": 119.9,
   "pagamento": "2026-08-16",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 65,
   "matricula": 10,
   "aluno": 10,
   "competencia": "2026-09",
   "vencimento": "2026-09-20",
   "valor": 119.9,
   "pagamento": "2026-09-22",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 66,
   "matricula": 10,
   "aluno": 10,
   "competencia": "2026-10",
   "vencimento": "2026-10-20",
   "valor": 119.9,
   "pagamento": "2026-10-20",
   "forma": "BOLETO",
   "status": "PAGO"
  },
  {
   "id": 67,
   "matricula": 10,
   "aluno": 10,
   "competencia": "2026-11",
   "vencimento": "2026-11-20",
   "valor": 119.9,
   "pagamento": null,
   "forma": null,
   "status": "PENDENTE"
  },
  {
   "id": 68,
   "matricula": 11,
   "aluno": 11,
   "competencia": "2026-05",
   "vencimento": "2026-05-16",
   "valor": 139.9,
   "pagamento": "2026-05-16",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 69,
   "matricula": 11,
   "aluno": 11,
   "competencia": "2026-06",
   "vencimento": "2026-06-05",
   "valor": 139.9,
   "pagamento": "2026-06-02",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 70,
   "matricula": 11,
   "aluno": 11,
   "competencia": "2026-07",
   "vencimento": "2026-07-05",
   "valor": 139.9,
   "pagamento": "2026-07-06",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 71,
   "matricula": 11,
   "aluno": 11,
   "competencia": "2026-08",
   "vencimento": "2026-08-05",
   "valor": 139.9,
   "pagamento": "2026-08-02",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 72,
   "matricula": 12,
   "aluno": 12,
   "competencia": "2026-05",
   "vencimento": "2026-05-20",
   "valor": 179.9,
   "pagamento": "2026-05-17",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 73,
   "matricula": 12,
   "aluno": 12,
   "competencia": "2026-06",
   "vencimento": "2026-06-20",
   "valor": 179.9,
   "pagamento": "2026-06-21",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 74,
   "matricula": 12,
   "aluno": 12,
   "competencia": "2026-07",
   "vencimento": "2026-07-20",
   "valor": 179.9,
   "pagamento": "2026-07-22",
   "forma": "BOLETO",
   "status": "PAGO"
  },
  {
   "id": 75,
   "matricula": 12,
   "aluno": 12,
   "competencia": "2026-08",
   "vencimento": "2026-08-20",
   "valor": 179.9,
   "pagamento": "2026-08-19",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 76,
   "matricula": 12,
   "aluno": 12,
   "competencia": "2026-09",
   "vencimento": "2026-09-20",
   "valor": 179.9,
   "pagamento": "2026-09-24",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 77,
   "matricula": 12,
   "aluno": 12,
   "competencia": "2026-10",
   "vencimento": "2026-10-20",
   "valor": 179.9,
   "pagamento": "2026-10-22",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 78,
   "matricula": 12,
   "aluno": 12,
   "competencia": "2026-11",
   "vencimento": "2026-11-20",
   "valor": 179.9,
   "pagamento": null,
   "forma": null,
   "status": "PENDENTE"
  },
  {
   "id": 79,
   "matricula": 13,
   "aluno": 13,
   "competencia": "2026-05",
   "vencimento": "2026-05-10",
   "valor": 179.9,
   "pagamento": "2026-05-12",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 80,
   "matricula": 13,
   "aluno": 13,
   "competencia": "2026-06",
   "vencimento": "2026-06-10",
   "valor": 179.9,
   "pagamento": "2026-06-06",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 81,
   "matricula": 13,
   "aluno": 13,
   "competencia": "2026-07",
   "vencimento": "2026-07-10",
   "valor": 179.9,
   "pagamento": "2026-07-12",
   "forma": "DINHEIRO",
   "status": "PAGO"
  },
  {
   "id": 82,
   "matricula": 13,
   "aluno": 13,
   "competencia": "2026-08",
   "vencimento": "2026-08-10",
   "valor": 179.9,
   "pagamento": "2026-08-06",
   "forma": "DINHEIRO",
   "status": "PAGO"
  },
  {
   "id": 83,
   "matricula": 13,
   "aluno": 13,
   "competencia": "2026-09",
   "vencimento": "2026-09-10",
   "valor": 179.9,
   "pagamento": "2026-09-06",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 84,
   "matricula": 13,
   "aluno": 13,
   "competencia": "2026-10",
   "vencimento": "2026-10-10",
   "valor": 179.9,
   "pagamento": "2026-10-14",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 85,
   "matricula": 13,
   "aluno": 13,
   "competencia": "2026-11",
   "vencimento": "2026-11-10",
   "valor": 179.9,
   "pagamento": null,
   "forma": null,
   "status": "PENDENTE"
  },
  {
   "id": 86,
   "matricula": 14,
   "aluno": 14,
   "competencia": "2026-05",
   "vencimento": "2026-05-10",
   "valor": 119.9,
   "pagamento": "2026-05-14",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 87,
   "matricula": 14,
   "aluno": 14,
   "competencia": "2026-06",
   "vencimento": "2026-06-10",
   "valor": 119.9,
   "pagamento": "2026-06-08",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 88,
   "matricula": 14,
   "aluno": 14,
   "competencia": "2026-07",
   "vencimento": "2026-07-10",
   "valor": 119.9,
   "pagamento": "2026-07-06",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 89,
   "matricula": 14,
   "aluno": 14,
   "competencia": "2026-08",
   "vencimento": "2026-08-10",
   "valor": 119.9,
   "pagamento": "2026-08-08",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 90,
   "matricula": 14,
   "aluno": 14,
   "competencia": "2026-09",
   "vencimento": "2026-09-10",
   "valor": 119.9,
   "pagamento": "2026-09-09",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 91,
   "matricula": 14,
   "aluno": 14,
   "competencia": "2026-10",
   "vencimento": "2026-10-10",
   "valor": 119.9,
   "pagamento": null,
   "forma": null,
   "status": "ATRASADO"
  },
  {
   "id": 92,
   "matricula": 14,
   "aluno": 14,
   "competencia": "2026-11",
   "vencimento": "2026-11-10",
   "valor": 119.9,
   "pagamento": null,
   "forma": null,
   "status": "PENDENTE"
  },
  {
   "id": 93,
   "matricula": 15,
   "aluno": 15,
   "competencia": "2026-05",
   "vencimento": "2026-05-15",
   "valor": 129.9,
   "pagamento": "2026-05-11",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 94,
   "matricula": 15,
   "aluno": 15,
   "competencia": "2026-06",
   "vencimento": "2026-06-15",
   "valor": 129.9,
   "pagamento": "2026-06-09",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 95,
   "matricula": 15,
   "aluno": 15,
   "competencia": "2026-07",
   "vencimento": "2026-07-15",
   "valor": 129.9,
   "pagamento": "2026-07-19",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 96,
   "matricula": 15,
   "aluno": 15,
   "competencia": "2026-08",
   "vencimento": "2026-08-15",
   "valor": 129.9,
   "pagamento": "2026-08-15",
   "forma": "BOLETO",
   "status": "PAGO"
  },
  {
   "id": 97,
   "matricula": 15,
   "aluno": 15,
   "competencia": "2026-09",
   "vencimento": "2026-09-15",
   "valor": 129.9,
   "pagamento": "2026-09-18",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 98,
   "matricula": 15,
   "aluno": 15,
   "competencia": "2026-10",
   "vencimento": "2026-10-15",
   "valor": 129.9,
   "pagamento": "2026-10-17",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 99,
   "matricula": 15,
   "aluno": 15,
   "competencia": "2026-11",
   "vencimento": "2026-11-15",
   "valor": 129.9,
   "pagamento": null,
   "forma": null,
   "status": "PENDENTE"
  },
  {
   "id": 100,
   "matricula": 16,
   "aluno": 16,
   "competencia": "2026-05",
   "vencimento": "2026-05-10",
   "valor": 119.9,
   "pagamento": "2026-05-07",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 101,
   "matricula": 16,
   "aluno": 16,
   "competencia": "2026-06",
   "vencimento": "2026-06-10",
   "valor": 119.9,
   "pagamento": "2026-06-09",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 102,
   "matricula": 16,
   "aluno": 16,
   "competencia": "2026-07",
   "vencimento": "2026-07-10",
   "valor": 119.9,
   "pagamento": "2026-07-05",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 103,
   "matricula": 16,
   "aluno": 16,
   "competencia": "2026-08",
   "vencimento": "2026-08-10",
   "valor": 119.9,
   "pagamento": "2026-08-14",
   "forma": "DINHEIRO",
   "status": "PAGO"
  },
  {
   "id": 104,
   "matricula": 16,
   "aluno": 16,
   "competencia": "2026-09",
   "vencimento": "2026-09-10",
   "valor": 119.9,
   "pagamento": "2026-09-10",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 105,
   "matricula": 16,
   "aluno": 16,
   "competencia": "2026-10",
   "vencimento": "2026-10-10",
   "valor": 119.9,
   "pagamento": "2026-10-09",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 106,
   "matricula": 16,
   "aluno": 16,
   "competencia": "2026-11",
   "vencimento": "2026-11-10",
   "valor": 119.9,
   "pagamento": null,
   "forma": null,
   "status": "PENDENTE"
  },
  {
   "id": 107,
   "matricula": 17,
   "aluno": 17,
   "competencia": "2026-05",
   "vencimento": "2026-05-10",
   "valor": 139.9,
   "pagamento": "2026-05-12",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 108,
   "matricula": 17,
   "aluno": 17,
   "competencia": "2026-06",
   "vencimento": "2026-06-10",
   "valor": 139.9,
   "pagamento": "2026-06-11",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 109,
   "matricula": 17,
   "aluno": 17,
   "competencia": "2026-07",
   "vencimento": "2026-07-10",
   "valor": 139.9,
   "pagamento": "2026-07-04",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 110,
   "matricula": 17,
   "aluno": 17,
   "competencia": "2026-08",
   "vencimento": "2026-08-10",
   "valor": 139.9,
   "pagamento": "2026-08-09",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 111,
   "matricula": 17,
   "aluno": 17,
   "competencia": "2026-09",
   "vencimento": "2026-09-10",
   "valor": 139.9,
   "pagamento": "2026-09-08",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 112,
   "matricula": 17,
   "aluno": 17,
   "competencia": "2026-10",
   "vencimento": "2026-10-10",
   "valor": 139.9,
   "pagamento": "2026-10-04",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 113,
   "matricula": 17,
   "aluno": 17,
   "competencia": "2026-11",
   "vencimento": "2026-11-10",
   "valor": 139.9,
   "pagamento": null,
   "forma": null,
   "status": "PENDENTE"
  },
  {
   "id": 114,
   "matricula": 18,
   "aluno": 18,
   "competencia": "2026-05",
   "vencimento": "2026-05-15",
   "valor": 159.9,
   "pagamento": "2026-05-12",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 115,
   "matricula": 18,
   "aluno": 18,
   "competencia": "2026-06",
   "vencimento": "2026-06-15",
   "valor": 159.9,
   "pagamento": "2026-06-15",
   "forma": "BOLETO",
   "status": "PAGO"
  },
  {
   "id": 116,
   "matricula": 18,
   "aluno": 18,
   "competencia": "2026-07",
   "vencimento": "2026-07-15",
   "valor": 159.9,
   "pagamento": "2026-07-15",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 117,
   "matricula": 18,
   "aluno": 18,
   "competencia": "2026-08",
   "vencimento": "2026-08-15",
   "valor": 159.9,
   "pagamento": "2026-08-11",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 118,
   "matricula": 18,
   "aluno": 18,
   "competencia": "2026-09",
   "vencimento": "2026-09-15",
   "valor": 159.9,
   "pagamento": "2026-09-12",
   "forma": "BOLETO",
   "status": "PAGO"
  },
  {
   "id": 119,
   "matricula": 18,
   "aluno": 18,
   "competencia": "2026-10",
   "vencimento": "2026-10-15",
   "valor": 159.9,
   "pagamento": "2026-10-16",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 120,
   "matricula": 18,
   "aluno": 18,
   "competencia": "2026-11",
   "vencimento": "2026-11-15",
   "valor": 159.9,
   "pagamento": null,
   "forma": null,
   "status": "PENDENTE"
  },
  {
   "id": 121,
   "matricula": 19,
   "aluno": 19,
   "competencia": "2026-05",
   "vencimento": "2026-05-15",
   "valor": 129.9,
   "pagamento": "2026-05-11",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 122,
   "matricula": 19,
   "aluno": 19,
   "competencia": "2026-06",
   "vencimento": "2026-06-15",
   "valor": 129.9,
   "pagamento": "2026-06-15",
   "forma": "DINHEIRO",
   "status": "PAGO"
  },
  {
   "id": 123,
   "matricula": 19,
   "aluno": 19,
   "competencia": "2026-07",
   "vencimento": "2026-07-15",
   "valor": 129.9,
   "pagamento": "2026-07-15",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 124,
   "matricula": 19,
   "aluno": 19,
   "competencia": "2026-08",
   "vencimento": "2026-08-15",
   "valor": 129.9,
   "pagamento": "2026-08-14",
   "forma": "DINHEIRO",
   "status": "PAGO"
  },
  {
   "id": 125,
   "matricula": 19,
   "aluno": 19,
   "competencia": "2026-09",
   "vencimento": "2026-09-15",
   "valor": 129.9,
   "pagamento": "2026-09-12",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 126,
   "matricula": 19,
   "aluno": 19,
   "competencia": "2026-10",
   "vencimento": "2026-10-15",
   "valor": 129.9,
   "pagamento": "2026-10-19",
   "forma": "DINHEIRO",
   "status": "PAGO"
  },
  {
   "id": 127,
   "matricula": 19,
   "aluno": 19,
   "competencia": "2026-11",
   "vencimento": "2026-11-15",
   "valor": 129.9,
   "pagamento": null,
   "forma": null,
   "status": "PENDENTE"
  },
  {
   "id": 128,
   "matricula": 20,
   "aluno": 20,
   "competencia": "2026-05",
   "vencimento": "2026-05-15",
   "valor": 119.9,
   "pagamento": "2026-05-17",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 129,
   "matricula": 20,
   "aluno": 20,
   "competencia": "2026-06",
   "vencimento": "2026-06-15",
   "valor": 119.9,
   "pagamento": "2026-06-16",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 130,
   "matricula": 20,
   "aluno": 20,
   "competencia": "2026-07",
   "vencimento": "2026-07-15",
   "valor": 119.9,
   "pagamento": "2026-07-12",
   "forma": "DINHEIRO",
   "status": "PAGO"
  },
  {
   "id": 131,
   "matricula": 20,
   "aluno": 20,
   "competencia": "2026-08",
   "vencimento": "2026-08-15",
   "valor": 119.9,
   "pagamento": "2026-08-12",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 132,
   "matricula": 20,
   "aluno": 20,
   "competencia": "2026-09",
   "vencimento": "2026-09-15",
   "valor": 119.9,
   "pagamento": "2026-09-10",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 133,
   "matricula": 20,
   "aluno": 20,
   "competencia": "2026-10",
   "vencimento": "2026-10-15",
   "valor": 119.9,
   "pagamento": "2026-10-19",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 134,
   "matricula": 20,
   "aluno": 20,
   "competencia": "2026-11",
   "vencimento": "2026-11-15",
   "valor": 119.9,
   "pagamento": null,
   "forma": null,
   "status": "PENDENTE"
  },
  {
   "id": 135,
   "matricula": 21,
   "aluno": 21,
   "competencia": "2026-05",
   "vencimento": "2026-05-20",
   "valor": 159.9,
   "pagamento": "2026-05-16",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 136,
   "matricula": 21,
   "aluno": 21,
   "competencia": "2026-06",
   "vencimento": "2026-06-20",
   "valor": 159.9,
   "pagamento": "2026-06-16",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 137,
   "matricula": 21,
   "aluno": 21,
   "competencia": "2026-07",
   "vencimento": "2026-07-20",
   "valor": 159.9,
   "pagamento": "2026-07-24",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 138,
   "matricula": 21,
   "aluno": 21,
   "competencia": "2026-08",
   "vencimento": "2026-08-20",
   "valor": 159.9,
   "pagamento": "2026-08-17",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 139,
   "matricula": 21,
   "aluno": 21,
   "competencia": "2026-09",
   "vencimento": "2026-09-20",
   "valor": 159.9,
   "pagamento": "2026-09-14",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 140,
   "matricula": 21,
   "aluno": 21,
   "competencia": "2026-10",
   "vencimento": "2026-10-20",
   "valor": 159.9,
   "pagamento": "2026-10-16",
   "forma": "BOLETO",
   "status": "PAGO"
  },
  {
   "id": 141,
   "matricula": 21,
   "aluno": 21,
   "competencia": "2026-11",
   "vencimento": "2026-11-20",
   "valor": 159.9,
   "pagamento": null,
   "forma": null,
   "status": "PENDENTE"
  },
  {
   "id": 142,
   "matricula": 22,
   "aluno": 22,
   "competencia": "2026-05",
   "vencimento": "2026-05-05",
   "valor": 179.9,
   "pagamento": "2026-05-09",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 143,
   "matricula": 22,
   "aluno": 22,
   "competencia": "2026-06",
   "vencimento": "2026-06-05",
   "valor": 179.9,
   "pagamento": "2026-06-03",
   "forma": "DINHEIRO",
   "status": "PAGO"
  },
  {
   "id": 144,
   "matricula": 22,
   "aluno": 22,
   "competencia": "2026-07",
   "vencimento": "2026-07-05",
   "valor": 179.9,
   "pagamento": "2026-07-04",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 145,
   "matricula": 22,
   "aluno": 22,
   "competencia": "2026-08",
   "vencimento": "2026-08-05",
   "valor": 179.9,
   "pagamento": null,
   "forma": null,
   "status": "ATRASADO"
  },
  {
   "id": 146,
   "matricula": 22,
   "aluno": 22,
   "competencia": "2026-09",
   "vencimento": "2026-09-05",
   "valor": 179.9,
   "pagamento": null,
   "forma": null,
   "status": "ATRASADO"
  },
  {
   "id": 147,
   "matricula": 22,
   "aluno": 22,
   "competencia": "2026-10",
   "vencimento": "2026-10-05",
   "valor": 179.9,
   "pagamento": null,
   "forma": null,
   "status": "ATRASADO"
  },
  {
   "id": 148,
   "matricula": 22,
   "aluno": 22,
   "competencia": "2026-11",
   "vencimento": "2026-11-05",
   "valor": 179.9,
   "pagamento": null,
   "forma": null,
   "status": "ATRASADO"
  },
  {
   "id": 149,
   "matricula": 23,
   "aluno": 23,
   "competencia": "2026-05",
   "vencimento": "2026-05-15",
   "valor": 159.9,
   "pagamento": "2026-05-16",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 150,
   "matricula": 23,
   "aluno": 23,
   "competencia": "2026-06",
   "vencimento": "2026-06-15",
   "valor": 159.9,
   "pagamento": "2026-06-16",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 151,
   "matricula": 23,
   "aluno": 23,
   "competencia": "2026-07",
   "vencimento": "2026-07-15",
   "valor": 159.9,
   "pagamento": "2026-07-14",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 152,
   "matricula": 23,
   "aluno": 23,
   "competencia": "2026-08",
   "vencimento": "2026-08-15",
   "valor": 159.9,
   "pagamento": "2026-08-11",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 153,
   "matricula": 23,
   "aluno": 23,
   "competencia": "2026-09",
   "vencimento": "2026-09-15",
   "valor": 159.9,
   "pagamento": "2026-09-11",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 154,
   "matricula": 23,
   "aluno": 23,
   "competencia": "2026-10",
   "vencimento": "2026-10-15",
   "valor": 159.9,
   "pagamento": "2026-10-12",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 155,
   "matricula": 23,
   "aluno": 23,
   "competencia": "2026-11",
   "vencimento": "2026-11-15",
   "valor": 159.9,
   "pagamento": null,
   "forma": null,
   "status": "PENDENTE"
  },
  {
   "id": 156,
   "matricula": 24,
   "aluno": 24,
   "competencia": "2026-05",
   "vencimento": "2026-05-05",
   "valor": 139.9,
   "pagamento": "2026-05-05",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 157,
   "matricula": 24,
   "aluno": 24,
   "competencia": "2026-06",
   "vencimento": "2026-06-05",
   "valor": 139.9,
   "pagamento": "2026-06-09",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 158,
   "matricula": 24,
   "aluno": 24,
   "competencia": "2026-07",
   "vencimento": "2026-07-05",
   "valor": 139.9,
   "pagamento": "2026-06-29",
   "forma": "DINHEIRO",
   "status": "PAGO"
  },
  {
   "id": 159,
   "matricula": 24,
   "aluno": 24,
   "competencia": "2026-08",
   "vencimento": "2026-08-05",
   "valor": 139.9,
   "pagamento": "2026-08-09",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 160,
   "matricula": 24,
   "aluno": 24,
   "competencia": "2026-09",
   "vencimento": "2026-09-05",
   "valor": 139.9,
   "pagamento": "2026-09-04",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 161,
   "matricula": 24,
   "aluno": 24,
   "competencia": "2026-10",
   "vencimento": "2026-10-05",
   "valor": 139.9,
   "pagamento": "2026-10-09",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 162,
   "matricula": 24,
   "aluno": 24,
   "competencia": "2026-11",
   "vencimento": "2026-11-05",
   "valor": 139.9,
   "pagamento": null,
   "forma": null,
   "status": "ATRASADO"
  },
  {
   "id": 163,
   "matricula": 25,
   "aluno": 25,
   "competencia": "2026-05",
   "vencimento": "2026-05-10",
   "valor": 119.9,
   "pagamento": "2026-05-11",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 164,
   "matricula": 25,
   "aluno": 25,
   "competencia": "2026-06",
   "vencimento": "2026-06-10",
   "valor": 119.9,
   "pagamento": "2026-06-12",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 165,
   "matricula": 25,
   "aluno": 25,
   "competencia": "2026-07",
   "vencimento": "2026-07-10",
   "valor": 119.9,
   "pagamento": "2026-07-12",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 166,
   "matricula": 25,
   "aluno": 25,
   "competencia": "2026-08",
   "vencimento": "2026-08-10",
   "valor": 119.9,
   "pagamento": "2026-08-08",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 167,
   "matricula": 25,
   "aluno": 25,
   "competencia": "2026-09",
   "vencimento": "2026-09-10",
   "valor": 119.9,
   "pagamento": "2026-09-04",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 168,
   "matricula": 25,
   "aluno": 25,
   "competencia": "2026-10",
   "vencimento": "2026-10-10",
   "valor": 119.9,
   "pagamento": "2026-10-13",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 169,
   "matricula": 25,
   "aluno": 25,
   "competencia": "2026-11",
   "vencimento": "2026-11-10",
   "valor": 119.9,
   "pagamento": null,
   "forma": null,
   "status": "PENDENTE"
  },
  {
   "id": 170,
   "matricula": 26,
   "aluno": 26,
   "competencia": "2026-05",
   "vencimento": "2026-05-15",
   "valor": 159.9,
   "pagamento": "2026-05-17",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 171,
   "matricula": 26,
   "aluno": 26,
   "competencia": "2026-06",
   "vencimento": "2026-06-15",
   "valor": 159.9,
   "pagamento": "2026-06-18",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 172,
   "matricula": 26,
   "aluno": 26,
   "competencia": "2026-07",
   "vencimento": "2026-07-15",
   "valor": 159.9,
   "pagamento": "2026-07-15",
   "forma": "BOLETO",
   "status": "PAGO"
  },
  {
   "id": 173,
   "matricula": 26,
   "aluno": 26,
   "competencia": "2026-08",
   "vencimento": "2026-08-15",
   "valor": 159.9,
   "pagamento": "2026-08-18",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 174,
   "matricula": 27,
   "aluno": 27,
   "competencia": "2026-05",
   "vencimento": "2026-05-10",
   "valor": 139.9,
   "pagamento": "2026-05-04",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 175,
   "matricula": 27,
   "aluno": 27,
   "competencia": "2026-06",
   "vencimento": "2026-06-10",
   "valor": 139.9,
   "pagamento": "2026-06-09",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 176,
   "matricula": 27,
   "aluno": 27,
   "competencia": "2026-07",
   "vencimento": "2026-07-10",
   "valor": 139.9,
   "pagamento": "2026-07-04",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 177,
   "matricula": 27,
   "aluno": 27,
   "competencia": "2026-08",
   "vencimento": "2026-08-10",
   "valor": 139.9,
   "pagamento": "2026-08-10",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 178,
   "matricula": 27,
   "aluno": 27,
   "competencia": "2026-09",
   "vencimento": "2026-09-10",
   "valor": 139.9,
   "pagamento": "2026-09-06",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 179,
   "matricula": 27,
   "aluno": 27,
   "competencia": "2026-10",
   "vencimento": "2026-10-10",
   "valor": 139.9,
   "pagamento": "2026-10-08",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 180,
   "matricula": 27,
   "aluno": 27,
   "competencia": "2026-11",
   "vencimento": "2026-11-10",
   "valor": 139.9,
   "pagamento": null,
   "forma": null,
   "status": "PENDENTE"
  },
  {
   "id": 181,
   "matricula": 28,
   "aluno": 28,
   "competencia": "2026-05",
   "vencimento": "2026-05-20",
   "valor": 159.9,
   "pagamento": "2026-05-15",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 182,
   "matricula": 28,
   "aluno": 28,
   "competencia": "2026-06",
   "vencimento": "2026-06-20",
   "valor": 159.9,
   "pagamento": "2026-06-22",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 183,
   "matricula": 28,
   "aluno": 28,
   "competencia": "2026-07",
   "vencimento": "2026-07-20",
   "valor": 159.9,
   "pagamento": "2026-07-19",
   "forma": "DINHEIRO",
   "status": "PAGO"
  },
  {
   "id": 184,
   "matricula": 28,
   "aluno": 28,
   "competencia": "2026-08",
   "vencimento": "2026-08-20",
   "valor": 159.9,
   "pagamento": "2026-08-16",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 185,
   "matricula": 28,
   "aluno": 28,
   "competencia": "2026-09",
   "vencimento": "2026-09-20",
   "valor": 159.9,
   "pagamento": "2026-09-21",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 186,
   "matricula": 28,
   "aluno": 28,
   "competencia": "2026-10",
   "vencimento": "2026-10-20",
   "valor": 159.9,
   "pagamento": "2026-10-19",
   "forma": "DINHEIRO",
   "status": "PAGO"
  },
  {
   "id": 187,
   "matricula": 28,
   "aluno": 28,
   "competencia": "2026-11",
   "vencimento": "2026-11-20",
   "valor": 159.9,
   "pagamento": null,
   "forma": null,
   "status": "PENDENTE"
  },
  {
   "id": 188,
   "matricula": 29,
   "aluno": 29,
   "competencia": "2026-05",
   "vencimento": "2026-05-10",
   "valor": 179.9,
   "pagamento": "2026-05-11",
   "forma": "DINHEIRO",
   "status": "PAGO"
  },
  {
   "id": 189,
   "matricula": 29,
   "aluno": 29,
   "competencia": "2026-06",
   "vencimento": "2026-06-10",
   "valor": 179.9,
   "pagamento": "2026-06-07",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 190,
   "matricula": 29,
   "aluno": 29,
   "competencia": "2026-07",
   "vencimento": "2026-07-10",
   "valor": 179.9,
   "pagamento": "2026-07-07",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 191,
   "matricula": 29,
   "aluno": 29,
   "competencia": "2026-08",
   "vencimento": "2026-08-10",
   "valor": 179.9,
   "pagamento": "2026-08-09",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 192,
   "matricula": 29,
   "aluno": 29,
   "competencia": "2026-09",
   "vencimento": "2026-09-10",
   "valor": 179.9,
   "pagamento": "2026-09-04",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 193,
   "matricula": 29,
   "aluno": 29,
   "competencia": "2026-10",
   "vencimento": "2026-10-10",
   "valor": 179.9,
   "pagamento": "2026-10-07",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 194,
   "matricula": 29,
   "aluno": 29,
   "competencia": "2026-11",
   "vencimento": "2026-11-10",
   "valor": 179.9,
   "pagamento": null,
   "forma": null,
   "status": "PENDENTE"
  },
  {
   "id": 195,
   "matricula": 30,
   "aluno": 30,
   "competencia": "2026-06",
   "vencimento": "2026-06-11",
   "valor": 119.9,
   "pagamento": "2026-06-11",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 196,
   "matricula": 30,
   "aluno": 30,
   "competencia": "2026-07",
   "vencimento": "2026-07-10",
   "valor": 119.9,
   "pagamento": "2026-07-07",
   "forma": "PIX",
   "status": "PAGO"
  },
  {
   "id": 197,
   "matricula": 30,
   "aluno": 30,
   "competencia": "2026-08",
   "vencimento": "2026-08-10",
   "valor": 119.9,
   "pagamento": "2026-08-13",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 198,
   "matricula": 30,
   "aluno": 30,
   "competencia": "2026-09",
   "vencimento": "2026-09-10",
   "valor": 119.9,
   "pagamento": "2026-09-13",
   "forma": "CARTAO_CREDITO",
   "status": "PAGO"
  },
  {
   "id": 199,
   "matricula": 30,
   "aluno": 30,
   "competencia": "2026-10",
   "vencimento": "2026-10-10",
   "valor": 119.9,
   "pagamento": "2026-10-11",
   "forma": "CARTAO_DEBITO",
   "status": "PAGO"
  },
  {
   "id": 200,
   "matricula": 30,
   "aluno": 30,
   "competencia": "2026-11",
   "vencimento": "2026-11-10",
   "valor": 119.9,
   "pagamento": null,
   "forma": null,
   "status": "PENDENTE"
  }
 ],
 "modalidades": [
  {
   "id": 1,
   "nome": "Spinning"
  },
  {
   "id": 2,
   "nome": "Yoga"
  },
  {
   "id": 3,
   "nome": "Pilates"
  },
  {
   "id": 4,
   "nome": "CrossFit"
  },
  {
   "id": 5,
   "nome": "Zumba"
  },
  {
   "id": 6,
   "nome": "Muay Thai"
  },
  {
   "id": 7,
   "nome": "Funcional"
  },
  {
   "id": 8,
   "nome": "Hidroginástica"
  }
 ],
 "inscricoes": [
  {
   "aluno": 1,
   "aula": 6,
   "ativa": true
  },
  {
   "aluno": 2,
   "aula": 7,
   "ativa": true
  },
  {
   "aluno": 2,
   "aula": 9,
   "ativa": true
  },
  {
   "aluno": 3,
   "aula": 3,
   "ativa": true
  },
  {
   "aluno": 3,
   "aula": 6,
   "ativa": true
  },
  {
   "aluno": 4,
   "aula": 7,
   "ativa": true
  },
  {
   "aluno": 4,
   "aula": 10,
   "ativa": true
  },
  {
   "aluno": 5,
   "aula": 2,
   "ativa": true
  },
  {
   "aluno": 5,
   "aula": 7,
   "ativa": true
  },
  {
   "aluno": 5,
   "aula": 10,
   "ativa": true
  },
  {
   "aluno": 6,
   "aula": 6,
   "ativa": true
  },
  {
   "aluno": 7,
   "aula": 10,
   "ativa": true
  },
  {
   "aluno": 8,
   "aula": 6,
   "ativa": true
  },
  {
   "aluno": 9,
   "aula": 2,
   "ativa": true
  },
  {
   "aluno": 10,
   "aula": 6,
   "ativa": true
  },
  {
   "aluno": 11,
   "aula": 3,
   "ativa": false
  },
  {
   "aluno": 12,
   "aula": 8,
   "ativa": true
  },
  {
   "aluno": 13,
   "aula": 1,
   "ativa": true
  },
  {
   "aluno": 13,
   "aula": 7,
   "ativa": true
  },
  {
   "aluno": 13,
   "aula": 11,
   "ativa": true
  },
  {
   "aluno": 14,
   "aula": 1,
   "ativa": true
  },
  {
   "aluno": 14,
   "aula": 8,
   "ativa": true
  },
  {
   "aluno": 14,
   "aula": 11,
   "ativa": true
  },
  {
   "aluno": 15,
   "aula": 1,
   "ativa": true
  },
  {
   "aluno": 16,
   "aula": 8,
   "ativa": true
  },
  {
   "aluno": 17,
   "aula": 1,
   "ativa": true
  },
  {
   "aluno": 18,
   "aula": 6,
   "ativa": true
  },
  {
   "aluno": 19,
   "aula": 11,
   "ativa": true
  },
  {
   "aluno": 20,
   "aula": 2,
   "ativa": true
  },
  {
   "aluno": 20,
   "aula": 7,
   "ativa": true
  },
  {
   "aluno": 20,
   "aula": 8,
   "ativa": true
  },
  {
   "aluno": 21,
   "aula": 7,
   "ativa": true
  },
  {
   "aluno": 22,
   "aula": 1,
   "ativa": true
  },
  {
   "aluno": 22,
   "aula": 5,
   "ativa": true
  },
  {
   "aluno": 22,
   "aula": 6,
   "ativa": true
  },
  {
   "aluno": 23,
   "aula": 2,
   "ativa": true
  },
  {
   "aluno": 24,
   "aula": 2,
   "ativa": true
  },
  {
   "aluno": 24,
   "aula": 5,
   "ativa": true
  },
  {
   "aluno": 24,
   "aula": 9,
   "ativa": true
  },
  {
   "aluno": 25,
   "aula": 1,
   "ativa": true
  },
  {
   "aluno": 25,
   "aula": 4,
   "ativa": true
  },
  {
   "aluno": 26,
   "aula": 12,
   "ativa": false
  },
  {
   "aluno": 27,
   "aula": 6,
   "ativa": true
  },
  {
   "aluno": 27,
   "aula": 9,
   "ativa": true
  },
  {
   "aluno": 27,
   "aula": 10,
   "ativa": true
  },
  {
   "aluno": 28,
   "aula": 2,
   "ativa": true
  },
  {
   "aluno": 28,
   "aula": 7,
   "ativa": true
  },
  {
   "aluno": 29,
   "aula": 1,
   "ativa": true
  },
  {
   "aluno": 29,
   "aula": 8,
   "ativa": true
  },
  {
   "aluno": 30,
   "aula": 5,
   "ativa": true
  },
  {
   "aluno": 30,
   "aula": 6,
   "ativa": true
  },
  {
   "aluno": 30,
   "aula": 7,
   "ativa": true
  }
 ],
 "aulas": [
  {
   "id": 1,
   "modalidade": 1
  },
  {
   "id": 2,
   "modalidade": 1
  },
  {
   "id": 3,
   "modalidade": 2
  },
  {
   "id": 4,
   "modalidade": 3
  },
  {
   "id": 5,
   "modalidade": 3
  },
  {
   "id": 6,
   "modalidade": 4
  },
  {
   "id": 7,
   "modalidade": 4
  },
  {
   "id": 8,
   "modalidade": 5
  },
  {
   "id": 9,
   "modalidade": 6
  },
  {
   "id": 10,
   "modalidade": 7
  },
  {
   "id": 11,
   "modalidade": 7
  },
  {
   "id": 12,
   "modalidade": 8
  }
 ],
 "hoje": "2026-11-06"
};
