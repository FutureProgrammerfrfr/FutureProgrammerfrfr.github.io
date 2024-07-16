console.log("Yes this runs")

// 37.5314° N, 126.9799° E

let map = L.map("map", {
  center: [37.5314, 126.9799],
  zoom: 15
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marker = L.marker(
  [37.5314, 126.9799], {
    title: "South Korea, Seoul"
  }
).bindPopup(`<h2>Welcome to SEOUL!</h2> <p>Here's a video of Seoul's streets!</p> <iframe width="320" height="320" src="https://www.youtube.com/embed/YAZpV7uFCQ8?si=wMR3eChxZdGtJJkG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
  .addTo(map);

// 37.551170, 126.988228 N Seoul Tower

L.circle([37.551170, 126.988228], {
        fillColor: "blue",
        color: "red",
        radius: 500
}).bindPopup(`<h1>Here's a tour of N Seoul Tower!</h1> <iframe width="315" height="320" src="https://www.youtube.com/embed/MztdCVDzeH0?si=Xq0115afwE0zek0K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
  .addTo(map); 


