import React, { useState, useEffect } from "react";
import "./Popup.css";
import gift from "./gift.png";

const Popup = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [offerEndDate, setOfferEndDate] = useState(null);
  const startDateTime = new Date('2023-05-22T00:00:00Z'); // Today's date

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 4000);
    setOfferEndDate(new Date(startDateTime.getTime() + 7 * 24 * 60 * 60 * 1000));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = offerEndDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        setIsOpen(false);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, "0");
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, "0");
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");
        const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, "0");

        const daysEl = document.querySelector(".days");
        const hoursEl = document.querySelector(".hours");
        const minutesEl = document.querySelector(".minutes");
        const secondsEl = document.querySelector(".seconds");

        if (daysEl && hoursEl && minutesEl && secondsEl) {
          daysEl.innerHTML = days;
          hoursEl.innerHTML = hours;
          minutesEl.innerHTML = minutes;
          secondsEl.innerHTML = seconds;
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [offerEndDate]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="popup-container">
      {isOpen && (
        <div className="popup">
          <div className="popup-inner">
            <img className="gift-icon" src={gift} alt="Gift Icon" />
            <h2>InternFest Sale</h2>
            <p>
              Get a chance to work on a client project for free when you buy an
              internship from InternPixel and refer two of your friends using
              your unique referral ID (email + mobile number). And now, for a
              limited time, enjoy an incredible 75% discount on your{" "}
              <a
                href="https://www.internpixel.fun/enroll"
                style={{ color: "#007bff", textDecoration: "underline" }}
              >
                purchase
              </a>
              . To claim your referral bonus, email us at internpixel@zohomail.in. Don't
              miss out on this exciting opportunity to kickstart your career!
            </p>
            <div className="timer-container">
              <p>Offer ends in:</p>
              <div className="timer">
                <div className="days">00</div>
                <div className="hours">00</div>
                <div className="minutes">00</div>
                <div className="seconds">00</div>
              </div>
            </div>
            <button className="close-button" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
