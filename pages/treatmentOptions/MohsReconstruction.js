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
function mohsReconstruction() {
  const baseUrl = "https://www.alaskaskincancer.com";

  return (
    <>
      {/* <Preloader /> */}
      <Head>
        <title>Mohs Reconstruction - Alaska Skin Cancer Specialty Group</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Expert Mohs reconstruction by double board-certified plastic surgeon. Facial reconstruction, tissue repair, and cosmetic outcomes after Mohs surgery in Alaska. Restoring form and function."
        />
        <meta
          property="og:title"
          content="Mohs Reconstruction - Alaska Skin Cancer Specialty Group"
        />
        <meta
          property="og:description"
          content="Expert Mohs reconstruction by double board-certified plastic surgeon. Facial reconstruction, tissue repair, and cosmetic outcomes after Mohs surgery in Alaska."
        />
        <meta
          property="og:image"
          content="https://www.alaskaskincancer.com/images/checkingMole2.webp"
        />
        <meta
          property="og:url"
          content="https://www.alaskaskincancer.com/treatmentOptions/MohsReconstruction"
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
          content="Mohs Reconstruction - Alaska Skin Cancer Specialty Group"
        />
        <meta
          name="twitter:description"
          content="Expert Mohs reconstruction by double board-certified plastic surgeon. Facial reconstruction, tissue repair, and cosmetic outcomes after Mohs surgery in Alaska."
        />
        <meta
          name="twitter:image"
          content="https://www.alaskaskincancer.com/images/checkingMole2.webp"
        />

        <meta
          name="keywords"
          content="Mohs reconstruction, plastic surgery Alaska, facial reconstruction, skin cancer reconstruction, post-Mohs repair, cosmetic surgery Alaska"
        />
        <meta name="author" content="Alaska Skin Cancer Specialty Group"></meta>
        <link rel="icon" href="/images/favicon.png" />
        <link
          rel="canonical"
          href={`${baseUrl}/treatmentOptions/MohsReconstruction`}
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
            name: "Mohs Reconstruction",
            description:
              "Mohs reconstruction is performed by a double board-certified plastic surgeon to restore both appearance and function after Mohs micrographic surgery.",
            bodyLocation: {
              "@type": "AnatomicalStructure",
              name: "Face",
            },
            procedureType: "Plastic and Reconstructive Surgery",
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
              "Expert Mohs reconstruction by double board-certified plastic surgeon. Facial reconstruction, tissue repair, and cosmetic outcomes after Mohs surgery in Alaska.",
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
            medicalSpecialty: "Plastic Surgery",
            availableService: [
              {
                "@type": "MedicalProcedure",
                name: "Mohs Reconstruction",
              },
              {
                "@type": "MedicalProcedure",
                name: "Facial Reconstruction",
              },
              {
                "@type": "MedicalProcedure",
                name: "Plastic Surgery",
              },
              {
                "@type": "MedicalProcedure",
                name: "Cosmetic Surgery",
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
                name: "Mohs Reconstruction",
                item: "https://www.alaskaskincancer.com/treatmentOptions/MohsReconstruction",
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
                alt="Mohs reconstruction surgery - expert plastic surgery for post-cancer facial reconstruction"
              />
              {/* <div className="image-overlay-title">
                <h1 id="hero-heading" className="overlay-title">Treatment Options</h1>
              </div>
              <div className="image-overlay-subtitle">
                <h2 className="overlay-subtitle">Mohs Reconstruction</h2>
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
              title={"Mohs Reconstruction"}
              description={`After Mohs micrographic surgery is performed to remove skin cancer, patients are often left with visible defects—especially on cosmetically and functionally sensitive areas such as the face, nose, eyelids, lips, or ears. Mohs reconstruction is a critical step in the treatment journey, aimed at restoring both appearance and function.
              
In our team, Mohs reconstruction is performed by a double board-certified plastic surgeon, expertly trained in both general surgery and plastic and reconstructive surgery. This advanced training allows for meticulous repair techniques that go beyond simply closing a wound—we focus on preserving facial harmony, minimizing scarring, and restoring normal tissue movement and function.

Every reconstruction is customized based on the size, location, and depth of the surgical defect, as well as the patient's anatomy and aesthetic goals. Techniques may include local tissue rearrangement, skin grafts, or complex flap reconstructions. Our plastic surgeon works closely with the Mohs surgeon to ensure optimal timing and coordination, often performing reconstruction immediately after cancer removal to streamline care and maximize results.
                `}
            />
          </section>
          <LogoTab />
          <section
            className="benefits-section"
            aria-labelledby="benefits-heading"
          >
            <div className="clinic-section">
              <div className="clinic-content">
                <div className="clinic-text">
                  <h2 id="benefits-heading" className="clinic-title">
                    The Plastic Surgery Advantage
                  </h2>
                  <p className="clinic-description">
                    Key benefits of plastic surgeon-performed Mohs
                    reconstruction include:
                  </p>
                  <ul className="clinic-description">
                    <li>
                      Enhanced cosmetic outcomes through precise tissue handling
                      and hidden incision placement
                    </li>
                    <li>
                      Functional preservation of critical areas such as the
                      eyelids, lips, and nasal passages
                    </li>
                    <li>
                      {" "}
                      Minimized scarring using advanced closure techniques
                    </li>
                    <li> Improved patient confidence and satisfaction</li>
                  </ul>
                </div>
                <div className="clinic-image">
                  <img
                    src="/images/checkingMole2.webp"
                    alt="Mohs reconstruction consultation and planning - comprehensive care approach"
                    className="clinic-photo"
                  />
                </div>
              </div>
            </div>
          </section>
          <LogoTab />
          <section
            className="comprehensive-care-section"
            aria-labelledby="comprehensive-care-heading"
          >
            <TextCentered
              newPadding={"5px"}
              title={"Comprehensive Care Beyond Surgery"}
              description={`We believe that successful skin cancer treatment extends beyond tumor removal. With a focus on both form and function, our team is committed to providing comprehensive, expert care that supports full recovery—both physically and emotionally.
              
If you or a loved one has undergone or is planning to undergo Mohs surgery, we encourage you to schedule a consultation to explore reconstructive options tailored to your needs.`}
            />
          </section>
          <LogoTab />
        </main>
      </div>
      <EndingSection />
    </>
  );
}

export default mohsReconstruction;
