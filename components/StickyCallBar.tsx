"use client";

import { motion } from "framer-motion";

export default function StickyCallBar() {
  return (
    <motion.a
      href="tel:9876543210"
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-green-600 text-white py-3 text-center font-bold text-lg animate-pulse"
    >
      📞 Call Now: 9912579627
    </motion.a>
  );
}
