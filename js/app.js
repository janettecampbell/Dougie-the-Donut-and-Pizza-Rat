const bronx = document.querySelector("#bronx");
const brooklyn = document.querySelector("#brooklyn");
const manhattan = document.querySelector("#manhattan");
const queens = document.querySelector("#queens");
const statenIsland = document.querySelector("#staten-island");
const limit = document.getElementById("limit");
const result = document.querySelector(".result");

bronx.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(
    `https://data.cityofnewyork.us/resource/erm2-nwe9.json?&agency=NYPD&borough=BRONX&$limit=${limit.value}`
  )
    .then((response) => response.json())
    .then((json) => {
      for (let i = 0; i < json.length; i++) {
        const divComplaint = document.createElement("div");
        const divResolution = document.createElement("div");
        divComplaint.className = "complaint";
        divResolution.className = "resolution";
        result.appendChild(divComplaint);
        result.appendChild(divResolution);
        divComplaint.textContent = json[i].complaint_type;
        divResolution.textContent = json[i].resolution_description;
      }
    })
    .catch((error) => console.log(error));
});

brooklyn.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(
    `https://data.cityofnewyork.us/resource/erm2-nwe9.json?&agency=NYPD&borough=BROOKLYN&$limit=${limit.value}`
  )
    .then((response) => response.json())
    .then((json) => {
      for (let i = 0; i < json.length; i++) {
        const divComplaint = document.createElement("div");
        const divResolution = document.createElement("div");
        divComplaint.className = "complaint";
        divResolution.className = "resolution";
        result.appendChild(divComplaint);
        result.appendChild(divResolution);
        divComplaint.textContent = json[i].complaint_type;
        divResolution.textContent = json[i].resolution_description;
      }
    })
    .catch((error) => console.log(error));
});

manhattan.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(
    `https://data.cityofnewyork.us/resource/erm2-nwe9.json?&agency=NYPD&borough=MANHATTAN&$limit=${limit.value}`
  )
    .then((response) => response.json())
    .then((json) => {
      for (let i = 0; i < json.length; i++) {
        const divComplaint = document.createElement("div");
        const divResolution = document.createElement("div");
        divComplaint.className = "complaint";
        divResolution.className = "resolution";
        result.appendChild(divComplaint);
        result.appendChild(divResolution);
        divComplaint.textContent = json[i].complaint_type;
        divResolution.textContent = json[i].resolution_description;
      }
    })
    .catch((error) => console.log(error));
});

queens.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(
    `https://data.cityofnewyork.us/resource/erm2-nwe9.json?&agency=NYPD&borough=QUEENS&$limit=${limit.value}`
  )
    .then((response) => response.json())
    .then((json) => {
      for (let i = 0; i < json.length; i++) {
        const divComplaint = document.createElement("div");
        const divResolution = document.createElement("div");
        divComplaint.className = "complaint";
        divResolution.className = "resolution";
        result.appendChild(divComplaint);
        result.appendChild(divResolution);
        divComplaint.textContent = json[i].complaint_type;
        divResolution.textContent = json[i].resolution_description;
      }
    })
    .catch((error) => console.log(error));
});

statenIsland.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(
    `https://data.cityofnewyork.us/resource/erm2-nwe9.json?&agency=NYPD&borough=STATEN%20ISLAND&$limit=${limit.value}`
  )
    .then((response) => response.json())
    .then((json) => {
      for (let i = 0; i < json.length; i++) {
        const divComplaint = document.createElement("div");
        const divResolution = document.createElement("div");
        divComplaint.className = "complaint";
        divResolution.className = "resolution";
        result.appendChild(divComplaint);
        result.appendChild(divResolution);
        divComplaint.textContent = json[i].complaint_type;
        divResolution.textContent = json[i].resolution_description;
      }
    })
    .catch((error) => console.log(error));
});
