document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cadastroColetorForm");
  
    function autoFillForm() {
      document.getElementById("nomeColetor").value = "Carlos Silva";
      document.getElementById("cpfColetor").value = "12345678901";
      document.getElementById("rgColetor").value = "MG123456";
      document.getElementById("dddColetor").value = "11";
      document.getElementById("telefoneColetor").value = "987654321";
      document.getElementById("emailColetor").value = "carlos.silva@gmail.com";
      document.getElementById("senhaColetor").value = "senha123";
      document.getElementById("confirmarSenhaColetor").value = "senha123";
    }
  
    
    autoFillForm();

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        window.location.href = "http://127.0.0.1:3000/Coletiva/homeADM.html";
      });
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Validação simples (pode ser expandida)
      if (document.getElementById("senhaColetor").value !== document.getElementById("confirmarSenhaColetor").value) {
        alert("As senhas não coincidem.");
        return;
      }
  
      // Geração do número do coletor
      const numeroGerado = generateNumber();
  
      
    });
  });
  
  // Função para adicionar novos campos de telefone (se necessário)
  function addPhoneField() {
    const phoneContainer = document.querySelector(".phone-container");
    const newField = document.createElement("div");
    newField.classList.add("flex");
  
    newField.innerHTML = `
      <label class="ddd">
        <input type="text" class="input" required pattern="\\d{2}">
        <span class="placeholder">DDD</span>
      </label>
      <label class="telefone">
        <input type="tel" class="input" required pattern="\\d{8,10}">
        <span class="placeholder">Telefone</span>
      </label>
    `;
    
    phoneContainer.appendChild(newField);
  }
