import React from "react";
import { useRouter } from "next/router";

const Providers = () => {
  const router = useRouter();

  const providers = [
    {
      name: "Dr. Dorizas",
      image: "/images/doctors/AndrewDorizas_headshot.webp",
      path: "/about/providers/DrDorizas",
    },
    {
      name: "Dr. Nassar",
      image: "/images/doctors/AmerNassar_headshot.webp",
      path: "/about/providers/DrNassar",
    },
    {
      name: "Dr. Galler",
      image: "/images/doctors/BlakeGaller_headshot.webp",
      path: "/about/providers/DrGaller",
    },
  ];

  const handleProviderClick = (path) => {
    router.push(path);
  };

  return (
    <>
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
              <button
                className="provider-button"
                onClick={() => handleProviderClick(provider.path)}
              >
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
