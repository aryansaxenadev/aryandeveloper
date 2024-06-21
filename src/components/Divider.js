// src/components/Divider.js
import React from 'react';
import './Divider.css'; // Import the CSS file for the Divider

const Divider = () => {
  return (
    <div className="divider">
      <div className="line"></div>
      <div className="icon-container">
        <i className="divider-icon">★</i> {/* You can use any icon here */}
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Divider;
