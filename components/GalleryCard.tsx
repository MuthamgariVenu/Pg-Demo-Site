"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/images/room.jpg", label: "Room" },
  { src: "/images/dining.jpg", label: "Dining" },
  { src: "/images/bathroom.jpg", label: "Bathroom" },
  { src: "/images/outside.jpg", label: "Outside" },
];

export default function GalleryCard() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <>
      {/* GALLERY CARD */}
      <motion.div
        whileTap={{ scale: 1.02 }}
        onClick={() => setOpen(true)}
        className="bg-white rounded-2xl shadow-lg p-4 mt-4 cursor-pointer"
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold">🖼️ Photo Gallery</h2>
          <span className="text-xs text-blue-600">Tap to view</span>
        </div>

        {/* IMAGE PREVIEWS */}
        <div className="flex gap-3 overflow-x-auto">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative min-w-[120px] h-24 rounded-xl overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-white text-sm font-semibold">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* FULL SCREEN OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex flex-col"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-white text-xl font-bold z-50"
            >
              ✕
            </button>

            {/* MAIN IMAGE */}
            <div className="flex-1 flex items-center justify-center px-4">
              <motion.div
                key={active}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-md"
              >
                <Image
                  src={images[active].src}
                  alt={images[active].label}
                  width={400}
                  height={300}
                  className="rounded-xl object-cover"
                />
                <p className="text-center text-white mt-2">
                  {images[active].label}
                </p>
              </motion.div>
            </div>

            {/* THUMBNAILS */}
            <div className="flex gap-3 overflow-x-auto p-4 bg-black/90">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`border-2 rounded-lg ${
                    active === i
                      ? "border-green-400"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.label}
                    width={70}
                    height={50}
                    className="rounded-md object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
