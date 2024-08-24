import React from "react";
import "../style/spinner.css"; // Import the spinner styles

const Spinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
