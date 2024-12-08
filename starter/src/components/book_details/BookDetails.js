import React from "react";
import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./BookDetails.css";

const BookDetails = ({ getBookById }) => {
  const { id } = useParams();
  const book = getBookById(id);

  if (!book) {
    return <p>Book not found.</p>;
  }

  const {
    title,
    authors,
    publisher,
    publishedDate,
    description,
    imageLinks,
  } = book;

  return (
    <div className="book-details">
      <h2>{title}</h2>
      {imageLinks?.thumbnail && (
        <img
          src={imageLinks.thumbnail}
          alt={`${title} cover`}
          style={{ width: "150px", height: "auto" }}
        />
      )}
      <p>
        <strong>Authors:</strong> {authors?.join(", ")}
      </p>
      <p>
        <strong>Publisher:</strong> {publisher || "Unknown"}
      </p>
      <p>
        <strong>Published Date:</strong> {publishedDate || "N/A"}
      </p>
      <p>
        <strong>Description:</strong> {description || "No description available."}
      </p>
      <div>
        <Link to="/" className="back-to-home">
          <button style={{ marginTop: "20px" }}>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

BookDetails.propTypes = {
  getBookById: PropTypes.func.isRequired,
};

export default BookDetails;
