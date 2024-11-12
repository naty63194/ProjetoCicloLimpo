async function searchAddress() {
    const cep = document.getElementById("address").value.trim();

    if (!cep || cep.length !== 8 || isNaN(cep)) {
        alert("Por favor, insira um CEP válido de 8 dígitos.");
        return;
    }

    try {
        // Chamada à API ViaCEP para obter o endereço
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
            alert("CEP não encontrado.");
            return;
        }

        const address = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}, Brasil`;
        
        // Atualiza o mapa com o endereço encontrado
        updateMap(address);
    } catch (error) {
        console.error("Erro ao buscar o endereço:", error);
        alert("Não foi possível buscar o endereço. Tente novamente mais tarde.");
    }
}

function updateMap(address) {
    // Atualiza o iframe com o novo endereço no Google Maps usando a chave de API fornecida
    const mapFrame = document.getElementById("map-frame");
    const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyC_RWfhWNQPdEq7BkF8dRVU67mavPCoZvo&q=${encodeURIComponent(address)}`;
    mapFrame.src = googleMapsUrl;
}
