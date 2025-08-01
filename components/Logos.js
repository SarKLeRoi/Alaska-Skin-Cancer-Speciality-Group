import React from "react";

const Logos = () => {
  const logos = [
    "/images/society-logos/AAD.webp",
    "/images/society-logos/ABPS.webp",
    "/images/society-logos/ABSlogoLH.webp",
    "/images/society-logos/ASMS.webp",
    "/images/society-logos/ASPS.webp",
    "/images/society-logos/DART.webp",
    "/images/society-logos/FSDS.webp",
  ];

  return (
    <>
      <div className="logos-container">
        {logos.map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
      <h2 className="homepage-h2">
        Our doctors are members of the following institutions and organizations
      </h2>
    </>
  );
};

export default Logos;
