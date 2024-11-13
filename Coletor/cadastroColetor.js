document.getElementById("collectorForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    const collectorId = document.getElementById("collectorId").value.trim();

    // Exemplo de validação simples: checar se o ID tem pelo menos 3 caracteres
    if (collectorId.length >= 3) {
        // Redireciona para a próxima página ao validar o ID com sucesso
        window.location.href = "homeColetor.html"; // Verifique se o caminho está correto
    } else {
        alert("Por favor, insira um ID válido com pelo menos 3 caracteres.");
    }
});
