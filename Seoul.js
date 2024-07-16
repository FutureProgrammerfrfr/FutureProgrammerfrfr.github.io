console.log("Yes this runs")

// 37.532600, 127.024612.

let map = L.map("map", {
  center: [37.532600, 127.024612],
  zoom: 15
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
