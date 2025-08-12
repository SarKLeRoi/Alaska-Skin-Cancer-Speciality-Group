import React from "react";
import Link from "next/link";

export default function Footer() {
  const handleContactClick = () => {
    // Navigate to contact page
    window.location.href = "/contact";
  };

  return (
    <footer className="footer-container" role="contentinfo">
      {/* Logo Section (Top Row) */}
      <div className="footer-logo-container">
        <img
          src="/images/logo.webp"
          alt="Alaska Skin Cancer Specialty Group logo"
        />
      </div>

      {/* Footer Sections (Bottom Row) */}
      <div className="footer-sections">
        {/* Locations Section */}
        <section className="footer-column" aria-labelledby="locations-heading">
          <h3 id="locations-heading">LOCATIONS</h3>
          <br />

          <h4>Capstone Dermatology</h4>
          <p>
            3066 E Meridian Park Loop,
            <br />
            Wasilla, AK 99654
          </p>
          <br />

          <p>
            1100 E Diamond Blvd #310,
            <br /> Anchorage, AK 99515
          </p>
          <br />
          <h4>Matsu Plastic Surgery</h4>
          <p>
            2490 S Woodworth Loop #310,
            <br /> Palmer, AK 99645
          </p>
        </section>

        {/* Quick Links Section */}
        <nav className="footer-column" aria-labelledby="quick-links-heading">
          <h3 id="quick-links-heading">QUICK LINKS</h3>
          <br />
          <ul>
            <li>
              <Link
                href="/about"
                aria-label="Learn about Alaska Skin Cancer Specialty Group"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/skinCancer"
                aria-label="Information about skin cancer types and treatments"
              >
                Skin Cancer
              </Link>
            </li>
            <li>
              <Link
                href="/treatmentOptions"
                aria-label="View available treatment options"
              >
                Treatment Options
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                aria-label="View before and after treatment gallery"
              >
                Gallery
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact Button */}
        <div className="footer-contact">
          <button
            className="contact-button"
            onClick={handleContactClick}
            aria-label="Contact Alaska Skin Cancer Specialty Group"
            type="button"
          >
            CONTACT US
          </button>
        </div>
      </div>
    </footer>
  );
}
