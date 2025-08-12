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
      <main>
        <section className="hero-section" aria-labelledby="doctor-hero">
          <div className="full-width-photo first-photo">
            <img
              src="/images/AboutTheGroup1.webp"
              alt="Alaska Skin Cancer Specialty Group medical facility and team"
            />
          </div>
        </section>
        <header className="doctor-bio-header">
          <img
            src="/images/Triangle-Logo.png" /* Ensure the correct path */
            alt="Alaska Skin Cancer Specialty Group logo"
            className="homepage-triangle-svg"
            aria-hidden="true"
          />
          <h1 id="doctor-hero">{doctor.name}</h1>
          <h2 className="sr-only">{doctor.title}</h2>
        </header>
        <section
          className="doctor-bio-container"
          aria-labelledby="doctor-biography"
        >
          <h2 id="doctor-biography" className="sr-only">
            Doctor Biography and Qualifications
          </h2>
          <div className="doctor-bio-content">
            <aside
              className="doctor-image-section"
              aria-label="Doctor headshot"
            >
              {doctor.image && (
                <img
                  src={doctor.image}
                  alt={`Professional headshot of ${doctor.name}`}
                  className="doctor-headshot"
                />
              )}
            </aside>
            <article className="doctor-bio-text">
              {doctor.sections.map((section, idx) => (
                <section
                  className="doctor-section"
                  key={idx}
                  aria-labelledby={`section-${idx}`}
                >
                  {section.title && (
                    <h3 id={`section-${idx}`}>{section.title}</h3>
                  )}
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
                    </div>
                  ))}
                </section>
              ))}
            </article>
          </div>
        </section>
        <LogoTab />
      </main>
      <EndingSection />
    </>
  );
};

export default DoctorBio;
