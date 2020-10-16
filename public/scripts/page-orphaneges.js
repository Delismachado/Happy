const { orphanege } = require("../../src/pages");

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
    popupAnchor: [170, 2]
})


function addMarker({ id, name, lat, lng, }) {
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(` ${name} <a href="/orphanege?id=${id}"><img src=".././images/arrow-white.svg"></a>`)

    L
        .marker([lat, lng], { icon })
        .addTo(map)
        .bindPopup(popup)

}

const orphanegesSpan = document.querySelectorAll('.orphaneges span')
orphanegesSpan.forEach(span => {
    const orphanege = {
        id: span.dataset.id,
        name = span.dataset.name,
        lat = span.dataset.lat,
        lng = span.dataset.lng
    }

    addMarker(orphanege)
})