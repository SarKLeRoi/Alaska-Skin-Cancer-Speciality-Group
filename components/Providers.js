import React from "react";

const Providers = () => {
  const providers = [
    {
      name: "Dr. Dorizas",
      image: "/images/doctors/AndrewDorizas_headshot.webp",
    },
    {
      name: "Dr. Nassar",
      image: "/images/doctors/AmerNassar_headshot.webp",
    },
    {
      name: "Dr. Galler",
      image: "/images/doctors/BlakeGaller_headshot.webp",
    },
  ];

  return (
    <>
      <h2 className="homepage-h2">
        Our doctors are members of the following institutions and organizations
      </h2>
      <section className="providers-section">
        <h2 className="providers-title">Meet Our Providers</h2>
        <div className="providers-grid">
          {providers.map((provider, index) => (
            <div key={index} className="provider-card">
              <div className="provider-image-container">
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="provider-image"
                />
              </div>
              <button className="provider-button">
                Learn more about<br></br> {provider.name}
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Providers;
