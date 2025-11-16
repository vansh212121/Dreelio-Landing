"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedButton } from "../ui/AnimatedButton";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full flex flex-col items-center overflow-x-hidden pt-40">
      {/* Background gradient – now fades into cream under the image */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#A9CCF3_0%,#BFD6F2_45%,#F6E7D7_100%)] -z-10" />
      {/* Left cloud */}
      <Image
        src="/assets/cloud-left.avif"
        className="absolute left-[-120px] top-56 opacity-100 pointer-events-none animate-cloudFloat"
        width={320}
        height={320}
        alt="cloud"
      />

      {/* Right cloud */}
      <Image
        src="/assets/cloud-right.avif"
        className="absolute right-[-120px] top-56 opacity-100 pointer-events-none animate-cloudFloatReverse"
        width={320}
        height={320}
        alt="cloud"
      />

      <div className="container-hero z-10 flex flex-col items-center gap-16 px-4 text-center">
        <motion.div
          className="flex max-w-4xl flex-col items-center justify-center gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center gap-6">
            <h1 className="font-open-runde text-[68px] lg:text-[80px] font-semibold leading-[1.05] tracking-[-0.02em] md:text-[82px]">
              Run your freelance business like a pro
            </h1>

            <p className="max-w-2xl text-[10px] leading-relaxed text-secondary md:text-[22px] lg:text-[19px] md:leading-relaxed ">
              All-in-one platform for managing clients, projects, and payments
              without the chaos. From first contract to final invoice, we’ve got
              your back.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 sm:flex-row">
            <Link href="#">
              <AnimatedButton className="rounded-full text-md font-semibold h-14 px-6 bg-primary text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300">
                Try Dreelio free
              </AnimatedButton>
            </Link>

            <Link href="#features">
              <AnimatedButton className="rounded-full text-md font-semibold h-14 px-6 bg-white/5 text-black hover:bg-white/5 transition-all duration-300 ">
                See features
              </AnimatedButton>
            </Link>
          </div>
        </motion.div>

        {/* Cropped hero image */}
        <div className="w-full max-w-5xl mx-auto rounded-t-3xl border border-black/8 shadow-xl overflow-hidden relative">
          <Image
            src="/assets/Hero.avif"
            alt="An image of Dreelio's dashboard"
            width={1440}
            height={1000}
            className="w-full h-[420px] object-cover object-top"
            priority
            // Remove the 'style' prop with the maskImage from here
          />

          {/* NEW: This overlay fades the image to white */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-50 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
