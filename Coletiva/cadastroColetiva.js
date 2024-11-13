document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("cadastroColetivaForm");

  // Função de preenchimento automático usando IDs dos campos
  function autoFillForm() {
    document.getElementById("nomeFantasia").value = "Cooperativa Verde";
    document.getElementById("cnpj").value = "12345678000199";
    document.getElementById("ddd").value = "91";
    document.getElementById("telefone").value = "12345678";
    document.getElementById("email").value = "contato@cooperativaverde.com";
    document.getElementById("senha").value = "senha123";
    document.getElementById("confirmarSenha").value = "senha123";
  }

  // Chama a função de preenchimento automático ao carregar a página
  autoFillForm();

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Redireciona para a página HTML de sucesso
    window.location.href = "http://127.0.0.1:3000/Coletiva/cadastroADM.html";
  });

  // Função para adicionar um novo campo de telefone e esconder o botão "+"
  function addPhoneField() {
    const phoneContainer = document.querySelector(".phone-container");

    const newPhoneField = document.createElement("label");
    newPhoneField.innerHTML = `
      <input type="tel" class="input" required pattern="\\d{8,10}">
      <span class="placeholder">Telefone</span>
    `;
    
    phoneContainer.appendChild(newPhoneField);

    // Esconde o botão após adicionar o campo
    document.querySelector(".add-phone").style.display = "none";
  }

  // Expõe a função para o botão "+"
  window.addPhoneField = addPhoneField;
});