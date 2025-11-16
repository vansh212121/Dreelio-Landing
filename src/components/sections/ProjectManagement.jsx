"use client";
import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { CheckSquare, Clock, FileText, BarChart2 } from "lucide-react";
import { AnimatedButton } from "../ui/AnimatedButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeatureBadge = ({ icon: Icon, text }) => (
  <div className="feature-badge flex items-center justify-center gap-3 rounded-full border border-gray-200 bg-white p-4 shadow-sm">
    <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
    <span className="text-md text-primary font-semibold">{text}</span>
  </div>
);

const ProjectManagement = () => {
  const sectionRef = useRef(null);
  const imageWrapRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Text content timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".pm-subheading", {
        opacity: 0,
        y: 40,
        filter: "blur(8px)",
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".pm-heading",
          {
            opacity: 0,
            y: 50,
            filter: "blur(10px)",
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ".pm-description",
          {
            opacity: 0,
            y: 30,
            filter: "blur(6px)",
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .from(
          ".pm-button",
          {
            opacity: 0,
            y: 20,
            scale: 0.9,
            duration: 0.7,
            ease: "back.out(1.5)",
          },
          "-=0.4"
        )
        .from(
          ".feature-badge",
          {
            opacity: 0,
            y: 20,
            scale: 0.95,
            stagger: 0.1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        );

      // 2. Image entrance animation - Hidden until scroll
      gsap.fromTo(
        imageWrapRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageWrapRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // 3. Image parallax scroll - Smoother
      gsap.fromTo(
        ".project-image-wrap",
        {
          yPercent: 10, // <-- FIX #1: Reduced from 20 to 10
        },
        {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".project-image-container",
            start: "top bottom",
            end: "center center", // <-- FIX #2: Finishes when center hits center
            scrub: 1.5,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="features"
      className="bg-white py-16 sm:py-20 lg:py-24"
      ref={sectionRef}
    >
      <div className="mx-auto max-w-[1100px] px-4 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div
            ref={imageWrapRef}
            className="project-image-container relative rounded-3xl bg-cover bg-center w-[520px] h-[700px] p-6 md:p-10 mx-auto opacity-0"
            style={{
              backgroundImage: "url('/assets/Picture2.png')",
              willChange: "transform, opacity",
            }}
          >
            <div className="project-image-wrap relative w-full h-full p-6 md:p-8">
              <Image
                src="/assets/Picture.png"
                alt="Freelio UI mockup"
                fill
                className="object-cover rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_40px_rgba(0,0,0,0.05)]"
              />
            </div>
          </div>

          <div className="project-text-content flex flex-col items-start gap-8 lg:p-7 lg:gap-10">
            <div className="flex flex-col gap-5">
              <p className="pm-subheading text-[13px] font-semibold uppercase font-open-runde tracking-widest text-amber-950">
                project management
              </p>
              <h2 className="pm-heading text-4xl font-semibold leading-[1.1] tracking-[-0.01em] text-primary md:text-5xl lg:text-6xl">
                Keep every project moving forward
              </h2>
              <p className="pm-description text-xl leading-relaxed text-secondary">
                <strong className="font-semibold text-secondary">
                  Plan, assign, and deliver your work
                </strong>{" "}
                - all in one place. With smart task tracking, deadlines, and
                real-time progress, you stay organized and clients stay
                confident.
              </p>
            </div>

            <div className="pm-button">
              <AnimatedButton className="rounded-full text-md font-semibold h-14 px-6 bg-primary text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300">
                Try Dreelio free
              </AnimatedButton>
            </div>

            <div className="grid w-full grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
              <FeatureBadge icon={CheckSquare} text="Tasks" />
              <FeatureBadge icon={Clock} text="Time tracking" />
              <FeatureBadge icon={FileText} text="Timesheets" />
              <FeatureBadge icon={BarChart2} text="Reports" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectManagement;
