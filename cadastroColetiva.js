document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");
    const dddInput = form.querySelector("input[placeholder='DDD']");
    const telefoneInput = form.querySelector("input[placeholder='Telefone Fixo']");
    const cnpjInput = form.querySelector("input[placeholder='CNPJ']");
    const emailInput = form.querySelector("input[type='email']");
    const senhaInput = form.querySelector("input[placeholder='Criar Senha']");
    const confirmarSenhaInput = form.querySelector("input[placeholder='Confirmar Senha']");
  
    form.addEventListener("submit", function (event) {
      let isValid = true;
      const dddRegex = /^\d{2}$/;
      const telefoneRegex = /^\d{8,9}$/;
      const cnpjRegex = /^\d{14}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      // Validação DDD
      if (!dddRegex.test(dddInput.value)) {
        alert("DDD inválido. Digite 2 dígitos.");
        isValid = false;
      }
  
      // Validação Telefone
      if (!telefoneRegex.test(telefoneInput.value)) {
        alert("Telefone inválido. Digite 9 dígitos.");
        isValid = false;
      }
  
      // Validação CNPJ
      if (!cnpjRegex.test(cnpjInput.value)) {
        alert("CNPJ inválido. Deve ter 14 dígitos.");
        isValid = false;
      }
  
      // Validação Email
      if (!emailRegex.test(emailInput.value)) {
        alert("Email inválido. Digite um formato correto.");
        isValid = false;
      }
  
      // Validação Senhas
      if (senhaInput.value !== confirmarSenhaInput.value) {
        alert("As senhas não coincidem.");
        isValid = false;
      }
  
      if (!isValid) {
        event.preventDefault(); // Impede o envio do formulário se houver erros
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".input");
  
    inputs.forEach(input => {
      input.addEventListener("input", () => {
        if (input.checkValidity()) {
          input.style.borderColor = "rgba(46, 139, 87)"; // Verde se válido
        } else {
          input.style.borderColor = "red"; // Vermelho se inválido
        }
      });
    });
  });