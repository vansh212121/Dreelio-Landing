
"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { AnimatedButton } from "../ui/AnimatedButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef(null);
  const cloudLeftRef = useRef(null);
  const cloudRightRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Text content animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", 
          toggleActions: "play none none none",
        },
      });

      tl.from(".cta-heading", {
        opacity: 0,
        y: 50,
        filter: "blur(10px)",
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".cta-description",
          {
            opacity: 0,
            y: 30,
            filter: "blur(8px)",
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .from(
          ".cta-button",
          {
            opacity: 0,
            y: 20,
            scale: 0.9,
            duration: 0.7,
            ease: "back.out(1.5)",
          },
          "-=0.4"
        );

      // LEFT CLOUD 
      gsap.fromTo(
        cloudLeftRef.current,
        {
          x: -100,
          opacity: 0,
          filter: "blur(12px)",
        },
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // RIGHT CLOUD 
      gsap.fromTo(
        cloudRightRef.current,
        {
          x: 100,
          opacity: 0,
          filter: "blur(12px)",
        },
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.8,
          ease: "power3.out",
          delay: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative w-full bg-sky-200 py-32 px-4 overflow-hidden font-open-runde"
    >
      {/* Left cloud */}
      <Image
        ref={cloudLeftRef}
        src="/assets/cloud-left.avif"
        className="absolute left-[-120px] top-32 pointer-events-none animate-cloudFloat"
        width={320}
        height={320}
        alt="cloud"
        style={{ willChange: "transform" }}
      />

      {/* Right cloud */}
      <Image
        ref={cloudRightRef}
        src="/assets/cloud-right.avif"
        className="absolute right-[-120px] top-32 pointer-events-none animate-cloudFloatReverse"
        width={320}
        height={320}
        alt="cloud"
        style={{ willChange: "transform" }}
      />

      <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
        <h2 className="cta-heading text-4xl md:text-5xl lg:text-[52px] font-open-runde font-semibold text-primary leading-tight max-w-2xl">
          Ready to get started
        </h2>
        <p className="cta-description text-lg md:text-xl lg:text-md font-open-runde text-secondary mt-2 max-w-lg mx-auto">
          Download Dreelio for free. No credit card required.
        </p>
        <div className="cta-button">
          <AnimatedButton className="rounded-full mt-8 text-md font-semibold h-14 px-6 bg-primary text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300">
            Try Freelio free
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default CTA;
