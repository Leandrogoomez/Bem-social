// Função para copiar a chave PIX
function copiarPix() {
  const chavePix = "ee5c14b0-f988-470b-a61b-7ef660262183";
  navigator.clipboard.writeText(chavePix).then(() => {
    alert("Chave PIX copiada com sucesso!");
  }).catch(err => {
    alert("Erro ao copiar. A chave é: " + chavePix);
  });
}

// Função para Alternar Modo Escuro
function alternarModoEscuro() {
  document.body.classList.toggle("dark-mode");
}

// Funções dos botões com Links de Mapa e Ligação
function mostrarAlimentacao() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <div class="card-item">
      <h3>🍲 Cozinha Comunitária</h3>
      <p><strong>Endereço:</strong> Rua Principal, 123</p>
      <p><strong>Horário:</strong> Almoço das 11h às 13h</p>
      <div class="acoes-card">
        <a href="https://www.google.com/maps/search/?api=1&query=Rua+Principal+123" target="_blank" class="btn-acao btn-mapa">📍 Ver no Google Maps</a>
        <a href="tel:0800123456" class="btn-acao btn-ligar">📞 Ligar Agora</a>
      </div>
    </div>
  `;
}

function mostrarAbrigo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <div class="card-item">
      <h3>🏠 Albergue Municipal</h3>
      <p><strong>Endereço:</strong> Av. Central, 456</p>
      <p><strong>Atendimento:</strong> 24 horas</p>
      <div class="acoes-card">
        <a href="https://www.google.com/maps/search/?api=1&query=Av.+Central+456" target="_blank" class="btn-acao btn-mapa">📍 Ver no Google Maps</a>
        <a href="tel:0800654321" class="btn-acao btn-ligar">📞 Ligar Agora</a>
      </div>
    </div>
  `;
}

function mostrarHigiene() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <div class="card-item">
      <h3>🧼 Centro POP</h3>
      <p><strong>Endereço:</strong> Rua da Solidariedade, 789</p>
      <p><strong>Serviços:</strong> Banhos, lavanderia e orientação</p>
      <div class="acoes-card">
        <a href="https://www.google.com/maps/search/?api=1&query=Rua+da+Solidariedade+789" target="_blank" class="btn-acao btn-mapa">📍 Ver no Google Maps</a>
        <a href="tel:0800777888" class="btn-acao btn-ligar">📞 Ligar Agora</a>
      </div>
    </div>
  `;
}

function mostrarDocumentos() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <div class="card-item">
      <h3>💳 CRAS - Unidade Centro</h3>
      <p><strong>Endereço:</strong> Praça da Matriz, 50</p>
      <p><strong>Serviços:</strong> Emissão de documentos e Cadastro Único</p>
      <div class="acoes-card">
        <a href="https://www.google.com/maps/search/?api=1&query=Praca+da+Matriz+50" target="_blank" class="btn-acao btn-mapa">📍 Ver no Google Maps</a>
        <a href="tel:0800999000" class="btn-acao btn-ligar">📞 Ligar Agora</a>
      </div>
    </div>
  `;
}

function mostrarAjuda() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <div class="card-item">
      <h3>🆘 Defesa Civil / Plantão Social</h3>
      <p><strong>Telefone:</strong> 199</p>
      <p><strong>Atendimento:</strong> Emergencial 24h</p>
      <div class="acoes-card">
        <a href="tel:199" class="btn-acao btn-ligar">📞 Ligar para 199</a>
      </div>
    </div>
  `;
}
