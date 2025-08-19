import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import TitleRow from "../../components/TitleRow";
import EndingSection from "../../components/EndingSection";

export default function PrivacyPolicy() {
  const baseUrl = "https://www.alaskaskincancer.com";

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
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
        staggerChildren: 0.1,
      },
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
      <Head>
        <title>Privacy Policy - Alaska Skin Cancer Specialty Group</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Privacy Policy for Alaska Skin Cancer Specialty Group. Learn how we collect, use, and protect your personal and health information in compliance with HIPAA."
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta
          property="og:title"
          content="Privacy Policy - Alaska Skin Cancer Specialty Group"
        />
        <meta
          property="og:description"
          content="Privacy Policy for Alaska Skin Cancer Specialty Group website and medical services."
        />
        <meta
          property="og:image"
          content="https://www.alaskaskincancer.com/images/logo.webp"
        />
        <meta
          property="og:url"
          content="https://www.alaskaskincancer.com/privacyPolicy"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Alaska Skin Cancer Specialty Group"
        />

        <meta name="author" content="Alaska Skin Cancer Specialty Group" />
        <link rel="icon" href="/images/favicon.png" />
        <link rel="canonical" href={`${baseUrl}/privacyPolicy`} />
      </Head>

      <div>
        <TitleRow />
        <Navbar />
        <main>
          <motion.div
            className="legal-document-container"
            initial="hidden"
            animate="visible"
            variants={scaleIn}
          >
            <motion.header
              className="legal-header"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <h1>Privacy Policy</h1>
              <p className="last-updated">
                Last Updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </motion.header>

            <motion.section
              className="legal-content"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div className="legal-section" variants={fadeInUp}>
                <h2>Privacy Overview</h2>
                <div className="legal-subsection">
                  <p>
                    Alaska Skin Cancer Specialty Group respects the privacy of
                    users on its website and operates in accordance with
                    applicable data protection laws, including HIPAA for medical
                    information.
                  </p>
                </div>
              </motion.div>

              <motion.div className="legal-section" variants={fadeInUp}>
                <h2>1. Information Collection and Use</h2>
                <div className="legal-subsection">
                  <p>
                    <strong>Website Usage Data:</strong> When using our website,
                    we may collect technical information such as IP address,
                    browser type, pages visited, and time spent on our site.
                    This data is used for website analytics and improvement
                    purposes through Google Analytics.
                  </p>
                  <p>
                    <strong>Contact Information:</strong> When you contact our
                    office directly by phone or email, we may collect your name,
                    phone number, email address, and the nature of your inquiry.
                    This information is used solely to respond to your request
                    and provide requested services.
                  </p>
                  <p>
                    <strong>Medical Information (PHI):</strong> Any protected
                    health information is handled in accordance with HIPAA
                    regulations. Please refer to our separate HIPAA Notice of
                    Privacy Practices for detailed information about how we
                    handle medical information.
                  </p>
                </div>
              </motion.div>

              <motion.div className="legal-section" variants={fadeInUp}>
                <h2>2. Information Sharing</h2>
                <div className="legal-subsection">
                  <p>
                    We do not sell, trade, or share your personal information
                    with third parties except as required by law or as necessary
                    for medical treatment coordination. Medical information
                    sharing is governed by HIPAA regulations and our Notice of
                    Privacy Practices.
                  </p>
                </div>
              </motion.div>

              <motion.div className="legal-section" variants={fadeInUp}>
                <h2>3. Cookies and Tracking Technologies</h2>
                <div className="legal-subsection">
                  <p>
                    Our website uses cookies and similar tracking technologies
                    to enhance your browsing experience and analyze site usage.
                  </p>
                  <p>
                    <strong>Types of Cookies We Use:</strong>
                  </p>
                  <ul>
                    <li>
                      <strong>Essential Cookies:</strong> These cookies are
                      necessary for the website to function properly and cannot
                      be disabled.
                    </li>
                    <li>
                      <strong>Analytics Cookies:</strong> We use Google
                      Analytics cookies to understand how visitors interact with
                      our website, including page views, time spent on pages,
                      and navigation patterns. This helps us improve our website
                      and user experience.
                    </li>
                    <li>
                      <strong>Preference Cookies:</strong> These cookies
                      remember your choices and settings to provide a
                      personalized experience.
                    </li>
                  </ul>
                  <p>
                    <strong>Cookie Consent:</strong> We will only place
                    non-essential cookies on your device after you have provided
                    your consent. You can manage your cookie preferences at any
                    time through our cookie consent banner.
                  </p>
                  <p>
                    <strong>Third-Party Cookies:</strong> Google Analytics may
                    set additional cookies for analytics purposes. These are
                    subject to Google&apos;s privacy policy.
                  </p>
                </div>
              </motion.div>

              <motion.div className="legal-section" variants={fadeInUp}>
                <h2>4. Google Analytics</h2>
                <div className="legal-subsection">
                  <p>
                    Our website uses Google Analytics to help us understand how
                    visitors use our site. Google Analytics collects information
                    anonymously and reports website trends without identifying
                    individual visitors.
                  </p>
                  <p>
                    <strong>Consent Required:</strong> Google Analytics cookies
                    are only loaded after you provide consent through our cookie
                    banner. You can withdraw this consent at any time.
                  </p>
                </div>
              </motion.div>

              <motion.div className="legal-section" variants={fadeInUp}>
                <h2>5. Data Security</h2>
                <div className="legal-subsection">
                  <p>
                    We implement appropriate security measures to protect your
                    personal information. However, no method of transmission
                    over the internet is 100% secure, and we cannot guarantee
                    absolute security.
                  </p>
                  <p>
                    For medical information security measures, please refer to
                    our HIPAA Notice of Privacy Practices.
                  </p>
                </div>
              </motion.div>

              <motion.div className="legal-section" variants={fadeInUp}>
                <h2>6. Your Rights</h2>
                <div className="legal-subsection">
                  <p>
                    You may contact us to request access, correction, or
                    deletion of your personal information in accordance with
                    applicable privacy laws. For medical information rights,
                    please refer to our HIPAA Notice of Privacy Practices.
                  </p>
                </div>
              </motion.div>

              <motion.div className="legal-section" variants={fadeInUp}>
                <h2>7. Policy Changes</h2>
                <div className="legal-subsection">
                  <p>
                    We reserve the right to update this privacy policy. Any
                    material changes will be posted on this page with an updated
                    revision date.
                  </p>
                </div>
              </motion.div>

              <motion.div className="legal-section" variants={fadeInUp}>
                <h2>8. Contact Information</h2>
                <div className="legal-subsection">
                  <p>
                    For privacy-related questions or concerns, please contact
                    us:
                  </p>
                  <address style={{ fontStyle: "normal", marginTop: "20px" }}>
                    <strong>Alaska Skin Cancer Specialty Group</strong>
                    <br />
                    3066 E Meridian Park Loop
                    <br />
                    Wasilla, AK 99654
                    <br />
                    <br />
                    <strong>Phone:</strong> (907) 357-2332
                    <br />
                    <strong>Email:</strong> info@alaskaskincancer.com
                  </address>
                </div>
              </motion.div>
            </motion.section>
          </motion.div>
        </main>
      </div>
      <EndingSection />
    </>
  );
}
