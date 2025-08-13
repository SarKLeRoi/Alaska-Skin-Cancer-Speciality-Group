import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import EndingSection from "../components/EndingSection";
import TitleRow from "../components/TitleRow";
import LogoTab from "../components/Logo-Tab";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <>
      <Head>
        <title>
          Blog - Understanding Skin Cancer: Prevention and Early Detection
        </title>
        <meta
          name="description"
          content="Learn about skin cancer types, prevention strategies, and the importance of early detection."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Understanding Skin Cancer: Prevention and Early Detection"
        />
        <meta
          property="og:description"
          content="Learn about skin cancer types, prevention strategies, and the importance of early detection."
        />
        <meta property="og:image" content="/images/skin-cancer/1.webp" />
        <meta
          property="og:url"
          content="https://www.alaskaskincancer.com/blog"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Understanding Skin Cancer: Prevention and Early Detection"
        />
        <meta
          name="twitter:description"
          content="Learn about skin cancer types, prevention strategies, and the importance of early detection."
        />
        <meta name="twitter:image" content="/images/skin-cancer/1.webp" />
      </Head>
      <TitleRow />
      <Navbar />
      <motion.section
        className="hero-section"
        aria-labelledby="hero-heading"
        initial="hidden"
        animate="visible"
        variants={scaleIn}
      >
        <div className="full-width-photo first-photo with-overlay">
          <img
            src="/images/skin-cancer/1.webp"
            alt="Understanding Skin Cancer: Prevention and Early Detection"
          />
        </div>
      </motion.section>
      <LogoTab />
      <main>
        <motion.section
          className="blog-section"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1>Understanding Skin Cancer: Prevention and Early Detection</h1>
          <article>
            <p>
              Skin cancer is the most common form of cancer in the United
              States, affecting millions of people each year. Despite its
              prevalence, many cases of skin cancer can be prevented with proper
              awareness and proactive measures. In this blog post, we'll explore
              the types of skin cancer, prevention strategies, and the
              importance of early detection.
            </p>
            <h2>Types of Skin Cancer</h2>
            <ul>
              <li>
                <strong>Basal Cell Carcinoma (BCC)</strong>: This is the most
                common type of skin cancer. It arises from the basal cells in
                the epidermis and typically appears as a pearly bump or a
                flesh-colored patch. BCC grows slowly and rarely spreads, but it
                can cause significant damage if left untreated.
              </li>
              <li>
                <strong>Squamous Cell Carcinoma (SCC)</strong>: SCC originates
                in the squamous cells and often appears as a red, scaly patch or
                a sore that doesn't heal. It can spread to other parts of the
                body if not treated promptly.
              </li>
              <li>
                <strong>Melanoma</strong>: Although less common, melanoma is the
                most dangerous form of skin cancer. It develops in the
                melanocytes, the cells that produce pigment, and can spread
                rapidly. Melanoma often appears as a new mole or a change in an
                existing mole.
              </li>
            </ul>
            <h2>Prevention Strategies</h2>
            <ul>
              <li>
                <strong>Use Sunscreen</strong>: Apply a broad-spectrum sunscreen
                with an SPF of at least 30 every day, even on cloudy days.
                Reapply every two hours, or more often if swimming or sweating.
              </li>
              <li>
                <strong>Seek Shade</strong>: Avoid direct sun exposure,
                especially between 10 a.m. and 4 p.m., when UV rays are
                strongest.
              </li>
              <li>
                <strong>Wear Protective Clothing</strong>: Long-sleeved shirts,
                wide-brimmed hats, and sunglasses can provide additional
                protection from the sun.
              </li>
              <li>
                <strong>Avoid Tanning Beds</strong>: Tanning beds emit UV
                radiation that can increase the risk of skin cancer.
              </li>
              <li>
                <strong>Perform Regular Skin Checks</strong>: Examine your skin
                monthly for any new or changing moles or spots. Early detection
                is key to successful treatment.
              </li>
            </ul>
            <h2>The Importance of Early Detection</h2>
            <p>
              Early detection of skin cancer can significantly improve treatment
              outcomes. Regular skin checks and professional screenings can help
              identify suspicious changes early. If you notice any new or
              unusual skin changes, consult a dermatologist promptly.
            </p>
            <h2>Conclusion</h2>
            <p>
              Skin cancer is a serious but often preventable disease. By
              adopting sun-safe habits and staying vigilant about skin changes,
              you can reduce your risk and protect your health. Remember, early
              detection saves lives, so make skin checks a regular part of your
              health routine.
            </p>
          </article>
        </motion.section>
      </main>
      <LogoTab />
      <EndingSection />
    </>
  );
}

// Animation Variants
const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
