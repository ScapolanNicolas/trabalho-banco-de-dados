/* =====================================================================
   Academia Movimento — protótipo de interface (sem backend)
   Os dados vêm de dados.js (mesma carga do script SQL) e as alterações
   ficam no localStorage do navegador, simulando o banco.
   ===================================================================== */
(function () {
  "use strict";

  const CHAVE = "academia-prototipo-v1";
  const HOJE = window.DADOS_INICIAIS.hoje;
  let db = carregar();
  let grafico = null;

  // ------------------------------------------------------------ utilidades
  const $ = (s) => document.querySelector(s);
  const brl = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const dataBR = (iso) => (iso ? iso.split("-").reverse().join("/") : "—");
  const compBR = (c) => c.split("-").reverse().join("/");
  const soDig = (s) => (s || "").replace(/\D/g, "");
  const fmtCpf = (c) => c.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const formaTxt = { PIX: "PIX", CARTAO_CREDITO: "Cartão crédito", CARTAO_DEBITO: "Cartão débito", BOLETO: "Boleto", DINHEIRO: "Dinheiro" };
  const corStatus = { ATIVA: "success", SUSPENSA: "warning", CANCELADA: "secondary", PAGO: "success", PENDENTE: "info", ATRASADO: "danger", CANCELADO: "secondary" };
  const badge = (s) => `<span class="badge text-bg-${corStatus[s] || "light"}">${s}</span>`;
  const plano = (id) => db.planos.find((p) => p.id === id);
  const aluno = (id) => db.alunos.find((a) => a.id === id);

  function carregar() {
    try {
      const salvo = localStorage.getItem(CHAVE);
      if (salvo) return JSON.parse(salvo);
    } catch (e) { /* storage indisponível: segue com os dados iniciais */ }
    return structuredClone(window.DADOS_INICIAIS);
  }
  function salvar() {
    try { localStorage.setItem(CHAVE, JSON.stringify(db)); } catch (e) { /* ignora */ }
  }
  function aviso(msg) {
    $("#toastMsg").textContent = msg;
    bootstrap.Toast.getOrCreateInstance($("#toast")).show();
  }

  function cpfValido(c) {
    c = soDig(c);
    if (c.length !== 11 || /^(\d)\1{10}$/.test(c)) return false;
    for (const k of [9, 10]) {
      let s = 0;
      for (let i = 0; i < k; i++) s += +c[i] * (k + 1 - i);
      const d = ((s * 10) % 11) % 10;
      if (d !== +c[k]) return false;
    }
    return true;
  }

  // ------------------------------------------------------------ navegação
  function mostrar(secao) {
    document.querySelectorAll(".secao").forEach((s) => s.classList.add("d-none"));
    $("#sec-" + secao).classList.remove("d-none");
    document.querySelectorAll(".nav-link").forEach((l) => l.classList.toggle("active", l.dataset.secao === secao));
    bootstrap.Collapse.getInstance($("#menu"))?.hide();
    render[secao]();
  }
  document.querySelectorAll("[data-secao]").forEach((el) =>
    el.addEventListener("click", (e) => { e.preventDefault(); mostrar(el.dataset.secao); }));

  // ------------------------------------------------------------ PAINEL
  function renderPainel() {
    const ativos = db.alunos.filter((a) => a.status === "ATIVA").length;
    const suspensos = db.alunos.filter((a) => a.status === "SUSPENSA").length;
    const recOut = db.pagamentos.filter((p) => p.status === "PAGO" && p.pagamento?.startsWith("2026-10")).reduce((s, p) => s + p.valor, 0);
    const emAtraso = db.pagamentos.filter((p) => p.status === "ATRASADO");
    const kpis = [
      ["Alunos ativos", ativos, "bi-people", `${suspensos} suspenso(s)`],
      ["Receita out/2026", brl(recOut), "bi-graph-up-arrow", "regime de caixa"],
      ["Parcelas em atraso", emAtraso.length, "bi-exclamation-triangle", brl(emAtraso.reduce((s, p) => s + p.valor, 0))],
      ["Planos ativos", db.planos.filter((p) => p.ativo).length, "bi-card-checklist", `${db.planos.length} cadastrados`],
    ];
    $("#kpis").innerHTML = kpis.map(([r, v, i, sub]) => `
      <div class="col-6 col-lg-3"><div class="card kpi shadow-sm h-100"><div class="card-body">
        <div class="d-flex justify-content-between"><span class="rotulo">${r}</span><i class="bi ${i} text-marca"></i></div>
        <div class="valor mt-1">${v}</div><div class="small text-secondary">${sub}</div>
      </div></div></div>`).join("");

    // receita por mês
    const meses = {};
    db.pagamentos.filter((p) => p.status === "PAGO" && p.pagamento?.startsWith("2026"))
      .forEach((p) => { const m = p.pagamento.slice(0, 7); meses[m] = (meses[m] || 0) + p.valor; });
    const chaves = Object.keys(meses).sort();
    const nomesMes = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
    if (grafico) grafico.destroy();
    if (window.Chart) {
      grafico = new Chart($("#graficoReceita"), {
        type: "bar",
        data: { labels: chaves.map((k) => nomesMes[+k.slice(5) - 1] + "/" + k.slice(2, 4)),
                datasets: [{ label: "Receita", data: chaves.map((k) => +meses[k].toFixed(2)), backgroundColor: "#b5121b", borderRadius: 4 }] },
        options: { plugins: { legend: { display: false }, tooltip: { callbacks: { label: (c) => brl(c.parsed.y) } } },
                   scales: { y: { ticks: { callback: (v) => "R$ " + v.toLocaleString("pt-BR") } }, x: { grid: { display: false } } } },
      });
    }

    // ranking de modalidades (alunos com inscrição ativa)
    const porMod = {};
    db.inscricoes.filter((i) => i.ativa).forEach((i) => {
      const mod = db.aulas.find((a) => a.id === i.aula).modalidade;
      (porMod[mod] ||= new Set()).add(i.aluno);
    });
    const rank = db.modalidades.map((m) => ({ nome: m.nome, qtd: porMod[m.id]?.size || 0 })).sort((a, b) => b.qtd - a.qtd);
    const max = rank[0].qtd || 1;
    $("#rankingModalidades").innerHTML = rank.map((r, i) => `
      <li class="list-group-item">
        <div class="d-flex justify-content-between small"><span><strong>${i + 1}º</strong> ${esc(r.nome)}</span><span class="num">${r.qtd} alunos</span></div>
        <div class="barra-rank mt-1"><span style="width:${(r.qtd / max) * 100}%"></span></div>
      </li>`).join("");
  }

  // ------------------------------------------------------------ ALUNOS
  function opcoesPlanos() {
    $("#aPlano").innerHTML = db.planos.filter((p) => p.ativo)
      .map((p) => `<option value="${p.id}">${esc(p.nome)} — ${brl(p.valor)}</option>`).join("");
    const atual = $("#filtroPlano").value;
    $("#filtroPlano").innerHTML = `<option value="">Todos os planos</option>` +
      db.planos.map((p) => `<option value="${p.id}">${esc(p.nome)}</option>`).join("");
    $("#filtroPlano").value = atual;
  }

  function renderAlunos() {
    opcoesPlanos();
    const termo = $("#buscaAluno").value.trim().toLowerCase();
    const termoDig = soDig(termo);
    const st = $("#filtroStatus").value;
    const pl = +$("#filtroPlano").value || 0;
    const lista = db.alunos.filter((a) =>
      (!termo || a.nome.toLowerCase().includes(termo) || a.email.toLowerCase().includes(termo) || (termoDig && a.cpf.includes(termoDig))) &&
      (!st || a.status === st) && (!pl || a.plano === pl))
      .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));

    $("#tabelaAlunos").innerHTML = lista.length ? lista.map((a) => `
      <tr>
        <td class="text-secondary">${a.id}</td>
        <td class="fw-semibold">${esc(a.nome)}</td>
        <td class="num">${fmtCpf(a.cpf)}</td>
        <td class="d-none d-md-table-cell small">${esc(a.email)}<br><span class="text-secondary">${esc(a.telefone)}</span></td>
        <td>${esc(plano(a.plano)?.nome || "—")}</td>
        <td>${badge(a.status)}</td>
        <td><button class="btn btn-sm btn-outline-secondary" data-ver="${a.id}"><i class="bi bi-eye"></i> Ver</button></td>
      </tr>`).join("") : `<tr><td colspan="7" class="text-center text-secondary py-4">Nenhum aluno encontrado.</td></tr>`;
    $("#contAlunos").textContent = `${lista.length} de ${db.alunos.length} alunos`;
  }

  $("#tabelaAlunos").addEventListener("click", (e) => {
    const b = e.target.closest("[data-ver]");
    if (!b) return;
    const a = aluno(+b.dataset.ver);
    const pags = db.pagamentos.filter((p) => p.aluno === a.id).sort((x, y) => y.competencia.localeCompare(x.competencia));
    const p = plano(a.plano);
    $("#mdTitulo").textContent = a.nome;
    $("#mdCorpo").innerHTML = `
      <div class="row g-2 small mb-3">
        <div class="col-6 col-md-4"><span class="text-secondary">CPF</span><br>${fmtCpf(a.cpf)}</div>
        <div class="col-6 col-md-4"><span class="text-secondary">Nascimento</span><br>${dataBR(a.nascimento)}</div>
        <div class="col-6 col-md-4"><span class="text-secondary">Cadastro</span><br>${dataBR(a.cadastro)}</div>
        <div class="col-6 col-md-4"><span class="text-secondary">Plano</span><br>${esc(p?.nome)} (${brl(p?.valor || 0)})</div>
        <div class="col-6 col-md-4"><span class="text-secondary">Vencimento</span><br>todo dia ${a.vencimento}</div>
        <div class="col-6 col-md-4"><span class="text-secondary">Situação</span><br>${badge(a.status)}</div>
      </div>
      <h3 class="h6">Histórico financeiro</h3>
      <div class="table-responsive"><table class="table table-sm mb-0">
        <thead><tr><th>Competência</th><th>Vencimento</th><th class="text-end">Valor</th><th>Pago em</th><th>Situação</th></tr></thead>
        <tbody>${pags.map((x) => `<tr><td>${compBR(x.competencia)}</td><td>${dataBR(x.vencimento)}</td><td class="text-end">${brl(x.valor)}</td><td>${dataBR(x.pagamento)}</td><td>${badge(x.status)}</td></tr>`).join("")
          || `<tr><td colspan="5" class="text-secondary">Sem parcelas.</td></tr>`}</tbody>
      </table></div>`;
    bootstrap.Modal.getOrCreateInstance($("#modalAluno")).show();
  });

  ["#buscaAluno", "#filtroStatus", "#filtroPlano"].forEach((s) => $(s).addEventListener("input", renderAlunos));

  // máscaras
  $("#aCpf").addEventListener("input", (e) => {
    const d = soDig(e.target.value).slice(0, 11);
    e.target.value = d.replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  });
  $("#aTel").addEventListener("input", (e) => {
    const d = soDig(e.target.value).slice(0, 11);
    e.target.value = d.length > 6 ? `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}` : d.length > 2 ? `(${d.slice(0, 2)}) ${d.slice(2)}` : d;
  });

  $("#formAluno").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = e.target;
    const cpf = soDig($("#aCpf").value);
    const email = $("#aEmail").value.trim().toLowerCase();
    const nasc = $("#aNasc").value;

    // Mesmas regras do banco: CPF válido e UNIQUE, e-mail UNIQUE, idade mínima
    let msgCpf = "";
    if (!cpfValido(cpf)) msgCpf = "CPF inválido (dígitos verificadores não conferem).";
    else if (db.alunos.some((a) => a.cpf === cpf)) msgCpf = "CPF já cadastrado (restrição UNIQUE).";
    $("#aCpf").setCustomValidity(msgCpf); $("#aCpfMsg").textContent = msgCpf || "CPF inválido.";

    const dupEmail = db.alunos.some((a) => a.email.toLowerCase() === email);
    $("#aEmail").setCustomValidity(dupEmail ? "dup" : "");
    $("#aEmailMsg").textContent = dupEmail ? "E-mail já cadastrado (restrição UNIQUE)." : "E-mail inválido.";

    const idade = nasc ? (new Date(HOJE) - new Date(nasc)) / (365.25 * 864e5) : 0;
    $("#aNasc").setCustomValidity(nasc && idade < 14 ? "idade" : "");
    $("#aTel").setCustomValidity(soDig($("#aTel").value).length >= 10 ? "" : "tel");

    f.classList.add("was-validated");
    if (!f.checkValidity()) return;

    const id = Math.max(...db.alunos.map((a) => a.id)) + 1;
    const idPlano = +$("#aPlano").value;
    const venc = +$("#aVenc").value;
    db.alunos.push({ id, nome: $("#aNome").value.trim(), cpf, nascimento: nasc, sexo: $("#aSexo").value, email,
      telefone: $("#aTel").value, cadastro: HOJE, plano: idPlano, status: "ATIVA", vencimento: venc });
    // 1ª parcela paga no ato da matrícula (mesma regra da carga)
    db.pagamentos.push({ id: Math.max(...db.pagamentos.map((p) => p.id)) + 1, matricula: id, aluno: id,
      competencia: HOJE.slice(0, 7), vencimento: HOJE, valor: plano(idPlano).valor, pagamento: HOJE, forma: "PIX", status: "PAGO" });
    salvar();
    f.reset(); f.classList.remove("was-validated");
    bootstrap.Collapse.getOrCreateInstance($("#boxCadAluno")).hide();
    renderAlunos();
    aviso(`Aluno #${id} matriculado com sucesso.`);
  });

  // ------------------------------------------------------------ PLANOS
  function renderPlanos() {
    $("#listaPlanos").innerHTML = db.planos.map((p) => {
      const qtd = db.alunos.filter((a) => a.plano === p.id && a.status !== "CANCELADA").length;
      return `
      <div class="col-md-6">
        <div class="card card-plano shadow-sm h-100 ${p.ativo ? "" : "inativo"}">
          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-between align-items-start gap-2">
              <h2 class="h6 mb-1">${esc(p.nome)}</h2>
              ${p.ativo ? '<span class="badge text-bg-success">ATIVO</span>' : '<span class="badge text-bg-secondary">INATIVO</span>'}
            </div>
            <div class="preco">${brl(p.valor)}<small class="fs-6 text-secondary fw-normal">/mês</small></div>
            <p class="small text-secondary mb-2">${esc(p.descricao || "")}</p>
            <ul class="small list-unstyled mb-3">
              <li><i class="bi bi-calendar3"></i> Duração: ${p.duracao} ${p.duracao > 1 ? "meses" : "mês"}</li>
              <li><i class="bi bi-collection"></i> Até ${p.limite} modalidade(s)</li>
              <li><i class="bi bi-people"></i> ${qtd} matrícula(s) vigente(s)</li>
            </ul>
            <button class="btn btn-sm btn-outline-secondary mt-auto" data-toggle-plano="${p.id}">
              ${p.ativo ? '<i class="bi bi-pause-circle"></i> Desativar' : '<i class="bi bi-play-circle"></i> Reativar'}
            </button>
          </div>
        </div>
      </div>`;
    }).join("");
  }
  $("#listaPlanos").addEventListener("click", (e) => {
    const b = e.target.closest("[data-toggle-plano]");
    if (!b) return;
    const p = plano(+b.dataset.togglePlano);
    p.ativo = !p.ativo; // exclusão lógica: preserva matrículas antigas (FK RESTRICT)
    salvar(); renderPlanos();
    aviso(`Plano "${p.nome}" ${p.ativo ? "reativado" : "desativado"}.`);
  });
  $("#pLimite").addEventListener("input", (e) => ($("#pLimiteTxt").textContent = e.target.value));
  $("#formPlano").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = e.target;
    const nome = $("#pNome").value.trim();
    const dup = db.planos.some((p) => p.nome.toLowerCase() === nome.toLowerCase());
    $("#pNome").setCustomValidity(dup ? "dup" : "");
    $("#pNomeMsg").textContent = dup ? "Já existe um plano com esse nome (UNIQUE)." : "Informe um nome.";
    f.classList.add("was-validated");
    if (!f.checkValidity()) return;
    const id = Math.max(...db.planos.map((p) => p.id)) + 1;
    db.planos.push({ id, nome, descricao: $("#pDesc").value.trim(), duracao: +$("#pDur").value,
      valor: +(+$("#pValor").value).toFixed(2), limite: +$("#pLimite").value, ativo: true });
    salvar();
    f.reset(); f.classList.remove("was-validated"); $("#pLimiteTxt").textContent = "2";
    renderPlanos();
    aviso(`Plano "${nome}" cadastrado.`);
  });

  // ------------------------------------------------------------ PAGAMENTOS
  function pagamentosFiltrados() {
    const de = $("#fDe").value, ate = $("#fAte").value;
    const st = $("#fStatus").value, fo = $("#fForma").value;
    const nome = $("#fAluno").value.trim().toLowerCase();
    return db.pagamentos.filter((p) =>
      (!de || p.competencia >= de) && (!ate || p.competencia <= ate) &&
      (!st || p.status === st) && (!fo || p.forma === fo) &&
      (!nome || aluno(p.aluno).nome.toLowerCase().includes(nome)))
      .sort((a, b) => b.competencia.localeCompare(a.competencia) || aluno(a.aluno).nome.localeCompare(aluno(b.aluno).nome, "pt-BR"));
  }

  function renderPagamentos() {
    const lista = pagamentosFiltrados();
    const soma = (s) => lista.filter((p) => p.status === s).reduce((t, p) => t + p.valor, 0);
    const qtd = (s) => lista.filter((p) => p.status === s).length;
    const cards = [
      ["Recebido", soma("PAGO"), qtd("PAGO"), "success"],
      ["Pendente", soma("PENDENTE"), qtd("PENDENTE"), "info"],
      ["Em atraso", soma("ATRASADO"), qtd("ATRASADO"), "danger"],
      ["Total do filtro", lista.reduce((t, p) => t + p.valor, 0), lista.length, "dark"],
    ];
    $("#resumoPag").innerHTML = cards.map(([r, v, n, c]) => `
      <div class="col-6 col-lg-3"><div class="card shadow-sm border-start border-4 border-${c} h-100"><div class="card-body py-2">
        <div class="small text-secondary">${r}</div><div class="fs-5 fw-bold num">${brl(v)}</div><div class="small text-secondary">${n} parcela(s)</div>
      </div></div></div>`).join("");

    $("#tabelaPag").innerHTML = lista.length ? lista.map((p) => `
      <tr>
        <td class="text-secondary">${p.id}</td>
        <td>${esc(aluno(p.aluno).nome)}</td>
        <td>${compBR(p.competencia)}</td>
        <td>${dataBR(p.vencimento)}</td>
        <td class="text-end">${brl(p.valor)}</td>
        <td>${dataBR(p.pagamento)}</td>
        <td>${p.forma ? formaTxt[p.forma] : "—"}</td>
        <td>${badge(p.status)}</td>
        <td class="no-print">${["PENDENTE", "ATRASADO"].includes(p.status) && aluno(p.aluno).status !== "CANCELADA"
          ? `<button class="btn btn-sm btn-outline-success" data-pagar="${p.id}"><i class="bi bi-cash"></i> Receber</button>` : ""}</td>
      </tr>`).join("") : `<tr><td colspan="9" class="text-center text-secondary py-4">Nenhum pagamento no filtro.</td></tr>`;
  }
  ["#fDe", "#fAte", "#fStatus", "#fForma", "#fAluno"].forEach((s) => $(s).addEventListener("input", renderPagamentos));

  let pagamentoAlvo = null;
  $("#tabelaPag").addEventListener("click", (e) => {
    const b = e.target.closest("[data-pagar]");
    if (!b) return;
    pagamentoAlvo = db.pagamentos.find((p) => p.id === +b.dataset.pagar);
    $("#pgInfo").innerHTML = `<strong>${esc(aluno(pagamentoAlvo.aluno).nome)}</strong><br>Parcela ${compBR(pagamentoAlvo.competencia)} — ${brl(pagamentoAlvo.valor)} ${badge(pagamentoAlvo.status)}`;
    bootstrap.Modal.getOrCreateInstance($("#modalPagar")).show();
  });

  // Simula sp_registrar_pagamento: trabalha numa cópia e só "faz commit" se tudo der certo
  $("#formPagar").addEventListener("submit", (e) => {
    e.preventDefault();
    const copia = structuredClone(db); // START TRANSACTION
    try {
      const p = copia.pagamentos.find((x) => x.id === pagamentoAlvo.id);
      if (!["PENDENTE", "ATRASADO"].includes(p.status)) throw new Error("Parcela já quitada ou cancelada.");
      p.status = "PAGO"; p.pagamento = HOJE; p.forma = $("#pgForma").value;
      const a = copia.alunos.find((x) => x.id === p.aluno);
      const restantes = copia.pagamentos.filter((x) => x.aluno === a.id && x.status === "ATRASADO").length;
      let msg = `Pagamento #${p.id} registrado.`;
      if (a.status === "SUSPENSA" && restantes === 0) { a.status = "ATIVA"; msg += " Matrícula reativada!"; }
      else if (a.status === "SUSPENSA") msg += ` Ainda há ${restantes} parcela(s) em atraso.`;
      db = copia; salvar();                // COMMIT
      bootstrap.Modal.getInstance($("#modalPagar")).hide();
      renderPagamentos(); aviso(msg);
    } catch (err) {
      aviso("ROLLBACK: " + err.message);   // cópia descartada
    }
  });

  $("#btnCsv").addEventListener("click", () => {
    const linhas = [["id", "aluno", "competencia", "vencimento", "valor", "data_pagamento", "forma", "status"]]
      .concat(pagamentosFiltrados().map((p) => [p.id, aluno(p.aluno).nome, p.competencia, p.vencimento, p.valor.toFixed(2).replace(".", ","), p.pagamento || "", p.forma || "", p.status]));
    const csv = linhas.map((l) => l.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(";")).join("\r\n");
    const url = URL.createObjectURL(new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8" }));
    const link = Object.assign(document.createElement("a"), { href: url, download: "relatorio_pagamentos.csv" });
    link.click(); URL.revokeObjectURL(url);
  });

  // ------------------------------------------------------------ início
  $("#btnReset").addEventListener("click", () => {
    try { localStorage.removeItem(CHAVE); } catch (e) { /* ignora */ }
    db = structuredClone(window.DADOS_INICIAIS);
    mostrar(document.querySelector(".nav-link.active")?.dataset.secao || "painel");
    aviso("Dados de exemplo restaurados.");
  });

  const render = { painel: renderPainel, alunos: renderAlunos, planos: renderPlanos, pagamentos: renderPagamentos };
  $("#dataRef").textContent = dataBR(HOJE);
  mostrar("painel");
})();
