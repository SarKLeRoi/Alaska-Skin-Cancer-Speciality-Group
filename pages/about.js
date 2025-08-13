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

function about() {
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
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <Head>
        <title>About - Alaska Skin Cancer Specialty Group</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Learn about the Alaska Skin Cancer Specialty Group - our collaborative team, clinical locations, and expert providers dedicated to comprehensive skin cancer treatment across Alaska."
        />
        <meta
          property="og:title"
          content="About - Alaska Skin Cancer Specialty Group"
        />
        <meta
          property="og:description"
          content="Learn about the Alaska Skin Cancer Specialty Group - our collaborative team, clinical locations, and expert providers dedicated to comprehensive skin cancer treatment across Alaska."
        />
        <meta
          property="og:image"
          content="https://www.alaskaskincancer.com/images/logo.webp"
        />
        <meta
          property="og:url"
          content="https://www.alaskaskincancer.com/about"
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
          content="About - Alaska Skin Cancer Specialty Group"
        />
        <meta
          name="twitter:description"
          content="Learn about the Alaska Skin Cancer Specialty Group - our collaborative team, clinical locations, and expert providers dedicated to comprehensive skin cancer treatment across Alaska."
        />
        <meta
          name="twitter:image"
          content="https://www.alaskaskincancer.com/images/logo.webp"
        />

        <meta
          name="keywords"
          content="Alaska skin cancer group, skin cancer specialists, about us, our team, clinic locations, dermatology providers Alaska"
        />
        <meta name="author" content="Alaska Skin Cancer Specialty Group"></meta>
        <link rel="icon" href="/images/favicon.png" />
        <link rel="canonical" href={`${baseUrl}/about`} />
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
              "Learn about the Alaska Skin Cancer Specialty Group - our collaborative team, clinical locations, and expert providers dedicated to comprehensive skin cancer treatment across Alaska.",
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
            <h1 id="hero-heading" className="sr-only">
              About Alaska Skin Cancer Specialty Group
            </h1>
            <motion.div
              className="full-width-photo first-photo with-overlay"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <img
                src="/images/AboutTheGroup1.webp"
                alt="Alaska Skin Cancer Specialty Group team and facilities providing comprehensive skin cancer care"
              />
              {/* <div className="image-overlay-title">
                <h1 className="overlay-title black-subtitle">About Us</h1>
              </div>
              <div className="image-overlay-subtitle">
                <h2 className="overlay-subtitle black-subtitle">
                  Comprehensive Skin Cancer Care
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
            className="about-intro-section"
            aria-labelledby="intro-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <TextCentered
              newPadding={"5px"}
              title={"Alaska Skin Cancer Specialty Group"}
              description={`Welcome to Alaska's premier destination for comprehensive skin cancer treatment. Our collaborative network brings together the expertise of specialized dermatologists, Mohs surgeons, and plastic surgeons to provide exceptional care across Alaska.

Explore the sections below to learn more about our team, our clinical locations, and the expert providers dedicated to your care.`}
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
            className="navigation-menu-section"
            aria-labelledby="nav-heading"
          >
            <h2 id="nav-heading" className="sr-only">
              Learn More About Our Organization
            </h2>
            <motion.div
              className="face-section2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <nav
                className="container"
                role="navigation"
                aria-label="About page navigation"
              >
                <Link
                  href="/about/group"
                  className="menu-item"
                  aria-label="Learn about our collaborative group of specialists"
                >
                  The Group
                </Link>
                <Link
                  href="/about/clinic"
                  className="menu-item"
                  aria-label="Learn about our clinic locations and facilities"
                >
                  The Clinic
                </Link>
                <Link
                  href="/about/providers"
                  className="menu-item"
                  aria-label="Meet our expert medical providers and specialists"
                >
                  The Providers
                </Link>
              </nav>
            </motion.div>
          </section>

          {/* Providers Preview Section */}
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

export default about;
