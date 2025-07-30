import React from "react";
import Navbar from "./Navbar";
import TitleRow from "./TitleRow";
import LogoTab from "./Logo-Tab";
import EndingSection from "./EndingSection";
const DoctorBio = ({ doctor }) => {
  return (
    <>
      <TitleRow />
      <Navbar />
      <div className="full-width-photo first-photo">
        <img
          src="/images/AboutTheGroup1.webp"
          alt="Alaska Skin Cancer Specialty Group"
        />
      </div>
      <LogoTab />
      <div className="doctor-bio-container">
        <div className="doctor-bio-content">
          <div className="doctor-image-section">
            {doctor.image && (
              <img
                src={doctor.image}
                alt={doctor.name}
                className="doctor-headshot"
              />
            )}
          </div>
          <div className="doctor-bio-text">
            <h1 className="doctor-name">{doctor.name}</h1>
            <p className="doctor-intro">{doctor.title}</p>

            <div className="doctor-section">
              <p>{doctor.description}</p>
            </div>

            <div className="doctor-section">
              <h2>Educational Background and Training</h2>
              <p>
                <strong>Osteopathic Degree:</strong> {doctor.education.degree}
              </p>
              <p>
                <strong>Residency:</strong> {doctor.education.residency}
              </p>
            </div>

            <div className="doctor-section">
              <h2>Professional Experience</h2>
              {doctor.experience.map((exp, idx) => (
                <div className="doctor-exp" key={idx}>
                  <h3>{exp.title}</h3>
                  <p>{exp.description}</p>
                </div>
              ))}
            </div>

            <div className="doctor-section">
              <h2>Expertise in Laser and Radiation Therapies</h2>

              <h3>Laser Treatments</h3>
              <p>
                Dr. Galler utilizes advanced laser technologies to address a
                variety of dermatological conditions, including cosmetic
                procedures.
              </p>
              <ul>
                {doctor.laserTherapies.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h3>Radiation Therapy</h3>
              <p>{doctor.radiationTherapy}</p>
            </div>

            <div className="doctor-section">
              <h2>Licensure and Certifications</h2>
              <p>
                <strong>State Licenses:</strong> {doctor.licenses}
              </p>
              <p>
                <strong>Professional Memberships:</strong>{" "}
                {doctor.certifications}
              </p>
            </div>

            <div className="doctor-section">
              <h2>Research and Publications</h2>
              <p>{doctor.research}</p>
            </div>

            <div className="doctor-section">
              <h2>{doctor.approach}</h2>
              <div className="doctor-highlight">
                <p>
                  Dr. Galler is committed to providing personalized,
                  comprehensive care that addresses each patient's unique needs
                  and concerns. His extensive experience in both traditional and
                  innovative treatments ensures that patients receive the most
                  effective and appropriate care for their specific conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LogoTab />
      <EndingSection />
    </>
  );
};

export default DoctorBio;
