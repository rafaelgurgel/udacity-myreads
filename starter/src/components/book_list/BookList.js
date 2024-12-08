import React from "react";
import PropTypes from "prop-types";
import BookShelf from "../book_shelf/BookShelf";
import { Link } from "react-router-dom";
import "./BookList.css";

const BookList = ({ books, onShelfChange }) => {
  const shelves = [
    { id: "currentlyReading", title: "Currently Reading" },
    { id: "wantToRead", title: "Want to Read" },
    { id: "read", title: "Read" },
  ];

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {shelves.map((shelf) => (
          <BookShelf
            key={shelf.id}
            title={shelf.title}
            books={books.filter((book) => book.shelf === shelf.id)}
            onShelfChange={onShelfChange}
          />
        ))}
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default BookList;
