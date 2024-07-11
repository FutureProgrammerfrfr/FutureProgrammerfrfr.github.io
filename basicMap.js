console.log("Hello World!")
console.log("JK JS FIle was loaded")

// 35.217665 W, 80.31473 N -> 35.217665, -80.31473

let map = L.map("map", {
  center: [35.217665, -80.31473],
  zoom: 15
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
