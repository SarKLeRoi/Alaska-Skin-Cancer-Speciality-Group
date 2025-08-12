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
      <header className="about-start">
        <TitleRow />
        <Navbar />
      </header>

      <main>
        <section
          className="section1-bodyparts"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: backgroundPosition,
          }}
          aria-labelledby="page-title"
          role="banner"
        >
          <Fade left duration={2000}>
            <div className="title-of-bodypart">
              <h1 id="page-title">{title}</h1>
            </div>
          </Fade>
        </section>

        <section className="face-section2" aria-labelledby="navigation-heading">
          <h2 id="navigation-heading" className="sr-only">
            {title} Treatment Options
          </h2>
          <Fade bottom duration={2000}>
            <nav
              className="container"
              role="navigation"
              aria-label={`${title} navigation menu`}
            >
              {menuItems.map((item) => (
                <Link
                  key={item.text}
                  href={item.link}
                  className="menu-item"
                  aria-label={`Learn more about ${item.text}`}
                >
                  {item.text}
                </Link>
              ))}
            </nav>
          </Fade>
        </section>
      </main>

      <EndingSection />
    </div>
  );
}

export default BodyPartsLandingPage;
