import React from "react";
import { useRouter } from "next/router";

const Providers = () => {
  const router = useRouter();

  const providers = [
    {
      name: "Dr. Dorizas",
      fullName: "Dr. Andrew S. Dorizas, MD, FAAD, ACMS",
      title: "Double Board-Certified Dermatologist and Mohs Surgeon",
      image: "/images/doctors/AndrewDorizas_headshot.webp",
      path: "/about/providers/DrDorizas",
    },
    {
      name: "Dr. Nassar",
      fullName: "Dr. Amer H. Nassar, M.D.",
      title: "Double Board-Certified Plastic and Reconstructive Surgeon",
      image: "/images/doctors/AmerNassar_headshot.webp",
      path: "/about/providers/DrNassar",
    },
    {
      name: "Dr. Galler",
      fullName: "Dr. Blake R. Galler, D.O. FAAD",
      title: "Board-Certified Dermatologist",
      image: "/images/doctors/BlakeGaller_headshot.webp",
      path: "/about/providers/DrGaller",
    },
  ];

  const handleProviderClick = (path) => {
    router.push(path);
  };

  const handleKeyDown = (event, path) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleProviderClick(path);
    }
  };

  return (
    <>
      <section className="providers-section" aria-labelledby="providers-title">
        <h2 id="providers-title" className="providers-title">
          Meet Our Providers
        </h2>
        <div
          className="providers-grid"
          role="grid"
          aria-label="Alaska Skin Cancer Specialty Group medical providers"
        >
          {providers.map((provider, index) => (
            <article
              key={index}
              className="provider-card"
              role="gridcell"
              aria-labelledby={`provider-name-${index}`}
            >
              <div className="provider-image-container">
                <img
                  src={provider.image}
                  alt={`Professional headshot of ${provider.fullName}, ${provider.title}`}
                  className="provider-image"
                  role="img"
                />
              </div>
              <button
                id={`provider-name-${index}`}
                className="provider-button"
                onClick={() => handleProviderClick(provider.path)}
                onKeyDown={(e) => handleKeyDown(e, provider.path)}
                aria-label={`Learn more about ${provider.fullName}, ${provider.title}`}
                type="button"
              >
                Learn more about
                <br /> {provider.name}
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Providers;
