const bronx = document.querySelector("#bronx");
const brooklyn = document.querySelector("#brooklyn");
const manhattan = document.querySelector("#manhattan");
const queens = document.querySelector("#queens");
const statenIsland = document.querySelector("#staten-island");

let limit = 10;
let borough = "BROOKLYN";

bronx.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(
    `https://data.cityofnewyork.us/resource/erm2-nwe9.json?&agency=NYPD&borough=BRONX&$limit=${limit}`
  )
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
});

brooklyn.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(
    `https://data.cityofnewyork.us/resource/erm2-nwe9.json?&agency=NYPD&borough=BROOKLYN&$limit=${limit}`
  )
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
});

manhattan.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(
    `https://data.cityofnewyork.us/resource/erm2-nwe9.json?&agency=NYPD&borough=MANHATTAN&$limit=${limit}`
  )
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
});

queens.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(
    `https://data.cityofnewyork.us/resource/erm2-nwe9.json?&agency=NYPD&borough=QUEENS&$limit=${limit}`
  )
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
});

statenIsland.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(
    `https://data.cityofnewyork.us/resource/erm2-nwe9.json?&agency=NYPD&borough=STATEN%20ISLAND&$limit=${limit}`
  )
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
});

// fetch(
//   "https://data.cityofnewyork.us/resource/erm2-nwe9.json?&agency=NYPD&borough=" +
//     borough +
//     "&$limit=" +
//     limit
// )
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.log(error));
