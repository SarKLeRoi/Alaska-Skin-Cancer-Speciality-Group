// pages/doctors/DrGaller.js
import React from "react";
import DoctorBio from "../../components/DoctorBio";

const DrGaller = () => {
  const doctor = {
    name: "Dr. Blake R. Galler, D.O. FAAD",
    title: "Board-Certified Dermatologist",
    image: "/images/doctors/BlakeGaller_headshot.webp",
    description:
      "Dr. Blake R. Galler, DO, is a board-certified dermatologist renowned...",
    education: {
      degree: "Dr. Galler earned his Doctor of Osteopathic Medicine (DO)...",
      residency: "He completed his dermatology residency at the San Antonio...",
    },
    experience: [
      {
        title: "Capstone Dermatology",
        description: "Currently, Dr. Galler practices...",
      },
      {
        title: "Teledermatology",
        description: "Since 2013, Dr. Galler has been a pioneer...",
      },
      {
        title: "Dermatology Service Chief",
        description: "Dwight D. Eisenhower Army Medical Center 2018-2020.",
      },
      {
        title: "Military Service",
        description: "Dr. Galler began his medical career in the U.S. Army...",
      },
    ],
    laserTherapies: [
      "Specialties include:",
      "• CO2",
      "Nd:Yag",
      "Ablative resurfacing and fractionated Co2 and Erb:Yag",
      "Laser hair removal",
      "Scar revision",
      "Skin rejuvenation",
      "Vascular lesions (rosacea)",
      "Pigmentations (age/sun spots, freckles, melasma)",
      "Skin rejuvenation",
    ],
    radiationTherapy:
      "Dr. Galler offers Image-Guided Superficial Radiation Therapy (IGSRT)...",
    licenses:
      "Dr. Galler is licensed to practice dermatology in over 40 states...",
    certifications:
      "Dr. Galler is a member of the American Board of Dermatology...",
    research:
      "Throughout his career, Dr. Galler has contributed to dermatological research...",
    approach: "Patient-Centered Approach",
  };

  return <DoctorBio doctor={doctor} />;
};

export default DrGaller;
