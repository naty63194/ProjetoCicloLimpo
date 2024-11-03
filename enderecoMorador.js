let map;
let geocoder;

function initMap() {
    // Inicializa o mapa centrado em São Paulo
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -23.5505, lng: -46.6333 },
        zoom: 13,
    });
    geocoder = new google.maps.Geocoder();
}

function searchAddress() {
    const address = document.getElementById("address").value;

    if (!address) {
        alert("Por favor, insira um endereço.");
        return;
    }

    geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK") {
            map.setCenter(results[0].geometry.location);
            new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
            });
        } else {
            alert("Endereço não encontrado: " + status);
        }
    });
}
