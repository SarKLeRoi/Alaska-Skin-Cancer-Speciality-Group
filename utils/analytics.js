// Google Analytics utility functions
export const GA_TRACKING_ID = "G-NJLRMTQG48";

// Load Google Analytics
export const loadGoogleAnalytics = () => {
  if (typeof window === "undefined") return;

  // Load gtag script
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Remove Google Analytics
export const removeGoogleAnalytics = () => {
  if (typeof window === "undefined") return;

  // Remove gtag script
  const scripts = document.querySelectorAll(
    'script[src*="googletagmanager.com"]'
  );
  scripts.forEach((script) => script.remove());

  // Clear dataLayer
  if (window.dataLayer) {
    window.dataLayer = [];
  }

  // Remove gtag function
  if (window.gtag) {
    delete window.gtag;
  }
};

// Check if user has consented to cookies
export const hasCookieConsent = () => {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("cookieConsent") === "accepted";
};

// Track page view (only if consent given)
export const trackPageView = (url) => {
  if (hasCookieConsent() && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};
