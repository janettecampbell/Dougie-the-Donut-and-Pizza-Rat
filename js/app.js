let limit = 10;
let borough = "Brooklyn";

const bronx = document.querySelector("#bronx");
const brooklyn = document.querySelector("#brooklyn");
const manhattan = document.querySelector("#manhattan");
const queens = document.querySelector("#queens");
const statenIsland = document.querySelector("#staten island");

bronx.addEventListener("click", () => {
  "https://data.cityofnewyork.us/resource/erm2-nwe9.json?&borough=" 
  
  //+
    //bronx +
    "bronx" +
    limit;
});

fetch(
  "https://data.cityofnewyork.us/resource/erm2-nwe9.json?&borough=" +
    borough +
    "&$limit=" +
    limit
)
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));
