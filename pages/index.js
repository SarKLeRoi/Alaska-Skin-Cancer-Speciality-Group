import React from "react";
import Head from "next/head";
import Script from "next/script";
import Navbar from "../components/Navbar";
import TitleRow from "../components/TitleRow";
import VideoBackground from "../components/VideoBackground";
import TextCentered from "../components/TextCentered";
import LogoTab from "../components/Logo-Tab";
import Logos from "../components/Logos";
import Providers from "../components/Providers";
import EndingSection from "../components/EndingSection";
function HomePage() {
  const baseUrl = "https://www.nassarplasticsurgery.com";

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
        <title>
          Alaska Skin Cancer Specialty Group - Expert Skin Cancer Treatment
        </title>
        <meta
          name="description"
          content="Alaska Skin Cancer Specialty Group provides comprehensive skin cancer treatment including Mohs surgery, radiation therapy, and plastic reconstruction. Expert care in Palmer, Wasilla, and Anchorage."
        />
        <meta
          property="og:title"
          content="Alaska Skin Cancer Specialty Group - Expert Skin Cancer Treatment"
        />
        <meta
          property="og:description"
          content="Alaska Skin Cancer Specialty Group provides comprehensive skin cancer treatment including Mohs surgery, radiation therapy, and plastic reconstruction. Expert care in Palmer, Wasilla, and Anchorage."
        />
        <meta property="og:image" content="/images/logo.webp" />
        <meta property="og:url" content="https://www.alaskaskincancer.com" />
        <meta
          name="keywords"
          content="skin cancer treatment, Mohs surgery, basal cell carcinoma, squamous cell carcinoma, melanoma, Alaska, Palmer, Wasilla, Anchorage, dermatology, skin cancer specialist, skin cancer doctor, skin cancer surgery"
        />
        <meta name="author" content="Alaska Skin Cancer Specialty Group"></meta>
        <link rel="icon" href="/images/favicon.png" />
        <link rel="canonical" href={baseUrl} />
      </Head>

      {/* Structured Data - Medical Organization */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            name: "Alaska Skin Cancer Specialty Group",
            url: "https://www.alaskaskincancer.com",
            image: "https://www.alaskaskincancer.com/images/logo.webp",
            logo: "https://www.alaskaskincancer.com/images/logo.webp",
            description:
              "Comprehensive skin cancer treatment including Mohs surgery, radiation therapy, and plastic reconstruction. Expert care in Palmer, Wasilla, and Anchorage.",
            address: {
              "@type": "PostalAddress",
              addressCountry: "US",
              addressRegion: "Alaska",
            },
            areaServed: [
              {
                "@type": "Place",
                name: "Palmer, Alaska",
              },
              {
                "@type": "Place",
                name: "Wasilla, Alaska",
              },
              {
                "@type": "Place",
                name: "Anchorage, Alaska",
              },
            ],
            medicalSpecialty: "Dermatology",
            availableService: [
              {
                "@type": "MedicalProcedure",
                name: "Mohs Surgery",
              },
              {
                "@type": "MedicalProcedure",
                name: "Skin Cancer Treatment",
              },
              {
                "@type": "MedicalProcedure",
                name: "Radiation Therapy",
              },
              {
                "@type": "MedicalProcedure",
                name: "Plastic Reconstruction",
              },
            ],
          }),
        }}
      />

      {/* Structured Data - Breadcrumb */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.alaskaskincancer.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "About",
                item: "https://www.alaskaskincancer.com/about/group",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Services",
                item: "https://www.alaskaskincancer.com/#services",
              },
            ],
          }),
        }}
      />

      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-QDN4FFSPG8`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QDN4FFSPG8');
        `}
      </Script>

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
        <Logos />
      </div>
      <Providers />
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
