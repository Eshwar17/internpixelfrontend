import React, { useState, useEffect } from "react";
import "./Popup.css";
import gift from "./gift.png";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowPopup(true), 4 * 1000);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="popup">
          {/* <button className="close-btn" onClick={handleClosePopup}>
              X
            </button> */}
          <div className="contentBox">
            <div className="close" onClick={handleClosePopup}></div>
            <div className="imgBx">
              <img src={gift} alt="gift" />
            </div>
            <br/>
            <div className="content">
              <div>
                <h3>Special Offer</h3>
                <h2>
                  80<sup>%</sup>
                  <span>off</span>
                </h2>
                <p>
                  Share InternPixel with your friends and receive 80% off your
                  internship purchase! Simply refer two friends who sign up for
                  an internship using your unique referral
                  id(EmailId+MobileNum), and then you will be able to attain an
                  80% off on your internship. Spread the word and save big on
                  your career development with InternPixel!
                </p>
                <a href="https://www.internpixel.fun/enroll">Get The Deal</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
