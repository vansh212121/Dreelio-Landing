"use client";

import React from "react";
import Image from "next/image";
import { AnimatedButton } from "../ui/AnimatedButton";

// Simple inline SVG for the X logo

const Community = () => {
  return (
    <section
      id="community"
      className="w-full bg-linear-to-b from-sky-100 to-sky-200 py-24 px-4 font-open-runde"
    >
      <div className="container mx-auto max-w-5xl">
        {/* --- Heading Section --- */}
        <div className="text-center mb-12">
          <p className="text-[13px] font-semibold uppercase font-open-runde tracking-widest text-amber-950">
            COMMUNITY
          </p>
          <h2 className="text-4xl lg:text-[52px] md:text-5xl font-bold text-primary mt-2">
            Stay in the loop
          </h2>
        </div>
        {/* --- Cards Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* --- X/Twitter Card --- */}
          <div className="bg-white/80 rounded-4xl shadow-lg p-8 flex flex-col justify-between min-h-90">
            <div className="flex justify-between items-start mb-1">
              <div className="text-white bg-transparent p-3 rounded-xl shadow-xl">
                <Image
                  src="/assets/x.avif"
                  alt="X Logo"
                  width={64}
                  height={64}
                />
              </div>
              <span className="text-md font-open-runde font-semibold text-secondary pt-2">
                15.2K FOLLOWERS
              </span>
            </div>

            <div>
              <h4 className="text-3xl font-semibold font-open-runde text-primary mb-2">
                X/Twitter
              </h4>
              <p className="text-secondary text-md">
                Stay updated on new features and discover how others are using
                Dreelio.
              </p>
            </div>

            <div>
              <AnimatedButton
                size="lg"
                className="bg-transperant border border-gray-50 text-md text-primary font-semibold font-open-runde py-6 px-6 rounded-full hover:shadow-lg hover:bg-transparent transition-colors"
              >
                Follow us
              </AnimatedButton>
            </div>
          </div>

          {/* --- YouTube Card --- */}
          <div className="bg-white/80 rounded-4xl shadow-lg p-8 flex flex-col justify-between min-h-90">
            {/* Block 1: Logo */}
            <div className="flex justify-between items-start mb-1">
              <div className="text-white bg-transparent p-3 rounded-xl shadow-xl">
                <Image
                  src="/assets/yt.avif"
                  alt="X Logo"
                  width={64}
                  height={64}
                />
              </div>
              <span className="text-md font-open-runde font-semibold text-secondary pt-2">
                32k subscribers
              </span>
            </div>

            <div>
              <h4 className="text-3xl font-semibold font-open-runde text-primary mb-2">
                YouTube
              </h4>
              <p className="text-secondary text-md">
                Tips, tutorials, and in-depth feature guides to inspire and
                enhance your Dreelio workflow.
              </p>
            </div>

            <div>
              <AnimatedButton
                size="lg"
                className="bg-transperant border border-gray-50 text-md text-primary font-semibold font-open-runde py-6 px-6 rounded-full hover:shadow-lg hover:bg-transparent transition-colors"
              >
                Subscribe
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
