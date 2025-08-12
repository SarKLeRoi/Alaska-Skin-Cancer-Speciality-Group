import React, { useState } from "react";

function TextCentered({
  title,
  description,
  bgDesktop,
  newMargin,
  backgroundPosition,
  contentBackgroundColor,
  pBackgroundColor,
  useResponsiveBgSize = false,
  newPadding,
  headingLevel = 1, // Allow customizable heading level for better hierarchy
}) {
  const HeadingTag = `h${headingLevel}`;

  return (
    <section
      className={`about-section2 ${
        useResponsiveBgSize ? "about-section2-responsive" : ""
      }`}
      style={{
        ...(bgDesktop ? { backgroundImage: `url(${bgDesktop})` } : {}),
        ...(backgroundPosition ? { backgroundPosition } : {}),
      }}
      aria-labelledby={title ? "text-centered-heading" : undefined}
      role={bgDesktop ? "img" : undefined}
      aria-label={
        bgDesktop ? "Content section with background image" : undefined
      }
    >
      <div
        className="text-content"
        style={{
          margin: newMargin,
          ...(newPadding ? { padding: newPadding } : {}),
          ...(contentBackgroundColor
            ? { backgroundColor: contentBackgroundColor }
            : {}),
        }}
      >
        {title && (
          <HeadingTag
            id="text-centered-heading"
            className="text-centered-title"
            style={{ whiteSpace: "pre-line" }}
          >
            {title}
          </HeadingTag>
        )}
        {description && (
          <p
            style={{
              whiteSpace: "pre-line",
              ...(pBackgroundColor
                ? { backgroundColor: pBackgroundColor }
                : {}),
            }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

export default TextCentered;
