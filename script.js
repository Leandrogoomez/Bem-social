// Base de dados com locais específicos por cidade
const dadosLocais = {
  belem: {
    alimentacao: { nome: "🍲 Cozinha Comunitária Ver-o-Peso", end: "Praça do Relógio, Centro, Belém - PA", tel: "0800123456" },
    abrigo: { nome: "🏠 Albergue Municipal de Belém", end: "Rua Ó de Almeida, 456, Belém - PA", tel: "0800654321" },
    higiene: { nome: "🧼 Centro POP Belém", end: "Av. Marechal Hermes, 789, Belém - PA", tel: "0800777888" },
    documentos: { nome: "💳 CRAS Icoaraci", end: "Rua Manoel Barata, 50, Belém - PA", tel: "0800999000" }
  },
  rio: {
    alimentacao: { nome: "🍲 Prato Feito Carioca - Lapa", end: "Rua da Lapa, 100, Rio de Janeiro - RJ", tel: "0800123456" },
    abrigo: { nome: "🏠 Abrigo Municipal Stella Maris", end: "Av. Brasil, 12000, Rio de Janeiro - RJ", tel: "0800654321" },
    higiene: { nome: "🧼 Centro POP Centro-RJ", end: "Rua Dom Gerardo, 40, Rio de Janeiro - RJ", tel: "0800777888" },
    documentos: { nome: "💳 CRAS Capitão Clodoaldo", end: "Rua Afonso Cavalcanti, 150, Rio de Janeiro - RJ", tel: "0800999000" }
  },
  sp: {
    alimentacao: { nome: "🍲 Bom Prato - Sé", end: "Rua do Carmo, 56, São Paulo - SP", tel: "0800123456" },
    abrigo: { nome: "🏠 Centro de Acolhida Zaki Narchi", end: "Av. Zaki Narchi, 600, São Paulo - SP", tel: "0800654321" },
    higiene: { nome: "🧼 Centro POP Santa Cecília", end: "Rua Borba Gato, 120, São Paulo - SP", tel: "0800777888" },
    documentos: { nome: "💳 CRAS Sé", end: "Rua Álvaro de Carvalho, 48, São Paulo - SP", tel: "0800999000" }
  }
};

// Função para obter a cidade selecionada no menu
function obterCidadeAtual() {
  const seletor = document.getElementById("seletorCidade");
  return seletor ? seletor.value : "belem";
}

// Função para exibir o card com o mapa funcional da cidade escolhida
function renderizarCard(tipo) {
  const cidade = obterCidadeAtual();
  const dados = dadosLocais[cidade][tipo];
  const resultado = document.getElementById("resultado");

  const urlMapa = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dados.end)}`;

  resultado.innerHTML = `
    <div class="card-item">
      <h3>${dados.nome}</h3>
      <p><strong>Endereço:</strong> ${dados.end}</p>
      <div class="acoes-card">
        <a href="${urlMapa}" target="_blank" class="btn-acao btn-mapa">📍 Ver no Google Maps</a>
        <a href="tel:${dados.tel}" class="btn-acao btn-ligar">📞 Ligar Agora</a>
      </div>
    </div>
  `;
}

// Funções chamadas pelos botões do HTML
function mostrarAlimentacao() { renderizarCard("alimentacao"); }
function mostrarAbrigo() { renderizarCard("abrigo"); }
function mostrarHigiene() { renderizarCard("higiene"); }
function mostrarDocumentos() { renderizarCard("documentos"); }

function mostrarAjuda() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <div class="card-item">
      <h3>🆘 Defesa Civil / Plantão Social</h3>
      <p><strong>Atendimento:</strong> Emergencial 24h em todas as cidades</p>
      <div class="acoes-card">
        <a href="tel:199" class="btn-acao btn-ligar">📞 Ligar para 199</a>
      </div>
    </div>
  `;
}

// Função para copiar a chave PIX
function copiarPix() {
  const chavePix = "ee5c14b0-f988-470b-a61b-7ef660262183";
  navigator.clipboard.writeText(chavePix).then(() => {
    alert("Chave PIX copiada com sucesso!");
  }).catch(err => {
    alert("Erro ao copiar. A chave é: " + chavePix);
  });
}

// Modo Escuro
function alternarModoEscuro() {
  document.body.classList.toggle("dark-mode");
              }
