// Define an array to store all the book objects
let myLibrary = [];

// Define a Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Define a function to add a book to the library
function addBookToLibrary(event) {
  event.preventDefault(); // prevent the form from submitting

  // Get the input values from the form
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  // Create a new book object using the input values
  const newBook = new Book(title, author, pages, read);

  // Add the new book object to the library array
  myLibrary.push(newBook);

  // Call a function to display the updated library
  displayLibrary();
}

// Define a function to display the library in the table
function displayLibrary() {
  const tableBody = document.getElementById("bookList");
  tableBody.innerHTML = ""; // clear the table body

  // Loop through the library array and add each book to the table
  myLibrary.forEach((book) => {
    const row = tableBody.insertRow(-1);
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const readCell = row.insertCell(3);
    titleCell.innerHTML = book.title;
    authorCell.innerHTML = book.author;
    pagesCell.innerHTML = book.pages;
    readCell.innerHTML = book.read ? "Yes" : "No";
  });
}

// Add an event listener to the form submit button
const form = document.getElementById("bookForm");
form.addEventListener("submit", addBookToLibrary);

// Manually add some books to the library array
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281, false);
const book3 = new Book("1984", "George Orwell", 328, true);
myLibrary.push(book1, book2, book3);

// Call the displayLibrary function to display the books on the page
displayLibrary();
