console.log("Yes this runs")

// 37.532600, 127.024612.

let map = L.map("map", {
  center: [37.532600, 127.024612],
  zoom: 15
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marker = L.marker(
  [37.532600, 127.024612], {
    title: "South Korea, Seoul"
  }
).bindPopup(`<h2>Welcom to SEOUL!</h2> <iframe width="320" height="320" src="https://www.youtube.com/embed/YAZpV7uFCQ8?si=wMR3eChxZdGtJJkG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
  .addTo(map);
