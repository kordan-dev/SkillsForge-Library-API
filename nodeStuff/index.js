//import express
const express = require('express');
const app = express();
app.use(express.json());

// In-memory database
const authors = [
    { id: 1, name: "Taiwo Daniel" },
    { id: 2, name: "Ali Baba" },
    { id: 3, name: "David Kunle" },
    { id: 4, name: "Jackie Chan" }
  ];
  
  const books = [
    { id: 1, title: "The Great Gatsby", authorId: 1 },
    { id: 2, title: "To Kill a Mockingbird", authorId: 2 },
    { id: 3, title: "Pride and Prejudice", authorId: 2 },
    { id: 4, title: "1984", authorId: 3 },
    { id: 5, title: "The Catcher in the Rye", authorId: 1 }
  ];

// Generate unique ID
function generateId() {
  return Math.floor(Math.random() * 100000);
}

// CRUD operations for Authors

// Create an author
app.post('/authors', (req, res) => {
  const { name } = req.body;
  const author = { id: generateId(), name };
  authors.push(author);
  res.status(201).json(author);
});

// Read all authors
app.get('/authors', (req, res) => {
  res.json(authors);
});

// Read a specific author
app.get('/authors/:id', (req, res) => {
  const authorId = parseInt(req.params.id);
  const author = authors.find(a => a.id === authorId);
  if (!author) {
    res.status(404).json({ error: 'Author not found' });
  } else {
    res.json(author);
  }
});

// Update an author
app.put('/authors/:id', (req, res) => {
  const authorId = parseInt(req.params.id);
  const { name } = req.body;
  const author = authors.find(a => a.id === authorId);
  if (!author) {
    res.status(404).json({ error: 'Author not found' });
  } else {
    author.name = name;
    res.json(author);
  }
});

// Delete an author
app.delete('/authors/:id', (req, res) => {
  const authorId = parseInt(req.params.id);
  authors = authors.filter(a => a.id !== authorId);
  res.sendStatus(204);
});

// CRUD operations for Books

// Create a book
app.post('/books', (req, res) => {
  const { title, authorId } = req.body;
  const book = { id: generateId(), title, authorId };
  books.push(book);
  res.status(201).json(book);
});

// Read all books
app.get('/books', (req, res) => {
  res.json(books);
});

// Read a specific book
app.get('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find(b => b.id === bookId);
  if (!book) {
    res.status(404).json({ error: 'Book not found' });
  } else {
    res.json(book);
  }
});

// Update a book
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, authorId } = req.body;
  const book = books.find(b => b.id === bookId);
  if (!book) {
    res.status(404).json({ error: 'Book not found' });
  } else {
    book.title = title;
    book.authorId = authorId;
    res.json(book);
  }
});

// Delete a book
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  books = books.filter(b => b.id !== bookId);
  res.sendStatus(204);
});

// Search by Author
app.get('/books/search/author', (req, res) => {
  const authorName = req.query.name;
  const filteredBooks = books.filter(b => {
    const author = authors.find(a => a.id === b.authorId);
    return author && author.name.toLowerCase()})})
