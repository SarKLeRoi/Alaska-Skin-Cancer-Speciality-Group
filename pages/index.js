import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import TitleRow from "../components/TitleRow";
import VideoBackground from "../components/VideoBackground";
import TextCentered from "../components/TextCentered";
import LogoTab from "../components/Logo-Tab";
import EndingSection from "../components/EndingSection";
function HomePage() {
  const baseUrl = "https://www.nassarplasticsurgery.com";
  const logos = [
    "/images/society-logos/AAD.webp",
    "/images/society-logos/ABPS.webp",
    "/images/society-logos/ABSlogoLH.webp",
    "/images/society-logos/ASMS.webp",
    "/images/society-logos/ASPS.webp",
    "/images/society-logos/DART.webp",
    "/images/society-logos/FSDS.webp",
  ];
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
  const mySVG = (
    <img
      src="/images/Triangle-Logo.png"
      alt="Triangle Logo"
      className="homepage-triangle-svg"
    />
  );

  return (
    <>
      {/* <Preloader /> */}
      <Head>
        <title>Alaska Skin Cancer</title>
        <meta
          name="description"
          content="Discover refined elegance and self-assurance with Dr. Amer Nassar, a Harvard-trained Plastic Surgeon renowned for personalized care and an artistic approach. Experience top-tier surgical expertise that enhances your natural beauty and delivers exceptional results."
        />
        <meta property="og:title" content="Alaska Skin Cancer" />
        <meta
          property="og:description"
          content="Discover refined elegance and self-assurance with Dr. Amer Nassar, a Harvard-trained Plastic Surgeon renowned for personalized care and an artistic approach. Experience top-tier surgical expertise that enhances your natural beauty and delivers exceptional results."
        />
        <meta
          property="og:image"
          content="/images/About_Amer_Transparent.webp"
        />
        <meta
          property="og:url"
          content="https://www.nassarplasticsurgery.com"
        />
        <meta
          name="keywords"
          content="Plastic Surgery, Cosmetic Procedures, Dr. Amer Nassar, Dr. Nassar, Alaska, Wasilla, Palmer, Kenai, Anchorage, plastic surgeon in Alaska, surgeon in Alaska, plastic surgeon in Anchorage, plastic surgeon in Kenai, plastic surgeon in Palmer, plastic surgeon in Wasilla"
        />
        <meta name="author" content="Dr. Amer Nassar"></meta>
        <link rel="icon" href="/images/favicon.png" />
        <link rel="canonical" href={baseUrl} />
      </Head>
      <div>
        <TitleRow />
        <Navbar />
        <section className="section1">
          <VideoBackground />
        </section>
        <div className="grid-container">
          <div className="grid-item">
            {/* <img
              src="path-to-your-svg1.svg"
              alt="Dermatology"
              className="grid-image"
            /> */}
            {mySVG}
            <p>
              Multispeciality group including Dermatology, Moh’s Surgery,
              Radiation Therapy and Plastic & Reconstructive Surgery
            </p>
          </div>
          <div className="grid-item">
            {mySVG}
            <p>Thousands of successfully treated patients</p>
          </div>
          <div className="grid-item">
            {mySVG}
            <p>
              Nationally recognized gold-standard of care, therapy, and
              treatments
            </p>
          </div>
          <div className="grid-item">
            {mySVG}
            <p>Virtually all insurances accepted</p>
          </div>
        </div>
        <div className="homepage-thirdsection-title">
          <h1>Alaska skin cancer </h1>
          <br></br>
          <h2>Speciality group</h2>
        </div>
        <TextCentered
          newPadding={"20px"}
          description={`Skin cancer treatment requires a comprehensive approach to diagnose, treat and reconstruct the various types of cancers. The Alaska Skin Cancer Speciality Group is a multi-speciality group of physicians and surgeons who specialize in all aspects of skin cancer treatment, including biopsies and diagnostics, surgical treatment, Moh’s Micrographic Surgery, Radiation therapy, and definitive reconstruction by a Plastic Surgeon. We pride ourselves in being the only group in Alaska to offer such an extensive and thorough approach to skin cancer management for all of our patients.`}
        />
        <div className="logos-container">
          {logos.map((logo, index) => (
            <div key={index} className="logo-item">
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
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
      <LogoTab />
      <section className="section4">
        <h1>About Skin Cancer</h1>
        <div className="body-parts-image-container">
          <a href="/basalCellCarcinoma" className="image-link">
            <img
              src="images/skin-cancer/BasalCell.webp"
              loading="lazy"
              alt="Face plastic surgeries"
            />
            <span className="image-text">Basal Cell Carcinoma</span>
          </a>
          <a href="/squamousCellCarcinoma" className="image-link">
            <img
              src="images/skin-cancer/SquamousCell.webp"
              loading="lazy"
              alt="Squamous Cell Carcinoma"
            />
            <span className="image-text">Squamous Cell Carcinoma</span>
          </a>
          <a href="/melanoma" className="image-link">
            <img
              src="images/skin-cancer/Melanoma.webp"
              loading="lazy"
              alt="Melanoma"
            />
            <span className="image-text">Melanoma</span>
          </a>
        </div>
        <div className="view-more-button-container">
          <button className="view-more-button">View More</button>
        </div>
      </section>
      <LogoTab />
      <EndingSection />
    </>
  );
}

export default HomePage;
