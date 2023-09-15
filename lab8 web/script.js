// Add a click event listener to the "Fetch Books" button
document.getElementById("fetchBooks").addEventListener("click", function () {
    fetchBooks();
});

function fetchBooks() {
    // Make an AJAX request to fetch the JSON data
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "books.json", true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            // Parse the JSON response
            const books = JSON.parse(xhr.responseText);

            // Call the displayBooks function to render the list of books
            displayBooks(books);
        } else {
            console.error("Failed to fetch data");
        }
    };

    xhr.send();
}

function displayBooks(books) {
    // Get the bookList div element
    const bookList = document.getElementById("bookList");

    // Create an empty HTML string to hold the book list
    let html = "";

    // Loop through the books and create HTML elements for each book
    books.forEach(function (book) {
        html += `<div class="book">
                    <h2>${book.title}</h2>
                    <p>Author: ${book.author}</p>
                    <p>Genre: ${book.genre}</p>
                </div>`;
    });

    // Set the innerHTML of the bookList div to the generated HTML
    bookList.innerHTML = html;
}
