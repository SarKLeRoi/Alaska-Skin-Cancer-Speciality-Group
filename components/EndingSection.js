import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const handleContactClick = () => {
    // Navigate to contact page
    window.location.href = "/contact";
  };

  // Optimized Animation variants (prevent layout shifts)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const bottomVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <motion.footer
      className="footer-container"
      role="contentinfo"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Logo Section (Top Row) */}
      <motion.div className="footer-logo-container" variants={logoVariants}>
        <img
          src="/images/logo.webp"
          alt="Alaska Skin Cancer Specialty Group logo"
        />
      </motion.div>

      {/* Footer Sections (Bottom Row) */}
      <motion.div className="footer-sections" variants={itemVariants}>
        {/* Locations Section */}
        <motion.section
          className="footer-column"
          aria-labelledby="locations-heading"
          variants={itemVariants}
        >
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
        </motion.section>

        {/* Quick Links Section */}
        <motion.nav
          className="footer-column"
          aria-labelledby="quick-links-heading"
          variants={itemVariants}
        >
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
        </motion.nav>

        {/* Contact Button */}
        <motion.div className="footer-contact" variants={itemVariants}>
          <button
            className="contact-button"
            onClick={handleContactClick}
            aria-label="Contact Alaska Skin Cancer Specialty Group"
            type="button"
          >
            CONTACT US
          </button>
        </motion.div>
      </motion.div>
      <motion.div
        className="footer-bottom"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={bottomVariants}
      >
        <p>All rights reserved to Alaska Skin Cancer Specialty Group © 2025</p>
        <div className="footer-links">
          <Link href="/legal/termsOfUse">Terms Of Use</Link>
          <Link href="/legal/privacyPolicy">Privacy Policy</Link>
          <Link href="/legal/accessbilityStatement">
            Accessibility Statement
          </Link>
          <Link href="/legal/medicalDisclaimer">Medical Disclaimer</Link>
          <Link href="/legal/hipaaNotice">HIPAA Notice</Link>
          <button
            className="cookie-settings-link"
            onClick={() => {
              // Trigger cookie preferences modal
              const event = new CustomEvent("openCookiePreferences");
              window.dispatchEvent(event);
            }}
          >
            Cookie Settings
          </button>
        </div>
      </motion.div>
    </motion.footer>
  );
}
