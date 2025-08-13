// pages/_app.js
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/global.css"; // You can import global styles here

function MyApp({ Component, pageProps }) {
  const router = useRouter();

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

  return <Component {...pageProps} />;
}

export default MyApp;
