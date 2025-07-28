import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import TitleRow from "@/components/TitleRow";

const Preloader = () => {
  const [show, setShow] = useState(true);
  const [showImage, setShowImage] = useState(false); // New state for image visibility

  useEffect(() => {
    // Delay before starting the fade-out
    const fadeOutDelay = 4000; // Adjust as needed

    // Timer for starting the fade-out of the preloader
    const fadeOutTimer = setTimeout(() => {
      setShow(false);
    }, fadeOutDelay);

    // Timer for showing the image with a delay
    const imageDisplayTimer = setTimeout(() => {
      setShowImage(true);
    }, 300); // Adjust this delay as needed

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(imageDisplayTimer);
    };
  }, []);

  return show ? (
    <div
      id="preloader"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        // display: "flex",
        flexDirection: "column", // Adjust layout as needed
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <style jsx>{`
        @keyframes fadeOut {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        #preloader {
          animation: fadeOut 2s ease forwards;
          animation-delay: 2s; /* Delay the animation to start after 2 seconds */
        }
        .content-wrapper img {
          opacity: 0; /* Ensure the image starts fully transparent */
          animation: ${showImage ? "fadeIn 4s ease forwards" : "none"};
        }
      `}</style>
      <div style={{ opacity: 0 }}>
        <TitleRow />
        <Navbar />
      </div>
      <div className="preloader-content-wrapper">
        <img
          src="images/NASSARlogo.webp"
          loading="lazy"
          alt="Nassar Plastic Surgery"
          style={{
            opacity: showImage ? 1 : 0,
            animation: showImage ? "fadeIn 4s ease forwards" : "none",
          }}
        />
      </div>
    </div>
  ) : null;
};

export default Preloader;
