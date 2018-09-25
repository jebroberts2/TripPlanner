const mapboxgl = require('mapbox-gl')
mapboxgl.accessToken = 'pk.eyJ1IjoiamVicm9iZXJ0czIiLCJhIjoiY2ptaTgzejJ6MDE2OTN3bGZremx5b2dzMiJ9.ryHjzqL3TQ4524rpBnJH4A'
const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705],
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v10"
});