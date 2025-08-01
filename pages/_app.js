// pages/_app.js
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/global.css"; // You can import global styles here

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Scroll to top when route changes
    const handleRouteChange = () => {
      // Force scroll to top with multiple methods
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant",
        });
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.documentElement.scrollLeft = 0;
        document.body.scrollLeft = 0;
      }, 0);
    };

    // Listen for route changes
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChange);

    // Cleanup listeners on unmount
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  // Also scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
