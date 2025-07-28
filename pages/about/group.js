import React from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import TitleRow from "../../components/TitleRow";
import VideoBackground from "../../components/VideoBackground";
import TextCentered from "../../components/TextCentered";
import LogoTab from "../../components/Logo-Tab";
import EndingSection from "../../components/EndingSection";
function group() {
  const baseUrl = "https://www.nassarplasticsurgery.com";
  const logos = [
    "/images/society-logos/AAD.png",
    "/images/society-logos/ABPS.png",
    "/images/society-logos/ABSlogoLH.png",
    "/images/society-logos/ASMS.png",
    "/images/society-logos/ASPS.png",
    "/images/society-logos/DART.png",
    "/images/society-logos/FSDS.png",
  ];
  const providers = [
    {
      name: "Dr. Dorizas",
      image: "/images/doctors/AndrewDorizas_headshot.jpg",
    },
    {
      name: "Dr. Nassar",
      image: "/images/doctors/AmerNassar_headshot.jpg",
    },
    {
      name: "Dr. Galler",
      image: "/images/doctors/BlakeGaller_headshot.jpg",
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
        <section className="section1"></section>
        <LogoTab />
        <TextCentered
          newPadding={"20px"}
          title={"Alaska Skin Cancer Speciality Group"}
          description={`Dedicated to helping patients in Palmer, Wasilla, and Anchorage and the rest of the state, the Alaska Skin Cancer Specialty Group comprises a collaboration between highly trained physicians with expertise in dermatology, Mohs surgery, and Plastic and Reconstructive Surgery and radiation therapy. Our group employs cutting-edge technology and an evidence-based approach to diagnose and treat skin cancer, including basal cell carcinoma, squamous cell carcinoma, and melanoma. By combining our collective experience, we deliver personalized care that addresses both the medical and cosmetic aspects of skin cancer treatment. 

The Group’s mission is to provide compassionate, patient-centered care, ensuring each individual understands their options and feels supported every step of the way. Whether you require a skin cancer screening, a specialized surgical procedure, or a comprehensive reconstruction plan, the Alaska Skin Cancer Specialty Group is committed to helping you achieve optimal outcomes. Their collaborative approach ensures that every patient receives timely, targeted, and effective treatment.`}
        />
        <LogoTab />
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
      <EndingSection />
    </>
  );
}

export default group;
