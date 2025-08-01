// pages/doctors/DrGaller.js
import React from "react";
import Head from "next/head";
import Script from "next/script";
import DoctorBio from "../../../components/DoctorBio";

const DrGaller = () => {
  const doctor = {
    name: "Dr. Blake R. Galler, D.O. FAAD",
    title: "Board-Certified Dermatologist",
    image: "/images/doctors/BlakeGaller_headshot.webp",
    sections: [
      {
        title: "",
        content: [
          {
            type: "paragraph",
            text: "<strong>Dr. Blake R. Galler, DO</strong>, is a board-certified dermatologist renowned for his extensive expertise in laser therapies and radiation treatments for various skin conditions. With over a decade of experience in dermatology, Dr. Galler has made significant contributions to advancing the standard of care for dermatology in the state of Alaska with its unique challenges. ",
          },
        ],
      },
      {
        title: "Educational Background and Training",
        content: [
          {
            type: "paragraph",
            className: "bullet-circle",
            text: "<strong>•</strong> Medical Degree: Dr. Galler earned his Doctor of Osteopathic Medicine (DO) from the University of North Texas Health Science Center Texas College of Osteopathic Medicine in 2012.",
          },
          {
            type: "paragraph",
            className: "bullet-circle",
            text: "<strong>•</strong> Residency: He completed his dermatology residency at the San Antonio Uniformed Services Health Education Consortium between 2013 and 2016, where he trained under Dr. Chad Hivnor most notably including cutaneous and cosmetic laser surgery.",
          },
        ],
      },
      {
        title: "Professional Experience",
        content: [
          {
            type: "paragraph",
            className: "bullet-circle",
            text: "<strong>•</strong> Capstone Dermatology: Currently, Dr. Galler practices at Capstone Dermatology in Wasilla, Alaska, providing comprehensive dermatological care to a diverse and uniquely remote patient population.",
          },
          {
            type: "paragraph",
            className: "bullet-circle",
            text: "<strong>•</strong> Teledermatology: Since 2013, Dr. Galler has been a pioneer in teledermatology, offering online consultations to patients, including military personnel. He collaborates with several platforms to ensure accessible dermatological care across multiple states.",
          },
          {
            type: "paragraph",
            className: "bullet-circle",
            text: "<strong>•</strong> Dermatology Service Chief: Dwight D. Eisenhower Army Medical Center 2018-2020.",
          },
          {
            type: "paragraph",
            className: "bullet-circle",
            text: "<strong>•</strong> Military Service: Dr. Galler began his medical career in the U.S. Army after accepting the Health Professions Scholarship. Through the U.S. Army he gained extensive experience in teledermatology, providing remote care as well as providing care at the Center for the Intrepid and Army Burn Unit in San Antonio (San Antonio Military Medical Center).",
          },
        ],
      },
      {
        title: "Expertise in Laser and Radiation Therapies",
        content: [
          {
            type: "paragraph",
            className: "bullet-circle",
            text: "<strong>•</strong>  Laser Treatments: Dr. Galler utilizes advanced laser technologies to address a variety of dermatological conditions, including cosmetic procedures.",
          },
          {
            type: "paragraph",
            text: "○ Specialties include: Pulsed dye laser, Nd:Yag, Ablative resurfacing and fractionated Co2 and Erb:Yag as well as non-ablative fractional laser (NAFL). Laser hair removal, Scar revision, keloid treatment, vascular lesions (rosacea), pigmentations disorders (sunspots, freckles, melasma) and lastly skin rejuvenation.",
          },
          {
            type: "paragraph",
            className: "bullet-circle",
            text: "<strong>•</strong> Radiation Therapy: Dr. Galler offers Image-Guided Superficial Radiation Therapy (IGSRT) for treating non-melanoma skin cancers, providing patients with non-surgical treatment options. Further applications include keloids as well as less common tumors such as Kaposi’s Sarcoma. Notably, Dr. Galler's clinic was the first in Alaska to offer The GentleCure™ Experience for non-melanoma skin cancer treatment with over a decade of treating NSMC with IGSRT.",
          },
        ],
      },
      {
        title: "Licensure and Certifications",
        content: [
          {
            type: "paragraph",
            className: "bullet-circle",
            text: "<strong>•</strong> Dr. Galler is licensed to practice teledermatology in over 40 states, including Alaska, Arizona, Nebraska, Florida, Vermont, Hawaii, Texas, Illinois, Alabama, California, Colorado, Georgia, Iowa, Idaho, Indiana, North Dakota, Kentucky, Louisiana, Maine, Minnesota, Missouri, Montana, North Carolina, and Utah.",
          },
          {
            type: "paragraph",
            className: "bullet-circle",
            text: "<strong>•</strong> Dr. Galler is a member of the American Board of Dermatology as well as the Dermatology Association of Radiation Therapy (Dart).",
          },
        ],
      },
      {
        title: "Research and Publications",
        content: [
          {
            type: "paragraph",
            text: "<strong></strong> Throughout his career, Dr. Galler has contributed to dermatological research, with publications in peer-reviewed journals such as Cutis. His research interests include innovative diagnostic techniques and treatment modalities for various skin conditions.",
          },
        ],
      },
      {
        title: "Patient-Centered Approach",
        content: [
          {
            type: "paragraph",
            text: "<strong></strong> Dr. Galler is committed to providing personalized, comprehensive care that addresses each patient's unique needs and concerns. His extensive experience in both traditional and innovative treatments ensures that patients receive the most effective and appropriate care for their specific conditions.",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Head>
        <title>
          Dr. Blake R. Galler, DO - Board-Certified Dermatologist | Alaska Skin
          Cancer Specialty Group
        </title>
        <meta
          name="description"
          content="Dr. Blake R. Galler, DO, is a board-certified dermatologist specializing in laser therapies and radiation treatments. Expert in teledermatology and skin cancer care in Alaska."
        />
        <meta
          name="keywords"
          content="Dr. Blake Galler, dermatologist Alaska, laser therapy, radiation therapy, skin cancer treatment, teledermatology, Capstone Dermatology"
        />
        <meta name="author" content="Alaska Skin Cancer Specialty Group" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Dr. Blake R. Galler, DO - Board-Certified Dermatologist"
        />
        <meta
          property="og:description"
          content="Expert dermatologist specializing in laser therapies and radiation treatments for skin conditions in Alaska."
        />
        <meta property="og:type" content="profile" />
        <meta
          property="og:url"
          content="https://alaskaskincancer.com/about/dr-galler"
        />
        <meta
          property="og:image"
          content="/images/doctors/BlakeGaller_headshot.webp"
        />
        <meta
          property="og:site_name"
          content="Alaska Skin Cancer Specialty Group"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dr. Blake R. Galler, DO - Board-Certified Dermatologist"
        />
        <meta
          name="twitter:description"
          content="Expert dermatologist specializing in laser therapies and radiation treatments for skin conditions in Alaska."
        />
        <meta
          name="twitter:image"
          content="/images/doctors/BlakeGaller_headshot.webp"
        />
        <link
          rel="canonical"
          href="https://alaskaskincancer.com/about/dr-galler"
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
            name: "Dr. Blake R. Galler, DO",
            jobTitle: "Board-Certified Dermatologist",
            description:
              "Dr. Blake R. Galler, DO, is a board-certified dermatologist renowned for his extensive expertise in laser therapies and radiation treatments for various skin conditions.",
            image: "/images/doctors/BlakeGaller_headshot.webp",
            url: "https://alaskaskincancer.com/about/dr-galler",
            worksFor: {
              "@type": "MedicalOrganization",
              name: "Alaska Skin Cancer Specialty Group",
              url: "https://alaskaskincancer.com",
            },
            medicalSpecialty: [
              "Dermatology",
              "Laser Therapy",
              "Radiation Therapy",
              "Skin Cancer Treatment",
              "Teledermatology",
            ],
            hasCredential: [
              "Board-Certified Dermatologist",
              "DO - Doctor of Osteopathic Medicine",
            ],
            alumniOf: [
              "University of North Texas Health Science Center Texas College of Osteopathic Medicine",
              "San Antonio Uniformed Services Health Education Consortium",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Wasilla",
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
                item: "https://alaskaskincancer.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "About",
                item: "https://alaskaskincancer.com/about",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Dr. Blake R. Galler, DO",
                item: "https://alaskaskincancer.com/about/dr-galler",
              },
            ],
          }),
        }}
      />

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-QDN4FFSPG8`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QDN4FFSPG8');
        `}
      </Script>

      <DoctorBio doctor={doctor} />
    </>
  );
};

export default DrGaller;
