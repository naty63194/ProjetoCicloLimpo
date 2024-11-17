document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("cadastroColetivaForm");

  function autoFillForm() {
    document.getElementById("nomeFantasia").value = "Cooperativa Verde";
    document.getElementById("cnpj").value = "12345678000199";
    document.getElementById("ddd").value = "91";
    document.getElementById("telefone").value = "12345678";
    document.getElementById("email").value = "contato@cooperativaverde.com";
    document.getElementById("senha").value = "senha123";
    document.getElementById("confirmarSenha").value = "senha123";
  }

  autoFillForm();

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "http://127.0.0.1:3000/Coletiva/cadastroADM.html";
  });

  function addPhoneField() {
    const phoneContainer = document.querySelector(".phone-container");

    const newPhoneField = document.createElement("label");
    newPhoneField.innerHTML = `
      <input type="tel" class="input" required pattern="\\d{8,10}">
      <span class="placeholder">Telefone</span>
    `;
    
    phoneContainer.appendChild(newPhoneField);

    document.querySelector(".add-phone").style.display = "none";
  }

  window.addPhoneField = addPhoneField;
});