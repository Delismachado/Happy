const { orphanege } = require("../../src/pages");

const options = {
    draggin: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
const map = L.map('mapid', options).setView([-25.496052, -49.2070315], 16);

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
    popupAnchor: [170, 2]
})


L
    .marker([-25.496052, -49.2070315], { icon })
    .addTo(map)


function selectImage(event) {
    const button = event.currentTarget

    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanege-details > img")

    imageContainer.src = image.src

    button.classList.add('active')
}