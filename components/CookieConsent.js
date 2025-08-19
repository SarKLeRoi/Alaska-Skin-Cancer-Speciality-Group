import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import CookiePreferences from "./CookiePreferences";

const CookieConsent = ({ onConsentChange }) => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }

    // Listen for custom event to open preferences
    const handleOpenPreferences = () => {
      setShowPreferences(true);
    };

    window.addEventListener("openCookiePreferences", handleOpenPreferences);

    return () => {
      window.removeEventListener(
        "openCookiePreferences",
        handleOpenPreferences
      );
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
    onConsentChange("accepted");
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
    onConsentChange("declined");
  };

  const handleManage = () => {
    setShowDetails(!showDetails);
  };

  const handleOpenPreferences = () => {
    console.log("Opening preferences modal");
    setShowPreferences(true);
  };

  const bannerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 },
  };

  const detailsVariants = {
    hidden: { height: 0, opacity: 0, overflow: "hidden" },
    visible: { height: "auto", opacity: 1, overflow: "visible" },
    exit: { height: 0, opacity: 0, overflow: "hidden" },
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="cookie-consent-banner"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={bannerVariants}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="cookie-content">
          <div className="cookie-text">
            <h3>We Use Cookies</h3>
            <p>
              We use cookies to analyze site traffic and optimize your
              experience. This includes Google Analytics to understand how
              visitors use our site.
            </p>
          </div>

          <div className="cookie-buttons">
            <button className="cookie-btn accept-btn" onClick={handleAccept}>
              Accept All Cookies
            </button>
            <button className="cookie-btn decline-btn" onClick={handleDecline}>
              Decline
            </button>
            <button className="cookie-btn manage-btn" onClick={handleManage}>
              Manage Preferences
            </button>
          </div>

          <AnimatePresence>
            {showDetails && (
              <motion.div
                className="cookie-details"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={detailsVariants}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="details-content">
                  <h4>Cookie Types We Use:</h4>
                  <ul>
                    <li>
                      <strong>Essential Cookies:</strong> Required for basic
                      site functionality
                    </li>
                    <li>
                      <strong>Analytics Cookies:</strong> Google Analytics to
                      understand site usage and improve user experience
                    </li>
                    <li>
                      <strong>Preference Cookies:</strong> Remember your choices
                      and settings
                    </li>
                  </ul>
                  <p>
                    You can change your cookie preferences at any time. For more
                    information, see our{" "}
                    <Link href="/legal/privacyPolicy" className="privacy-link">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                  <div className="details-actions">
                    <button
                      className="cookie-btn manage-btn"
                      onClick={handleOpenPreferences}
                    >
                      Open Cookie Settings
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <CookiePreferences
        isOpen={showPreferences}
        onClose={() => setShowPreferences(false)}
      />
    </AnimatePresence>
  );
};

export default CookieConsent;
