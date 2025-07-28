import React from "react";
import TitleRow from "@/components/TitleRow";
import Navbar from "@/components/Navbar";
import EndingSection from "@/components/EndingSection";
import Fade from "react-reveal/Fade";
import Link from "next/link";

function BodyPartsLandingPage({
  backgroundImage,
  title,
  menuItems,
  backgroundPosition,
}) {
  return (
    <div>
      <section className="about-start">
        <TitleRow />
        <Navbar />
      </section>

      <section
        className="section1-bodyparts"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: backgroundPosition,
        }}
      >
        <Fade left duration={2000}>
          <div className="title-of-bodypart">
            <h2>{title}</h2>
          </div>
        </Fade>
      </section>

      <section className="face-section2">
        <Fade bottom duration={2000}>
          <div className="container">
            {menuItems.map((item) => (
              <a key={item.text} href={item.link} className="menu-item">
                {item.text}
              </a>
            ))}
          </div>
        </Fade>
      </section>

      <EndingSection />
    </div>
  );
}

export default BodyPartsLandingPage;
