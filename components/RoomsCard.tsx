"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RoomsCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Main Card */}
      <motion.div
        whileTap={{ scale: 1.02 }}
        onClick={() => setOpen(true)}
        className="bg-white rounded-2xl shadow-lg p-4 mt-4 cursor-pointer"
      >
       <h2 className="text-lg font-bold flex items-center gap-2">
  🛏️ Rooms & Rent
</h2>

<p className="text-sm text-gray-600 mt-1">
  AC & Non-AC • 2 / 3 / 4 Sharing
</p>

<p className="text-xs text-blue-600 mt-2 font-medium">
  👉 Tap to view room details & rent
</p>

      </motion.div>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/40 flex items-end justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            {/* Modal Card */}
            <motion.div
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              exit={{ y: 300 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-md rounded-t-3xl p-5"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-bold">🛏️ Rooms & Rent</h3>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-500 text-xl"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3 text-sm">
                <Room title="4 Sharing – Non-AC" price="₹6,500" />
                <Room title="3 Sharing – Non-AC" price="₹7,500" />
                <Room title="2 Sharing – Non-AC" price="₹8,000" />
                <Room title="3 Sharing – AC" price="₹8,500" highlight />
                <p className="text-gray-500 text-xs">
                  + ₹2,000 advance applicable
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Room({
  title,
  price,
  highlight,
}: {
  title: string;
  price: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`border rounded-xl p-3 ${
        highlight ? "bg-green-50 border-green-300" : ""
      }`}
    >
      <p className="font-semibold">{title}</p>
      <p>{price} / month</p>
    </div>
  );
}
