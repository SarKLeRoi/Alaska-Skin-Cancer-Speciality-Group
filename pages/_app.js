// pages/_app.js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import CookieConsent from "../components/CookieConsent";
import {
  loadGoogleAnalytics,
  removeGoogleAnalytics,
  hasCookieConsent,
  trackPageView,
} from "../utils/analytics";
import "../styles/global.css"; // You can import global styles here

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [analyticsLoaded, setAnalyticsLoaded] = useState(false);

  // Handle cookie consent changes
  const handleConsentChange = (consent) => {
    if (consent === "accepted") {
      loadGoogleAnalytics();
      setAnalyticsLoaded(true);
    } else {
      removeGoogleAnalytics();
      setAnalyticsLoaded(false);
    }
  };

  // Check initial consent status
  useEffect(() => {
    if (hasCookieConsent()) {
      loadGoogleAnalytics();
      setAnalyticsLoaded(true);
    }
  }, []);

  // Track page views when consent is given
  useEffect(() => {
    if (analyticsLoaded) {
      trackPageView(router.asPath);
    }
  }, [router.asPath, analyticsLoaded]);

  useEffect(() => {
    // Optimized scroll to top when route changes (less aggressive for framer-motion)
    const handleRouteChange = () => {
      // Use a more gentle approach that doesn't interfere with framer-motion
      requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant",
        });
      });
    };

    // Listen for route changes
    router.events.on("routeChangeComplete", handleRouteChange);

    // Cleanup listeners on unmount
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  // Gentle scroll to top on initial load
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <CookieConsent onConsentChange={handleConsentChange} />
    </>
  );
}

export default MyApp;
