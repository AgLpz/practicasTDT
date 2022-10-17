// Declaración de variables

const base_url = "https://gateway.marvel.com:443/v1/public";
const endpointCharacters = "/characters";
const apiKey =  "apikey=923b23473ed45543cdeca6faca32db53";
const ts = "ts=1";
const hash = "hash=f0eb5d58cd824b5c16f0c4c5afff846d";
const extensionImg = `?${ts}&${apiKey}&${hash}`



const urlComplete = `${base_url}${endpointCharacters}?${ts}&${apiKey}&${hash}`;

console.log(urlComplete)
 
const container = document.getElementById("container");

// Fetch de datos por palabra clave
const fetchData = async () => {
  try {
    const res = await fetch(urlComplete);
    const data = await res.json();
    showCharacters(data);
  console.log(data)
  } catch (error) {
    console.log(error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const showCharacters = (data) => {
  container.innerHTML = "";
  let output = "";
  data.data.results.forEach(({name, thumbnail, description  }) => {
    output += `
      <article class="card">
        <div class="image">
          <img src="${thumbnail.path}.${thumbnail.extension}${extensionImg}" alt="${name}">
        </div>
        <h2>${name}</h2>
        <span>${description}</span>
        <p><b>Especie:</b> ${name}</p>
      </article>
    `;
    container.innerHTML = output;
  });
};
