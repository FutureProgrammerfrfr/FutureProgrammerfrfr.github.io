console.log("Hello World!")
console.log("JK JS FIle was loaded")

// 35.2176665 W, 80.831473 N -> 35.2176665, -80.831473

let map = L.map("map", {
  center: [35.2176665, -80.831473],
  zoom: 15
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marker = L.marker(
  [35.2176665, -80.831473], {
    title: "CPCC Central Campus"
  }
).bindPopup("<h1>Hello from CPCC!</h1> '<iframe width="560" height="315" src="https://www.youtube.com/embed/SIOicrto1yw?si=ourVtnJpfmKsnnwX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'")
  .addTo(map);

