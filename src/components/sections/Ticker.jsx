"use client";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

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
            className="w-auto opacity-60 grayscale"
          />
        </li>
      ))}
    </ul>
  ));

const Ticker = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%", // Earlier trigger
          toggleActions: "play none none none",
        },
      });

      // Smoother text animation
      tl.from(".ticker-text", {
        opacity: 0,
        y: 50,
        filter: "blur(10px)",
        duration: 1,
        ease: "power3.out",
      })
      .from(
        ".ticker-marquee",
        {
          opacity: 0,
          y: 40,
          filter: "blur(8px)",
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.7"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="logos" className="bg-white py-16 lg:py-20" ref={sectionRef}>
      <div className="max-w-[900px] mx-auto px-4 flex flex-col items-center gap-3 font-open-runde">
        <p className="text-third font-open-runde font-medium text-[18px] text-center ticker-text">
          Trusted by 7,000+ top startups, freelancers and studios
        </p>

        <div className="w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] ticker-marquee">
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
