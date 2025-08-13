import React from "react";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import TitleRow from "../components/TitleRow";
import VideoBackground from "../components/VideoBackground";
import TextCentered from "../components/TextCentered";
import LogoTab from "../components/Logo-Tab";
import Logos from "../components/Logos";
import Providers from "../components/Providers";
import EndingSection from "../components/EndingSection";
function HomePage() {
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

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // Reduced stagger for smoother experience
      },
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

  const slideInLeft = {
    hidden: { opacity: 0, x: -30 }, // Reduced from x: -60
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
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

  const mySVG = (
    <img
      src="/images/Triangle-Logo.png"
      alt="Triangle Logo"
      className="homepage-triangle-svg"
    />
  );

  return (
    <>
      {/* <Preloader /> */}
      <Head>
        <title>
          Alaska Skin Cancer Specialty Group - Expert Skin Cancer Treatment
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Alaska Skin Cancer Specialty Group provides comprehensive skin cancer treatment including Mohs surgery, radiation therapy, and plastic reconstruction. Expert care in Palmer, Wasilla, and Anchorage."
        />
        <meta
          property="og:title"
          content="Alaska Skin Cancer Specialty Group - Expert Skin Cancer Treatment"
        />
        <meta
          property="og:description"
          content="Alaska Skin Cancer Specialty Group provides comprehensive skin cancer treatment including Mohs surgery, radiation therapy, and plastic reconstruction. Expert care in Palmer, Wasilla, and Anchorage."
        />
        <meta
          property="og:image"
          content="https://www.alaskaskincancer.com/images/logo.webp"
        />
        <meta property="og:url" content="https://www.alaskaskincancer.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Alaska Skin Cancer Specialty Group"
        />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Alaska Skin Cancer Specialty Group - Expert Skin Cancer Treatment"
        />
        <meta
          name="twitter:description"
          content="Alaska Skin Cancer Specialty Group provides comprehensive skin cancer treatment including Mohs surgery, radiation therapy, and plastic reconstruction."
        />
        <meta
          name="twitter:image"
          content="https://www.alaskaskincancer.com/images/logo.webp"
        />

        <meta
          name="keywords"
          content="skin cancer treatment, Mohs surgery, basal cell carcinoma, squamous cell carcinoma, melanoma, Alaska, Palmer, Wasilla, Anchorage, dermatology, skin cancer specialist, skin cancer doctor, skin cancer surgery"
        />
        <meta name="author" content="Alaska Skin Cancer Specialty Group"></meta>
        <link rel="icon" href="/images/favicon.png" />
        <link rel="canonical" href={baseUrl} />
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
              "Comprehensive skin cancer treatment including Mohs surgery, radiation therapy, and plastic reconstruction. Expert care in Palmer, Wasilla, and Anchorage.",
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
                item: "https://www.alaskaskincancer.com/about/group",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Services",
                item: "https://www.alaskaskincancer.com/#services",
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
        <section className="section1">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <VideoBackground />
          </motion.div>
        </section>
        <section
          className="features-section"
          aria-labelledby="features-heading"
        >
          <motion.div
            className="grid-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div className="grid-item" variants={fadeInUp}>
              {mySVG}
              <p>
                Multispecialty group including Dermatology, Mohs Surgery,
                Radiation Therapy and Plastic & Reconstructive Surgery
              </p>
            </motion.div>
            <motion.div className="grid-item" variants={fadeInUp}>
              {mySVG}
              <p>Thousands of successfully treated patients</p>
            </motion.div>
            <motion.div className="grid-item" variants={fadeInUp}>
              {mySVG}
              <p>
                Nationally recognized gold-standard of care, therapy, and
                treatments
              </p>
            </motion.div>
            <motion.div className="grid-item" variants={fadeInUp}>
              {mySVG}
              <p>Virtually all insurances accepted</p>
            </motion.div>
          </motion.div>
        </section>
        <section className="about-section" aria-labelledby="about-heading">
          <motion.div
            className="homepage-thirdsection-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
          >
            <h1 id="about-heading">Alaska skin cancer </h1>
            <br></br>
            <h2>Specialty group</h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <TextCentered
              newPadding={"20px"}
              description={`Skin cancer treatment requires a comprehensive approach to diagnose, treat and reconstruct the various types of cancers. The Alaska Skin Cancer Specialty Group is a multi-specialty group of physicians and surgeons who specialize in all aspects of skin cancer treatment, including biopsies and diagnostics, surgical treatment, Mohs Micrographic Surgery, Radiation therapy, and definitive reconstruction by a Plastic Surgeon. We pride ourselves in being the only group in Alaska to offer such an extensive and thorough approach to skin cancer management for all of our patients.`}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scaleIn}
          >
            <Logos />
          </motion.div>
        </section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <Providers />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scaleIn}
        >
          <LogoTab />
        </motion.div>
        <section
          className="section4"
          aria-labelledby="skin-cancer-types-heading"
        >
          <motion.h1
            id="skin-cancer-types-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            About Skin Cancer
          </motion.h1>
          <motion.div
            className="body-parts-image-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={slideInLeft}>
              <Link
                href="/skinCancer/basalCellCarcinoma"
                className="image-link"
              >
                <img
                  src="images/skin-cancer/BasalCell.webp"
                  loading="lazy"
                  alt="Basal Cell Carcinoma - the most common type of skin cancer"
                />
                <span className="image-text">Basal Cell Carcinoma</span>
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link
                href="/skinCancer/squamosCellCarcinoma"
                className="image-link"
              >
                <img
                  src="images/skin-cancer/SquamousCell.webp"
                  loading="lazy"
                  alt="Squamous Cell Carcinoma - aggressive form of skin cancer"
                />
                <span className="image-text">Squamous Cell Carcinoma</span>
              </Link>
            </motion.div>
            <motion.div variants={slideInRight}>
              <Link href="/skinCancer/melanoma" className="image-link">
                <img
                  src="images/skin-cancer/Melanoma.webp"
                  loading="lazy"
                  alt="Melanoma - the most dangerous type of skin cancer"
                />
                <span className="image-text">Melanoma</span>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="view-more-button-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <Link href="/skinCancer">
              <button
                className="view-more-button"
                aria-label="View more information about skin cancer types"
              >
                View More
              </button>
            </Link>
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
      </div>
      <EndingSection />
    </>
  );
}

export default HomePage;
