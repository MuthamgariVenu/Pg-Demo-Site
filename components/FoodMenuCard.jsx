"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FoodMenuCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Main Card */}
      <motion.div
        whileTap={{ scale: 0.98 }}
        onClick={() => setOpen(true)}
        className="bg-white rounded-2xl shadow-lg p-4 mt-4 cursor-pointer"
      >
      <h2 className="text-lg font-extrabold text-gray-900 opacity-100 flex items-center gap-2">
  🍽️ Food Menu
</h2>

        <p className="text-sm text-gray-600 mt-1">
           Homely food • 3 times daily
        </p>
        <p className="text-xs text-blue-600 mt-2 font-medium">
          👉 Tap to view food details
        </p>
      </motion.div>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-md rounded-2xl p-5"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                       <h3
                  className="
                    text-lg
                    font-extrabold
                    text-gray-900
                    opacity-100
                    leading-tight
                  "
                >
                  🍽️ Food Details
                </h3>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-500 text-xl"
                >
                  ✕
                </button>
              </div>

              {/* Content */}
              <div className="space-y-3 text-sm">
                {/* Daily Food */}
                <div className="rounded-xl p-3 border bg-green-50">
                  <p className="font-semibold mb-1">🍴 Daily Food</p>
                  <p className="text-gray-700">
                    Breakfast, Lunch & Dinner provided every day
                  </p>
                </div>

                {/* Non Veg */}
                <div className="rounded-xl p-3 border bg-red-50">
                  <p className="font-semibold text-red-700 mb-1">
                    🍗 Non-Vegetarian
                  </p>
                  <p className="text-gray-700">
                    Chicken – 2 times per week<br />
                    Egg – 2 times per week
                  </p>
                </div>

                {/* Snacks */}
                <div className="rounded-xl p-3 border bg-yellow-50">
                  <p className="font-semibold mb-1">☕ Snacks</p>
                 <p className="text-gray-700">
  Snacks available on weekends
</p>

                </div>

                {/* Note */}
                <div className="rounded-xl p-3 border bg-blue-50 text-xs text-gray-600">
                  Menu may vary on special occasions & festivals
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
