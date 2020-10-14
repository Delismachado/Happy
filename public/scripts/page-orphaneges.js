const map = L.map('mapid').setView([-25.496052, -49.2070315], 16);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {

    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGVybGltYWNoYWRvIiwiYSI6ImNrZzhqZndwNzBod2YzMHBnNnpzY204OW0ifQ.KahS8uNyC9OkV4ZHJi1sTg'
}).addTo(map);

const icon = L.icon({
    iconUrl: "../../public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanege.html?id=1" class="choose-orphanege"> <img src="../../public/images/arrow-white.svg"></a>')

L
    .marker([-25.496052, -49.2070315], { icon })
    .addTo(map)
    .bindPopup(popup)