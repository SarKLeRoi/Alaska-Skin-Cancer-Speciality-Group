import React from "react";
import Head from "next/head";
import Script from "next/script";
import Navbar from "../components/Navbar";
import TitleRow from "../components/TitleRow";
import EndingSection from "../components/EndingSection";

export default function HipaaNotice() {
  const baseUrl = "https://www.alaskaskincancer.com";

  return (
    <>
      <Head>
        <title>
          HIPAA Notice of Privacy Practices - Alaska Skin Cancer Specialty Group
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="HIPAA Notice of Privacy Practices for Alaska Skin Cancer Specialty Group. Learn about your rights regarding protected health information and how we use and disclose medical information."
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta
          property="og:title"
          content="HIPAA Notice of Privacy Practices - Alaska Skin Cancer Specialty Group"
        />
        <meta
          property="og:description"
          content="HIPAA Notice of Privacy Practices for Alaska Skin Cancer Specialty Group medical practice."
        />
        <meta
          property="og:image"
          content="https://www.alaskaskincancer.com/images/logo.webp"
        />
        <meta
          property="og:url"
          content="https://www.alaskaskincancer.com/hipaaNotice"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Alaska Skin Cancer Specialty Group"
        />

        <meta name="author" content="Alaska Skin Cancer Specialty Group" />
        <link rel="icon" href="/images/favicon.png" />
        <link rel="canonical" href={`${baseUrl}/hipaaNotice`} />
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
              <h1>HIPAA Notice of Privacy Practices</h1>
              <p className="last-updated">
                Effective Date:{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </header>

            <section className="legal-content">
              <div className="legal-section">
                <h2>1. Our Commitment to Your Privacy</h2>
                <div className="legal-subsection">
                  <p>
                    1.1. Alaska Skin Cancer Specialty Group is committed to
                    protecting the privacy of your protected health information
                    (PHI).
                  </p>
                  <p>
                    1.2. We are required by law to maintain the privacy of your
                    health information and to provide you with this Notice of
                    our legal duties and privacy practices.
                  </p>
                  <p>
                    1.3. We are required to follow the terms of this Notice
                    currently in effect.
                  </p>
                  <p>
                    1.4. This Notice describes how medical information about you
                    may be used and disclosed and how you can get access to this
                    information.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>2. How We May Use and Disclose Your Health Information</h2>
                <div className="legal-subsection">
                  <p>
                    2.1. <strong>Treatment:</strong> We may use your health
                    information to provide you with medical treatment and
                    services. We may disclose your health information to
                    doctors, nurses, and other healthcare personnel who provide
                    care to you.
                  </p>
                  <p>
                    2.2. <strong>Payment:</strong> We may use and disclose your
                    health information to obtain payment for the services we
                    provide to you. This may include billing your insurance
                    company, verifying coverage, and obtaining
                    pre-authorization.
                  </p>
                  <p>
                    2.3. <strong>Healthcare Operations:</strong> We may use and
                    disclose your health information for healthcare operations
                    activities such as quality assessment, staff review, and
                    business management.
                  </p>
                  <p>
                    2.4. <strong>Business Associates:</strong> We may share your
                    health information with third-party business associates who
                    perform services on our behalf, such as billing companies or
                    IT support, under written agreements requiring them to
                    protect your information.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>3. Special Uses and Disclosures</h2>
                <div className="legal-subsection">
                  <p>
                    3.1. <strong>Appointment Reminders:</strong> We may contact
                    you to remind you of appointments via phone, email, or text
                    message.
                  </p>
                  <p>
                    3.2. <strong>Treatment Alternatives:</strong> We may contact
                    you to provide information about treatment alternatives or
                    other health-related benefits and services.
                  </p>
                  <p>
                    3.3. <strong>Emergency Situations:</strong> We may use or
                    disclose your health information in emergency treatment
                    situations.
                  </p>
                  <p>
                    3.4. <strong>Family and Friends:</strong> We may disclose
                    your health information to family members, relatives, or
                    close personal friends who are involved in your care, unless
                    you object.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>4. Uses and Disclosures Required by Law</h2>
                <div className="legal-subsection">
                  <p>
                    4.1. <strong>Public Health Activities:</strong> We may
                    disclose health information for public health activities
                    such as disease prevention, reporting births and deaths, and
                    FDA-regulated product monitoring.
                  </p>
                  <p>
                    4.2. <strong>Health Oversight:</strong> We may disclose
                    health information to health oversight agencies for
                    activities such as audits, investigations, and licensure.
                  </p>
                  <p>
                    4.3.{" "}
                    <strong>Judicial and Administrative Proceedings:</strong> We
                    may disclose health information in response to court orders,
                    subpoenas, or administrative requests.
                  </p>
                  <p>
                    4.4. <strong>Law Enforcement:</strong> We may disclose
                    health information to law enforcement officials for law
                    enforcement purposes as required by law.
                  </p>
                  <p>
                    4.5. <strong>Workers&apos; Compensation:</strong> We may
                    disclose health information for workers&apos; compensation
                    or similar programs that provide benefits for work-related
                    injuries.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>5. Uses and Disclosures Requiring Your Authorization</h2>
                <div className="legal-subsection">
                  <p>
                    5.1. <strong>Marketing:</strong> We will obtain your written
                    authorization before using your health information for
                    marketing purposes, except for face-to-face communications
                    or promotional gifts of nominal value.
                  </p>
                  <p>
                    5.2. <strong>Sale of Information:</strong> We will obtain
                    your written authorization before selling your health
                    information.
                  </p>
                  <p>
                    5.3. <strong>Psychotherapy Notes:</strong> We will obtain
                    your written authorization before using or disclosing
                    psychotherapy notes, except for limited circumstances
                    permitted by law.
                  </p>
                  <p>
                    5.4. <strong>Other Uses:</strong> Any other use or
                    disclosure of your health information not described in this
                    Notice will be made only with your written authorization.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>6. Your Individual Rights</h2>
                <div className="legal-subsection">
                  <p>
                    6.1. <strong>Right to Access:</strong> You have the right to
                    inspect and copy your health information maintained in your
                    medical record and billing records.
                  </p>
                  <p>
                    6.2. <strong>Right to Amendment:</strong> You have the right
                    to request that we amend your health information if you
                    believe it is incorrect or incomplete.
                  </p>
                  <p>
                    6.3. <strong>Right to Accounting:</strong> You have the
                    right to request an accounting of disclosures of your health
                    information made by us for certain purposes.
                  </p>
                  <p>
                    6.4. <strong>Right to Request Restrictions:</strong> You
                    have the right to request restrictions on how we use or
                    disclose your health information for treatment, payment, or
                    healthcare operations.
                  </p>
                  <p>
                    6.5. <strong>Right to Alternative Communication:</strong>{" "}
                    You have the right to request that we communicate with you
                    about medical matters in a certain way or at a certain
                    location.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>7. How to Exercise Your Rights</h2>
                <div className="legal-subsection">
                  <p>
                    7.1. <strong>Written Requests:</strong> All requests to
                    exercise your rights must be made in writing and submitted
                    to our Privacy Officer.
                  </p>
                  <p>
                    7.2. <strong>Request Forms:</strong> We have forms available
                    to help you submit requests. Contact our office to obtain
                    the appropriate forms.
                  </p>
                  <p>
                    7.3. <strong>Response Time:</strong> We will respond to your
                    requests within 30 days, or 60 days in certain circumstances
                    with written notification of the delay.
                  </p>
                  <p>
                    7.4. <strong>Fees:</strong> We may charge reasonable fees
                    for copying, mailing, or electronic transmission of your
                    health information.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>8. Right to File a Complaint</h2>
                <div className="legal-subsection">
                  <p>
                    8.1. <strong>Internal Complaints:</strong> You may file a
                    complaint with our Privacy Officer if you believe your
                    privacy rights have been violated.
                  </p>
                  <p>
                    8.2. <strong>Federal Complaints:</strong> You may file a
                    complaint with the U.S. Department of Health and Human
                    Services Office for Civil Rights.
                  </p>
                  <p>
                    8.3. <strong>No Retaliation:</strong> We will not retaliate
                    against you for filing a complaint.
                  </p>
                  <p>
                    8.4. <strong>Contact Information:</strong> To file a
                    complaint or for more information about our privacy
                    practices, contact our Privacy Officer using the information
                    provided below.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>9. Breach Notification</h2>
                <div className="legal-subsection">
                  <p>
                    9.1. <strong>Notification Requirement:</strong> In the case
                    of a breach of unsecured protected health information, we
                    will notify you as required by law.
                  </p>
                  <p>
                    9.2. <strong>Timing:</strong> We will provide notification
                    without unreasonable delay, but no later than 60 days after
                    discovery of the breach.
                  </p>
                  <p>
                    9.3. <strong>Method:</strong> Notification will be provided
                    by mail to your last known address, or by email if you have
                    agreed to electronic communication.
                  </p>
                  <p>
                    9.4. <strong>Content:</strong> The notification will include
                    a description of the breach, types of information involved,
                    steps we are taking to address the breach, and steps you can
                    take to protect yourself.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>10. Changes to This Notice</h2>
                <div className="legal-subsection">
                  <p>
                    10.1. <strong>Right to Change:</strong> We reserve the right
                    to change this Notice and to make the revised or changed
                    Notice effective for health information we already have
                    about you as well as any information we receive in the
                    future.
                  </p>
                  <p>
                    10.2. <strong>Notification:</strong> We will post the
                    current Notice in our office and on our website, and will
                    provide you with a copy of the revised Notice upon request.
                  </p>
                  <p>
                    10.3. <strong>Effective Date:</strong> Each Notice will
                    contain the effective date on the front page.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>11. Minimum Necessary Standard</h2>
                <div className="legal-subsection">
                  <p>
                    11.1. <strong>General Rule:</strong> We will make reasonable
                    efforts to use, disclose, and request only the minimum
                    amount of health information necessary to accomplish the
                    purpose of the use, disclosure, or request.
                  </p>
                  <p>
                    11.2. <strong>Exceptions:</strong> This minimum necessary
                    standard does not apply to disclosures to or requests by
                    healthcare providers for treatment purposes.
                  </p>
                  <p>
                    11.3. <strong>Implementation:</strong> We have implemented
                    policies and procedures to limit access to health
                    information based on job responsibilities and need to know.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>12. Contact Information and Privacy Officer</h2>
                <div className="legal-subsection">
                  <p>
                    12.1. If you have questions about this Notice or wish to
                    exercise any of your rights, please contact our Privacy
                    Officer:
                  </p>
                  <address className="contact-details">
                    <p>
                      <strong>Alaska Skin Cancer Specialty Group</strong>
                    </p>
                    <p>
                      <strong>Privacy Officer</strong>
                    </p>
                    <p>3066 E Meridian Park Loop, Wasilla, AK 99654</p>
                    <p>Phone: 907-357-2332</p>
                    <p>Email: privacy@alaskaskincancer.com</p>
                  </address>
                  <p>
                    12.2. <strong>Federal Complaint Address:</strong>
                  </p>
                  <address className="contact-details">
                    <p>
                      <strong>
                        U.S. Department of Health and Human Services
                      </strong>
                    </p>
                    <p>Office for Civil Rights</p>
                    <p>200 Independence Avenue, S.W.</p>
                    <p>Washington, D.C. 20201</p>
                    <p>Phone: 1-877-696-6775</p>
                    <p>Website: www.hhs.gov/ocr/privacy/hipaa/complaints/</p>
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
