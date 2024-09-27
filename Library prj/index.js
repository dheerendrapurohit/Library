const myLibrary = [];


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks(); 
}


function displayBooks() {
  const bookDisplay = document.getElementById('bookDisplay');
  bookDisplay.innerHTML = ''; 

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>${book.read ? 'Read' : 'Not Read Yet'}</p>
      <button class="remove-book" data-index="${index}">Remove Book</button>
      <button class="toggle-read" data-index="${index}">${book.read ? 'Mark as Unread' : 'Mark as Read'}</button>
    `;

    bookDisplay.appendChild(bookCard);
  });

  document.querySelectorAll('.remove-book').forEach(button => {
    button.addEventListener('click', removeBook);
  });

  document.querySelectorAll('.toggle-read').forEach(button => {
    button.addEventListener('click', toggleReadStatus);
  });
}


function removeBook(event) {
  const index = event.target.dataset.index;
  myLibrary.splice(index, 1); 
  displayBooks(); 
}


function toggleReadStatus(event) {
  const index = event.target.dataset.index;
  myLibrary[index].read = !myLibrary[index].read;
  displayBooks(); 
}


document.getElementById('newBookBtn').addEventListener('click', () => {
  const form = document.getElementById('bookForm');
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
});


document.getElementById('addBookForm').addEventListener('submit', (event) => {
  event.preventDefault(); 


  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

 
  const newBook = new Book(title, author, pages, read);

 
  addBookToLibrary(newBook);

 
  document.getElementById('addBookForm').reset();
  document.getElementById('bookForm').style.display = 'none';
});

