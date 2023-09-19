document.getElementById("fetch").addEventListener("click", () => {
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit").then((response) => {
      response.json().then((jokes) => {
        const divelement = document.getElementById("display");
  
        if (jokes.type === "single") divelement.textContent = jokes.joke;
        else divelement.textContent = `${jokes.setup}\n${jokes.delivery}`;
      });
    });
  });