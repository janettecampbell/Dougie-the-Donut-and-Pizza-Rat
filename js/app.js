"use strict";

const bronx = document.querySelector("#bronx");
const brooklyn = document.querySelector("#brooklyn");
const manhattan = document.querySelector("#manhattan");
const queens = document.querySelector("#queens");
const statenIsland = document.querySelector("#staten-island");
const limit = document.getElementById("limit");
const result = document.querySelector(".result");

const clear = () => {
  const removeBtn = document.getElementsByClassName("toggle-btn");
  const removeComplaint = document.getElementsByClassName("complaint");
  const removeResolution = document.getElementsByClassName("resolution");

  while (removeBtn.length > 0) {
    removeBtn[0].parentNode.removeChild(removeBtn[0]);
  }

  while (removeComplaint.length > 0) {
    removeComplaint[0].parentNode.removeChild(removeComplaint[0]);
  }
  while (removeResolution.length > 0) {
    removeResolution[0].parentNode.removeChild(removeResolution[0]);
  }
};

// const createDivs = (json) => {
//   const isFilled = document.getElementsByClassName("complaint");
//   if (isFilled.length > 0) {
//     clear();
//   }
//   for (let i = 0; i < json.length; i++) {
//     const toggleBtn = document.createElement("button");
//     const divComplaint = document.createElement("div");
//     const divResolution = document.createElement("div");

//     toggleBtn.className = "toggle-btn";
//     divComplaint.className = "complaint";
//     divResolution.className = "resolution";

//     divResolution.style.display = "none";

//     result.appendChild(divComplaint);
//     result.appendChild(divResolution);
//     result.appendChild(toggleBtn);

//     toggleBtn.textContent = "What did the police do?";
//     divComplaint.textContent = json[i].complaint_type;
//     divResolution.textContent = json[i].resolution_description;
//     toggleBtn.addEventListener("click", () => {
//       if (divResolution.style.display === "none") {
//         divResolution.style.display = "block";
//       } else {
//         divResolution.style.display = "none";
//       }
//     });
//   }
// };

const createDivsNon = (json) => {
  const isFilled = document.getElementsByClassName("complaint");
  if (isFilled.length > 0) {
    clear();
  }
  for (let i = 0; i < json.length; i++) {
    // const toggleBtn = document.createElement("button");
    const divComplaint = document.createElement("div");
    // const divResolution = document.createElement("div");

    // toggleBtn.className = "toggle-btn";
    divComplaint.className = "complaint";
    // divResolution.className = "resolution";

    // divResolution.style.display = "none";

    result.appendChild(divComplaint);
    // result.appendChild(divResolution);
    // result.appendChild(toggleBtn);

    // toggleBtn.textContent = "What did the police do?";
    divComplaint.textContent = json[i].complaint_type;
    // divResolution.textContent = json[i].resolution_description;
    // toggleBtn.addEventListener("click", () => {
    //   if (divResolution.style.display === "none") {
    //     divResolution.style.display = "block";
    //   } else {
    //     divResolution.style.display = "none";
    //   }
    // });
  }
};

bronx.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(
    `https://data.cityofnewyork.us/resource/erm2-nwe9.json?&agency=NYPD&borough=BRONX&$limit=${limit.value}`
  )
    .then((response) => response.json())
    .then((json) => {
      createDivsNon(json);
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
      createDivsNon(json);
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
      createDivsNon(json);
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
      createDivsNon(json);
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
      createDivsNon(json);
    })
    .catch((error) => console.log(error));
});
