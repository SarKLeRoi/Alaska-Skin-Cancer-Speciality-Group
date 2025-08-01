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
      <div className="doctor-bio-header">
        <img
          src="/images/Triangle-Logo.png" /* Ensure the correct path */
          alt="Triangle Logo"
          className="homepage-triangle-svg"
        />
        <h2>{doctor.name}</h2>
      </div>
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
            {doctor.sections.map((section, idx) => (
              <div className="doctor-section" key={idx}>
                <h2>{section.title}</h2>
                {section.content.map((item, itemIdx) => (
                  <div key={itemIdx}>
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
                      <div className="doctor-highlight">
                        <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <LogoTab />
      <EndingSection />
    </>
  );
};

export default DoctorBio;
