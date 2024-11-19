    // Função para abrir/fechar o menu lateral
    function toggleMenu() {
        const sideMenu = document.getElementById("sideMenu");
        sideMenu.classList.toggle("active");
    }
// Dados simulados
const dadosSimulados = {
    coleta: {
        material: "Papelão",
        pesoEstimado: "Menos de 3kg"
    },
    morador: {
        nome: "João da Silva",
        endereco: "Rua Verde, 123",
        contato: "(91) 98765-4321"
    },
    chat: [
        { tipo: "received", mensagem: "Olá, estou chegando para a coleta!" },
        { tipo: "sent", mensagem: "Tudo bem, estou te aguardando." }
    ]
};

// Simular backend com atraso
function carregarDadosSimulados() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(dadosSimulados), 1500);
    });
}

// Atualizar dados no DOM
async function preencherDados() {
    const dados = await carregarDadosSimulados();

    document.querySelector("#info-coleta").innerHTML = `
        <h3>Informações da Coleta</h3>
        <p><strong>Material:</strong> ${dados.coleta.material}</p>
        <p><strong>Estimativa de Peso:</strong> ${dados.coleta.pesoEstimado}</p>
    `;

    document.querySelector("#info-morador").innerHTML = `
        <h3>Informações do Morador</h3>
        <p><strong>Nome:</strong> ${dados.morador.nome}</p>
        <p><strong>Endereço:</strong> ${dados.morador.endereco}</p>
        <p><strong>Contato:</strong> ${dados.morador.contato}</p>
    `;

    const chatBox = document.querySelector("#chat-box");
    chatBox.innerHTML = "";
    dados.chat.forEach(({ tipo, mensagem }) => {
        const div = document.createElement("div");
        div.className = tipo;
        div.innerText = mensagem;
        chatBox.appendChild(div);
    });
}

// Inicializar o mapa
function inicializarMapa() {
    const map = L.map("map").setView([-1.455833, -48.503889], 13); // Belém - Pará
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
}

// Inicializar aplicação
function inicializar() {
    inicializarMapa();
    preencherDados();
}

window.onload = inicializar;