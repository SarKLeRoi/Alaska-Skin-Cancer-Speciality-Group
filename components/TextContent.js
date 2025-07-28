/* eslint-disable @next/next/no-html-link-for-pages */
import Fade from "react-reveal/Fade";
function TextContent({
  title,
  secondaryTitle,
  thirdTitle,
  description,
  bgDesktop,
  bgMobile,
  bgColorMobile,
  side,
  newMargin,
  backgroundPosition,
  showAboutButton,
  width,
  contentBackgroundColor,
  newPadding,
}) {
  const mobileBackground = bgMobile
    ? { backgroundImage: `url(${bgMobile})` }
    : { backgroundColor: bgColorMobile };

  return (
    <>
      <section
        className="section3"
        style={{
          backgroundImage: `url(${bgDesktop})`,
          justifyContent: side,
          backgroundPosition: backgroundPosition,
        }}
      >
        <div
          className="content-container-desktop"
          style={{
            margin: newMargin,
            maxWidth: width,
            ...(contentBackgroundColor
              ? { backgroundColor: contentBackgroundColor }
              : {}),
            ...(newPadding ? { padding: newPadding } : {}),
          }}
        >
          <Content
            title={title}
            secondaryTitle={secondaryTitle}
            thirdTitle={thirdTitle}
            description={description}
            showAboutButton={showAboutButton}
          />
        </div>
      </section>
      <section className="section3Mobile" style={mobileBackground}>
        <div className="content-container-mobile">
          <Content
            title={title}
            secondaryTitle={secondaryTitle}
            thirdTitle={thirdTitle}
            description={description}
            showAboutButton={showAboutButton}
          />
        </div>
      </section>
    </>
  );
}

function Content({
  title,
  secondaryTitle,
  thirdTitle,
  description,
  showAboutButton,
}) {
  return (
    <Fade right duration={2000}>
      {/* Wrap all child elements in a single div */}
      <div>
        <h1 style={{ whiteSpace: "pre-line" }}>{title}</h1>
        <h2 style={{ whiteSpace: "pre-line" }}>{secondaryTitle}</h2>
        <h3 style={{ whiteSpace: "pre-line" }}>{thirdTitle}</h3>
        <p style={{ whiteSpace: "pre-line" }}>{description}</p>
        {showAboutButton && (
          <div className="about-container">
            <a href="/about" className="about-link">
              About
            </a>
          </div>
        )}
      </div>
    </Fade>
  );
}

export default TextContent;
