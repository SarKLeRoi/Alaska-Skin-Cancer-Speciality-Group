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
function squamousCellCarcinoma() {
  const baseUrl = "https://www.alaskaskincancer.com";

  return (
    <>
      {/* <Preloader /> */}
      <Head>
        <title>
          Squamous Cell Carcinoma Treatment - Alaska Skin Cancer Specialty Group
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Expert treatment of squamous cell carcinoma, the second most common skin cancer. Mohs surgery and surgical excision by board-certified specialists in Alaska. SCC treatment and prevention."
        />
        <meta
          property="og:title"
          content="Squamous Cell Carcinoma Treatment - Alaska Skin Cancer Specialty Group"
        />
        <meta
          property="og:description"
          content="Expert treatment of squamous cell carcinoma, the second most common skin cancer. Mohs surgery and surgical excision by board-certified specialists in Alaska."
        />
        <meta
          property="og:image"
          content="https://www.alaskaskincancer.com/images/skin-cancer/SquamousCell.webp"
        />
        <meta
          property="og:url"
          content="https://www.alaskaskincancer.com/skinCancer/squamosCellCarcinoma"
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
          content="Squamous Cell Carcinoma Treatment - Alaska Skin Cancer Specialty Group"
        />
        <meta
          name="twitter:description"
          content="Expert treatment of squamous cell carcinoma, the second most common skin cancer. Mohs surgery and surgical excision by board-certified specialists in Alaska."
        />
        <meta
          name="twitter:image"
          content="https://www.alaskaskincancer.com/images/skin-cancer/SquamousCell.webp"
        />

        <meta
          name="keywords"
          content="squamous cell carcinoma, SCC, skin cancer Alaska, Mohs surgery, actinic keratoses, dermatology Alaska, skin cancer treatment"
        />
        <meta name="author" content="Alaska Skin Cancer Specialty Group"></meta>
        <link rel="icon" href="/images/favicon.png" />
        <link
          rel="canonical"
          href={`${baseUrl}/skinCancer/squamosCellCarcinoma`}
        />
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
            name: "Squamous Cell Carcinoma",
            description:
              "Squamous cell carcinoma is the second most common type of skin cancer, originating from keratinocytes in the upper layers of the skin.",
            possibleTreatment: [
              {
                "@type": "MedicalProcedure",
                name: "Mohs Micrographic Surgery",
              },
              {
                "@type": "MedicalProcedure",
                name: "Surgical Excision",
              },
            ],
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
              "Expert treatment of squamous cell carcinoma, the second most common skin cancer. Mohs surgery and surgical excision by board-certified specialists in Alaska.",
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
                name: "Squamous Cell Carcinoma Treatment",
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
                name: "Squamous Cell Carcinoma",
                item: "https://www.alaskaskincancer.com/skinCancer/squamosCellCarcinoma",
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
                src="/images/skin-cancer/1.webp"
                alt="Squamous cell carcinoma examination and treatment - expert dermatology care for aggressive skin cancer"
              />
              {/* <div className="image-overlay-title">
                <h1 id="hero-heading" className="overlay-title black-subtitle">Skin Cancer</h1>
              </div>
              <div className="image-overlay-subtitle">
                <h2 className="overlay-subtitle black-subtitle">
                  SQUAMOUS CELL CARCINOMA
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
              title={"Squamous Cell Carcinoma"}
              description={`Squamous cell carcinoma is the second most common type of skin cancer, originating from keratinocytes in the upper layers of the skin. SCC can be more aggressive than BCC, with a potential to invade deeper tissues or, in rare cases, metastasize, especially when arising on high-risk areas like the lips, ears, or in immunocompromised patients.

We are committed to identifying SCC early using clinical evaluation, dermoscopy, and biopsy with histological analysis. Treatment typically involves surgical excision with Mohs surgery. Early, complete removal is critical for preventing spread and achieving optimal outcomes.`}
            />
          </section>
          <LogoTab />
          <section
            className="warning-signs-section"
            aria-labelledby="warning-signs-heading"
          >
            <div className="clinic-section">
              <div className="clinic-content">
                <div className="clinic-text">
                  <h2 id="warning-signs-heading">
                    Warning Signs of Squamous Cell Carcinoma
                  </h2>
                  <p className="clinic-description">
                    Patients should be attentive to persistent, non-healing
                    lesions, especially on sun-exposed areas. Signs of SCC may
                    include:
                  </p>
                  <ul className="clinic-description">
                    <li>A firm, red nodule or scaly patch.</li>
                    <li>A rough, crusted lesion that may bleed or ulcerate.</li>
                    <li>
                      A wart-like growth that persists or enlarges over time.
                    </li>
                    <li>A sore that heals and then reopens.</li>
                  </ul>
                  <p className="clinic-description">
                    Consistent sun protection and regular skin checks,
                    especially for individuals with a history of sun damage or
                    precancerous lesions like actinic keratoses, play a vital
                    role in prevention and early detection. If you notice any of
                    these signs, timely evaluation by a dermatologist is
                    essential.
                  </p>
                </div>
                <div className="clinic-image">
                  <img
                    src="/images/skin-cancer/SquamousCell.webp"
                    alt="Squamous cell carcinoma example showing typical appearance and characteristics"
                    className="clinic-photo"
                  />
                </div>
              </div>
            </div>
          </section>
          <LogoTab />
        </main>
      </div>
      <EndingSection />
    </>
  );
}

export default squamousCellCarcinoma;
