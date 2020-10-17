const map = L.map('mapid').setView([-25.496052, -49.2070315], 16);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {

    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGVybGltYWNoYWRvIiwiYSI6ImNrZzhqZndwNzBod2YzMHBnNnpzY204OW0ifQ.KahS8uNyC9OkV4ZHJi1sTg'
}).addTo(map);

const icon = L.icon({
    iconUrl: ".././images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],

})

let marker;

map.on('click', (event) => {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    marker && map.removeLayer(marker)

    marker = L.marker([lat, lng], { icon })
        .addTo(map)
})

// add fotos

function addPhotoField() {
    // pegar o container de images
    const container = document.querySelector('#images')
        // pegar o container e duplicar
    const fieldsContainer = document.querySelectorAll('.new-upload')
        // fazer o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
        //verificar se campo vazio
    const input = newFieldContainer.children[0]

    if (input.value == "") {
        return
    }

    //limpar campo
    input.value = ""

    // add clone
    container.appendChild(newFieldContainer)

}

function deleteField() {

    const span = Event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer <= 1) {
        //limpar campo
        span.parentNode.children[0].value = ""
        return
    }
    //deletar o campo
    span.parentNode.remove();

}

//selecionar sim ou não

function toggleSelect(Event) {
    //retirar a class active
    document.querySelectorAll('.button-select button')
        .forEach(function(button) {
            button.classList.remove('active')
        })


    //colocar class active
    const button = Event.currentTarget
    button.classList.add('active')

    //atualizar input
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value

}