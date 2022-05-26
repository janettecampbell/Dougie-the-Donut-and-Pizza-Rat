fetch("https://data.cityofnewyork.us/resource/erm2-nwe9.json")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));
