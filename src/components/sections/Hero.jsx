"use client";
import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { AnimatedButton } from "../ui/AnimatedButton";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const imageWrapRef = useRef(null);
  const cloudLeftRef = useRef(null);
  const cloudRightRef = useRef(null);

  useLayoutEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Split text for animations
      const splitHeading = new SplitType(".hero-heading", {
        types: "chars",
      });

      const splitSub = new SplitType(".hero-sub", {
        types: "words",
      });

      // Main entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1️⃣ Heading - Wave reveal with improved timing
      tl.from(splitHeading.chars, {
        opacity: 0,
        y: 50,
        rotationX: -90,
        filter: "blur(10px)",
        transformOrigin: "0% 50% -50",
        stagger: {
          each: 0.025,
          from: "start",
          ease: "power2.inOut",
        },
        duration: 0.8,
      })

        // 2️⃣ Subheading - Smooth fade with scale
        .from(
          splitSub.words,
          {
            opacity: 0,
            y: 30,
            scale: 0.8,
            filter: "blur(8px)",
            stagger: {
              each: 0.03,
              ease: "power1.out",
            },
            duration: 0.6,
          },
          "-=0.5"
        )

        // 3️⃣ Buttons - Pop in with bounce
        .from(
          ".hero-buttons > *",
          {
            opacity: 0,
            y: 30,
            scale: 0.8,
            filter: "blur(5px)",
            stagger: 0.1,
            duration: 0.7,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        );

      // LEFT CLOUD - Smoother entrance
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
          delay: 0.2,
        }
      );

      // RIGHT CLOUD - Smoother entrance
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
          delay: 0.3,
        }
      );

      // HERO IMAGE - Smoother 3D entrance
      gsap.fromTo(
        imageWrapRef.current,
        {
          opacity: 0,
          y: 100,
          rotateX: 38,
          filter: "blur(15px)",
          transformOrigin: "center bottom",
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 18,
          filter: "blur(0px)",
          duration: 2,
          ease: "power4.out",
          delay: 0.5,
        }
      );

      // Image 3D scroll tilt - Smoother straightening
      gsap.to(imageWrapRef.current, {
        rotateX: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=400",
          scrub: 1.5,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full flex flex-col items-center overflow-x-hidden pt-40"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#A9CCF3_0%,#BFD6F2_45%,#F6E7D7_100%)] -z-10" />

      {/* Left cloud */}
      <Image
        ref={cloudLeftRef}
        src="/assets/cloud-left.avif"
        className="absolute left-[-120px] top-56 pointer-events-none animate-cloudFloat"
        width={320}
        height={320}
        alt="cloud"
        style={{ willChange: "transform" }}
      />

      {/* Right cloud */}
      <Image
        ref={cloudRightRef}
        src="/assets/cloud-right.avif"
        className="absolute right-[-120px] top-56 pointer-events-none animate-cloudFloatReverse"
        width={320}
        height={320}
        alt="cloud"
        style={{ willChange: "transform" }}
      />

      <div className="container-hero z-10 flex flex-col items-center gap-16 px-4 text-center">
        <div className="flex max-w-4xl flex-col items-center justify-center gap-10">
          <div className="flex flex-col items-center gap-6">
            <h1
              className="hero-heading font-open-runde text-[68px] lg:text-[80px] font-semibold leading-[1.05] tracking-[-0.02em] md:text-[82px]"
              style={{ perspective: "1000px" }}
            >
              Run your freelance <br/>business like a pro
            </h1>

            <p className="hero-sub max-w-2xl text-[10px] leading-relaxed text-secondary md:text-[22px] lg:text-[19px] md:leading-relaxed">
              All-in-one platform for managing clients, projects, and payments
              without the chaos. From first contract to final invoice, we've got
              your back.
            </p>
          </div>

          <div className="hero-buttons flex flex-col items-center gap-2 sm:flex-row">
            <Link href="#">
              <AnimatedButton className="rounded-full text-md font-semibold h-14 px-6 bg-primary text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300">
                Try Dreelio free
              </AnimatedButton>
            </Link>

            <Link href="#features">
              <AnimatedButton className="rounded-full text-md font-semibold h-14 px-6 bg-white/5 text-black hover:bg-white/5 transition-all duration-300">
                See features
              </AnimatedButton>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full max-w-5xl" style={{ perspective: "1000px" }}>
          <div
            ref={imageWrapRef}
            className="hero-image-wrap w-full rounded-t-3xl border border-black/8 shadow-xl overflow-hidden relative"
            style={{
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          >
            <Image
              src="/assets/Hero.avif"
              alt="An image of Dreelio's dashboard"
              width={1440}
              height={1000}
              className="hero-image  h-[450px] w-[1300px] object-cover object-top"
              priority
            />

            {/* Fade to white */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;