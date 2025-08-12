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
function melanoma() {
  const baseUrl = "https://www.alaskaskincancer.com";

  return (
    <>
      {/* <Preloader /> */}
      <Head>
        <title>
          Melanoma In Situ Treatment - Alaska Skin Cancer Specialty Group
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Expert treatment of melanoma in situ, the earliest stage of melanoma. Early detection and surgical excision by board-certified dermatologists in Alaska. ABCDE skin cancer screening."
        />
        <meta
          property="og:title"
          content="Melanoma In Situ Treatment - Alaska Skin Cancer Specialty Group"
        />
        <meta
          property="og:description"
          content="Expert treatment of melanoma in situ, the earliest stage of melanoma. Early detection and surgical excision by board-certified dermatologists in Alaska."
        />
        <meta
          property="og:image"
          content="https://www.alaskaskincancer.com/images/skin-cancer/Melanoma.webp"
        />
        <meta
          property="og:url"
          content="https://www.alaskaskincancer.com/skinCancer/melanoma"
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
          content="Melanoma In Situ Treatment - Alaska Skin Cancer Specialty Group"
        />
        <meta
          name="twitter:description"
          content="Expert treatment of melanoma in situ, the earliest stage of melanoma. Early detection and surgical excision by board-certified dermatologists in Alaska."
        />
        <meta
          name="twitter:image"
          content="https://www.alaskaskincancer.com/images/skin-cancer/Melanoma.webp"
        />

        <meta
          name="keywords"
          content="melanoma in situ, melanoma treatment Alaska, ABCDE melanoma, skin cancer screening, dermatology Alaska, melanoma specialist, early melanoma detection"
        />
        <meta name="author" content="Alaska Skin Cancer Specialty Group"></meta>
        <link rel="icon" href="/images/favicon.png" />
        <link rel="canonical" href={`${baseUrl}/skinCancer/melanoma`} />
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
            name: "Melanoma In Situ",
            description:
              "Melanoma in situ is the earliest stage of melanoma, where abnormal melanocytes are confined to the top layer of the skin and have not yet invaded deeper tissues.",
            possibleTreatment: {
              "@type": "MedicalProcedure",
              name: "Surgical Excision",
              description:
                "Treatment typically involves surgical excision with clear margins to ensure complete removal.",
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
              "Expert treatment of melanoma in situ, the earliest stage of melanoma. Early detection and surgical excision by board-certified dermatologists in Alaska.",
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
                name: "Melanoma Treatment",
              },
              {
                "@type": "MedicalProcedure",
                name: "Skin Cancer Screening",
              },
              {
                "@type": "MedicalProcedure",
                name: "Dermatology Services",
              },
              {
                "@type": "MedicalProcedure",
                name: "Skin Biopsy",
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
                name: "Melanoma",
                item: "https://www.alaskaskincancer.com/skinCancer/melanoma",
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
                src="/images/skin-cancer/2.webp"
                alt="Melanoma in situ examination and treatment - expert dermatology care for early melanoma detection"
              />
              {/* <div className="image-overlay-title">
                <h1 id="hero-heading" className="overlay-title black-subtitle">Skin Cancer</h1>
              </div>
              <div className="image-overlay-subtitle">
                <h2 className="overlay-subtitle black-subtitle">
                  MELANOMA IN SITU
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
              title={"Melanoma In Situ"}
              description={`Melanoma in situ is the earliest stage of melanoma, where abnormal melanocytes are confined to the top layer of the skin (epidermis) and have not yet invaded deeper tissues. This makes early detection and treatment crucial, as it significantly reduces the risk of progression to invasive melanoma.

At our practice, we use advanced diagnostic techniques to accurately identify melanoma in situ, including dermoscopy and, when necessary, biopsy with expert pathology evaluation. Treatment typically involves surgical excision with clear margins to ensure complete removal. Early intervention provides the best prognosis, and our team is dedicated to guiding patients through every step of their care with expertise and compassion.`}
            />
          </section>
          <LogoTab />
          <section className="abcde-section" aria-labelledby="abcde-heading">
            <div className="clinic-section">
              <div className="clinic-content">
                <div className="clinic-text">
                  <h2 id="abcde-heading">The ABCDEs of Melanoma</h2>
                  <p className="clinic-description">
                    It is essential for patients to be vigilant about changes in
                    their skin and to regularly perform self-examinations. The
                    ABCDEs of melanoma serve as a helpful guide in identifying
                    suspicious lesions:
                  </p>
                  <ul className="clinic-description">
                    <li>
                      <strong>A - Asymmetry:</strong> One half of the mole or
                      spot does not match the other.
                    </li>
                    <li>
                      <strong>B - Border:</strong> The edges are irregular,
                      ragged, or blurred.
                    </li>
                    <li>
                      <strong>C - Color:</strong> The lesion has multiple colors
                      or an uneven distribution of color.
                    </li>
                    <li>
                      <strong>D - Diameter:</strong> Melanomas are often larger
                      than 6mm (about the size of a pencil eraser), but they can
                      be smaller.
                    </li>
                    <li>
                      <strong>E - Evolving:</strong> The mole is changing in
                      size, shape, or color over time.
                    </li>
                  </ul>
                  <p className="clinic-description">
                    If you notice any of these warning signs, it is important to
                    seek evaluation from a dermatologist as early detection
                    leads to the best outcomes.
                  </p>
                </div>
                <div className="clinic-image">
                  <img
                    src="/images/skin-cancer/Melanoma.webp"
                    alt="Melanoma example showing ABCDE characteristics - asymmetry, border, color, diameter, evolution"
                    className="clinic-photo"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <EndingSection />
    </>
  );
}

export default melanoma;
