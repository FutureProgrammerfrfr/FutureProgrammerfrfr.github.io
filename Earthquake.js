console.log("Yes this works")

let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

d3.json(url).then(
    function(data) 
    {
        console.log(data);
    }
);

let map = L.map("map", {
    center: [37.89, -35.71],
    zoom: 5 
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
