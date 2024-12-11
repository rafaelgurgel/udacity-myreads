import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./Book.css";

const Book = ({ book, onShelfChange }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    onShelfChange(book, e.target.value);
  };

  const handleBookClick = () => {
    navigate(`/details/${book.id}`);
  };

  return (
    <li style={{ cursor: "pointer" }}>
      <div className="book">
        <div className="book-top">
          <div onClick={handleBookClick} 
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks?.thumbnail || ""})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select value={book.shelf || "none"} onChange={handleChange}>
              <option value="empty" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors?.join(", ")}</div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default Book;
