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
function basalCellCarcinoma() {
  const baseUrl = "https://www.alaskaskincancer.com";

  return (
    <>
      {/* <Preloader /> */}
      <Head>
        <title>
          Basal Cell Carcinoma Treatment - Alaska Skin Cancer Specialty Group
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Expert treatment of basal cell carcinoma, the most common skin cancer. Mohs surgery, surgical excision, and plastic reconstruction by board-certified specialists in Alaska."
        />
        <meta
          property="og:title"
          content="Basal Cell Carcinoma Treatment - Alaska Skin Cancer Specialty Group"
        />
        <meta
          property="og:description"
          content="Expert treatment of basal cell carcinoma, the most common skin cancer. Mohs surgery, surgical excision, and plastic reconstruction by board-certified specialists in Alaska."
        />
        <meta
          property="og:image"
          content="https://www.alaskaskincancer.com/images/skin-cancer/BasalCell.webp"
        />
        <meta
          property="og:url"
          content="https://www.alaskaskincancer.com/skinCancer/basalCellCarcinoma"
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
          content="Basal Cell Carcinoma Treatment - Alaska Skin Cancer Specialty Group"
        />
        <meta
          name="twitter:description"
          content="Expert treatment of basal cell carcinoma, the most common skin cancer. Mohs surgery, surgical excision, and plastic reconstruction by board-certified specialists in Alaska."
        />
        <meta
          name="twitter:image"
          content="https://www.alaskaskincancer.com/images/skin-cancer/BasalCell.webp"
        />

        <meta
          name="keywords"
          content="basal cell carcinoma, BCC, skin cancer Alaska, Mohs surgery, skin cancer treatment, dermatology Alaska, skin cancer specialist"
        />
        <meta name="author" content="Alaska Skin Cancer Specialty Group"></meta>
        <link rel="icon" href="/images/favicon.png" />
        <link
          rel="canonical"
          href={`${baseUrl}/skinCancer/basalCellCarcinoma`}
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
            name: "Basal Cell Carcinoma",
            description:
              "Basal cell carcinoma is the most common type of skin cancer, arising from the basal cells in the lowest layer of the epidermis.",
            possibleTreatment: [
              {
                "@type": "MedicalProcedure",
                name: "Mohs Micrographic Surgery",
              },
              {
                "@type": "MedicalProcedure",
                name: "Surgical Excision",
              },
              {
                "@type": "MedicalProcedure",
                name: "Plastic Reconstruction",
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
              "Expert treatment of basal cell carcinoma, the most common skin cancer. Mohs surgery, surgical excision, and plastic reconstruction by board-certified specialists in Alaska.",
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
                name: "Basal Cell Carcinoma Treatment",
              },
              {
                "@type": "MedicalProcedure",
                name: "Skin Cancer Treatment",
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
                name: "Skin Cancer",
                item: "https://www.alaskaskincancer.com/skinCancer",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Basal Cell Carcinoma",
                item: "https://www.alaskaskincancer.com/skinCancer/basalCellCarcinoma",
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
                src="/images/skin-cancer/3.webp"
                alt="Basal cell carcinoma examination and treatment - expert dermatology care for the most common skin cancer"
              />
              {/* <div className="image-overlay-title">
                <h1 id="hero-heading" className="overlay-title black-subtitle">Skin Cancer</h1>
              </div>
              <div className="image-overlay-subtitle">
                <h2 className="overlay-subtitle black-subtitle">
                  BASAL CELL CARCINOMA
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
              title={"Basal Cell Carcinoma"}
              description={`Basal cell carcinoma is the most common type of skin cancer, arising from the basal cells in the lowest layer of the epidermis. BCC typically grows slowly and rarely spreads to distant parts of the body, but if left untreated, it can become locally invasive and disfiguring.

Our practice is experienced in diagnosing and treating BCC using tools such as dermoscopy and skin biopsy reviewed by our expert dermatopathologists. Treatment usually involves surgical excision with a focus on achieving clear margins while preserving healthy tissue. In certain areas (face, hands, legs, scalp etc..) Mohs micrographic surgery may be recommended to ensure complete removal, particularly in cosmetically sensitive areas. This is the gold standard of care providing 99% cure rates while limiting the amount of skin removed. In those cases we utilize our partners in Plastic Surgery to perform cosmetically enhanced reconstructions with minimal scarring.`}
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
                  <h2
                    id="warning-signs-heading"
                    className="warning-signs-heading"
                  >
                    Warning Signs of Basal Cell Carcinoma
                  </h2>
                  <p className="clinic-description">
                    Patients should be attentive to persistent, non-healing
                    lesions, especially on sun-exposed areas. Warning signs of
                    BCC include:
                  </p>
                  <ul className="clinic-description">
                    <li>Open sores that bleed or crust and do not heal.</li>
                    <li>
                      Pearly or waxy bumps, often with visible blood vessels.
                    </li>
                    <li>Reddish, irritated patches that may itch or hurt.</li>
                    <li>Scar-like areas with poorly defined borders.</li>
                  </ul>
                  <p className="clinic-description">
                    Early diagnosis allows for more conservative treatment and
                    optimal cosmetic outcomes. Regular skin exams and sun
                    protection are key to reducing risk and promoting early
                    detection.
                  </p>
                </div>
                <div className="clinic-image">
                  <img
                    src="/images/skin-cancer/BasalCell.webp"
                    alt="Basal cell carcinoma example showing typical appearance and characteristics"
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

export default basalCellCarcinoma;
