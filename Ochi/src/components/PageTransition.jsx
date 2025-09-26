// PageTransition.jsx
import React from "react";
import { motion } from "framer-motion";

const PageTransition = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black z-50"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    />
  );
};

export default PageTransition;
