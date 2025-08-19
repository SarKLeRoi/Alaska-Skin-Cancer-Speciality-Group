import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import TitleRow from "../../components/TitleRow";
import EndingSection from "../../components/EndingSection";

export default function MedicalDisclaimer() {
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
        <title>Medical Disclaimer - Alaska Skin Cancer Specialty Group</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Medical Disclaimer for Alaska Skin Cancer Specialty Group. Important information about website content, medical advice, and physician-patient relationships."
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta
          property="og:title"
          content="Medical Disclaimer - Alaska Skin Cancer Specialty Group"
        />
        <meta
          property="og:description"
          content="Medical Disclaimer for Alaska Skin Cancer Specialty Group website and medical information."
        />
        <meta
          property="og:image"
          content="https://www.alaskaskincancer.com/images/logo.webp"
        />
        <meta
          property="og:url"
          content="https://www.alaskaskincancer.com/medicalDisclaimer"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Alaska Skin Cancer Specialty Group"
        />

        <meta name="author" content="Alaska Skin Cancer Specialty Group" />
        <link rel="icon" href="/images/favicon.png" />
        <link rel="canonical" href={`${baseUrl}/medicalDisclaimer`} />
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
              <h1>Medical Disclaimer</h1>
              <p className="last-updated">
                Effective Date:{" "}
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
                <h2>1. General Information and Purpose</h2>
                <div className="legal-subsection">
                  <p>
                    1.1. This website is maintained by Alaska Skin Cancer
                    Specialty Group for informational purposes only.
                  </p>
                  <p>
                    1.2. The information provided on this website is intended to
                    educate visitors about skin cancer, dermatological
                    conditions, and available treatment options.
                  </p>
                  <p>
                    1.3. The content on this website is not intended to replace
                    professional medical advice, diagnosis, or treatment.
                  </p>
                  <p>
                    1.4. This disclaimer applies to all information, content,
                    and services provided through this website.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>2. Not Medical Advice</h2>
                <div className="legal-subsection">
                  <p>
                    2.1. The information provided on this website does not
                    constitute medical advice and should not be relied upon as
                    such.
                  </p>
                  <p>
                    2.2. The content is for general informational purposes only
                    and is not intended to address your particular requirements
                    or circumstances.
                  </p>
                  <p>
                    2.3. The information may not be complete, accurate, or
                    current and should not be used in place of a visit,
                    consultation, or advice from a qualified healthcare
                    provider.
                  </p>
                  <p>
                    2.4. Medical information changes rapidly, and the content on
                    this website may not reflect the most current medical
                    developments.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>3. No Physician-Patient Relationship</h2>
                <div className="legal-subsection">
                  <p>
                    3.1. Use of this website does not establish a
                    physician-patient relationship between you and Alaska Skin
                    Cancer Specialty Group or any of its providers.
                  </p>
                  <p>
                    3.2. No physician-patient relationship is formed by
                    submitting questions through contact forms or email
                    communications.
                  </p>
                  <p>
                    3.3. A physician-patient relationship is established only
                    through an in-person consultation and examination at our
                    office.
                  </p>
                  <p>
                    3.4. Communications through this website are not
                    confidential and do not replace the need for an in-person
                    medical consultation.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>4. Emergency Medical Situations</h2>
                <div className="legal-subsection">
                  <p>
                    4.1. This website is not intended for emergency medical
                    communications or urgent medical situations.
                  </p>
                  <p>
                    4.2. If you are experiencing a medical emergency, call 911
                    immediately or go to the nearest emergency room.
                  </p>
                  <p>
                    4.3. Do not rely on this website or email communications for
                    urgent medical concerns that require immediate attention.
                  </p>
                  <p>
                    4.4. For urgent but non-emergency medical concerns, contact
                    our office directly during business hours at 907-357-2332.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>5. Individual Medical Consultation Required</h2>
                <div className="legal-subsection">
                  <p>
                    5.1. Always seek the advice of a qualified healthcare
                    provider with any questions you may have regarding a medical
                    condition.
                  </p>
                  <p>
                    5.2. Never disregard professional medical advice or delay in
                    seeking it because of something you have read on this
                    website.
                  </p>
                  <p>
                    5.3. Individual medical conditions require personalized
                    evaluation, diagnosis, and treatment by qualified healthcare
                    professionals.
                  </p>
                  <p>
                    5.4. The information provided on this website cannot
                    substitute for individual medical evaluation and treatment
                    recommendations.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>6. Treatment Outcomes and Results</h2>
                <div className="legal-subsection">
                  <p>
                    6.1. Medical treatments and outcomes vary significantly from
                    patient to patient based on individual circumstances.
                  </p>
                  <p>
                    6.2. No guarantee is made regarding the outcome of any
                    medical treatment or procedure described on this website.
                  </p>
                  <p>
                    6.3. Results shown in before and after photos or case
                    studies may not be typical and do not guarantee similar
                    outcomes.
                  </p>
                  <p>
                    6.4. Individual factors such as age, health status, skin
                    type, and treatment compliance affect medical outcomes.
                  </p>
                  <p>
                    6.5. All medical procedures carry inherent risks, and
                    benefits and risks should be discussed with qualified
                    healthcare providers.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>7. Accuracy and Currency of Information</h2>
                <div className="legal-subsection">
                  <p>
                    7.1. While we strive to provide accurate and current
                    information, we make no representations or warranties about
                    the accuracy, completeness, or currency of the content.
                  </p>
                  <p>
                    7.2. Medical knowledge and treatment protocols evolve
                    rapidly, and information may become outdated without notice.
                  </p>
                  <p>
                    7.3. We reserve the right to modify or update the content on
                    this website at any time without prior notice.
                  </p>
                  <p>
                    7.4. Users are responsible for verifying information with
                    qualified healthcare providers before making medical
                    decisions.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>8. Third-Party Links and Content</h2>
                <div className="legal-subsection">
                  <p>
                    8.1. This website may contain links to third-party websites
                    or resources for additional information.
                  </p>
                  <p>
                    8.2. We do not endorse or take responsibility for the
                    content, accuracy, or practices of third-party websites.
                  </p>
                  <p>
                    8.3. Links to external resources are provided for
                    convenience and do not constitute an endorsement of their
                    content.
                  </p>
                  <p>
                    8.4. Users access third-party websites at their own risk and
                    should review their terms of use and privacy policies.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>9. Limitation of Liability</h2>
                <div className="legal-subsection">
                  <p>
                    9.1. Alaska Skin Cancer Specialty Group and its providers
                    shall not be liable for any damages arising from the use of
                    this website or reliance on its content.
                  </p>
                  <p>
                    9.2. This includes, but is not limited to, direct, indirect,
                    incidental, consequential, or punitive damages.
                  </p>
                  <p>
                    9.3. We are not responsible for any adverse consequences
                    resulting from actions taken based on information found on
                    this website.
                  </p>
                  <p>
                    9.4. Users assume full responsibility for their use of this
                    website and any decisions made based on its content.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>10. Professional Licensing and Credentials</h2>
                <div className="legal-subsection">
                  <p>
                    10.1. Our healthcare providers are licensed to practice
                    medicine in the State of Alaska.
                  </p>
                  <p>
                    10.2. Medical licenses and credentials are subject to
                    verification through appropriate state licensing boards.
                  </p>
                  <p>
                    10.3. Our providers maintain board certifications and
                    continuing education as required by their respective
                    specialties.
                  </p>
                  <p>
                    10.4. Information about provider credentials and specialties
                    is available upon request.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>11. Telemedicine and Remote Consultations</h2>
                <div className="legal-subsection">
                  <p>
                    11.1. Telemedicine services, if offered, are subject to
                    separate agreements and disclaimers.
                  </p>
                  <p>
                    11.2. Not all medical conditions can be adequately evaluated
                    or treated through telemedicine.
                  </p>
                  <p>
                    11.3. In-person examination may be necessary for accurate
                    diagnosis and appropriate treatment recommendations.
                  </p>
                  <p>
                    11.4. Technical limitations of telemedicine may affect the
                    quality of remote consultations.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>12. Privacy and Confidentiality</h2>
                <div className="legal-subsection">
                  <p>
                    12.1. While we implement security measures to protect your
                    information, no method of electronic transmission is
                    completely secure.
                  </p>
                  <p>
                    12.2. Do not transmit sensitive medical information through
                    unsecured website forms or email communications.
                  </p>
                  <p>
                    12.3. For confidential medical communications, use our
                    secure patient portal or contact our office directly.
                  </p>
                  <p>
                    12.4. Please refer to our Privacy Policy and HIPAA Notice
                    for detailed information about how we protect your health
                    information.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>13. Governing Law and Jurisdiction</h2>
                <div className="legal-subsection">
                  <p>
                    13.1. This disclaimer is governed by the laws of the State
                    of Alaska.
                  </p>
                  <p>
                    13.2. Any disputes arising from the use of this website
                    shall be resolved in the appropriate courts of Alaska.
                  </p>
                  <p>
                    13.3. If any provision of this disclaimer is found to be
                    unenforceable, the remaining provisions shall remain in full
                    force and effect.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>14. Contact Information for Medical Concerns</h2>
                <div className="legal-subsection">
                  <p>
                    14.1. For medical questions, concerns, or to schedule an
                    appointment, please contact our office directly:
                  </p>
                  <address className="contact-details">
                    <p>
                      <strong>Alaska Skin Cancer Specialty Group</strong>
                    </p>
                    <p>3066 E Meridian Park Loop, Wasilla, AK 99654</p>
                    <p>Phone: 907-357-2332</p>
                    <p>Email: info@alaskaskincancer.com</p>
                    <p>Website: www.alaskaskincancer.com</p>
                  </address>
                  <p>
                    14.2. <strong>Office Hours:</strong> Please call during
                    regular business hours for non-emergency medical concerns.
                  </p>
                  <p>
                    14.3. <strong>After-Hours:</strong> For urgent medical
                    concerns after hours, contact our answering service through
                    the main office number.
                  </p>
                  <p>
                    14.4. <strong>Emergency:</strong> For life-threatening
                    emergencies, call 911 or go to the nearest emergency room
                    immediately.
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
