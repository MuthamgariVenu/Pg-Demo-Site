"use client";

import { useState, useEffect } from "react";

export default function FacilitiesCard() {
  const facilities = [
    {
      icon: "🧺",
      title: "Washing Machine",
      sub: "Laundry",
      details:
        "Common washing machines available. Easy access for all residents.",
      tag: null,
      bg: "bg-blue-50",
    },
    {
      icon: "📶",
      title: "WiFi",
      sub: "Fast net",
      details:
        "High-speed WiFi suitable for work, study, and entertainment.",
      tag: "Popular",
      bg: "bg-indigo-50",
    },
    {
      icon: "🗄️",
      title: "Cupboards",
      sub: "Storage",
      details:
        "Spacious cupboards provided for safe and organized storage.",
      tag: null,
      bg: "bg-cyan-50",
    },
    {
      icon: "🔥",
      title: "Geyser",
      sub: "Hot water",
      details:
        "Hot water facility available for comfortable daily use.",
      tag: null,
      bg: "bg-orange-50",
    },
    {
      icon: "🧊",
      title: "Refrigerator",
      sub: "Each floor",
      details:
        "Shared refrigerator available on every floor for residents.",
      tag: null,
      bg: "bg-sky-50",
    },
    {
      icon: "🚰",
      title: "Water",
      sub: "Drinking",
      details:
        "24/7 purified drinking water facility provided.",
      tag: null,
      bg: "bg-teal-50",
    },
    {
      icon: "📹",
      title: "CCTV",
      sub: "24/7",
      details:
        "CCTV surveillance ensures complete safety and security.",
      tag: "Secure",
      bg: "bg-slate-50",
    },
    {
      icon: "🆔",
      title: "Fingerprint",
      sub: "Safe entry",
      details:
        "Fingerprint access system for secure entry and monitoring.",
      tag: "Secure",
      bg: "bg-purple-50",
    },
    {
      icon: "👟",
      title: "Shoe Rack",
      sub: "Organized",
      details:
        "Dedicated shoe racks to keep premises neat and organized.",
      tag: null,
      bg: "bg-emerald-50",
    },
  ];

  const [active, setActive] = useState<number | null>(null);
  const [canHover, setCanHover] = useState(false);

  // Detect hover-capable devices (desktop/laptop)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCanHover(window.matchMedia("(hover: hover)").matches);
    }
  }, []);

  const toggleCard = (index: number) => {
    setActive((prev) => (prev === index ? null : index));
  };

  return (
    <div className="mt-6">
      <div className="rounded-[28px] bg-white shadow-xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            🛠️ Facilities
          </h2>
          <span className="text-xs text-green-600 font-medium">
            Included
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-3 items-start">
          {facilities.map((item, i) => {
            const isActive = active === i;

            return (
              <div
                key={i}
                className={`relative rounded-[22px] ${item.bg} p-3 text-center cursor-pointer`}
                onMouseEnter={() => {
                  if (canHover) setActive(i);
                }}
                onMouseLeave={() => {
                  if (canHover) setActive(null);
                }}
                onClick={() => {
                  if (!canHover) toggleCard(i);
                }}
              >
                {/* Tag */}
                {item.tag && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 z-20 text-[10px] px-2 py-[2px] rounded-full bg-green-500 text-white">
                    {item.tag}
                  </span>
                )}

                {/* Icon */}
                <div
                  className={`mx-auto mb-2 w-11 h-11 rounded-full flex items-center justify-center text-xl transition-all duration-300
                  ${
                    isActive
                      ? "bg-green-200 scale-110 shadow-[0_0_0_6px_rgba(34,197,94,0.25)]"
                      : "bg-white"
                  }`}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <p className="text-xs font-semibold text-gray-900">
                  {item.title}
                </p>
                <p className="text-[11px] text-gray-500">
                  {item.sub}
                </p>

                {/* Details (absolute, no row expansion) */}
                {isActive && (
                  <div className="absolute left-2 right-2 top-full mt-2 z-30 rounded-xl bg-white shadow-lg p-2 text-[11px] text-gray-700">
                    {item.details}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <p className="mt-12 text-center text-sm text-green-700 flex items-center justify-center gap-1">
          ⚡ Electricity bill included
        </p>
      </div>
    </div>
  );
}
