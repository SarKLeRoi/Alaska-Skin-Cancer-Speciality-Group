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
function providers() {
  const baseUrl = "https://www.alaskaskincancer.com";

  return (
    <>
      {/* <Preloader /> */}
      <Head>
        <title>The Providers - Alaska Skin Cancer Specialty Group</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Meet the Alaska Skin Cancer Specialty Group providers - board-certified specialists in dermatology, Mohs surgery, and plastic surgery. Expert doctors providing comprehensive skin cancer treatment across Alaska."
        />
        <meta
          property="og:title"
          content="The Providers - Alaska Skin Cancer Specialty Group"
        />
        <meta
          property="og:description"
          content="Meet the Alaska Skin Cancer Specialty Group providers - board-certified specialists in dermatology, Mohs surgery, and plastic surgery. Expert doctors providing comprehensive skin cancer treatment across Alaska."
        />
        <meta
          property="og:image"
          content="https://www.alaskaskincancer.com/images/logo.webp"
        />
        <meta
          property="og:url"
          content="https://www.alaskaskincancer.com/about/providers"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Alaska Skin Cancer Specialty Group"
        />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="The Providers - Alaska Skin Cancer Specialty Group"
        />
        <meta
          name="twitter:description"
          content="Meet the Alaska Skin Cancer Specialty Group providers - board-certified specialists in dermatology, Mohs surgery, and plastic surgery."
        />
        <meta
          name="twitter:image"
          content="https://www.alaskaskincancer.com/images/logo.webp"
        />

        <meta
          name="keywords"
          content="Alaska skin cancer doctors, skin cancer specialists, Mohs surgery Alaska, dermatology Alaska, plastic surgery Alaska, Dr. Dorizas, Dr. Galler, Dr. Nassar"
        />
        <meta name="author" content="Alaska Skin Cancer Specialty Group"></meta>
        <link rel="icon" href="/images/favicon.png" />
        <link rel="canonical" href={`${baseUrl}/about/providers`} />
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
              "Meet the Alaska Skin Cancer Specialty Group providers - board-certified specialists in dermatology, Mohs surgery, and plastic surgery. Expert doctors providing comprehensive skin cancer treatment across Alaska.",
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
                item: "https://www.alaskaskincancer.com/about",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "The Providers",
                item: "https://www.alaskaskincancer.com/about/providers",
              },
            ],
          }),
        }}
      />

      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-NJLRMTQK48`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NJLRMTQK48');
        `}
      </Script>
      <div>
        <TitleRow />
        <Navbar />
        <main>
          <section className="section1" aria-hidden="true"></section>
          <section className="hero-section" aria-labelledby="hero-heading">
            <div className="full-width-photo first-photo with-overlay">
              <img
                src="/images/AboutTheGroup1.webp"
                alt="Alaska Skin Cancer Specialty Group medical providers - board-certified dermatologists and plastic surgeons"
              />
              <div className="image-overlay-title">
                <h1 id="hero-heading" className="overlay-title">
                  Our Providers
                </h1>
              </div>
              <div className="image-overlay-subtitle">
                <h2 className="overlay-subtitle">
                  Board-Certified Specialists in Dermatology And Plastic Surgery
                </h2>
              </div>
            </div>
          </section>
          <LogoTab />
          <section
            className="providers-showcase"
            aria-labelledby="providers-heading"
          >
            <h2 id="providers-heading" className="sr-only">
              Meet Our Medical Specialists
            </h2>
            <Providers />
          </section>
          <LogoTab />
        </main>
      </div>
      <EndingSection />
    </>
  );
}

export default providers;
