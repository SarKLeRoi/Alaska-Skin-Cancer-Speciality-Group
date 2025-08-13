import React from "react";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import TitleRow from "../components/TitleRow";
import TextCentered from "../components/TextCentered";
import LogoTab from "../components/Logo-Tab";
import EndingSection from "../components/EndingSection";

function treatmentOptions() {
  const baseUrl = "https://www.alaskaskincancer.com";

  // Optimized Animation variants (prevent layout shifts)
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 }, // Reduced from y: 60
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }, // Faster duration
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 }, // Reduced from scale: 0.8
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }, // Faster duration
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 30 }, // Reduced from x: 60
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <Head>
        <title>Treatment Options - Alaska Skin Cancer Specialty Group</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Comprehensive skin cancer treatment options available at Alaska Skin Cancer Specialty Group - Mohs surgery, radiation therapy, plastic reconstruction, and advanced surgical techniques."
        />
        <meta
          property="og:title"
          content="Treatment Options - Alaska Skin Cancer Specialty Group"
        />
        <meta
          property="og:description"
          content="Comprehensive skin cancer treatment options available at Alaska Skin Cancer Specialty Group - Mohs surgery, radiation therapy, plastic reconstruction, and advanced surgical techniques."
        />
        <meta
          property="og:image"
          content="https://www.alaskaskincancer.com/images/logo.webp"
        />
        <meta
          property="og:url"
          content="https://www.alaskaskincancer.com/treatmentOptions"
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
          content="Treatment Options - Alaska Skin Cancer Specialty Group"
        />
        <meta
          name="twitter:description"
          content="Comprehensive skin cancer treatment options available at Alaska Skin Cancer Specialty Group - Mohs surgery, radiation therapy, plastic reconstruction, and advanced surgical techniques."
        />
        <meta
          name="twitter:image"
          content="https://www.alaskaskincancer.com/images/logo.webp"
        />

        <meta
          name="keywords"
          content="skin cancer treatment Alaska, Mohs surgery, radiation therapy, plastic reconstruction, surgical excision, skin cancer specialists Alaska"
        />
        <meta name="author" content="Alaska Skin Cancer Specialty Group"></meta>
        <link rel="icon" href="/images/favicon.png" />
        <link rel="canonical" href={`${baseUrl}/treatmentOptions`} />
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
              "Comprehensive skin cancer treatment options available at Alaska Skin Cancer Specialty Group - Mohs surgery, radiation therapy, plastic reconstruction, and advanced surgical techniques.",
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
                name: "Mohs Reconstruction",
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
          {/* Hero Section */}
          <section className="hero-section" aria-labelledby="hero-heading">
            <motion.div
              className="full-width-photo first-photo with-overlay"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <img
                src="/images/skin-cancer/2.webp"
                alt="Comprehensive treatment options for skin cancer - advanced surgical and non-surgical therapies"
              />
              {/* <div className="image-overlay-title">
                <h1 id="hero-heading" className="overlay-title black-subtitle">Treatment Options</h1>
              </div>
              <div className="image-overlay-subtitle">
                <h2 className="overlay-subtitle black-subtitle">
                  Advanced Care & Reconstruction
                </h2>
              </div> */}
            </motion.div>
          </section>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scaleIn}
          >
            <LogoTab />
          </motion.div>
          <motion.section
            className="content-section"
            aria-labelledby="content-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
          >
            <TextCentered
              newPadding={"5px"}
              title={"Comprehensive Treatment Options"}
              description={`Our collaborative team offers the full spectrum of skin cancer treatments, from minimally invasive procedures to complex reconstructions. Each treatment plan is tailored to your specific condition, ensuring optimal outcomes with preservation of both function and appearance.

Explore our treatment options below to learn about the advanced techniques and personalized care we provide to achieve the best possible results for every patient.`}
            />
          </motion.section>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scaleIn}
          >
            <LogoTab />
          </motion.div>
          {/* Navigation Menu Section */}
          <section
            className="navigation-section"
            aria-labelledby="navigation-heading"
          >
            <h2 id="navigation-heading" className="sr-only">
              Treatment Options
            </h2>
            <motion.div
              className="face-section2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <div className="container">
                <Link
                  href="/treatmentOptions/MohsMicrographicSurgery"
                  className="menu-item"
                >
                  Mohs Surgery
                </Link>
                <Link
                  href="/treatmentOptions/radiationTherapy"
                  className="menu-item"
                >
                  Radiation Therapy
                </Link>
                <Link
                  href="/treatmentOptions/MohsReconstruction"
                  className="menu-item"
                >
                  Mohs Reconstruction
                </Link>
              </div>
            </motion.div>
          </section>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scaleIn}
          >
            <LogoTab />
          </motion.div>
        </main>
      </div>
      <EndingSection />
    </>
  );
}

export default treatmentOptions;
