console.log("Yes this runs")

// 37.5519° N, 126.9918° E

let map = L.map("map", {
  center: [37.5519, 126.9918],
  zoom: 8
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
