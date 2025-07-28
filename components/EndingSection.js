import React from "react";

export default function Footer() {
  return (
    <footer className="footer-container">
      {/* Logo Section (Top Row) */}
      <div className="footer-logo-container">
        <img
          src="../images/logo.png"
          alt="Alaska Skin Cancer Speciality Group"
        />
      </div>

      {/* Footer Sections (Bottom Row) */}
      <div className="footer-sections">
        {/* Locations Section */}
        <div className="footer-column">
          <h3>LOCATIONS</h3>
          <br />

          <h4>Capstone Dermatology</h4>
          <p>
            3066 E Meridian Park Loop,
            <br />
            Wasilla, AK 99654
          </p>
          <br />

          <h4>Matsu Plastic Surgery</h4>
          <p>
            2490 S Woodworth Loop #310,
            <br /> Palmer, AK 99645
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-column">
          <h3>QUICK LINKS</h3>
          <br />
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/skin-cancer">Skin Cancer</a>
            </li>
            <li>
              <a href="/treatment-options">Treatment Options</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
          </ul>
        </div>

        {/* Contact Button */}
        <div className="footer-contact">
          <button className="contact-button">CONTACT US</button>
        </div>
      </div>
    </footer>
  );
}
