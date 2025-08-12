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
function radiationTherapy() {
  const baseUrl = "https://www.alaskaskincancer.com";

  return (
    <>
      {/* <Preloader /> */}
      <Head>
        <title>
          Radiation Therapy for Skin Cancer - Alaska Skin Cancer Specialty Group
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Expert radiation therapy for skin cancer in Alaska. Non-invasive treatment option for patients who cannot undergo surgery. Image-guided superficial radiation therapy (IGSRT)."
        />
        <meta
          property="og:title"
          content="Radiation Therapy for Skin Cancer - Alaska Skin Cancer Specialty Group"
        />
        <meta
          property="og:description"
          content="Expert radiation therapy for skin cancer in Alaska. Non-invasive treatment option for patients who cannot undergo surgery."
        />
        <meta
          property="og:image"
          content="https://www.alaskaskincancer.com/images/checkingMole2.webp"
        />
        <meta
          property="og:url"
          content="https://www.alaskaskincancer.com/treatmentOptions/radiationTherapy"
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
          content="Radiation Therapy for Skin Cancer - Alaska Skin Cancer Specialty Group"
        />
        <meta
          name="twitter:description"
          content="Expert radiation therapy for skin cancer in Alaska. Non-invasive treatment option for patients who cannot undergo surgery."
        />
        <meta
          name="twitter:image"
          content="https://www.alaskaskincancer.com/images/checkingMole2.webp"
        />

        <meta
          name="keywords"
          content="radiation therapy Alaska, skin cancer radiation, IGSRT, non-surgical skin cancer treatment, radiation oncology Alaska, superficial radiation therapy"
        />
        <meta name="author" content="Alaska Skin Cancer Specialty Group"></meta>
        <link rel="icon" href="/images/favicon.png" />
        <link
          rel="canonical"
          href={`${baseUrl}/treatmentOptions/radiationTherapy`}
        />
      </Head>

      {/* Structured Data - Medical Procedure */}
      <Script
        id="medical-procedure-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: "Radiation Therapy for Skin Cancer",
            description:
              "Radiation therapy is an effective, non-invasive treatment option for certain types of skin cancer using focused energy to target and destroy cancer cells.",
            bodyLocation: {
              "@type": "AnatomicalStructure",
              name: "Skin",
            },
            procedureType: "Radiation Oncology",
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
              "Expert radiation therapy for skin cancer in Alaska. Non-invasive treatment option for patients who cannot undergo surgery.",
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
            medicalSpecialty: "Radiation Oncology",
            availableService: [
              {
                "@type": "MedicalProcedure",
                name: "Radiation Therapy",
              },
              {
                "@type": "MedicalProcedure",
                name: "Image-Guided Superficial Radiation Therapy",
              },
              {
                "@type": "MedicalProcedure",
                name: "Non-Surgical Skin Cancer Treatment",
              },
              {
                "@type": "MedicalProcedure",
                name: "Skin Cancer Treatment",
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
                name: "Treatment Options",
                item: "https://www.alaskaskincancer.com/treatmentOptions",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Radiation Therapy",
                item: "https://www.alaskaskincancer.com/treatmentOptions/radiationTherapy",
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
                src="/images/Surgery.png"
                alt="Radiation therapy for skin cancer - non-invasive treatment alternative to surgery"
              />
              {/* <div className="image-overlay-title">
                <h1 id="hero-heading" className="overlay-title">Treatment Options</h1>
              </div>
              <div className="image-overlay-subtitle">
                <h2 className="overlay-subtitle">Radiation Therapy</h2>
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
              title={"Radiation Therapy for Skin Cancer"}
              description={`Radiation therapy is an effective, non-invasive treatment option for certain types of skin cancer. It uses focused energy to target and destroy cancer cells and can be particularly helpful when surgery is not ideal or preferred.`}
            />
          </section>
          <LogoTab />
          <section
            className="indications-section"
            aria-labelledby="indications-heading"
          >
            <div className="clinic-section">
              <div className="clinic-content">
                <div className="clinic-text">
                  <h2 id="indications-heading" className="clinic-title">
                    When Radiation Therapy May Be Appropriate
                  </h2>
                  <p className="clinic-description">
                    While Mohs micrographic surgery remains the gold standard
                    for many skin cancers—especially those in cosmetically and
                    functionally sensitive areas—radiation therapy may be
                    appropriate in select situations, such as:
                  </p>
                  <ul className="clinic-description">
                    <li>
                      Patients who are not candidates for surgery due to medical
                      conditions or age
                    </li>
                    <li>
                      Lesions located in areas where surgery may pose a higher
                      risk of functional impairment
                    </li>
                    <li> Patients who decline surgical treatment</li>
                    <li>
                      Cases of recurrent skin cancer where prior surgeries limit
                      further excision
                    </li>
                  </ul>
                </div>
                <div className="clinic-image">
                  <img
                    src="/images/checkingMole2.webp"
                    alt="Radiation therapy consultation and treatment planning for skin cancer"
                    className="clinic-photo"
                  />
                </div>
              </div>
            </div>
          </section>
          <LogoTab />
          <section
            className="expectations-section"
            aria-labelledby="expectations-heading"
          >
            <TextCentered
              newPadding={"5px"}
              title={"What to Expect from Radiation Therapy"}
              description={`Radiation therapy is typically delivered over multiple sessions (up to 20) and offers good local control with minimal downtime. It avoids the need for incisions and may be especially useful in areas where tissue preservation is critical.

Radiation does not offer the same real-time margin control as Mohs surgery, and cosmetic changes—such as skin texture or pigment differences—may appear gradually over time. For these reasons, it is most often reserved for specific clinical scenarios rather than used as a first-line treatment in younger or surgically eligible patients.

Our multidisciplinary team carefully evaluates each case to determine the most appropriate approach, ensuring both oncologic safety and optimal cosmetic and functional outcomes. When radiation is the right choice, we coordinate closely with our multidisciplinary team to deliver tailored care.`}
            />
          </section>
          <LogoTab />
        </main>
      </div>
      <EndingSection />
    </>
  );
}

export default radiationTherapy;
