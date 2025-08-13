import React from "react";
import Head from "next/head";
import Script from "next/script";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import TitleRow from "../components/TitleRow";
import TextCentered from "../components/TextCentered";
import LogoTab from "../components/Logo-Tab";
import EndingSection from "../components/EndingSection";

function gallery() {
  const baseUrl = "https://www.alaskaskincancer.com";

  // Optimized Animation variants (prevent layout shifts)
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* <Preloader /> */}
      <Head>
        <title>Gallery - Alaska Skin Cancer Specialty Group</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="View our gallery of before and after photos showcasing successful skin cancer treatments and reconstructions by the Alaska Skin Cancer Specialty Group."
        />
        <meta
          property="og:title"
          content="Gallery - Alaska Skin Cancer Specialty Group"
        />
        <meta
          property="og:description"
          content="View our gallery of before and after photos showcasing successful skin cancer treatments and reconstructions by the Alaska Skin Cancer Specialty Group."
        />
        <meta
          property="og:image"
          content="https://www.alaskaskincancer.com/images/logo.webp"
        />
        <meta
          property="og:url"
          content="https://www.alaskaskincancer.com/gallery"
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
          content="Gallery - Alaska Skin Cancer Specialty Group"
        />
        <meta
          name="twitter:description"
          content="View our gallery of before and after photos showcasing successful skin cancer treatments and reconstructions by the Alaska Skin Cancer Specialty Group."
        />
        <meta
          name="twitter:image"
          content="https://www.alaskaskincancer.com/images/logo.webp"
        />

        <meta
          name="keywords"
          content="Alaska skin cancer gallery, before after photos, skin cancer treatment results, Mohs surgery results, reconstruction gallery, dermatology Alaska"
        />
        <meta name="author" content="Alaska Skin Cancer Specialty Group"></meta>
        <link rel="icon" href="/images/favicon.png" />
        <link rel="canonical" href={`${baseUrl}/gallery`} />
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
              "View our gallery of before and after photos showcasing successful skin cancer treatments and reconstructions by the Alaska Skin Cancer Specialty Group.",
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
                name: "Gallery",
                item: "https://www.alaskaskincancer.com/gallery",
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
          <LogoTab />
          <motion.section
            className="gallery-section"
            aria-labelledby="gallery-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <TextCentered
              newPadding={"5px"}
              title={"Patient Gallery Coming Soon"}
              description={`We are currently preparing a comprehensive gallery showcasing the exceptional results achieved through our collaborative approach to skin cancer treatment and reconstruction.

Our upcoming gallery will feature before and after photos demonstrating the expertise of our team in Mohs surgery, radiation therapy, and plastic reconstruction. These images will highlight our commitment to achieving both functional restoration and optimal cosmetic outcomes.

Please check back soon to view examples of our work and the life-changing results we help our patients achieve. In the meantime, we invite you to learn more about our providers and treatment options.

For questions about specific procedures or to schedule a consultation, please contact our office directly.`}
            />
          </motion.section>
          <LogoTab />
        </main>
      </div>
      <EndingSection />
    </>
  );
}

export default gallery;
