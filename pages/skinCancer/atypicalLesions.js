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
function atypicalLesions() {
  const baseUrl = "https://www.alaskaskincancer.com";

  return (
    <>
      {/* <Preloader /> */}
      <Head>
        <title>
          Atypical Lesions Treatment - Alaska Skin Cancer Specialty Group
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Expert treatment of atypical skin lesions including lentigo maligna, DFSP, and AFX. Mohs micrographic surgery for complex skin conditions in Alaska. Board-certified dermatologists."
        />
        <meta
          property="og:title"
          content="Atypical Lesions Treatment - Alaska Skin Cancer Specialty Group"
        />
        <meta
          property="og:description"
          content="Expert treatment of atypical skin lesions including lentigo maligna, DFSP, and AFX. Mohs micrographic surgery for complex skin conditions in Alaska."
        />
        <meta
          property="og:image"
          content="https://www.alaskaskincancer.com/images/skin-cancer/4.webp"
        />
        <meta
          property="og:url"
          content="https://www.alaskaskincancer.com/skinCancer/atypicalLesions"
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
          content="Atypical Lesions Treatment - Alaska Skin Cancer Specialty Group"
        />
        <meta
          name="twitter:description"
          content="Expert treatment of atypical skin lesions including lentigo maligna, DFSP, and AFX. Mohs micrographic surgery for complex skin conditions in Alaska."
        />
        <meta
          name="twitter:image"
          content="https://www.alaskaskincancer.com/images/skin-cancer/4.webp"
        />

        <meta
          name="keywords"
          content="atypical lesions, lentigo maligna, DFSP, dermatofibrosarcoma protuberans, atypical fibroxanthoma, AFX, Mohs surgery, Alaska dermatology, complex skin lesions"
        />
        <meta name="author" content="Alaska Skin Cancer Specialty Group"></meta>
        <link rel="icon" href="/images/favicon.png" />
        <link rel="canonical" href={`${baseUrl}/skinCancer/atypicalLesions`} />
      </Head>

      {/* Structured Data - Medical Condition */}
      <Script
        id="medical-condition-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalCondition",
            name: "Atypical Skin Lesions",
            description:
              "Atypical skin lesions that demonstrate concerning features under clinical or microscopic examination, including lentigo maligna, dermatofibrosarcoma protuberans (DFSP), and atypical fibroxanthoma (AFX).",
            possibleTreatment: {
              "@type": "MedicalProcedure",
              name: "Mohs Micrographic Surgery",
              description:
                "Precision surgical technique that maximizes tissue preservation while ensuring complete removal of atypical lesions.",
            },
            associatedAnatomy: {
              "@type": "AnatomicalStructure",
              name: "Skin",
            },
          }),
        }}
      />

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
              "Expert treatment of atypical skin lesions including lentigo maligna, DFSP, and AFX. Mohs micrographic surgery for complex skin conditions in Alaska.",
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
                name: "Atypical Lesion Treatment",
              },
              {
                "@type": "MedicalProcedure",
                name: "Skin Cancer Treatment",
              },
              {
                "@type": "MedicalProcedure",
                name: "Dermatology Services",
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
                name: "Skin Cancer",
                item: "https://www.alaskaskincancer.com/skinCancer",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Atypical Lesions",
                item: "https://www.alaskaskincancer.com/skinCancer/atypicalLesions",
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
          <section className="hero-section" aria-labelledby="hero-heading">
            <div className="full-width-photo first-photo with-overlay">
              <img
                src="/images/skin-cancer/4.webp"
                alt="Atypical skin lesions examination and treatment - specialized dermatology care for complex skin conditions"
              />
              {/* <div className="image-overlay-title">
                <h1 id="hero-heading" className="overlay-title black-subtitle">Skin Cancer</h1>
              </div>
              <div className="image-overlay-subtitle">
                <h2 className="overlay-subtitle black-subtitle">
                  ATYPICAL LESIONS
                </h2>
              </div> */}
            </div>
          </section>

          <LogoTab />
          <section
            className="content-section"
            aria-labelledby="content-heading"
          >
            <TextCentered
              newPadding={"5px"}
              title={"Atypical Lesions (Which May Qualify for Mohs Surgery)"}
              description={`Atypical skin lesions are those that demonstrate concerning features under clinical or microscopic examination but are not necessarily melanoma. Certain atypical lesions, including lentigo maligna, dermatofibrosarcoma protuberans (DFSP), high-risk squamous cell carcinoma, and atypical fibroxanthoma (AFX), may qualify for Mohs micrographic surgery due to their potential for aggressive behavior or recurrence.

Mohs surgery is the preferred treatment for these lesions when they occur in cosmetically or functionally sensitive areas, such as the face, ears, or hands, as it maximizes tissue preservation while ensuring complete removal. Our practice prioritizes precision, utilizing state-of-the-art techniques to deliver the highest level of care for patients with complex or high-risk skin conditions.`}
            />
          </section>
          <LogoTab />
        </main>
      </div>
      <EndingSection />
    </>
  );
}

export default atypicalLesions;
