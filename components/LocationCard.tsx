"use client";

import { motion } from "framer-motion";

export default function LocationCard() {
  return (
    <motion.div
      whileTap={{ scale: 1.02 }}
      className="bg-white rounded-2xl shadow-lg p-4 mt-4"
    >
      <h2 className="text-lg font-bold mb-1">📍 Location</h2>
      <p className="text-sm text-gray-600">
        Anjaiah Nagar, Hyderabad • Near platina building Gachibowli & IT Offices
      </p>

      <div className="mt-3 space-y-1 text-sm">
        <p>🚇 2 mins to Metro</p>
        <p>🚌 Bus Stop nearby</p>
        <p>🏢 Near IT Offices</p>
      </div>

      <a
  href="https://maps.app.goo.gl/ZPkEcVBjn9btsgbX7"
  target="_blank"
  rel="noopener noreferrer"
  className="block mt-4 text-center bg-blue-600 text-white py-2 rounded-xl font-semibold"
>
  Get Directions
</a>

    </motion.div>
  );
}
