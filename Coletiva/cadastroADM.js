document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("cadastroADMForm");

  // Função de preenchimento automático usando IDs dos campos
  function autoFillForm() {
    document.getElementById("nomeADM").value = "NATALIA MACEDO";
    document.getElementById("cpfADM").value = "58471526489";
    document.getElementById("dddADM").value = "91";
    document.getElementById("telefoneADM").value = "123458795";
    document.getElementById("emailADM").value = "contato@cooperativaverde3.com";
    document.getElementById("senhaADM").value = "senha123";
    document.getElementById("confirmarSenhaADM").value = "senha123";
  }

  // Chama a função de preenchimento automático ao carregar a página
  autoFillForm();

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Redireciona para a página HTML de sucesso
    window.location.href = "http://127.0.0.1:3000/Coletiva/termosDados.html";
  });

  // Função para adicionar um novo campo de telefone e esconder o botão "+"
  window.addPhoneField = function () {
    const phoneContainer = document.querySelector(".phone-container");

    const newPhoneField = document.createElement("label");
    newPhoneField.innerHTML = `
      <input type="tel" class="input" required pattern="\\d{8,10}">
      <span class="placeholder">Telefone</span>
    `;

    phoneContainer.appendChild(newPhoneField);

    // Esconde o botão após adicionar o campo
    document.querySelector(".add-phone").style.display = "none";
  };
});