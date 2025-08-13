import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import TitleRow from "./TitleRow";
import LogoTab from "./Logo-Tab";
import EndingSection from "./EndingSection";

export default function DoctorBio({ doctor }) {
  // Optimized Animation variants (prevent layout shifts)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <TitleRow />
      <Navbar />
      <main>
        <motion.section
          className="hero-section"
          aria-labelledby="doctor-hero"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <div className="full-width-photo first-photo">
            <img
              src="/images/AboutTheGroup1.webp"
              alt="Alaska Skin Cancer Specialty Group medical facility and team"
            />
          </div>
        </motion.section>
        <motion.header
          className="doctor-bio-header"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          transition={{ delay: 0.2 }}
        >
          <img
            src="/images/Triangle-Logo.png" /* Ensure the correct path */
            alt="Alaska Skin Cancer Specialty Group logo"
            className="homepage-triangle-svg"
            aria-hidden="true"
          />
          <h1 id="doctor-hero">{doctor.name}</h1>
          <h2 className="sr-only">{doctor.title}</h2>
        </motion.header>
        <motion.section
          className="doctor-bio-container"
          aria-labelledby="doctor-biography"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ delay: 0.4 }}
        >
          <h2 id="doctor-biography" className="sr-only">
            Doctor Biography and Qualifications
          </h2>
          <motion.div className="doctor-bio-content" variants={itemVariants}>
            <motion.aside
              className="doctor-image-section"
              aria-label="Doctor headshot"
              variants={imageVariants}
            >
              {doctor.image && (
                <img
                  src={doctor.image}
                  alt={`Professional headshot of ${doctor.name}`}
                  className="doctor-headshot"
                />
              )}
            </motion.aside>

            <motion.article
              className="doctor-bio-text"
              variants={containerVariants}
            >
              {doctor.sections.map((section, idx) => (
                <motion.section
                  className="doctor-section"
                  key={idx}
                  aria-labelledby={`section-${idx}`}
                  variants={itemVariants}
                >
                  {section.title && (
                    <h3 id={`section-${idx}`}>{section.title}</h3>
                  )}
                  {section.content.map((item, itemIdx) => (
                    <motion.div key={itemIdx} variants={itemVariants}>
                      {item.type === "paragraph" && (
                        <p
                          className={item.className || ""}
                          dangerouslySetInnerHTML={{ __html: item.text }}
                        ></p>
                      )}
                      {item.type === "list" && (
                        <ul>
                          {item.items.map((listItem, listIdx) => (
                            <li
                              key={listIdx}
                              dangerouslySetInnerHTML={{ __html: listItem }}
                            ></li>
                          ))}
                        </ul>
                      )}
                      {item.type === "highlight" && (
                        <div
                          className="doctor-highlight"
                          role="note"
                          aria-label="Important information"
                        >
                          <p
                            dangerouslySetInnerHTML={{ __html: item.text }}
                          ></p>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.section>
              ))}
            </motion.article>
          </motion.div>
        </motion.section>
        <LogoTab />
      </main>
      <EndingSection />
    </>
  );
}
