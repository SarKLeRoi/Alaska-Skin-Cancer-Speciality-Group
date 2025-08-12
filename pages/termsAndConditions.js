import React from "react";
import Head from "next/head";
import Script from "next/script";
import Navbar from "../components/Navbar";
import TitleRow from "../components/TitleRow";
import EndingSection from "../components/EndingSection";

export default function TermsAndConditions() {
  const baseUrl = "https://www.alaskaskincancer.com";

  return (
    <>
      <Head>
        <title>Terms & Conditions - Alaska Skin Cancer Specialty Group</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Terms and Conditions for Alaska Skin Cancer Specialty Group medical services and website. Review our healthcare policies and patient agreements."
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta
          property="og:title"
          content="Terms & Conditions - Alaska Skin Cancer Specialty Group"
        />
        <meta
          property="og:description"
          content="Terms and Conditions for Alaska Skin Cancer Specialty Group medical services and website policies."
        />
        <meta
          property="og:image"
          content="https://www.alaskaskincancer.com/images/logo.webp"
        />
        <meta
          property="og:url"
          content="https://www.alaskaskincancer.com/termsAndConditions"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Alaska Skin Cancer Specialty Group"
        />

        <meta name="author" content="Alaska Skin Cancer Specialty Group" />
        <link rel="icon" href="/images/favicon.png" />
        <link rel="canonical" href={`${baseUrl}/termsAndConditions`} />
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
              <h1>Terms & Conditions</h1>
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
                <h2>1. Patient Care Agreement</h2>
                <div className="legal-subsection">
                  <p>
                    1.1. By scheduling an appointment or receiving services from
                    Alaska Skin Cancer Specialty Group, you agree to these Terms
                    and Conditions.
                  </p>
                  <p>
                    1.2. These terms establish the relationship between you as a
                    patient and our medical practice for the provision of
                    healthcare services.
                  </p>
                  <p>
                    1.3. All medical services are provided according to
                    professional medical standards and applicable healthcare
                    regulations.
                  </p>
                  <p>
                    1.4. Emergency medical situations require immediate
                    attention - call 911 or go to the nearest emergency room.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>2. Appointment Scheduling and Policies</h2>
                <div className="legal-subsection">
                  <p>
                    2.1. Appointments are scheduled based on availability and
                    medical urgency as determined by our clinical staff.
                  </p>
                  <p>
                    2.2. We require 24-hour advance notice for appointment
                    cancellations to avoid cancellation fees.
                  </p>
                  <p>
                    2.3. Patients who fail to appear for scheduled appointments
                    without notice may be charged a no-show fee.
                  </p>
                  <p>
                    2.4. Repeated missed appointments may result in dismissal
                    from the practice after appropriate notice.
                  </p>
                  <p>
                    2.5. We strive to maintain scheduled appointment times but
                    cannot guarantee exact timing due to medical emergencies.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>3. Financial Responsibility and Billing</h2>
                <div className="legal-subsection">
                  <p>
                    3.1. Patients are responsible for all charges incurred for
                    medical services provided.
                  </p>
                  <p>
                    3.2. Payment is due at the time of service unless prior
                    arrangements have been made.
                  </p>
                  <p>
                    3.3. We accept cash, checks, and major credit cards for
                    payment of medical services.
                  </p>
                  <p>
                    3.4. Insurance co-payments and deductibles are due at the
                    time of service.
                  </p>
                  <p>
                    3.5. Patients are responsible for verifying their insurance
                    coverage and obtaining necessary authorizations.
                  </p>
                  <p>
                    3.6. Unpaid balances may be sent to a collection agency
                    after appropriate notice.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>4. Insurance and Authorization</h2>
                <div className="legal-subsection">
                  <p>
                    4.1. We participate with most major insurance plans, but
                    coverage varies by individual policy.
                  </p>
                  <p>
                    4.2. Patients must provide current insurance information and
                    valid identification at each visit.
                  </p>
                  <p>
                    4.3. Insurance authorization requirements are the
                    patient&apos;s responsibility unless specifically arranged
                    otherwise.
                  </p>
                  <p>
                    4.4. We will assist with insurance claims but cannot
                    guarantee coverage or reimbursement.
                  </p>
                  <p>
                    4.5. Self-pay patients receive a discount on services when
                    payment is made in full at the time of service.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>5. Medical Records and Documentation</h2>
                <div className="legal-subsection">
                  <p>
                    5.1. Complete and accurate medical records are maintained
                    for all patients in accordance with professional standards.
                  </p>
                  <p>
                    5.2. Patients have the right to access their medical records
                    as provided by HIPAA regulations.
                  </p>
                  <p>
                    5.3. Medical record requests must be made in writing and may
                    be subject to reasonable copying fees.
                  </p>
                  <p>
                    5.4. Medical records are retained according to Alaska state
                    law and professional guidelines.
                  </p>
                  <p>
                    5.5. Transfer of medical records to other providers requires
                    written patient authorization.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>6. Treatment Consent and Informed Consent</h2>
                <div className="legal-subsection">
                  <p>
                    6.1. All medical treatments require appropriate informed
                    consent before proceeding.
                  </p>
                  <p>
                    6.2. Patients have the right to understand the nature,
                    risks, benefits, and alternatives to proposed treatments.
                  </p>
                  <p>
                    6.3. Separate informed consent forms may be required for
                    surgical procedures and specialized treatments.
                  </p>
                  <p>
                    6.4. Patients have the right to refuse treatment or seek a
                    second opinion.
                  </p>
                  <p>
                    6.5. Emergency medical situations may require treatment
                    without detailed informed consent when delay would be
                    harmful.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>7. Patient Responsibilities</h2>
                <div className="legal-subsection">
                  <p>
                    7.1. Patients must provide complete and accurate medical
                    history and current medication information.
                  </p>
                  <p>
                    7.2. Patients should inform us of any changes in their
                    health status, medications, or contact information.
                  </p>
                  <p>
                    7.3. Follow post-treatment instructions and attend
                    recommended follow-up appointments.
                  </p>
                  <p>
                    7.4. Respect the rights and privacy of other patients and
                    staff members.
                  </p>
                  <p>
                    7.5. Maintain appropriate behavior in our office and treat
                    staff with courtesy and respect.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>8. Communication and Contact</h2>
                <div className="legal-subsection">
                  <p>
                    8.1. We provide multiple communication methods including
                    phone, email, and patient portal access.
                  </p>
                  <p>
                    8.2. Email and text communications are not secure and should
                    not include confidential medical information.
                  </p>
                  <p>
                    8.3. For urgent medical matters, contact our office directly
                    rather than using email or web forms.
                  </p>
                  <p>
                    8.4. We aim to respond to non-urgent communications within
                    1-2 business days.
                  </p>
                  <p>
                    8.5. After-hours emergency coverage is available through our
                    answering service.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>9. Quality of Care and Outcomes</h2>
                <div className="legal-subsection">
                  <p>
                    9.1. We are committed to providing high-quality medical care
                    according to professional standards.
                  </p>
                  <p>
                    9.2. Medical treatments carry inherent risks and we cannot
                    guarantee specific outcomes.
                  </p>
                  <p>
                    9.3. Individual results may vary based on patient factors,
                    condition severity, and treatment response.
                  </p>
                  <p>
                    9.4. We use evidence-based medicine and established medical
                    protocols in treatment decisions.
                  </p>
                  <p>
                    9.5. Patient feedback and concerns about care quality are
                    taken seriously and investigated appropriately.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>10. Referrals and Coordination of Care</h2>
                <div className="legal-subsection">
                  <p>
                    10.1. We may refer patients to specialists or other
                    healthcare providers when medically appropriate.
                  </p>
                  <p>
                    10.2. Patients are responsible for scheduling and attending
                    referred appointments.
                  </p>
                  <p>
                    10.3. We coordinate care with other providers when
                    authorized by the patient.
                  </p>
                  <p>
                    10.4. Insurance authorization for referrals is the
                    patient&apos;s responsibility unless otherwise arranged.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>11. Termination of Patient Relationship</h2>
                <div className="legal-subsection">
                  <p>
                    11.1. The patient-physician relationship may be terminated
                    by either party with appropriate notice.
                  </p>
                  <p>
                    11.2. We may dismiss patients for non-compliance with
                    treatment, disruptive behavior, or non-payment.
                  </p>
                  <p>
                    11.3. Thirty days&apos; written notice will be provided for
                    non-emergency terminations.
                  </p>
                  <p>
                    11.4. Emergency care will be provided during the notice
                    period if needed.
                  </p>
                  <p>
                    11.5. Medical records will be transferred to new providers
                    upon written request.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>12. Complaints and Grievances</h2>
                <div className="legal-subsection">
                  <p>
                    12.1. We welcome feedback and take all patient concerns
                    seriously.
                  </p>
                  <p>
                    12.2. Complaints should be directed to our practice manager
                    or medical director.
                  </p>
                  <p>
                    12.3. We will investigate complaints promptly and respond
                    within a reasonable time frame.
                  </p>
                  <p>
                    12.4. Patients may also file complaints with state medical
                    boards or other regulatory agencies.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>13. Legal and Regulatory Compliance</h2>
                <div className="legal-subsection">
                  <p>
                    13.1. Our practice operates in compliance with all
                    applicable federal, state, and local laws.
                  </p>
                  <p>
                    13.2. We maintain all required licenses, certifications, and
                    accreditations.
                  </p>
                  <p>
                    13.3. These Terms and Conditions are governed by the laws of
                    the State of Alaska.
                  </p>
                  <p>
                    13.4. Any disputes will be resolved through appropriate
                    legal channels in Alaska.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>14. Modifications and Updates</h2>
                <div className="legal-subsection">
                  <p>
                    14.1. These Terms and Conditions may be updated from time to
                    time to reflect changes in our practice or legal
                    requirements.
                  </p>
                  <p>
                    14.2. Patients will be notified of material changes through
                    posted notices or direct communication.
                  </p>
                  <p>
                    14.3. Continued use of our services constitutes acceptance
                    of updated terms.
                  </p>
                  <p>
                    14.4. Questions about these terms should be directed to our
                    practice management team.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h2>15. Contact Information</h2>
                <div className="legal-subsection">
                  <p>
                    15.1. For questions about these Terms and Conditions or our
                    medical services, please contact us:
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
                    15.2. Our practice manager is available during business
                    hours to address questions about policies and procedures.
                  </p>
                  <p>
                    15.3. After-hours concerns can be addressed through our
                    answering service.
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
