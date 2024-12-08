import React, { useState } from "react";
import PropTypes from "prop-types";
import { search } from "../../BooksAPI";
import Book from "../book/Book";
import { Link } from "react-router-dom";
import "./Search.css";

const Search = ({ books, onShelfChange }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim()) {
      search(value, 20).then((res) => {
        setResults(res.error ? [] : res);
      });
    } else {
      setResults([]);
    }
  };

  const getShelf = (book) => books.find((b) => b.id === book.id)?.shelf || "none";

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {results.map((book) => (
            <Book
              key={book.id}
              book={{ ...book, shelf: getShelf(book) }}
              onShelfChange={onShelfChange}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

Search.propTypes = {
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default Search;
