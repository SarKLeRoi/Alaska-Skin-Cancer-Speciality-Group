import React from "react";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Navbar from "../components/Navbar";
import TitleRow from "../components/TitleRow";
import TextCentered from "../components/TextCentered";
import LogoTab from "../components/Logo-Tab";
import EndingSection from "../components/EndingSection";

export default function AccessibilityStatement() {
  const baseUrl = "https://www.alaskaskincancer.com";

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
          {/* Hero Section */}
          <section
            className="hero-section"
            aria-labelledby="accessibility-heading"
          >
            <div className="full-width-photo first-photo with-overlay">
              <img
                src="/images/AboutTheGroup1.webp"
                alt="Alaska Skin Cancer Specialty Group team providing accessible medical care"
              />
              <div className="image-overlay-title">
                <h1 id="accessibility-heading" className="overlay-title">
                  Accessibility Statement
                </h1>
              </div>
              <div className="image-overlay-subtitle">
                <h2 className="overlay-subtitle">
                  Our Commitment to Digital Accessibility
                </h2>
              </div>
            </div>
          </section>

          <LogoTab />

          {/* Introduction */}
          <section
            className="accessibility-intro"
            aria-labelledby="intro-heading"
          >
            <TextCentered
              headingLevel={2}
              title={"Accessibility Commitment"}
              description={`Alaska Skin Cancer Specialty Group is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all of our users.

We believe that everyone deserves access to quality healthcare information and services, regardless of their abilities or disabilities. This commitment extends to our digital presence, ensuring our website is accessible to all visitors.`}
            />
          </section>

          <LogoTab />

          {/* Standards and Guidelines */}
          <section
            className="accessibility-standards"
            aria-labelledby="standards-heading"
          >
            <div className="doctor-bio-container">
              <header className="doctor-bio-header">
                <h2 id="standards-heading">Accessibility Standards</h2>
              </header>

              <article className="doctor-section">
                <h3>Web Content Accessibility Guidelines (WCAG)</h3>
                <p>
                  Our website aims to conform to the Web Content Accessibility
                  Guidelines (WCAG) 2.1 at the AA level. These guidelines
                  explain how to make web content more accessible for people
                  with disabilities and user-friendly for everyone.
                </p>

                <h3>Americans with Disabilities Act (ADA) Compliance</h3>
                <p>
                  We strive to ensure our website meets or exceeds the
                  requirements of the Americans with Disabilities Act (ADA) to
                  provide equal access to information and functionality for all
                  users.
                </p>

                <h3>Section 508 Compliance</h3>
                <p>
                  Our website is designed to meet Section 508 standards,
                  ensuring accessibility for federal agencies and promoting
                  inclusive design principles.
                </p>
              </article>
            </div>
          </section>

          <LogoTab />

          {/* Accessibility Features */}
          <section
            className="accessibility-features"
            aria-labelledby="features-heading"
          >
            <div className="doctor-bio-container">
              <header className="doctor-bio-header">
                <h2 id="features-heading">Accessibility Features</h2>
              </header>

              <article className="doctor-section">
                <h3>Navigation and Structure</h3>
                <ul>
                  <li>Logical heading hierarchy for screen readers</li>
                  <li>Descriptive page titles and meta descriptions</li>
                  <li>Clear navigation menus with proper labeling</li>
                  <li>Skip navigation links for keyboard users</li>
                  <li>Consistent page layout and navigation structure</li>
                </ul>

                <h3>Visual Design</h3>
                <ul>
                  <li>Sufficient color contrast ratios (minimum 4.5:1)</li>
                  <li>
                    Text that can be resized up to 200% without loss of
                    functionality
                  </li>
                  <li>
                    Information conveyed through multiple means, not color alone
                  </li>
                  <li>
                    Responsive design that works on various devices and screen
                    sizes
                  </li>
                </ul>

                <h3>Interactive Elements</h3>
                <ul>
                  <li>
                    Keyboard navigation support for all interactive elements
                  </li>
                  <li>Focus indicators for keyboard users</li>
                  <li>Descriptive link text and button labels</li>
                  <li>
                    Form labels and error messages clearly associated with form
                    fields
                  </li>
                  <li>ARIA labels and descriptions where appropriate</li>
                </ul>

                <h3>Media and Content</h3>
                <ul>
                  <li>Alternative text (alt text) for all meaningful images</li>
                  <li>
                    Decorative images marked appropriately for screen readers
                  </li>
                  <li>Structured content with proper headings and lists</li>
                  <li>Clear and simple language throughout the website</li>
                </ul>
              </article>
            </div>
          </section>

          <LogoTab />

          {/* Known Issues */}
          <section
            className="accessibility-issues"
            aria-labelledby="issues-heading"
          >
            <TextCentered
              headingLevel={2}
              title={"Known Issues and Ongoing Improvements"}
              description={`We are continuously working to improve the accessibility of our website. While we strive to meet the highest accessibility standards, we acknowledge that some areas may still need improvement.

We regularly conduct accessibility audits and user testing to identify and address potential barriers. Our development team prioritizes accessibility fixes and enhancements in our ongoing website maintenance and updates.

If you encounter any accessibility barriers on our website, please contact us so we can address the issue promptly.`}
            />
          </section>

          <LogoTab />

          {/* Third-Party Content */}
          <section
            className="third-party-content"
            aria-labelledby="third-party-heading"
          >
            <div className="doctor-bio-container">
              <header className="doctor-bio-header">
                <h2 id="third-party-heading">Third-Party Content</h2>
              </header>

              <article className="doctor-section">
                <p>
                  Our website may include content from third-party services such
                  as:
                </p>
                <ul>
                  <li>Google Analytics for website performance monitoring</li>
                  <li>Social media plugins and embedded content</li>
                  <li>Online appointment scheduling systems</li>
                  <li>Patient portal integrations</li>
                </ul>
                <p>
                  While we strive to ensure all third-party content meets our
                  accessibility standards, we cannot guarantee the accessibility
                  of external services. We work with our vendors to promote
                  accessible practices and seek alternative solutions when
                  accessibility barriers are identified.
                </p>
              </article>
            </div>
          </section>

          <LogoTab />

          {/* Feedback and Contact */}
          <section
            className="accessibility-contact"
            aria-labelledby="contact-heading"
          >
            <div className="doctor-bio-container">
              <header className="doctor-bio-header">
                <h2 id="contact-heading">Feedback and Contact Information</h2>
              </header>

              <article className="doctor-section">
                <h3>Report Accessibility Issues</h3>
                <p>
                  We welcome your feedback on the accessibility of our website.
                  If you encounter any accessibility barriers or have
                  suggestions for improvement, please contact us:
                </p>

                <address
                  className="doctor-highlight"
                  role="note"
                  aria-label="Contact information for accessibility feedback"
                >
                  <p>
                    <strong>Phone:</strong> 907-357-2332
                  </p>
                  <p>
                    <strong>Email:</strong> info@alaskaskincancer.com
                  </p>
                  <p>
                    <strong>Address:</strong>
                    <br />
                    Alaska Skin Cancer Specialty Group
                    <br />
                    3066 E Meridian Park Loop
                    <br />
                    Wasilla, AK 99654
                  </p>
                </address>

                <h3>Response Timeline</h3>
                <p>
                  We aim to respond to accessibility feedback within 2-3
                  business days. Depending on the nature of the issue,
                  resolution may take additional time, but we will keep you
                  informed of our progress and expected timeline for addressing
                  the concern.
                </p>

                <h3>Alternative Access</h3>
                <p>
                  If you are unable to access information on our website due to
                  a disability, please call our office at 907-357-2332. Our
                  staff will be happy to provide the information you need over
                  the phone or help you schedule an appointment.
                </p>
              </article>
            </div>
          </section>

          <LogoTab />

          {/* Legal and Updates */}
          <section
            className="accessibility-legal"
            aria-labelledby="legal-heading"
          >
            <div className="doctor-bio-container">
              <header className="doctor-bio-header">
                <h2 id="legal-heading">Assessment and Updates</h2>
              </header>

              <article className="doctor-section">
                <h3>Assessment Method</h3>
                <p>
                  Alaska Skin Cancer Specialty Group assessed the accessibility
                  of this website through:
                </p>
                <ul>
                  <li>
                    Self-evaluation using automated accessibility testing tools
                  </li>
                  <li>
                    Manual testing with keyboard navigation and screen readers
                  </li>
                  <li>
                    Review of code and markup for accessibility best practices
                  </li>
                  <li>
                    User testing with individuals who use assistive technologies
                  </li>
                </ul>

                <h3>Regular Review</h3>
                <p>
                  This accessibility statement is reviewed and updated regularly
                  as part of our ongoing commitment to digital accessibility. We
                  conduct comprehensive accessibility reviews at least annually
                  and whenever significant website updates are made.
                </p>

                <h3>Last Updated</h3>
                <p>
                  This statement was last updated on{" "}
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  .
                </p>

                <h3>Legal Framework</h3>
                <p>
                  This accessibility statement is based on the Web Content
                  Accessibility Guidelines (WCAG) 2.1 and reflects our
                  commitment to compliance with the Americans with Disabilities
                  Act (ADA) and other applicable accessibility laws and
                  regulations.
                </p>
              </article>
            </div>
          </section>

          <LogoTab />

          {/* Additional Resources */}
          <section
            className="accessibility-resources"
            aria-labelledby="resources-heading"
          >
            <TextCentered
              headingLevel={2}
              title={"Additional Accessibility Resources"}
              description={`For more information about web accessibility and assistive technologies:

• Web Accessibility Initiative (WAI): https://www.w3.org/WAI/
• Americans with Disabilities Act (ADA): https://www.ada.gov/
• WebAIM - Web Accessibility In Mind: https://webaim.org/

We encourage all users to explore these resources to learn more about digital accessibility and available assistive technologies that can enhance your web browsing experience.`}
            />
          </section>

          <LogoTab />
        </main>
      </div>
      <EndingSection />
    </>
  );
}
