import React, { useState, useEffect } from 'react';
import './BannerHomePage.css';

function BannerHomePage() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Appointment Booking Section */}
      <div className="main-container">
        <h1>Book an Appointment</h1>
        <div className="form-container">
          <div className="search-container">
            <input type="text" placeholder="Search for Doctor or Specialty" />
          </div>
          <div className="location-container">
            <input type="text" placeholder="Select Location" />
          </div>
          <button className="book-appointment-btn">Book an Appointment</button>
        </div>
      </div>

      {/* Banner Home Page */}
      <div className="BannerHomePage">
        <div className="BannerContent">
          <div className="TextSection">
            <h1 className="BannerTitle">Welcome to SWASTHIFY</h1>
            {showText && (
              <p className="BannerText">
                Where healing is an art and compassion is our commitment
              </p>
            )}
            <div className="BannerButtonWrapper">
              <button className="BannerButton">Click Me</button>
            </div>
          </div>
          <div className="ImageSection">
            <img
              src="https://cdn.pixabay.com/photo/2024/04/10/00/46/hospital-8687007_1280.jpg"
              alt="Health"
              className="BannerImage"
            />
          </div>
        </div>
      </div>

      {/* Emergency Section
      <div className="emergency-container">
        <button className="emergency-button">EMERGENCY</button>
      </div> */}

      {/* Footer Section */}
      <div className="footer-container">
        <div className="section">
          <h2>For Patients</h2>
          <select className="dropdown">
            <option value="find-doctor">Find a Doctor</option>
            <option value="book-appointment">Book an Appointment</option>
            <option value="video-consultation">Video Consultation</option>
            <option value="treatments">Treatments</option>
            <option value="emergency">Emergency 24x7</option>
            <option value="my-lab">My Lab</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default BannerHomePage;
