import { motion } from "framer-motion";

export default function LogoTab() {
  // Animation variant
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="logo-tab-section"
      aria-label="Alaska Skin Cancer Specialty Group branding"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={logoVariants}
    >
      <motion.img
        src="/images/Triangle-Logo.png" /* Ensure the correct path */
        alt="Alaska Skin Cancer Specialty Group triangle logo"
        className="homepage-triangle-svg"
        role="img"
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3 },
        }}
      />
    </motion.section>
  );
}
