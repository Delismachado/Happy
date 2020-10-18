const options = {
    draggin: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const lat = document.querySelector("span[data-lat]").dataset.lat;
const lng = document.querySelector("span[data-lng]").dataset.lng;

const map = L.map('mapid', options).setView([lat, lng], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

const icon = L.icon({
    iconUrl: ".././images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})




L
    .marker([lat, lng], { icon })
    .addTo(map)


function selectImage(event) {
    const button = event.currentTarget;
    const buttons = document.querySelectorAll(".images button"); /* como no css! */

    buttons.forEach(removeClass);

    function removeClass(button) {
        button.classList.remove("active");
    }
    button.classList.add("active");

    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanege-details > img");
    imageContainer.src = image.src;
}