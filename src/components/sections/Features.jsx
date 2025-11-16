"use client";

import Image from "next/image";

/* ---------------------------------------------
   LARGE FEATURE CARD
---------------------------------------------- */
export const LargeFeatureCard = ({ image, title, description, span }) => {
  return (
    <div
      className="
        bg-cream/50
        rounded-[28px]
        shadow-md
        p-10 lg:p-12
        flex flex-col
        gap-8
      "
    >
      {/* 1. Title (at the top) */}
      {/* Increased font size to match the reference image */}
      <h1 className="text-[28px] lg:text-[24px] font-semibold text-primary leading-tight">
        {title}
      </h1>

      {/* 2. Image (in the middle) */}
      <div className="w-full my-4">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="w-full h-auto object-contain rounded-lg"
        />
      </div>

      {/* 3. Description (at the bottom) */}
      <p className="text-base lg:text-md text-secondary leading-[1.6]">
        <span className="font-extrabold">{span}</span> {description}
      </p>
    </div>
  );
};

/* ---------------------------------------------
   SMALL FEATURE CARD
---------------------------------------------- */
const SmallFeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-cream/50 rounded-[20px] p-8 shadow-md flex flex-col gap-4">
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
        <Image
          src={icon}
          alt=""
          width={25}
          height={25}
          className="object-contain"
        />
      </div>

      <h1 className="text-xl mt-10 font-semibold text-primary leading-[1.3]">
        {title}
      </h1>

      <p className="text-[15px] text-secondary leading-[1.6]">{description}</p>
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
  return (
    <section className="bg-linear-to-b from-white to-cream/20 py-20 lg:py-28 px-4">
      <div className="container-section">
        {/* Section Header */}
        <div className="mx-auto max-w-[750px] text-center flex flex-col gap-5 mb-14">
          <p className="text-[13px] font-semibold uppercase tracking-widest text-amber-950">
            FEATURES
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.01em] leading-[1.1] text-primary">
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
