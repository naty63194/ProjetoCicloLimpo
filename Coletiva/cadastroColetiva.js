document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("cadastroColetivaForm");

  // Captura dos elementos de entrada
  const dddInput = document.getElementById("ddd");
  const telefoneInput = document.getElementById("telefone");
  const cnpjInput = document.getElementById("cnpj");
  const emailInput = document.getElementById("email");
  const senhaInput = document.getElementById("senha");
  const confirmarSenhaInput = document.getElementById("confirmarSenha");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true; // Variável para controlar a validade geral

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
      alert("Telefone inválido. Digite 8 ou 9 dígitos.");
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
  
    if (isValid) {
      // Redireciona após o envio bem-sucedido
      window.location.href = "/cadastroADM";
    }
  });

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