"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedButton } from "../ui/AnimatedButton";

{
  /* NOTE: For 'font-open-runde' to work, you must:
  1. Import the font in your main CSS file (e.g., globals.css or through @next/font).
  2. Add it to your tailwind.config.js theme:
     extend: {
       fontFamily: {
         'open-runde': ['"OpenRunde"', 'sans-serif'],
       },
     }

  Also, ensure you have the `animate-cloudFloat` and `animate-cloudFloatReverse` keyframe animations
  defined in your `globals.css` or similar stylesheet:

  @keyframes cloudFloat {
    0% { transform: translateX(0); }
    50% { transform: translateX(20px); }
    100% { transform: translateX(0); }
  }
  @keyframes cloudFloatReverse {
    0% { transform: translateX(0); }
    50% { transform: translateX(-20px); }
    100% { transform: translateX(0); }
  }

  .animate-cloudFloat {
    animation: cloudFloat 15s ease-in-out infinite;
  }
  .animate-cloudFloatReverse {
    animation: cloudFloatReverse 15s ease-in-out infinite;
  }
*/
}

const CTA = () => {
  return (
    <section
      id="cta"
      className="relative w-full bg-sky-200 py-32 px-4 overflow-hidden font-open-runde"
    >
      {/* Left cloud */}
      <Image
        src="/assets/cloud-left.avif"
        className="absolute left-[-120px] top-32 opacity-100 pointer-events-none animate-cloudFloat"
        width={320}
        height={320}
        alt="cloud"
      />

      {/* Right cloud */}
      <Image
        src="/assets/cloud-right.avif"
        className="absolute right-[-120px] top-32 opacity-100 pointer-events-none animate-cloudFloatReverse"
        width={320}
        height={320}
        alt="cloud"
      />

      <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl lg:text-[52px] font-open-runde font-semibold text-primary leading-tight max-w-2xl">
          Ready to get started
        </h2>
        <p className="text-lg md:text-xl lg:text-md font-open-runde text-secondary mt-2 max-w-lg mx-auto">
          Download Dreelio for free. No credit card required.
        </p>
        <AnimatedButton className="rounded-full mt-8 text-md font-semibold h-14 px-6 bg-primary text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300">
          Try Freelio free
        </AnimatedButton>
      </div>
    </section>
  );
};

export default CTA;
