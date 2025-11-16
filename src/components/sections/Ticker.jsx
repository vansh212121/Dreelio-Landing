"use client";
import React from "react";
import Image from "next/image";

const LOGO_ASSETS = [
  { src: "/assets/ticker1.avif", alt: 'Signature-style logo "three"' },
  { src: "/assets/ticker2.avif", alt: "Amsterdam logo" },
  { src: "/assets/ticker3.avif", alt: "Savannah logo" },
  { src: "/assets/ticker4.avif", alt: "Milano logo" },
  { src: "/assets/ticker5.avif", alt: "Luminous logo" },
];

const renderLogos = () =>
  Array.from({ length: 8 }).map((_, groupIndex) => (
    <ul key={groupIndex} className="flex items-center shrink-0 gap-7 px-4">
      {LOGO_ASSETS.map((logo, index) => (
        <li key={`${groupIndex}-${index}`} className="shrink-0">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={160}
            height={56}
            className=" w-auto opacity-60 grayscale"
          />
        </li>
      ))}
    </ul>
  ));

const Ticker = () => {
  return (
    <section id="logos" className="bg-white py-16 lg:py-20">
      <div className="max-w-[900px] mx-auto px-4 flex flex-col items-center gap-3 font-open-runde">
        <p className="text-third  font-open-runde font-medium text-[18px] text-center">
          Trusted by 7,000+ top startups, freelancers and studios
        </p>

        {/* TIGHTER fade like in your screenshot */}
        <div className="w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex animate-[marquee_30s_linear_infinite]">
            {renderLogos()}
            {renderLogos()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ticker;
