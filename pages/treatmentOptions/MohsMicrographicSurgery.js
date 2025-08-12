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
function mohsMicrographicSurgery() {
  const baseUrl = "https://www.alaskaskincancer.com";

  return (
    <>
      {/* <Preloader /> */}
      <Head>
        <title>
          Mohs Micrographic Surgery - Alaska Skin Cancer Specialty Group
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Expert Mohs micrographic surgery in Alaska. Gold standard treatment for skin cancer with 99% cure rates. Board-certified Mohs surgeon Dr. Dorizas. Tissue-sparing precision surgery."
        />
        <meta
          property="og:title"
          content="Mohs Micrographic Surgery - Alaska Skin Cancer Specialty Group"
        />
        <meta
          property="og:description"
          content="Expert Mohs micrographic surgery in Alaska. Gold standard treatment for skin cancer with 99% cure rates. Board-certified Mohs surgeon Dr. Dorizas."
        />
        <meta
          property="og:image"
          content="https://www.alaskaskincancer.com/images/checkingMole.webp"
        />
        <meta
          property="og:url"
          content="https://www.alaskaskincancer.com/treatmentOptions/MohsMicrographicSurgery"
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
          content="Mohs Micrographic Surgery - Alaska Skin Cancer Specialty Group"
        />
        <meta
          name="twitter:description"
          content="Expert Mohs micrographic surgery in Alaska. Gold standard treatment for skin cancer with 99% cure rates. Board-certified Mohs surgeon Dr. Dorizas."
        />
        <meta
          name="twitter:image"
          content="https://www.alaskaskincancer.com/images/checkingMole.webp"
        />

        <meta
          name="keywords"
          content="Mohs surgery Alaska, Mohs micrographic surgery, skin cancer surgery, Dr. Dorizas, board certified Mohs surgeon, BCC treatment, SCC treatment"
        />
        <meta name="author" content="Alaska Skin Cancer Specialty Group"></meta>
        <link rel="icon" href="/images/favicon.png" />
        <link
          rel="canonical"
          href={`${baseUrl}/treatmentOptions/MohsMicrographicSurgery`}
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
            name: "Mohs Micrographic Surgery",
            description:
              "Mohs micrographic surgery is the gold standard for treating certain types of skin cancer, including basal cell carcinoma (BCC), squamous cell carcinoma (SCC), and select cases of melanoma.",
            bodyLocation: {
              "@type": "AnatomicalStructure",
              name: "Skin",
            },
            procedureType: "Surgical Oncology",
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
              "Expert Mohs micrographic surgery in Alaska. Gold standard treatment for skin cancer with 99% cure rates. Board-certified Mohs surgeon Dr. Dorizas.",
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
                name: "Mohs Micrographic Surgery",
              },
              {
                "@type": "MedicalProcedure",
                name: "Skin Cancer Surgery",
              },
              {
                "@type": "MedicalProcedure",
                name: "Dermatologic Surgery",
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
                name: "Treatment Options",
                item: "https://www.alaskaskincancer.com/treatmentOptions",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Mohs Micrographic Surgery",
                item: "https://www.alaskaskincancer.com/treatmentOptions/MohsMicrographicSurgery",
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
                alt="Mohs micrographic surgery - precision skin cancer treatment with highest cure rates"
              />
              {/* <div className="image-overlay-title">
                <h1 id="hero-heading" className="overlay-title">Treatment Options</h1>
              </div>
              <div className="image-overlay-subtitle">
                <h2 className="overlay-subtitle">Mohs Micrographic Surgery</h2>
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
              title={"Mohs Micrographic Surgery"}
              description={`Mohs micrographic surgery is the gold standard for treating certain types of skin cancer, including basal cell carcinoma (BCC), squamous cell carcinoma (SCC), and select cases of melanoma and other rare tumors. This specialized procedure allows for the precise removal of cancerous tissue while preserving as much healthy skin as possible.
              
The Mohs process involves removing thin layers of skin, examining them under a microscope in real time, and continuing the process until no cancer cells remain. Mohs removes not only the visible skin cancer but also any "roots" that may have extended beneath the skin surface. This meticulous approach offers the highest cure rates while minimizing scarring. With cure rates up to 99%, the Mohs technique is the most precise method of tumor removal.

At our practice, we understand that a skin cancer diagnosis can be overwhelming. Dr. Dorizas and his team are committed to providing expert surgical care in a comfortable, supportive environment. With extensive experience in Mohs surgery, we ensure that each patient receives individualized treatment with an emphasis on both medical excellence and aesthetic outcomes. Dr Dorizas is a world renowned Mohs expert and routinely travels the country giving talks to dermatologists and surgeons alike.`}
            />
          </section>
          <LogoTab />
          <section
            className="procedure-details-section"
            aria-labelledby="procedure-details-heading"
          >
            <div className="clinic-section">
              <div className="clinic-content">
                <div className="clinic-text">
                  <h2 id="procedure-details-heading">
                    What to Expect During Mohs Surgery
                  </h2>
                  <p className="clinic-description">
                    Every reconstruction is customized based on the size,
                    location, and depth of the surgical defect, as well as the
                    patient&apos;s anatomy and aesthetic goals. Techniques may
                    include local tissue rearrangement, skin grafts, or complex
                    flap reconstructions. Our plastic surgeon works closely with
                    the Mohs surgeon to ensure optimal timing and coordination,
                    often performing reconstruction immediately after cancer
                    removal to streamline care and maximize results.
                  </p>
                  <p className="clinic-description">
                    The total duration of the procedure varies depending on the
                    complexity of the case. Once all cancerous cells are
                    removed, the wound is evaluated for the best possible
                    reconstruction approach to ensure both optimal healing and
                    aesthetic results. Our team will provide detailed aftercare
                    instructions, and most patients can resume light activities
                    the following day.
                  </p>
                  <p className="clinic-description">
                    Early diagnosis allows for more conservative treatment and
                    optimal cosmetic outcomes. Regular skin exams and sun
                    protection are key to reducing risk and promoting early
                    detection.
                  </p>
                  <p className="clinic-description">
                    Once the cancer has been completely removed, our expert
                    double Board-Certified Plastic Surgeon will perform the
                    reconstruction. We are the only specialty consortium in
                    Alaska which utilizes both a Mohs surgeon as well as a
                    Plastic Surgeon for these surgeries, which allows our
                    patients the best possible outcomes.
                  </p>
                </div>
                <div className="clinic-image">
                  <img
                    src="/images/checkingMole.webp"
                    alt="Mohs surgery consultation and examination - comprehensive skin cancer care"
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

export default mohsMicrographicSurgery;
