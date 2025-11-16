"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IntegrationMarquee = () => {
  const marqueeRef = useRef(null);

  // --- UPDATE THESE PATHS ---
  const logos = [
    { src: "/assets/logo1.svg", alt: "Slack" },
    { src: "/assets/logo2.svg", alt: "Slack" },
    { src: "/assets/logo3.svg", alt: "Slack" },
    { src: "/assets/logo4.svg", alt: "Linear" },
    { src: "/assets/logo5.svg", alt: "Google Meet" },
    { src: "/assets/logo6.svg", alt: "Arc" },
    { src: "/assets/logo7.svg", alt: "Mailchimp" },
    { src: "/assets/logo8.svg", alt: "Figma" },
  ];

  const duplicatedLogos = [...logos, ...logos, ...logos];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Row 1: Move Left
      gsap.to(".marquee-row-1", {
        xPercent: -5,
        ease: "none",
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
      // Row 2: Move Right
      gsap.to(".marquee-row-2", {
        xPercent: 5,
        ease: "none",
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, marqueeRef);
    return () => ctx.revert();
  }, []);

  const renderLogoRow = (className = "") => (
    <div className={`flex shrink-0 gap-4 ${className}`}>
      {duplicatedLogos.map((logo, index) => (
        <Image
          key={index}
          src={logo.src}
          alt={logo.alt}
          width={64}
          height={64}
          className="object-contain shrink-0"
        />
      ))}
    </div>
  );

  return (
    <div
      ref={marqueeRef}
      className="w-full my-4 flex flex-col gap-4 overflow-hidden mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
    >
      <div className="flex -translate-x-1/4">
        {renderLogoRow("marquee-row-1")}
      </div>
      <div className="flex -translate-x-1/3">
        {renderLogoRow("marquee-row-2")}
      </div>
    </div>
  );
};

/* ---------------------------------------------
   LARGE FEATURE CARD
---------------------------------------------- */
export const LargeFeatureCard = ({ image, title, description, span }) => {
  const cardRef = useRef(null);
  const imageContainerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Card entrance animation
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      if (imageContainerRef.current) {
        gsap.fromTo(
          imageContainerRef.current,
          {
            yPercent: 10,
          },
          {
            yPercent: 0,
            ease: "none",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top bottom",
              end: "center center",
              scrub: 1.5,
            },
          }
        );
      }

      gsap.fromTo(
        cardRef.current.querySelectorAll(".animate-content"),
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-cream/50 rounded-[28px] shadow-md p-10 lg:p-12 flex flex-col gap-8 overflow-hidden opacity-0"
      style={{ willChange: "transform, opacity" }}
    >
      <h1 className="animate-content text-[28px] lg:text-[30px] font-open-runde font-semibold text-primary leading-tight">
        {title}
      </h1>

      {title.includes("Integrates") ? (
        <IntegrationMarquee />
      ) : (
        <div className="w-full my-4 overflow-hidden rounded-lg">
          <div ref={imageContainerRef} style={{ willChange: "transform" }}>
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}
      <p className="animate-content text-base lg:text-[16px] text-secondary leading-[1.6]">
        <span className="font-extrabold">{span}</span> {description}
      </p>
    </div>
  );
};

/* ---------------------------------------------
   SMALL FEATURE CARD
---------------------------------------------- */
const SmallFeatureCard = ({ icon, title, description }) => {
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Card entrance animation with bounce
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Icon pop animation
      gsap.fromTo(
        cardRef.current.querySelector(".icon-container"),
        {
          scale: 0,
          rotation: -180,
        },
        {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(2.5)",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Text content stagger
      gsap.fromTo(
        cardRef.current.querySelectorAll(".animate-text"),
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-cream/50 rounded-[20px] p-8 shadow-md flex flex-col gap-4 overflow-hidden opacity-0"
      style={{ willChange: "transform, opacity" }}
    >
      <div className="icon-container w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
        <Image
          src={icon}
          alt=""
          width={25}
          height={25}
          className="object-contain"
        />
      </div>
      <h1 className="animate-text text-[22px] mt-10 font-semibold text-primary leading-[1.3]">
        {title}
      </h1>
      <p className="animate-text text-[14px] text-secondary leading-[1.6]">
        {description}
      </p>
    </div>
  );
};

/* ---------------------------------------------
   FEATURE DATA
---------------------------------------------- */
const largeFeatures = [
  {
    image: "/assets/Features.svg",
    title: "Smart, flexible, and built around your business workflow",
    span: "Personalize every detail, ",
    description:
      "From branding and interface layout to colors and menus, so Dreelio feels like an extension of your brand.",
  },
  {
    image: "/assets/Features.svg",
    title: "Integrates seamlessly with the tools you already use",
    span: "Seamless integrations.",
    description:
      "Plug Dreelio into the tools you love. Set up automations, sync your data, and make your systems work smarter together.",
  },
];

const smallFeatures = [
  {
    icon: "/assets/features1.svg",
    title: "Collaborate in realtime",
    description:
      "Keep every conversation in sync using comments, messages, and project chats to stay on the same page.",
  },
  {
    icon: "/assets/features1.svg",
    title: "Speaks your language",
    description:
      "Set your language, currency, time, and date preferences for a seamless experience that feels truly local.",
  },
  {
    icon: "/assets/features2.svg",
    title: "View things your way",
    description:
      "Easily toggle between various views, including Kanban, cards, list, table, timeline, and calendar.",
  },
];

/* ---------------------------------------------
   MAIN SECTION
---------------------------------------------- */
export default function FeaturesGrid() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header animations timeline
      const headerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      headerTimeline
        .fromTo(
          ".features-subheading",
          {
            opacity: 0,
            y: 40,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power2.out",
          }
        )
        .fromTo(
          ".features-heading",
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-linear-to-b from-white to-cream/20 py-20 lg:py-28 px-4"
    >
      <div className="container-section">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="mx-auto max-w-[750px] text-center flex flex-col gap-5 mb-14"
        >
          <p className="features-subheading text-[13px] font-semibold uppercase tracking-widest text-amber-950 opacity-0">
            FEATURES
          </p>

          <h2 className="features-heading text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.01em] leading-[1.1] text-primary opacity-0">
            Built for freelancers, powered by simplicity
          </h2>
        </div>

        {/* Feature Grids */}
        <div className="flex flex-col gap-5">
          {/* Large Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {largeFeatures.map((f) => (
              <LargeFeatureCard key={f.title} {...f} />
            ))}
          </div>

          {/* Small Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {smallFeatures.map((f) => (
              <SmallFeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
