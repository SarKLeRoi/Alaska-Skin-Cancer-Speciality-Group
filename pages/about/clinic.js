import React from "react";
import Head from "next/head";
import Script from "next/script";
import Navbar from "../../components/Navbar";
import TitleRow from "../../components/TitleRow";
import TextCentered from "../../components/TextCentered";
import LogoTab from "../../components/Logo-Tab";
import EndingSection from "../../components/EndingSection";
function clinic() {
  const baseUrl = "https://www.alaskaskincancer.com";

  return (
    <>
      {/* <Preloader /> */}
      <Head>
        <title>The Clinic - Alaska Skin Cancer Specialty Group</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Learn about the Alaska Skin Cancer Specialty Group clinics - Capstone Dermatology in Wasilla and Matsu Plastic Surgery in Palmer. Collaborative approach to comprehensive skin cancer treatment."
        />
        <meta
          property="og:title"
          content="The Clinic - Alaska Skin Cancer Specialty Group"
        />
        <meta
          property="og:description"
          content="Learn about the Alaska Skin Cancer Specialty Group clinics - Capstone Dermatology in Wasilla and Matsu Plastic Surgery in Palmer. Collaborative approach to comprehensive skin cancer treatment."
        />
        <meta
          property="og:image"
          content="https://www.alaskaskincancer.com/images/logo.webp"
        />
        <meta
          property="og:url"
          content="https://www.alaskaskincancer.com/about/clinic"
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
          content="The Clinic - Alaska Skin Cancer Specialty Group"
        />
        <meta
          name="twitter:description"
          content="Learn about the Alaska Skin Cancer Specialty Group clinics - Capstone Dermatology in Wasilla and Matsu Plastic Surgery in Palmer."
        />
        <meta
          name="twitter:image"
          content="https://www.alaskaskincancer.com/images/logo.webp"
        />

        <meta
          name="keywords"
          content="Alaska skin cancer group, skin cancer specialists, Mohs surgery Alaska, dermatology Alaska, skin cancer treatment Alaska, skin cancer doctors Alaska, Capstone Dermatology, Matsu Plastic Surgery"
        />
        <meta name="author" content="Alaska Skin Cancer Specialty Group"></meta>
        <link rel="icon" href="/images/favicon.png" />
        <link rel="canonical" href={`${baseUrl}/about/clinic`} />
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
              "Learn about the Alaska Skin Cancer Specialty Group clinics - Capstone Dermatology in Wasilla and Matsu Plastic Surgery in Palmer. Collaborative approach to comprehensive skin cancer treatment.",
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
                name: "The Clinic",
                item: "https://www.alaskaskincancer.com/about/clinic",
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
          <section className="section1"></section>

          <section className="hero-section" aria-labelledby="hero-heading">
            <div className="full-width-photo first-photo with-overlay">
              <img
                src="/images/AboutTheGroup1.webp"
                alt="Alaska Skin Cancer Specialty Group participating clinics providing collaborative skin cancer care"
              />
              <div className="image-overlay-title">
                <h1 id="hero-heading" className="overlay-title">
                  Participating Clinics
                </h1>
              </div>
              <div className="image-overlay-subtitle">
                <h2 className="overlay-subtitle">
                  Collaborative Approach including Alaska&apos;s Top Clinics
                </h2>
              </div>
            </div>
          </section>
          <LogoTab />
          <section className="intro-section" aria-labelledby="intro-heading">
            <TextCentered
              newPadding={"5px"}
              title={"Alaska Skin Cancer Specialty Group"}
              description={`Our multidisciplinary group includes several clinics which work together in a collaborative approach to offer patients the highest level of care for all matters skin cancer related. The participating clinics include Capstone Dermatology and Matsu Plastic Surgery. Located in Wasilla and Palmer, our goal is to serve the Anchorage region as well, in the near future.


Although the participating clinics function independently, they collaborate in a synergistic manner to offer patients an A-Z approach to skin cancer treatment, including routine skin surveillance, biopsies, topical treatments, surgical treatments with reconstruction, and radiation therapy.`}
            />
          </section>
          <LogoTab />
          {/* Second Photo - Full Width */}
          <section
            className="overview-section"
            aria-labelledby="overview-heading"
          >
            <h2 id="overview-heading" className="sr-only">
              Our Clinic Facilities
            </h2>
            <div className="full-width-photo">
              <img
                src="/images/AboutTheGroup2.webp"
                alt="Alaska Skin Cancer Specialty Group clinic facilities and team collaboration"
              />
            </div>
          </section>
          <LogoTab />

          {/* Capstone Dermatology Section */}
          <section
            className="clinic-section"
            aria-labelledby="capstone-heading"
          >
            <div className="clinic-content">
              <div className="clinic-text">
                <h2 id="capstone-heading" className="clinic-title">
                  Capstone Dermatology
                </h2>
                <p className="clinic-description">
                  Capstone Dermatology, located in Wasilla, is a highly
                  specialized dermatology office that focuses on skin cancer
                  diagnosis and treatments. They offer a comprehensive approach
                  to all skin cancer treatment including diagnosis, staging,
                  surgical treatment utilizing Mohs Micrographic Surgery, as
                  well as radiation therapy for all appropriate candidates.
                </p>
                <p className="clinic-description">
                  With multiple board-certified Dermatologists in the office,
                  each physician specializes in a specific aspect of skin cancer
                  treatment.
                </p>
                <div className="clinic-contact">
                  <p>
                    <strong>Address:</strong> 3066 E Meridian Park Loop,
                    Wasilla, AK 99654
                  </p>
                  <p>
                    <strong>Phone:</strong> 907-357-2332
                  </p>
                  <p>
                    <strong>Hours:</strong> Monday-Friday 7:30am - 5:30pm
                  </p>
                </div>
              </div>
              <div className="clinic-image">
                <img
                  src="/images/about-the-clinc/CapstoneClinic.webp"
                  alt="Capstone Dermatology Building in Wasilla, Alaska - specialized skin cancer treatment facility"
                  className="clinic-photo"
                />
              </div>
            </div>
          </section>

          <LogoTab />
          {/* Matsu Plastic Surgery Section */}
          <section className="clinic-section" aria-labelledby="matsu-heading">
            <div className="clinic-content">
              <div className="clinic-text">
                <h2 id="matsu-heading" className="clinic-title">
                  Matsu Plastic Surgery
                </h2>
                <p className="clinic-description">
                  As part of Matsu Regional Medical Center, Matsu Plastic
                  Surgery offers a comprehensive approach to plastic and
                  reconstructive surgery. With a double-board certified plastic
                  surgeon who collaborates closely with Capstone Dermatology on
                  all skin cancer treatments, we are able to offer
                  reconstructions that restore patients&apos; form and function.
                </p>
                <p className="clinic-description">
                  Our reconstructive options focus on helping patients return to
                  normal life as quickly as possible, with results that are
                  cosmetically appealing and do not leave deforming scars or
                  alterations in appearance.
                </p>
                <div className="clinic-contact">
                  <p>
                    <strong>Address:</strong> 2490 S Woodworth Loop, Suite 310,
                    Palmer, AK 99645
                  </p>
                  <p>
                    <strong>Phone:</strong> 907-861-6743
                  </p>
                  <p>
                    <strong>Hours:</strong> Monday-Friday 8:00am - 7:30pm
                  </p>
                </div>
              </div>
              <div className="clinic-image">
                <img
                  src="/images/about-the-clinc/MatsuPlasticSurgery.webp"
                  alt="Matsu Regional Medical Center in Palmer, Alaska - plastic and reconstructive surgery facility"
                  className="clinic-photo"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
      <LogoTab />
      <EndingSection />
    </>
  );
}

export default clinic;
