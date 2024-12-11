import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css"; // Optional: Add styling for the component

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleGoHome = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <div className="not-found-buttons">
        <button onClick={handleGoBack}>Go Back</button>
        <button onClick={handleGoHome}>Go to Home</button>
      </div>
    </div>
  );
};

export default NotFound;
