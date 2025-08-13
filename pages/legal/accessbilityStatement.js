import React from "react";
import Head from "next/head";
import Script from "next/script";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import TitleRow from "../../components/TitleRow";
import LogoTab from "../../components/Logo-Tab";
import EndingSection from "../../components/EndingSection";

export default function AccessibilityStatement() {
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
        <title>
          Accessibility Statement - Alaska Skin Cancer Specialty Group
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Alaska Skin Cancer Specialty Group's commitment to digital accessibility. Learn about our accessibility standards, compliance efforts, and how to report accessibility concerns."
        />
        <meta
          name="keywords"
          content="accessibility statement, digital accessibility, WCAG compliance, ADA compliance, Alaska dermatology accessibility, skin cancer website accessibility"
        />
        <meta
          property="og:title"
          content="Accessibility Statement - Alaska Skin Cancer Specialty Group"
        />
        <meta
          property="og:description"
          content="Our commitment to making our website accessible to all users. Learn about our accessibility standards and compliance efforts."
        />
        <meta
          property="og:image"
          content="https://www.alaskaskincancer.com/images/logo.webp"
        />
        <meta
          property="og:url"
          content="https://www.alaskaskincancer.com/accessibilityStatement"
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
          content="Accessibility Statement - Alaska Skin Cancer Specialty Group"
        />
        <meta
          name="twitter:description"
          content="Our commitment to digital accessibility and inclusive design for all users."
        />
        <meta
          name="twitter:image"
          content="https://www.alaskaskincancer.com/images/logo.webp"
        />

        <meta name="author" content="Alaska Skin Cancer Specialty Group" />
        <link rel="icon" href="/images/favicon.png" />
        <link rel="canonical" href={`${baseUrl}/accessibilityStatement`} />
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
              "Alaska Skin Cancer Specialty Group provides comprehensive skin cancer treatment including Mohs surgery, radiation therapy, and plastic reconstruction.",
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
          }),
        }}
      />

      {/* Breadcrumb Structured Data */}
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
                item: "https://www.alaskaskincancer.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Accessibility Statement",
                item: "https://www.alaskaskincancer.com/accessibilityStatement",
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
              <h1>Accessibility Statement</h1>
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
              <div className="legal-section">
                <h2>1. Our Commitment</h2>
                <div className="legal-subsection">
                  <p>
                    Alaska Skin Cancer Specialty Group is committed to ensuring
                    digital accessibility for people with disabilities. We are
                    actively working toward WCAG 2.1 AA compliance and
                    continually improve the user experience for everyone by
                    applying relevant accessibility standards to provide equal
                    access to all users.
                  </p>
                  <p>
                    We believe everyone deserves access to quality healthcare
                    information and services, regardless of abilities or
                    disabilities. This commitment extends to our digital
                    presence as we work to make our website accessible to all
                    visitors.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>2. Accessibility Standards</h2>
                <div className="legal-subsection">
                  <h4>Web Content Accessibility Guidelines (WCAG 2.1)</h4>
                  <p>
                    We are actively working toward conforming to WCAG 2.1 at the
                    AA level. These guidelines explain how to make web content
                    accessible for people with disabilities and user-friendly
                    for everyone. While we have implemented many accessibility
                    features, we continue to evaluate and improve our
                    compliance.
                  </p>
                  <h4>Americans with Disabilities Act (ADA)</h4>
                  <p>
                    We are committed to meeting ADA requirements and
                    continuously work to provide equal access to information and
                    functionality for all users. Our ongoing efforts focus on
                    identifying and addressing accessibility barriers as we work
                    toward full compliance.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>3. Accessibility Features Implemented</h2>
                <div className="legal-subsection">
                  <h4>Navigation and Structure</h4>
                  <p>Our website includes:</p>
                  <p>• Logical heading hierarchy (H1, H2, H3, H4)</p>
                  <p>• Descriptive page titles and meta descriptions</p>
                  <p>• Clear navigation menus with proper ARIA labeling</p>
                  <p>• Consistent page layout and navigation structure</p>
                  <p>
                    • Semantic HTML elements for better screen reader support
                  </p>

                  <h4>Visual Design</h4>
                  <p>• High color contrast ratios for text readability</p>
                  <p>
                    • Responsive design that works on various devices and screen
                    sizes
                  </p>
                  <p>
                    • Text that can be resized without loss of functionality
                  </p>
                  <p>
                    • Information conveyed through multiple means, not color
                    alone
                  </p>

                  <h4>Interactive Elements</h4>
                  <p>
                    • Keyboard navigation support for all interactive elements
                  </p>
                  <p>• Focus indicators for keyboard users</p>
                  <p>• Descriptive link text and button labels</p>
                  <p>• ARIA labels and roles where appropriate</p>
                  <p>• Skip navigation functionality</p>

                  <h4>Media and Content</h4>
                  <p>• Alternative text (alt text) for all meaningful images</p>
                  <p>• Decorative images properly marked for screen readers</p>
                  <p>• Structured content with proper headings and lists</p>
                  <p>• Clear and simple language throughout</p>
                </div>
              </div>

              <div className="legal-section">
                <h2>4. Third-Party Content</h2>
                <div className="legal-subsection">
                  <p>
                    Our website includes content from third-party services such
                    as Google Analytics for website performance monitoring.
                    While we strive to ensure all content meets our
                    accessibility standards, we cannot guarantee the
                    accessibility of external services.
                  </p>
                  <p>
                    We work with vendors to promote accessible practices and
                    seek alternative solutions when accessibility barriers are
                    identified.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>5. Ongoing Improvements</h2>
                <div className="legal-subsection">
                  <p>
                    We are actively working toward achieving WCAG 2.1 AA
                    compliance. While we have implemented many accessibility
                    features, we acknowledge that some areas may still need
                    improvement to meet full AA standards.
                  </p>
                  <p>
                    We regularly conduct accessibility reviews, run automated
                    testing tools, and prioritize accessibility fixes in our
                    ongoing website maintenance. Our goal is to achieve and
                    maintain full WCAG 2.1 AA compliance.
                  </p>
                  <p>
                    We welcome feedback from users about accessibility barriers
                    as we continue this important work.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>6. Feedback and Contact</h2>
                <div className="legal-subsection">
                  <h4>Report Accessibility Issues</h4>
                  <p>
                    We welcome feedback on our website's accessibility. If you
                    encounter barriers or have suggestions for improvement,
                    please contact us:
                  </p>
                  <p>
                    <strong>Phone:</strong> (907) 357-2332
                    <br />
                    <strong>Email:</strong> info@alaskaskincancer.com
                    <br />
                    <strong>Address:</strong> 3066 E Meridian Park Loop,
                    Wasilla, AK 99654
                  </p>

                  <h4>Response Timeline</h4>
                  <p>
                    We aim to respond to accessibility feedback within 2-3
                    business days. Resolution time varies depending on the
                    issue, but we will keep you informed of our progress.
                  </p>

                  <h4>Alternative Access</h4>
                  <p>
                    If you cannot access information on our website due to a
                    disability, please call our office at (907) 357-2332. Our
                    staff will provide the information you need over the phone
                    or help schedule an appointment.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>7. Assessment and Updates</h2>
                <div className="legal-subsection">
                  <h4>Assessment Method</h4>
                  <p>We assessed our website's accessibility through:</p>
                  <p>• Automated accessibility testing tools</p>
                  <p>• Manual testing with keyboard navigation</p>
                  <p>
                    • Review of code and markup for accessibility best practices
                  </p>
                  <p>• Screen reader testing</p>

                  <h4>Regular Review</h4>
                  <p>
                    This statement is reviewed and updated regularly as part of
                    our ongoing commitment to digital accessibility. We conduct
                    comprehensive reviews annually and when significant website
                    updates are made.
                  </p>

                  <h4>Last Updated</h4>
                  <p>
                    This statement was last updated on{" "}
                    {new Date().toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    .
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>8. Additional Resources</h2>
                <div className="legal-subsection">
                  <p>For more information about web accessibility:</p>
                  <p>
                    • Web Accessibility Initiative (WAI):
                    https://www.w3.org/WAI/
                  </p>
                  <p>
                    • Americans with Disabilities Act (ADA):
                    https://www.ada.gov/
                  </p>
                  <p>
                    • WebAIM - Web Accessibility In Mind: https://webaim.org/
                  </p>
                  <p>
                    We encourage all users to explore these resources to learn
                    more about digital accessibility and assistive technologies.
                  </p>
                </div>
              </div>
            </motion.section>
          </motion.div>
        </main>
      </div>
      <EndingSection />
    </>
  );
}
