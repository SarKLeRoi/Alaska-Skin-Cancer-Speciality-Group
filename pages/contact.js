import React from "react";
import Head from "next/head";
import Script from "next/script";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import TitleRow from "../components/TitleRow";
import LogoTab from "../components/Logo-Tab";
import EndingSection from "../components/EndingSection";

function group() {
  const baseUrl = "https://www.alaskaskincancer.com";

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
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
        <title>About - Alaska Skin Cancer Specialty Group</title>
        <meta
          name="description"
          content="Learn about the Alaska Skin Cancer Specialty Group - a collaborative team of dermatologists, Mohs surgeons, and plastic surgeons providing comprehensive skin cancer treatment across Alaska."
        />
        <meta
          property="og:title"
          content="About - Alaska Skin Cancer Specialty Group"
        />
        <meta
          property="og:description"
          content="Learn about the Alaska Skin Cancer Specialty Group - a collaborative team of dermatologists, Mohs surgeons, and plastic surgeons providing comprehensive skin cancer treatment across Alaska."
        />
        <meta property="og:image" content="/images/logo.webp" />
        <meta property="og:url" content="https://www.alaskaskincancer.com" />
        <meta
          name="keywords"
          content="Alaska skin cancer group, skin cancer specialists, Mohs surgery Alaska, dermatology Alaska, skin cancer treatment Alaska, skin cancer doctors Alaska"
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
              "Learn about the Alaska Skin Cancer Specialty Group - a collaborative team of dermatologists, Mohs surgeons, and plastic surgeons providing comprehensive skin cancer treatment across Alaska.",
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
        <section className="section1"></section>

        <motion.div
          className="full-width-photo first-photo with-overlay"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src="/images/contact.jpg"
            alt="Alaska Skin Cancer Specialty Group"
          />
          <div className="image-overlay-title">
            <h2 className="overlay-title"></h2>
          </div>
          <div className="image-overlay-subtitle">
            <h3 className="overlay-subtitle black-subtitle">Contact Us</h3>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scaleIn}
        >
          <LogoTab />
        </motion.div>

        {/* Contact Information Section */}
        <motion.div
          className="contact-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <motion.div
            className="contact-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Capstone Dermatology */}
            <motion.div className="clinic-contact-card" variants={slideInLeft}>
              <h2 className="clinic-name">Capstone Dermatology</h2>

              {/* Anchorage Location */}
              <motion.div className="location-card" variants={fadeInUp}>
                <div className="location-info">
                  <h3 className="location-name">Anchorage</h3>
                  <div className="contact-details">
                    <p>1100 E Dimond Blvd, Suite 103, Anchorage, 99515</p>
                    <p>(907) 267-5890</p>
                    <div className="hours">
                      <p>
                        Tuesday - Friday: 7:30 AM - 5:00 PM<br></br> Closed
                        Saturday through Monday
                      </p>
                    </div>
                  </div>
                </div>
                <div className="location-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1925.5137029158868!2d-149.86132089999998!3d61.1442008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x56c899347bdc3e79%3A0x1c18697561127ec6!2sCapstone%20Dermatology%20Anchorage!5e0!3m2!1sen!2sil!4v1754164183823!5m2!1sen!2sil"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Capstone Dermatology Anchorage"
                  ></iframe>
                </div>
              </motion.div>

              {/* Wasilla Location */}
              <motion.div className="location-card" variants={fadeInUp}>
                <div className="location-info">
                  <h3 className="location-name">Wasilla</h3>
                  <div className="contact-details">
                    <p>3066 E Meridian Park Loop, Wasilla, 99654</p>
                    <p>(907) 357-2332</p>
                    <div className="hours">
                      <p>
                        Tuesday - Friday: 7:30 AM - 5:00 PM<br></br> Closed
                        Saturday through Monday
                      </p>
                    </div>
                  </div>
                </div>
                <div className="location-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1898.1520484906632!2d-149.3611049!3d61.5918719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x56c8e10228652b91%3A0x4b97db6fb057da7!2sCapstone%20Dermatology!5e0!3m2!1sen!2sil!4v1754163818183!5m2!1sen!2sil"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Capstone Dermatology Wasilla"
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>

            {/* Matsu Plastic Surgery */}
            <motion.div className="clinic-contact-card" variants={slideInRight}>
              <h2 className="clinic-name">Matsu Plastic Surgery</h2>

              {/* Palmer Location */}
              <motion.div className="location-card" variants={fadeInUp}>
                <div className="location-info">
                  <h3 className="location-name">Palmer</h3>
                  <div className="contact-details">
                    <p>2490 S Woodworth Loop, Suite 310, Palmer, 99645</p>
                    <p>(907) 861-6743</p>
                    <div className="hours">
                      <p>
                        Monday - Friday: 8:00 AM - 4:30 PM<br></br> Closed
                        Closed Saturday and Sunday
                      </p>
                    </div>
                  </div>
                </div>
                <div className="location-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1899.932459089342!2d-149.2568023!3d61.5628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x56c8e1e42f56915f%3A0x976c2f64b6baf528!2sMat-Su%20Plastic%20and%20Reconstructive%20Surgery!5e0!3m2!1sen!2sil!4v1754163855835!5m2!1sen!2sil"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Matsu Plastic Surgery Palmer"
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <LogoTab />
      <EndingSection />
    </>
  );
}

export default group;
