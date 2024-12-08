import "./App.css";
import { useState, useEffect } from "react";
import { getAll, update } from "./BooksAPI";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from "./components/book_list/BookList";
import Search from "./components/search/Search";
import BookDetails from "./components/book_details/BookDetails";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAll().then(setBooks);
  }, []);

  const updateBookShelf = (book, shelf) => {
    update(book, shelf).then(() => {
      setBooks((prevBooks) => {
        const updatedBooks = prevBooks.map((b) =>
          b.id === book.id ? { ...b, shelf } : b
        );
        if (!updatedBooks.some((b) => b.id === book.id)) {
          updatedBooks.push({ ...book, shelf });
        }
        return updatedBooks;
      });
    });
  };

  const getBookById = (id) => books.find((book) => book.id === id);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<BookList books={books} onShelfChange={updateBookShelf} />}
          />
          <Route
            path="/search"
            element={<Search books={books} onShelfChange={updateBookShelf} />}
          />
          <Route
            path="/details/:id"
            element={<BookDetails getBookById={getBookById} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
