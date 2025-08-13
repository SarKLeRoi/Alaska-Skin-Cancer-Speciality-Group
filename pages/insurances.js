import React from "react";
import Head from "next/head";
import Script from "next/script";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import TitleRow from "../components/TitleRow";
import TextCentered from "../components/TextCentered";
import LogoTab from "../components/Logo-Tab";
import EndingSection from "../components/EndingSection";

function insurances() {
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
        <title>
          Insurance Information - Alaska Skin Cancer Specialty Group
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Learn about insurance coverage and accepted plans for skin cancer treatment at Alaska Skin Cancer Specialty Group. We accept most major insurances."
        />
        <meta
          property="og:title"
          content="Insurance Information - Alaska Skin Cancer Specialty Group"
        />
        <meta
          property="og:description"
          content="Learn about insurance coverage and accepted plans for skin cancer treatment at Alaska Skin Cancer Specialty Group. We accept most major insurances."
        />
        <meta
          property="og:image"
          content="https://www.alaskaskincancer.com/images/logo.webp"
        />
        <meta
          property="og:url"
          content="https://www.alaskaskincancer.com/insurances"
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
          content="Insurance Information - Alaska Skin Cancer Specialty Group"
        />
        <meta
          name="twitter:description"
          content="Learn about insurance coverage and accepted plans for skin cancer treatment at Alaska Skin Cancer Specialty Group. We accept most major insurances."
        />
        <meta
          name="twitter:image"
          content="https://www.alaskaskincancer.com/images/logo.webp"
        />

        <meta
          name="keywords"
          content="Alaska skin cancer insurance, medical insurance accepted, health insurance coverage, skin cancer treatment insurance, dermatology insurance Alaska, Mohs surgery insurance"
        />
        <meta name="author" content="Alaska Skin Cancer Specialty Group"></meta>
        <link rel="icon" href="/images/favicon.png" />
        <link rel="canonical" href={`${baseUrl}/insurances`} />
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
              "Learn about insurance coverage and accepted plans for skin cancer treatment at Alaska Skin Cancer Specialty Group. We accept most major insurances.",
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
                name: "Insurance Information",
                item: "https://www.alaskaskincancer.com/insurances",
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
            className="insurance-section"
            aria-labelledby="insurance-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <TextCentered
              newPadding={"5px"}
              title={"Insurance Information Coming Soon"}
              description={`We are currently updating our comprehensive insurance information page to provide you with the most current details about coverage and accepted plans.

We are committed to making our specialized skin cancer treatments accessible and work with most major insurance providers to ensure you receive the care you need.

Please check back soon for complete insurance details. In the meantime, we encourage you to contact our office directly to verify your specific insurance coverage and discuss payment options.
`}
            />
          </motion.section>
          <LogoTab />
        </main>
      </div>
      <EndingSection />
    </>
  );
}

export default insurances;
