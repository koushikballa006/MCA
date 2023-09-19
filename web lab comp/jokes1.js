document.addEventListener("DOMContentLoaded", function () {
    // Fetch jokes from jokes.json
    fetch("jokes.json")
        .then(response => response.json())
        .then(data => {
            const jokesList = document.getElementById("jokes-list");

            // Loop through the jokes and create list items
            data.forEach(joke => {
                const listItem = document.createElement("li");
                listItem.textContent = joke.joke; // Display the joke
                jokesList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error("Error fetching jokes:", error);
        });
});
