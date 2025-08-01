// pages/doctors/DrDorizas.js
import React from "react";
import Head from "next/head";
import Script from "next/script";
import DoctorBio from "../../../components/DoctorBio";

const DrDorizas = () => {
  const doctor = {
    name: "Dr. Andrew S. Dorizas, MD, FAAD, ACMS",
    title: "Double Board-Certified Dermatologist and Mohs Surgeon",
    image: "/images/doctors/AndrewDorizas_Headshot.webp",
    sections: [
      {
        title: "",
        content: [
          {
            type: "paragraph",
            text: "<strong>Dr. Andrew S. Dorizas</strong> is a double board-certified dermatologist and Mohs surgeon by the American Board of Dermatology. He received his dermatology training at the prestigious University of Miami Department of Dermatology and Cutaneous Surgery, where he honed his expertise in advanced skin cancer treatments and comprehensive medical dermatology. He served as the chief resident in his final year and still holds an affiliation to the institution. He completed his internal medicine internship at the University at Buffalo. ",
          },
          {
            type: "paragraph",
            text: "<strong></strong> Recognized for his excellence in patient care and clinical expertise, Dr. Dorizas was voted among the Best Dermatologists in the U.S. in both 2022 and 2023 through Statista and Newsweek by his peers.",
          },
          {
            type: "paragraph",
            text: "<strong></strong> Dr. Dorizas is dedicated to providing the highest standard of dermatologic care, integrating evidence-based medicine with a patient-centered philosophy. His approach ensures that patients receive personalized, cutting-edge treatments tailored to their individual needs, fostering trust and optimal outcomes.",
          },
          {
            type: "paragraph",
            text: "<strong></strong> In addition to his clinical practice, Dr. Dorizas has played a pivotal role in dermatologic education, actively training residents and shaping the next generation of dermatologists. He is published in many prominent dermatology and dermatologic surgery peer-reviewed journals as well as authored book chapters. His expertise has been sought at national conferences, where he has delivered lectures on innovative treatments and inflammatory skin disease. As a recognized leader in the field, he collaborates with other experts and industry pioneers to advance dermatologic research and refine patient care methodologies.",
          },
        ],
      },
      {
        title: "Professional Membership",
        content: [
          {
            type: "paragraph",
            text: "<strong></strong> Diplomate of the American Board of Dermatology",
          },
          {
            type: "paragraph",
            text: "<strong></strong> Diplomate of the American Board of DermatologyFellow of the American",
          },
          {
            type: "paragraph",
            text: "<strong></strong> Academy of Dermatology",
          },
          {
            type: "paragraph",
            text: "<strong></strong> Member of the Florida Society of Dermatology and Dermatologic Surgery",
          },
          {
            type: "paragraph",
            text: "<strong></strong> Member of American Society for Dermatologic Surgery",
          },
          {
            type: "paragraph",
            text: "<strong></strong> Member of the American Society of Mohs Surgery",
          },
        ],
      },
      {
        title: "Residency",
        content: [
          {
            type: "paragraph",
            text: "<strong></strong> University of Miami",
          },
        ],
      },
      {
        title: "Internship",
        content: [
          {
            type: "paragraph",
            text: "<strong></strong> University at Buffalo",
          },
        ],
      },
      {
        title: "Medical School",
        content: [
          {
            type: "paragraph",
            text: "<strong></strong> University of Szeged",
          },
        ],
      },
      {
        title: "Dermatologic Education and Research",
        content: [
          {
            type: "paragraph",
            className: "bullet-circle",
            text: "<strong>•</strong> Former Chief Resident at University of Miami",
          },
          {
            type: "paragraph",
            className: "bullet-circle",
            text: "<strong>•</strong> National speaker on innovative treatments and inflammatory skin diseases",
          },
          {
            type: "paragraph",
            className: "bullet-circle",
            text: "<strong>•</strong> Published author in peer-reviewed journals and dermatology textbooks",
          },
        ],
      },
      {
        title: "Professional Recognition",
        content: [
          {
            type: "paragraph",
            className: "bullet-circle",
            text: "<strong>•</strong> Named among the Best Dermatologists in the U.S. (2022 & 2023 – Newsweek/Statista)",
          },
          {
            type: "paragraph",
            className: "bullet-circle",
            text: "<strong>•</strong> Known for clinical excellence and leadership in patient care",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Head>
        <title>
          Dr. Andrew S. Dorizas, MD, FAAD, ACMS - Double Board-Certified
          Dermatologist | Alaska Skin Cancer Specialty Group
        </title>
        <meta
          name="description"
          content="Dr. Andrew S. Dorizas, MD, FAAD, ACMS, is a double board-certified dermatologist and Mohs surgeon. Expert in advanced skin cancer treatments and comprehensive medical dermatology."
        />
        <meta
          name="keywords"
          content="Dr. Andrew Dorizas, dermatologist Alaska, Mohs surgeon, skin cancer treatment, University of Miami, American Academy of Dermatology"
        />
        <meta name="author" content="Alaska Skin Cancer Specialty Group" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Dr. Andrew S. Dorizas, MD, FAAD, ACMS - Double Board-Certified Dermatologist"
        />
        <meta
          property="og:description"
          content="Expert dermatologist and Mohs surgeon specializing in advanced skin cancer treatments and comprehensive medical dermatology."
        />
        <meta property="og:type" content="profile" />
        <meta
          property="og:url"
          content="https://alaskaskincancer.com/about/dr-dorizas"
        />
        <meta
          property="og:image"
          content="/images/doctors/AndrewDorizas_Headshot.webp"
        />
        <meta
          property="og:site_name"
          content="Alaska Skin Cancer Specialty Group"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dr. Andrew S. Dorizas, MD, FAAD, ACMS - Double Board-Certified Dermatologist"
        />
        <meta
          name="twitter:description"
          content="Expert dermatologist and Mohs surgeon specializing in advanced skin cancer treatments and comprehensive medical dermatology."
        />
        <meta
          name="twitter:image"
          content="/images/doctors/AndrewDorizas_Headshot.webp"
        />
        <link
          rel="canonical"
          href="https://alaskaskincancer.com/about/dr-dorizas"
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
            name: "Dr. Andrew S. Dorizas, MD, FAAD, ACMS",
            jobTitle: "Double Board-Certified Dermatologist and Mohs Surgeon",
            description:
              "Dr. Andrew S. Dorizas is a double board-certified dermatologist and Mohs surgeon by the American Board of Dermatology, specializing in advanced skin cancer treatments and comprehensive medical dermatology.",
            image: "/images/doctors/AndrewDorizas_Headshot.webp",
            url: "https://alaskaskincancer.com/about/dr-dorizas",
            worksFor: {
              "@type": "MedicalOrganization",
              name: "Alaska Skin Cancer Specialty Group",
              url: "https://alaskaskincancer.com",
            },
            medicalSpecialty: [
              "Dermatology",
              "Mohs Micrographic Surgery",
              "Skin Cancer Treatment",
              "Medical Dermatology",
              "Inflammatory Skin Diseases",
            ],
            hasCredential: [
              "Board-Certified Dermatologist",
              "Board-Certified Mohs Surgeon",
              "Fellow of the American Academy of Dermatology (FAAD)",
              "Member of American College of Mohs Surgery (ACMS)",
              "MD - Medical Doctor",
            ],
            alumniOf: [
              "University of Miami Department of Dermatology and Cutaneous Surgery",
              "University at Buffalo",
              "University of Szeged",
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
                name: "Dr. Andrew S. Dorizas, MD, FAAD, ACMS",
                item: "https://alaskaskincancer.com/about/dr-dorizas",
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

export default DrDorizas;
