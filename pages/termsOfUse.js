import React from "react";
import Head from "next/head";
import Script from "next/script";
import Navbar from "../components/Navbar";
import TitleRow from "../components/TitleRow";
import EndingSection from "../components/EndingSection";

export default function TermsOfUse() {
  const baseUrl = "https://www.alaskaskincancer.com";

  return (
    <>
      <Head>
        <title>Terms of Service - Alaska Skin Cancer Specialty Group</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Terms of Service for Alaska Skin Cancer Specialty Group website. Review our terms and conditions for using our medical practice website and services."
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta
          property="og:title"
          content="Terms of Service - Alaska Skin Cancer Specialty Group"
        />
        <meta
          property="og:description"
          content="Terms of Service for Alaska Skin Cancer Specialty Group website and medical services."
        />
        <meta
          property="og:image"
          content="https://www.alaskaskincancer.com/images/logo.webp"
        />
        <meta
          property="og:url"
          content="https://www.alaskaskincancer.com/termsOfService"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Alaska Skin Cancer Specialty Group"
        />

        <meta name="author" content="Alaska Skin Cancer Specialty Group" />
        <link rel="icon" href="/images/favicon.png" />
        <link rel="canonical" href={`${baseUrl}/termsOfService`} />
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
              <h1>Terms of Service</h1>
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
                <h2>1. Agreement to Terms</h2>
                <div className="legal-subsection">
                  <p>
                    1.1. These Terms of Service (&quot;Terms&quot;) govern your
                    use of the Alaska Skin Cancer Specialty Group website and
                    services (&quot;Service&quot;) operated by Alaska Skin
                    Cancer Specialty Group (&quot;Company&quot;, &quot;we&quot;,
                    &quot;us&quot;, or &quot;our&quot;).
                  </p>
                  <p>
                    1.2. By accessing or using our Service, you agree to be
                    bound by these Terms and our Privacy Policy.
                  </p>
                  <p>
                    1.3. If you disagree with any part of these Terms, then you
                    may not access the Service.
                  </p>
                  <p>
                    1.4. These Terms apply to all visitors, users, and others
                    who access or use the Service.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>2. Site Description</h2>
                <div className="legal-subsection">
                  <p>
                    2.1. The site displays general information about the
                    Company&apos;s medical operations, services, treatment
                    options, healthcare team, and contact options.
                  </p>
                  <p>
                    2.2. The site is for informational purposes only and does
                    not constitute medical advice, diagnosis, or treatment
                    recommendations by the Company.
                  </p>
                  <p>
                    2.3. Images on the site are for illustration purposes only;
                    some are generated using artificial intelligence for display
                    purposes.
                  </p>
                  <p>
                    2.4. Medical information provided is general in nature and
                    should not replace consultation with qualified healthcare
                    professionals.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>3. Contact and Communications</h2>
                <div className="legal-subsection">
                  <p>
                    3.1. The site allows users to contact the Company via forms
                    where name, phone number, email address, and message must be
                    provided.
                  </p>
                  <p>
                    3.2. Submitting your information constitutes consent to be
                    contacted by the Company, including by phone or email.
                  </p>
                  <p>
                    3.3. Filling out forms implies acceptance of these Terms of
                    Use and the site&apos;s Privacy Policy.
                  </p>
                  <p>
                    3.4. Communications through this website are not secure and
                    should not include sensitive medical information.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>4. Medical Disclaimer and Information Use</h2>
                <div className="legal-subsection">
                  <p>
                    4.1. Use of the site is solely at the user&apos;s
                    responsibility and does not establish a physician-patient
                    relationship.
                  </p>
                  <p>
                    4.2. The Company makes no guarantees about the accuracy,
                    completeness, or currency of medical information on the
                    site, and is not responsible for any damages resulting from
                    reliance on it.
                  </p>
                  <p>
                    4.3. You may not use the content for commercial purposes
                    without prior written permission from the Company.
                  </p>
                  <p>
                    4.4. The site may include links to third-party websites. The
                    Company is not responsible for their content, reliability,
                    or availability.
                  </p>
                  <p>
                    4.5. Always consult with qualified healthcare professionals
                    for medical advice, diagnosis, and treatment decisions.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>5. Prohibited Uses</h2>
                <div className="legal-subsection">
                  <p>
                    5.1. Do not use the site in ways that may harm other users,
                    the site infrastructure, or third-party rights.
                  </p>
                  <p>
                    5.2. Do not upload malicious code, spam, or engage in any
                    activity that could compromise site security.
                  </p>
                  <p>
                    5.3. Do not attempt to gain unauthorized access to any
                    portion of the site or its related systems.
                  </p>
                  <p>
                    5.4. Do not use the site to transmit confidential patient
                    health information unless through secure, designated
                    channels.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>6. Intellectual Property Rights</h2>
                <div className="legal-subsection">
                  <p>
                    6.1. The Service and its original content, features, and
                    functionality are owned by Alaska Skin Cancer Specialty
                    Group and are protected by copyright and other intellectual
                    property laws.
                  </p>
                  <p>
                    6.2. You may not reproduce, distribute, modify, or create
                    derivative works of any content without express written
                    permission.
                  </p>
                  <p>
                    6.3. Medical images, patient photographs, and treatment
                    documentation remain the property of the Company and
                    patients as applicable.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>7. HIPAA and Privacy</h2>
                <div className="legal-subsection">
                  <p>
                    7.1. We are committed to protecting patient health
                    information in accordance with HIPAA regulations.
                  </p>
                  <p>
                    7.2. This website is not intended for transmission of
                    protected health information (PHI).
                  </p>
                  <p>
                    7.3. For secure communication of medical information, please
                    use our patient portal or contact our office directly.
                  </p>
                  <p>
                    7.4. Any personal information collected through this website
                    is subject to our Privacy Policy.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>8. Emergency Medical Situations</h2>
                <div className="legal-subsection">
                  <p>
                    8.1. This website is not intended for emergency medical
                    communications.
                  </p>
                  <p>
                    8.2. In case of medical emergency, call 911 immediately.
                  </p>
                  <p>
                    8.3. For urgent medical concerns, contact our office
                    directly at 907-357-2332 during business hours.
                  </p>
                  <p>
                    8.4. We do not guarantee immediate response to website
                    communications and they should not be used for
                    time-sensitive medical matters.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>9. Limitation of Liability</h2>
                <div className="legal-subsection">
                  <p>
                    9.1. In no event shall Alaska Skin Cancer Specialty Group be
                    liable for any indirect, incidental, special, consequential,
                    or punitive damages.
                  </p>
                  <p>
                    9.2. Our total liability shall not exceed the amount paid by
                    you, if any, for accessing this website.
                  </p>
                  <p>
                    9.3. Some jurisdictions do not allow the exclusion of
                    certain warranties or limitation of liability, so the above
                    limitations may not apply to you.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>10. Governing Law</h2>
                <div className="legal-subsection">
                  <p>
                    10.1. These Terms shall be interpreted and governed by the
                    laws of the State of Alaska, without regard to its conflict
                    of law provisions.
                  </p>
                  <p>
                    10.2. Any disputes arising from these Terms shall be
                    resolved in the appropriate courts of Alaska.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>11. Changes to Terms</h2>
                <div className="legal-subsection">
                  <p>
                    11.1. We reserve the right to modify or replace these Terms
                    at any time.
                  </p>
                  <p>
                    11.2. If a revision is material, we will try to provide at
                    least 30 days notice prior to any new terms taking effect.
                  </p>
                  <p>
                    11.3. Continued use of the Service after changes constitutes
                    acceptance of the new Terms.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>12. Contact Information</h2>
                <div className="legal-subsection">
                  <p>
                    12.1. If you have any questions about these Terms of
                    Service, please contact us:
                  </p>
                  <address className="contact-details">
                    <p>
                      <strong>Alaska Skin Cancer Specialty Group</strong>
                    </p>
                    <p>3066 E Meridian Park Loop, Wasilla, AK 99654</p>
                    <p>Phone: 907-357-2332</p>
                    <p>Email: info@alaskaskincancer.com</p>
                  </address>
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
