import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { loadGoogleAnalytics, removeGoogleAnalytics } from "../utils/analytics";

const CookiePreferences = ({ isOpen, onClose }) => {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    setAnalyticsEnabled(consent === "accepted");
  }, []);

  const handleAnalyticsToggle = (enabled) => {
    if (enabled) {
      localStorage.setItem("cookieConsent", "accepted");
      loadGoogleAnalytics();
      setAnalyticsEnabled(true);
    } else {
      localStorage.setItem("cookieConsent", "declined");
      removeGoogleAnalytics();
      setAnalyticsEnabled(false);
    }
  };

  const handleSave = () => {
    onClose();
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="cookie-preferences-overlay"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={backdropVariants}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      >
        <motion.div
          className="cookie-preferences-modal"
          variants={modalVariants}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header">
            <h2>Cookie Preferences</h2>
            <button className="close-btn" onClick={onClose}>
              ×
            </button>
          </div>

          <div className="modal-content">
            <div className="preference-section">
              <h3>Analytics Cookies</h3>
              <p>
                These cookies help us understand how visitors interact with our
                website by collecting and reporting information anonymously.
              </p>
              <div className="toggle-container">
                <label className="toggle-label">
                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={(e) => handleAnalyticsToggle(e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                  <span className="toggle-text">
                    {analyticsEnabled ? "Enabled" : "Disabled"}
                  </span>
                </label>
              </div>
            </div>

            <div className="preference-section">
              <h3>Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function properly
                and cannot be disabled.
              </p>
              <div className="toggle-container">
                <label className="toggle-label disabled">
                  <input type="checkbox" checked={true} disabled />
                  <span className="toggle-slider"></span>
                  <span className="toggle-text">Always Enabled</span>
                </label>
              </div>
            </div>

            <div className="info-section">
              <p>
                <strong>Note:</strong> You can change these preferences at any
                time. Changes will take effect immediately and apply to future
                visits.
              </p>
            </div>
          </div>

          <div className="modal-footer">
            <button className="save-btn" onClick={handleSave}>
              Save Preferences
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookiePreferences;
