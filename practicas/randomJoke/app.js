const url = "https://icanhazdadjoke.com/";

const dadJokes = document.getElementById("dadJokes");
const button = document.getElementById("buttonJoke")
const options = {
    headers: {
        Accept: "application/json",
        },
};
const fetchData = async () => {
  try {
    const res = await fetch(url, options);
    const data = await res.json(); 
    return data;
  } catch (error) {
    console.log(error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const click = async () => {
  try {
    const {joke}  = await fetchData();
dadJokes.textContent = joke

  } catch (error) {
      console.log(error)
  }
}

button.addEventListener("click", click);


