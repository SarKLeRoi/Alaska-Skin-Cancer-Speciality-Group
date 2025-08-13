import React from "react";
import { motion } from "framer-motion";

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div
        className="text-content"
        style={{
          margin: newMargin,
          ...(newPadding ? { padding: newPadding } : {}),
          ...(contentBackgroundColor
            ? { backgroundColor: contentBackgroundColor }
            : {}),
        }}
        variants={itemVariants}
      >
        {title && (
          <motion.div variants={itemVariants}>
            <HeadingTag
              id="text-centered-heading"
              className="text-centered-title"
              style={{ whiteSpace: "pre-line" }}
            >
              {title}
            </HeadingTag>
          </motion.div>
        )}
        {description && (
          <motion.p
            style={{
              whiteSpace: "pre-line",
              ...(pBackgroundColor
                ? { backgroundColor: pBackgroundColor }
                : {}),
            }}
            variants={itemVariants}
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </motion.section>
  );
}

export default TextCentered;
