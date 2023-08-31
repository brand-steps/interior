import React, { useState, useEffect } from 'react';
import './ProductDetail.css';

const Popup = ({ onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); // Popup will disappear after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`popup ${visible ? 'visible' : ''}`}>
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        <p>Item added to cart!</p>
      </div>
    </div>
  );
};

export default Popup;
