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
}) {
  return (
    <section
      className={`about-section2 ${
        useResponsiveBgSize ? "about-section2-responsive" : ""
      }`}
      style={{
        ...(bgDesktop ? { backgroundImage: `url(${bgDesktop})` } : {}),
        ...(backgroundPosition ? { backgroundPosition } : {}),
      }}
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
        <h1 style={{ whiteSpace: "pre-line" }}>{title}</h1>
        <p
          style={{
            whiteSpace: "pre-line",
            ...(pBackgroundColor ? { backgroundColor: pBackgroundColor } : {}),
          }}
        >
          {description}
        </p>
      </div>
    </section>
  );
}

export default TextCentered;
