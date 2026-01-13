"use client";

import { motion } from "framer-motion";

export default function FacilitiesCard() {
  return (
    <motion.div
      whileTap={{ scale: 1.02 }}
      className="bg-white rounded-2xl shadow-lg p-4 mt-4"
    >
      <h2 className="text-lg font-bold mb-3">🍛 Food & Facilities</h2>

      <div className="grid grid-cols-3 gap-4 text-center text-sm">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xl">🍛</span>
          <span>Homely Food</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <span className="text-xl">📶</span>
          <span>WiFi</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <span className="text-xl">🚿</span>
          <span>Hot Water</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <span className="text-xl">🔌</span>
          <span>Power Backup</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <span className="text-xl">🧺</span>
          <span>Washing</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <span className="text-xl">📹</span>
          <span>CCTV</span>
        </div>
      </div>
    </motion.div>
  );
}
