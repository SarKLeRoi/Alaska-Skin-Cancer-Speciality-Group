import Fade from "react-reveal/Fade";
function TextContentModified({
  title,
  secondaryTitle,
  description,
  secondaryTitle2,
  description2,
  secondaryTitle3,
  description3,
  bgDesktop,
  bgMobile,
  bgColorMobile,
  side,
  newMargin,
  backgroundPosition,
  showAboutButton,
  width,
  contentBackgroundColor,
}) {
  const mobileBackground = bgMobile
    ? {
        backgroundImage: `url(${bgMobile})`,
        backgroundPosition: backgroundPosition,
      }
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
          }}
        >
          <Content
            title={title}
            secondaryTitle={secondaryTitle}
            description={description}
            secondaryTitle2={secondaryTitle2}
            description2={description2}
            secondaryTitle3={secondaryTitle3}
            description3={description3}
          />
        </div>
      </section>
      <section className="section3Mobile" style={mobileBackground}>
        <div className="content-container-mobile">
          <Content
            title={title}
            secondaryTitle={secondaryTitle}
            description={description}
            secondaryTitle2={secondaryTitle2}
            description2={description2}
            secondaryTitle3={secondaryTitle3}
            description3={description3}
          />
        </div>
      </section>
    </>
  );
}

function Content({
  title,
  secondaryTitle,
  description,
  secondaryTitle2,
  description2,
  secondaryTitle3,
  description3,
}) {
  return (
    <Fade right duration={2000}>
      <div>
        <h1 style={{ whiteSpace: "pre-line" }}>{title}</h1>
        <div className="gray-box">
          <h2 style={{ whiteSpace: "pre-line" }}>{secondaryTitle}</h2>
          <p style={{ whiteSpace: "pre-line" }}>{description}</p>
        </div>
        <div className="gray-box">
          <h2 style={{ whiteSpace: "pre-line" }}>{secondaryTitle2}</h2>
          <p style={{ whiteSpace: "pre-line" }}>{description2}</p>
        </div>
        <div className="gray-box">
          <h2 style={{ whiteSpace: "pre-line" }}>{secondaryTitle3}</h2>
          <p style={{ whiteSpace: "pre-line" }}>{description3}</p>
        </div>
      </div>
    </Fade>
  );
}

export default TextContentModified;
