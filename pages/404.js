import React from "react";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Navbar from "../components/Navbar";
import TitleRow from "../components/TitleRow";
import TextCentered from "../components/TextCentered";
import LogoTab from "../components/Logo-Tab";
import EndingSection from "../components/EndingSection";

export default function Custom404() {
  const baseUrl = "https://www.alaskaskincancer.com";

  return (
    <>
      <Head>
        <title>Page Not Found - Alaska Skin Cancer Specialty Group</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="The page you're looking for could not be found. Return to Alaska Skin Cancer Specialty Group homepage or explore our services."
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta
          property="og:title"
          content="Page Not Found - Alaska Skin Cancer Specialty Group"
        />
        <meta
          property="og:description"
          content="The page you're looking for could not be found. Return to Alaska Skin Cancer Specialty Group homepage or explore our services."
        />
        <meta
          property="og:image"
          content="https://www.alaskaskincancer.com/images/logo.webp"
        />
        <meta
          property="og:url"
          content="https://www.alaskaskincancer.com/404"
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
          content="Page Not Found - Alaska Skin Cancer Specialty Group"
        />
        <meta
          name="twitter:description"
          content="The page you're looking for could not be found. Return to Alaska Skin Cancer Specialty Group homepage."
        />
        <meta
          name="twitter:image"
          content="https://www.alaskaskincancer.com/images/logo.webp"
        />

        <meta name="author" content="Alaska Skin Cancer Specialty Group" />
        <link rel="icon" href="/images/favicon.png" />
        <link rel="canonical" href={`${baseUrl}/404`} />
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
          <section className="hero-section" aria-labelledby="error-heading">
            <div className="full-width-photo first-photo with-overlay">
              <img
                src="/images/skin-cancer/1.webp"
                alt="Alaska Skin Cancer Specialty Group - professional medical care"
              />
              <div className="image-overlay-title">
                <h1 id="error-heading" className="overlay-title black-subtitle">
                  Page Not Found
                </h1>
              </div>
              <div className="image-overlay-subtitle">
                <h2 className="overlay-subtitle black-subtitle">
                  We&apos;re Here to Help You Find What You Need
                </h2>
              </div>
            </div>
          </section>

          <LogoTab />

          <section className="error-content" aria-labelledby="error-message">
            <TextCentered
              headingLevel={3}
              title={"Oops! This Page Doesn't Exist"}
              description={`The page you're looking for might have been moved, renamed, or no longer exists. But don't worry – we're here to help you find the information you need about skin cancer treatment and our expert medical services.

Our team specializes in comprehensive skin cancer care, from diagnosis to treatment to reconstruction. Let us help you navigate to the right information.`}
            />
          </section>

          <LogoTab />

          {/* Helpful Navigation */}
          <section
            className="error-navigation"
            aria-labelledby="navigation-heading"
          >
            <h2 id="navigation-heading" className="sr-only">
              Helpful Navigation Options
            </h2>
            <div className="face-section2">
              <div className="container">
                <Link
                  href="/"
                  className="menu-item"
                  aria-label="Return to homepage"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="menu-item"
                  aria-label="Learn about our practice and providers"
                >
                  About Us
                </Link>
                <Link
                  href="/skinCancer"
                  className="menu-item"
                  aria-label="Information about skin cancer types"
                >
                  Skin Cancer
                </Link>
                <Link
                  href="/treatmentOptions"
                  className="menu-item"
                  aria-label="View available treatment options"
                >
                  Treatment Options
                </Link>
                <Link
                  href="/contact"
                  className="menu-item"
                  aria-label="Contact us for appointments"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </section>

          <LogoTab />

          <section
            className="emergency-info"
            aria-labelledby="emergency-heading"
          >
            <TextCentered
              headingLevel={3}
              title={"Need Immediate Assistance?"}
              description={`If you're experiencing a medical emergency, please call 911 immediately.

For non-emergency questions about skin cancer or to schedule an appointment, please call our office at 907-357-2332 or visit our contact page.

Our board-certified specialists are here to provide expert care when you need it most.`}
            />
          </section>

          <LogoTab />
        </main>
      </div>
      <EndingSection />
    </>
  );
}
