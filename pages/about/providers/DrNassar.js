// pages/doctors/DrNassar.js
import React from "react";
import Head from "next/head";
import Script from "next/script";
import DoctorBio from "../../../components/DoctorBio";

const DrNassar = () => {
  const doctor = {
    name: "Dr. Amer H. Nassar, M.D.",
    title: "Double Board-Certified Plastic and Reconstructive Surgeon",
    image: "/images/doctors/AmerNassar_headshot.webp",
    sections: [
      {
        title: "",
        content: [
          {
            type: "paragraph",
            text: "<strong>Amer H. Nassar, M.D.</strong> is a double board-certified Plastic and Reconstructive surgeon. He completed his general surgery training at the University of Washington Medical Center in Seattle, followed by a plastic and reconstructive surgery residency/fellowship at Harvard Medical School.",
          },
          {
            type: "paragraph",
            text: "Dr. Nassar's contributions to the field of plastic surgery extend beyond his clinical practice. He is a prolific author, with numerous publications to his name, spanning both the reconstructive and cosmetic literature. Additionally, he has lent his knowledge as an editor and co-author to a notable book, as well as many other book chapters and has had the honor of presenting at esteemed conferences worldwide.",
          },
          {
            type: "paragraph",
            text: "With a keen focus on both reconstructive and cosmetic surgery, Dr. Nassar offers care across the spectrum of plastic and reconstructive surgery with a particular interest and specialization in Mohs Reconstruction. His dedication to staying at the forefront of advancements in his field ensures that his patients receive the highest quality care and the most advanced techniques available.",
          },
          {
            type: "paragraph",
            text: "Dr Nassar is recognized by many in his field as a leading expert in Mohs Reconstruction of the face, utilizing various techniques, flaps and grafts to restore form, function and harmony to the face.",
          },
        ],
      },
      {
        title: "Residency/Fellowship",
        content: [
          {
            type: "paragraph",
            className: "bullet-circle",
            text: "<strong>•</strong> General Surgery, University of Washington",
          },
          {
            type: "paragraph",
            className: "bullet-circle",
            text: "<strong>•</strong> Plastic and Reconstructive Surgery, Harvard Medical School",
          },
        ],
      },
      {
        title: "Board Certifications",
        content: [
          {
            type: "paragraph",
            className: "bullet-circle",
            text: "<strong>•</strong> The American Board of Plastic Surgery",
          },
          {
            type: "paragraph",
            className: "bullet-circle",
            text: "<strong>•</strong> The American Board of Surgery ",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Head>
        <title>
          Dr. Amer H. Nassar, MD - Double Board-Certified Plastic Surgeon |
          Alaska Skin Cancer Specialty Group
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Dr. Amer H. Nassar, MD, is a double board-certified Plastic and Reconstructive surgeon specializing in Mohs Reconstruction. Expert in facial reconstruction and plastic surgery."
        />
        <meta
          name="keywords"
          content="Dr. Amer Nassar, plastic surgeon Alaska, Mohs reconstruction, facial reconstruction, Harvard Medical School, University of Washington"
        />
        <meta name="author" content="Alaska Skin Cancer Specialty Group" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Dr. Amer H. Nassar, MD - Double Board-Certified Plastic Surgeon"
        />
        <meta
          property="og:description"
          content="Expert plastic and reconstructive surgeon specializing in Mohs reconstruction and facial reconstruction techniques."
        />
        <meta property="og:type" content="profile" />
        <meta
          property="og:url"
          content="https://www.alaskaskincancer.com/about/providers/DrNassar"
        />
        <meta
          property="og:image"
          content="https://www.alaskaskincancer.com/images/doctors/AmerNassar_headshot.webp"
        />
        <meta
          property="og:site_name"
          content="Alaska Skin Cancer Specialty Group"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dr. Amer H. Nassar, MD - Double Board-Certified Plastic Surgeon"
        />
        <meta
          name="twitter:description"
          content="Expert plastic and reconstructive surgeon specializing in Mohs reconstruction and facial reconstruction techniques."
        />
        <meta
          name="twitter:image"
          content="https://www.alaskaskincancer.com/images/doctors/AmerNassar_headshot.webp"
        />
        <link
          rel="canonical"
          href="https://www.alaskaskincancer.com/about/providers/DrNassar"
        />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <Script
        id="doctor-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProfessional",
            name: "Dr. Amer H. Nassar, MD",
            jobTitle:
              "Double Board-Certified Plastic and Reconstructive Surgeon",
            description:
              "Dr. Amer H. Nassar, MD, is a double board-certified Plastic and Reconstructive surgeon specializing in Mohs Reconstruction and facial reconstruction techniques.",
            image:
              "https://www.alaskaskincancer.com/images/doctors/AmerNassar_headshot.webp",
            url: "https://www.alaskaskincancer.com/about/providers/DrNassar",
            worksFor: {
              "@type": "MedicalOrganization",
              name: "Alaska Skin Cancer Specialty Group",
              url: "https://www.alaskaskincancer.com",
            },
            medicalSpecialty: [
              "Plastic Surgery",
              "Reconstructive Surgery",
              "Mohs Reconstruction",
              "Facial Reconstruction",
              "Cosmetic Surgery",
            ],
            hasCredential: [
              "Board-Certified Plastic Surgeon",
              "Board-Certified General Surgeon",
              "MD - Medical Doctor",
            ],
            alumniOf: [
              "Harvard Medical School",
              "University of Washington Medical Center",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Alaska",
              addressRegion: "Alaska",
              addressCountry: "US",
            },
          }),
        }}
      />

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
              {
                "@type": "ListItem",
                position: 3,
                name: "Providers",
                item: "https://www.alaskaskincancer.com/about/providers",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Dr. Amer H. Nassar, MD",
                item: "https://www.alaskaskincancer.com/about/providers/DrNassar",
              },
            ],
          }),
        }}
      />

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

      <main>
        <DoctorBio doctor={doctor} />
      </main>
    </>
  );
};

export default DrNassar;
