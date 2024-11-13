const agreeTerms = document.getElementById('agreeTerms');
    const submitBtn = document.getElementById('submitBtn');

    agreeTerms.addEventListener('change', function() {
      submitBtn.disabled = !agreeTerms.checked;
    });

    submitBtn.addEventListener('click', function() {
      alert('Cadastro concluído com sucesso!');
    });