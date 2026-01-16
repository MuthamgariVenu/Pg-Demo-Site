"use client";

import { motion } from "framer-motion";

export default function LocationCard() {
  return (
    <motion.div
      whileTap={{ scale: 1.02 }}
      className="bg-white rounded-2xl shadow-lg p-4 mt-4"
    >
      {/* Heading – FINAL LOCKED */}
      <h2 className="text-lg font-extrabold text-gray-900 mb-1">
        📍 Location
      </h2>

      {/* Address – Subtitle standard */}
      <p className="text-sm text-gray-700 font-medium">
         Hitech City, Hyderabad, Telangana – 500032
      </p>

      {/* Nearby Info */}
      <div className="mt-3 space-y-1 text-sm text-gray-700 font-medium">
        <p>🚇 10 mins to Metro</p>
        <p>🏢 Near IT Offices</p>
      </div>

      {/* Directions Button */}
      <a
        href="https://maps.app.goo.gl/UHEVK878fEfp"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-white font-semibold"
      >
        📍 Get Directions
      </a>
    </motion.div>
  );
}
