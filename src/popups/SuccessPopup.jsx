import React, { useState } from 'react';
import Confetti from 'react-confetti';
import './Popup.css';

const Popup = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setShowConfetti(!showConfetti);
  }

  return (
    <div className="popup-container">
      <button className="register-button" type='submit' onClick={togglePopup}>Register</button>
      {isOpen &&
        <div className="popup">
          <div className="popup-inner">
            <img className="success-icon" src="https://cdn-icons-png.flaticon.com/512/263/263098.png" alt="Success Icon" />
            <h2>Success!</h2>
            <p>You have successfully registered for the internship.</p>
            <button className="close-button" onClick={togglePopup}>Close</button>
          </div>
        </div>
      }
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
    </div>
  );
}

export default Popup;
