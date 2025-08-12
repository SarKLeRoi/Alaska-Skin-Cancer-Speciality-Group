import React from "react";
import Head from "next/head";
import Script from "next/script";
import Navbar from "../components/Navbar";
import TitleRow from "../components/TitleRow";
import EndingSection from "../components/EndingSection";

export default function PrivacyPolicy() {
  const baseUrl = "https://www.alaskaskincancer.com";

  return (
    <>
      <Head>
        <title>Privacy Policy - Alaska Skin Cancer Specialty Group</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Privacy Policy for Alaska Skin Cancer Specialty Group. Learn how we collect, use, and protect your personal and health information in compliance with HIPAA."
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta
          property="og:title"
          content="Privacy Policy - Alaska Skin Cancer Specialty Group"
        />
        <meta
          property="og:description"
          content="Privacy Policy for Alaska Skin Cancer Specialty Group website and medical services."
        />
        <meta
          property="og:image"
          content="https://www.alaskaskincancer.com/images/logo.webp"
        />
        <meta
          property="og:url"
          content="https://www.alaskaskincancer.com/privacyPolicy"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Alaska Skin Cancer Specialty Group"
        />

        <meta name="author" content="Alaska Skin Cancer Specialty Group" />
        <link rel="icon" href="/images/favicon.png" />
        <link rel="canonical" href={`${baseUrl}/privacyPolicy`} />
      </Head>

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
          <div className="legal-document-container">
            <header className="legal-header">
              <h1>Privacy Policy</h1>
              <p className="last-updated">
                Last Updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </header>

            <section className="legal-content">
              <div className="legal-section">
                <h2>1. Introduction</h2>
                <div className="legal-subsection">
                  <p>
                    1.1. Alaska Skin Cancer Specialty Group
                    (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or
                    &quot;our&quot;) is committed to protecting your privacy and
                    personal information.
                  </p>
                  <p>
                    1.2. This Privacy Policy describes how we collect, use,
                    maintain, and disclose information collected from users of
                    our website and medical services.
                  </p>
                  <p>
                    1.3. This policy applies to the website and all products and
                    services offered by Alaska Skin Cancer Specialty Group.
                  </p>
                  <p>
                    1.4. By using our website or services, you consent to the
                    practices described in this Privacy Policy.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>2. Information We Collect</h2>
                <div className="legal-subsection">
                  <p>
                    2.1. Personal Information: We collect personally
                    identifiable information such as name, email address, phone
                    number, and mailing address when voluntarily submitted by
                    users.
                  </p>
                  <p>
                    2.2. Health Information: As a medical practice, we collect
                    protected health information (PHI) in accordance with HIPAA
                    regulations for treatment, payment, and healthcare
                    operations.
                  </p>
                  <p>
                    2.3. Website Usage Data: We collect non-personal information
                    about how users interact with our website, including IP
                    addresses, browser types, and pages visited.
                  </p>
                  <p>
                    2.4. Cookies and Tracking: We use cookies and similar
                    technologies to enhance user experience and analyze website
                    performance.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>3. How We Use Information</h2>
                <div className="legal-subsection">
                  <p>
                    3.1. Medical Care: We use health information to provide
                    medical treatment, coordinate care, and communicate with
                    patients about their health.
                  </p>
                  <p>
                    3.2. Administrative Purposes: Personal information is used
                    for appointment scheduling, billing, insurance verification,
                    and practice management.
                  </p>
                  <p>
                    3.3. Communication: We use contact information to respond to
                    inquiries, send appointment reminders, and provide
                    health-related information.
                  </p>
                  <p>
                    3.4. Website Improvement: Non-personal data helps us improve
                    our website functionality and user experience.
                  </p>
                  <p>
                    3.5. Legal Compliance: Information may be used to comply
                    with legal obligations and regulatory requirements.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>4. HIPAA Compliance</h2>
                <div className="legal-subsection">
                  <p>
                    4.1. We are a HIPAA-covered entity and comply with all
                    applicable HIPAA Privacy and Security Rules.
                  </p>
                  <p>
                    4.2. Protected Health Information (PHI) is only used and
                    disclosed as permitted by HIPAA regulations.
                  </p>
                  <p>
                    4.3. Patients have rights under HIPAA including the right to
                    access, amend, and request restrictions on their health
                    information.
                  </p>
                  <p>
                    4.4. We maintain appropriate administrative, physical, and
                    technical safeguards to protect PHI.
                  </p>
                  <p>
                    4.5. A separate Notice of Privacy Practices is provided to
                    patients detailing their HIPAA rights.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>5. Information Sharing and Disclosure</h2>
                <div className="legal-subsection">
                  <p>
                    5.1. We do not sell, trade, or rent personal information to
                    third parties without explicit consent.
                  </p>
                  <p>
                    5.2. Health information may be shared with healthcare
                    providers involved in your care, insurance companies for
                    payment, and as required by law.
                  </p>
                  <p>
                    5.3. We may share aggregated, non-personal information for
                    research, quality improvement, or public health purposes.
                  </p>
                  <p>
                    5.4. Information may be disclosed when required by law,
                    court order, or to protect the safety of individuals.
                  </p>
                  <p>
                    5.5. Business associates who provide services to us are
                    bound by confidentiality agreements and HIPAA compliance
                    requirements.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>6. Data Security</h2>
                <div className="legal-subsection">
                  <p>
                    6.1. We implement appropriate technical and organizational
                    measures to protect personal and health information against
                    unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <p>
                    6.2. Our website uses SSL encryption to protect data
                    transmitted between your browser and our servers.
                  </p>
                  <p>
                    6.3. Access to personal and health information is restricted
                    to authorized personnel who need the information to perform
                    their job functions.
                  </p>
                  <p>
                    6.4. We regularly review and update our security practices
                    to maintain data protection standards.
                  </p>
                  <p>
                    6.5. Despite our efforts, no method of transmission over the
                    internet is 100% secure, and we cannot guarantee absolute
                    security.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>7. Website Cookies and Tracking</h2>
                <div className="legal-subsection">
                  <p>
                    7.1. Our website uses cookies to enhance user experience and
                    analyze website performance.
                  </p>
                  <p>
                    7.2. Cookies are small files stored on your device that help
                    us remember your preferences and understand how you use our
                    website.
                  </p>
                  <p>
                    7.3. You can choose to disable cookies through your browser
                    settings, though this may affect website functionality.
                  </p>
                  <p>
                    7.4. We use Google Analytics to analyze website traffic and
                    usage patterns, which may collect anonymized user data.
                  </p>
                  <p>
                    7.5. Third-party services we use may have their own privacy
                    policies and cookie practices.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>8. Patient Rights and Choices</h2>
                <div className="legal-subsection">
                  <p>
                    8.1. You have the right to access your personal and health
                    information that we maintain.
                  </p>
                  <p>
                    8.2. You may request corrections to inaccurate or incomplete
                    information.
                  </p>
                  <p>
                    8.3. You can request restrictions on how we use or disclose
                    your health information, subject to legal and practical
                    limitations.
                  </p>
                  <p>
                    8.4. You have the right to request confidential
                    communications and alternative contact methods.
                  </p>
                  <p>
                    8.5. You may opt out of non-essential communications such as
                    newsletters or promotional materials.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>9. Data Retention</h2>
                <div className="legal-subsection">
                  <p>
                    9.1. We retain personal and health information for as long
                    as necessary to provide medical care and meet legal
                    requirements.
                  </p>
                  <p>
                    9.2. Medical records are typically retained according to
                    Alaska state law and professional standards.
                  </p>
                  <p>
                    9.3. Website usage data and non-medical personal information
                    may be retained for shorter periods based on business needs.
                  </p>
                  <p>
                    9.4. Information is securely destroyed when no longer
                    needed, in accordance with applicable laws and regulations.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>10. Third-Party Services</h2>
                <div className="legal-subsection">
                  <p>
                    10.1. Our website may contain links to third-party websites
                    or services that have their own privacy policies.
                  </p>
                  <p>
                    10.2. We are not responsible for the privacy practices of
                    third-party websites or services.
                  </p>
                  <p>
                    10.3. We may use third-party service providers for website
                    hosting, analytics, appointment scheduling, and other
                    business functions.
                  </p>
                  <p>
                    10.4. Third-party providers are required to maintain
                    appropriate safeguards and comply with applicable privacy
                    laws.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>11. Children&apos;s Privacy</h2>
                <div className="legal-subsection">
                  <p>
                    11.1. Our website is not directed to children under 13 years
                    of age, and we do not knowingly collect personal information
                    from children under 13.
                  </p>
                  <p>
                    11.2. If we become aware that we have collected personal
                    information from a child under 13, we will take steps to
                    delete such information.
                  </p>
                  <p>
                    11.3. For patients under 18, we comply with applicable laws
                    regarding parental consent and access to medical
                    information.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>12. Privacy Policy Changes</h2>
                <div className="legal-subsection">
                  <p>
                    12.1. We may update this Privacy Policy from time to time to
                    reflect changes in our practices or legal requirements.
                  </p>
                  <p>
                    12.2. Material changes will be communicated through website
                    notices or direct communication when appropriate.
                  </p>
                  <p>
                    12.3. The &quot;Last Updated&quot; date at the top of this
                    policy indicates when the most recent changes were made.
                  </p>
                  <p>
                    12.4. Continued use of our website or services after changes
                    constitutes acceptance of the updated Privacy Policy.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>13. Contact Information</h2>
                <div className="legal-subsection">
                  <p>
                    13.1. If you have questions about this Privacy Policy or our
                    privacy practices, please contact us:
                  </p>
                  <address className="contact-details">
                    <p>
                      <strong>Alaska Skin Cancer Specialty Group</strong>
                    </p>
                    <p>Privacy Officer</p>
                    <p>3066 E Meridian Park Loop, Wasilla, AK 99654</p>
                    <p>Phone: 907-357-2332</p>
                    <p>Email: privacy@alaskaskincancer.com</p>
                  </address>
                  <p>
                    13.2. For HIPAA-related requests or complaints, please
                    contact our Privacy Officer using the above information.
                  </p>
                  <p>
                    13.3. You also have the right to file a complaint with the
                    U.S. Department of Health and Human Services if you believe
                    your privacy rights have been violated.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
      <EndingSection />
    </>
  );
}
