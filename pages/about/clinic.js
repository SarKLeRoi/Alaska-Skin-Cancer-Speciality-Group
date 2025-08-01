import React from "react";
import Head from "next/head";
import Script from "next/script";
import Navbar from "../../components/Navbar";
import TitleRow from "../../components/TitleRow";
import TextCentered from "../../components/TextCentered";
import LogoTab from "../../components/Logo-Tab";
import Logos from "../../components/Logos";
import Providers from "../../components/Providers";
import EndingSection from "../../components/EndingSection";
function group() {
  const baseUrl = "https://www.alaskaskincancer.com";

  return (
    <>
      {/* <Preloader /> */}
      <Head>
        <title>About - Alaska Skin Cancer Specialty Group</title>
        <meta
          name="description"
          content="Learn about the Alaska Skin Cancer Specialty Group - a collaborative team of dermatologists, Mohs surgeons, and plastic surgeons providing comprehensive skin cancer treatment across Alaska."
        />
        <meta
          property="og:title"
          content="About - Alaska Skin Cancer Specialty Group"
        />
        <meta
          property="og:description"
          content="Learn about the Alaska Skin Cancer Specialty Group - a collaborative team of dermatologists, Mohs surgeons, and plastic surgeons providing comprehensive skin cancer treatment across Alaska."
        />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content="https://www.alaskaskincancer.com" />
        <meta
          name="keywords"
          content="Alaska skin cancer group, skin cancer specialists, Mohs surgery Alaska, dermatology Alaska, skin cancer treatment Alaska, skin cancer doctors Alaska"
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
            image: "https://www.alaskaskincancer.com/images/logo.png",
            logo: "https://www.alaskaskincancer.com/images/logo.png",
            description:
              "Learn about the Alaska Skin Cancer Specialty Group - a collaborative team of dermatologists, Mohs surgeons, and plastic surgeons providing comprehensive skin cancer treatment across Alaska.",
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
        <section className="section1"></section>

        {/* First Photo - Full Width */}
        <div className="full-width-photo first-photo">
          <img
            src="/images/AboutTheGroup1.webp"
            alt="Alaska Skin Cancer Specialty Group"
          />
        </div>

        <LogoTab />
        <TextCentered
          newPadding={"20px"}
          title={"Alaska Skin Cancer Speciality Group"}
          description={`Dedicated to helping patients in Palmer, Wasilla, and Anchorage and the rest of the state, the Alaska Skin Cancer Specialty Group comprises a collaboration between highly trained physicians with expertise in dermatology, Mohs surgery, and Plastic and Reconstructive Surgery and radiation therapy. Our group employs cutting-edge technology and an evidence-based approach to diagnose and treat skin cancer, including basal cell carcinoma, squamous cell carcinoma, and melanoma. By combining our collective experience, we deliver personalized care that addresses both the medical and cosmetic aspects of skin cancer treatment. 

The Group’s mission is to provide compassionate, patient-centered care, ensuring each individual understands their options and feels supported every step of the way. Whether you require a skin cancer screening, a specialized surgical procedure, or a comprehensive reconstruction plan, the Alaska Skin Cancer Specialty Group is committed to helping you achieve optimal outcomes. Their collaborative approach ensures that every patient receives timely, targeted, and effective treatment.`}
        />
        <LogoTab />
        {/* Second Photo - Full Width */}
        <div className="full-width-photo">
          <img
            src="/images/AboutTheGroup2.webp"
            alt="Alaska Skin Cancer Specialty Group"
          />
        </div>
        <LogoTab />
        <Logos />
      </div>
      <Providers />
      <LogoTab />
      <EndingSection />
    </>
  );
}

export default group;
