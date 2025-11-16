"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "As a fast-moving design team, we needed a tool that matched our pace. From client onboarding to getting paid, this just works clean, fast, and beautifully built.",
    name: "Leah Daniel",
    title: "Design Ops Lead, teamwork.",
    avatar: "/assets/Testimonial1.avif",
  },
  {
    quote:
      "As a fast-moving design team, we needed a tool that matched our pace. From client onboarding to getting paid, this just works clean, fast, and beautifully built.",
    name: "Sergio Walker",
    title: "Agency Owner",
    avatar: "/assets/testimonial2.avif",
  },
  {
    quote:
      "We used to duct-tape tools together. Now our contracts, time tracking, and payments live in one clean system. It's everything a small team needs to stay pro.",
    name: "Jane Jay Jay",
    title: "Project Manager, Google",
    avatar: "/assets/testimonial3.avif",
  },
  {
    quote:
      "Managing projects used to mean spreadsheets, DMs, and missed invoices. This platform keeps our workflows tight and our clients impressed.",
    name: "Amos Chen",
    title: "Art Director, Pentagram",
    avatar: "/assets/testimonial4.avif",
  },
];

const duplicatedTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

const TestimonialsCarousel = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".testimonial-heading", {
        opacity: 0,
        y: 50,
        filter: "blur(10px)",
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".testimonial-avatar",
          {
            opacity: 0,
            scale: 0.8,
            filter: "blur(8px)",
            duration: 0.7,
            ease: "back.out(1.5)",
          },
          "-=0.5"
        )
        .from(
          ".testimonial-info",
          {
            opacity: 0,
            y: 20,
            filter: "blur(6px)",
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 group bg-linear-to-b from-cream/20 to-cream/50"
    >
      {/* Animation */}
      <style>
        {`
      @keyframes scroll {
        to {
          transform: translate(calc(-${
            (testimonials.length * 100) / duplicatedTestimonials.length
          }% - ${
          (testimonials.length * 24) / duplicatedTestimonials.length
        }px));
        }
      }
      .animate-scrolling {
        animation: scroll 60s linear infinite;
      }
    `}
      </style>

      {/* subtle blue fade at bottom to blend into next (blue) section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 " />

      {/* Main content constrained by your container-section */}
      <div className="container-section relative mx-auto">
        <div className="container-narrow mx-auto flex flex-col items-center gap-6 px-4">
          <h2 className="testimonial-heading text-[65px] font-medium font-open-runde leading-[1.13] tracking-[-0.01em] text-primary text-center">
            "Dreelio is by far the best agency tool I have ever used"
          </h2>

          <div className="flex flex-col items-center gap-2">
            <Image
              src="/assets/testimonial.avif"
              alt="Martha Punla"
              width={64}
              height={64}
              className="testimonial-avatar rounded-full"
            />
            <div className="testimonial-info mt-2 text-center">
              <p className="text-base font-open-runde font-medium text-primary">
                Martha Punla
              </p>
              <p className="text-sm text-secondary">VP Marketing, Meta</p>
            </div>
          </div>
        </div>

        {/* Scrolling testimonials row with edge fade preserved */}
        <div className="w-full overflow-hidden mt-20 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <ul className="flex w-max animate-scrolling gap-6 py-4">
            {duplicatedTestimonials.map((testimonial, index) => (
              <li
                key={index}
                className="w-[380px] shrink-0 rounded-[20px] bg-white/75 p-8 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
              >
                <div className="flex h-full flex-col justify-between gap-6">
                  <p className="text-lg text-primary leading-[1.6]">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full shrink-0"
                    />
                    <div>
                      <p className="font-semibold text-primary">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-secondary">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;




