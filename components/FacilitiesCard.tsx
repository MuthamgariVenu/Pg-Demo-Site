"use client";

import { useEffect, useState } from "react";

export default function FacilitiesCard() {
  const facilities = [
    {
      icon: "🧺",
      title: "Washing Machine",
      sub: "Laundry",
      tag: null,
      bg: "bg-blue-50",
    },
    {
      icon: "📶",
      title: "WiFi",
      sub: "Fast net",
      tag: "Popular",
      bg: "bg-indigo-50",
    },
    {
      icon: "🗄️",
      title: "Cupboards",
      sub: "Storage",
      tag: null,
      bg: "bg-cyan-50",
    },
    {
      icon: "🔥",
      title: "Geyser",
      sub: "Hot water",
      tag: null,
      bg: "bg-orange-50",
    },
    {
      icon: "🧊",
      title: "Refrigerator",
      sub: "Each floor",
      tag: null,
      bg: "bg-sky-50",
    },
    {
      icon: "🚰",
      title: "Water",
      sub: "Drinking",
      tag: null,
      bg: "bg-teal-50",
    },
    {
      icon: "📹",
      title: "CCTV",
      sub: "24/7",
      tag: "Secure",
      bg: "bg-slate-50",
    },
    {
      icon: "🆔",
      title: "Fingerprint",
      sub: "Safe entry",
      tag: "Secure",
      bg: "bg-purple-50",
    },
    {
      icon: "👟",
      title: "Shoe Rack",
      sub: "Organized",
      tag: null,
      bg: "bg-emerald-50",
    },
  ];

  const [active, setActive] = useState(0);

  // 🔁 Auto highlight (mobile-friendly)
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % facilities.length);
    }, 1800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-6">
      <div className="rounded-[28px] bg-white shadow-xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            🛠️ Facilities
          </h2>
          <span className="text-xs text-green-600 font-medium">Included</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-3">
          {facilities.map((item, i) => {
            const isActive = i === active;

            return (
              <div
                key={i}
                className={`relative rounded-[22px] ${item.bg} p-3 text-center transition-colors`}
              >
                {/* Tag */}
                {item.tag && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[10px] px-2 py-[2px] rounded-full bg-green-500 text-white">
                    {item.tag}
                  </span>
                )}

                {/* ICON (ONLY THIS ANIMATES) */}
                <div
                  className={`mx-auto mb-2 w-11 h-11 rounded-full flex items-center justify-center text-xl transition-all duration-300
                  ${
                    isActive
                      ? "bg-green-200 scale-110 shadow-[0_0_0_6px_rgba(34,197,94,0.25)] animate-pulse"
                      : "bg-white"
                  }`}
                >
                  {item.icon}
                </div>

                {/* Text */}
                <p className="text-xs font-semibold text-gray-900 leading-tight">
                  {item.title}
                </p>
                <p className="text-[11px] text-gray-500">{item.sub}</p>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <p className="mt-5 text-center text-sm text-green-700 flex items-center justify-center gap-1">
          ⚡ Electricity bill included
        </p>
      </div>
    </div>
  );
}
