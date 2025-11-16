"use client";

import { useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimatedButton } from "../ui/AnimatedButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutApp = () => {
  const [activeTab, setActiveTab] = useState("mobile");
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
      tl.from(".about-subheading", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
      }).from(
        ".about-heading",
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      );

      gsap.fromTo(
        ".about-image",
        {
          scale: 1.3,
        },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-image-wrapper",
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about-app" className="bg-white py-20" ref={sectionRef}>
      <div className="container-section flex flex-col items-center gap-12">
        <div className="text-center font-semibold">
          <p className="text-amber-950 about-subheading">
            SEAMLESS ACROSS DEVICES
          </p>

          <h2 className="mt-4 text-[54px] font-semibold tracking-[-0.01em] leading-[1.1] text-primary-text about-heading">
            Work from anywhere,
            <br />
            stay in sync
          </h2>
        </div>

        <div className="relative w-full max-w-full">
          <div
            className="about-image-wrapper relative mx-auto w-full max-w-[1100px] overflow-hidden rounded-4xl"
            style={{ aspectRatio: "1.6 / 1" }}
          >
            <Image
              src="/assets/2.avif"
              alt="A mockup of Freelio's mobile app"
              fill
              sizes="(max-width: 1200px) 100vw, 1100px"
              className={cn(
                "object-cover transition-opacity duration-500 about-image",
                activeTab === "mobile" ? "opacity-100" : "opacity-0"
              )}
            />
            <Image
              src="/assets/3.avif"
              alt="A mockup of Freelio's web app"
              fill
              sizes="(max-width: 1200px) 100vw, 1100px"
              className={cn(
                "object-cover transition-opacity duration-500 about-image",
                activeTab === "web" ? "opacity-100" : "opacity-0"
              )}
            />
          </div>

          <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
            <div
              className="
                      flex items-center gap-2 rounded-full
                      border border-white/40
                      bg-white/30
                      backdrop-blur-xl
                      px-2 py-2
                      "
            >
              {/* Mobile App */}
              <AnimatedButton
                onClick={() => setActiveTab("mobile")}
                className={cn(
                  "rounded-full px-6 py-6 text-md font-semibold transition-all duration-300 min-w-[130px]",
                  activeTab === "mobile"
                    ? "bg-primary text-primary-foreground shadow-sm border border-white/50"
                    : "bg-white/20 text-white hover:bg-white/30"
                )}
              >
                Mobile App
              </AnimatedButton>

              {/* Web App */}
              <AnimatedButton
                onClick={() => setActiveTab("web")}
                className={cn(
                  "rounded-full px-6 py-6 text-md font-semibold transition-all duration-300 min-w-[130px]",
                  activeTab === "web"
                    ? "bg-primary text-primary-foreground shadow-sm border border-white/50"
                    : "bg-white/30 text-white hover:bg-white/30"
                )}
              >
                Web App
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutApp;
