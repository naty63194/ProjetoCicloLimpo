function removeCard(button) {
    const card = button.closest('.card'); // Encontra o cartão mais próximo
    card.style.transition = "opacity 0.3s, height 0.3s"; // Transição suave
    card.style.opacity = "0"; // Some gradualmente
    card.style.height = "0"; // Encolhe o cartão

    setTimeout(() => card.remove(), 300); // Remove o cartão após a animação
}