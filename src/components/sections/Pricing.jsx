"use client";
import React, { useState } from "react";
import { AnimatedButton } from "../ui/AnimatedButton";
import { Label } from "../ui/label";

// Checkmark Icon
const CheckmarkIcon = () => (
  <svg
    className="w-5 h-5 text-gray-600 shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

// Reusable Feature Item
const FeatureItem = ({ children }) => (
  <li className="flex items-center gap-3">
    <CheckmarkIcon />
    <span className="text-secondary font-open-runde text-lg">{children}</span>
  </li>
);

// Annually/Monthly Toggle Switch
const PricingToggle = ({ isAnnual, setIsAnnual }) => (
  <div className="bg-white/70 p-1.5 rounded-full space-x-2 flex max-w-xs mx-auto">
    <AnimatedButton
      onClick={() => setIsAnnual(true)}
      className={`w-2/2 py-2 h-11 rounded-full text-md font-semibold ${
        isAnnual
          ? "bg-white shadow text-primary hover:bg-white hover:shadow-md"
          : "text-primary bg-transparent shadow-none hover:shadow-xl hover:bg-black/5"
      }`}
    >
      Annually
    </AnimatedButton>
    <AnimatedButton
      onClick={() => setIsAnnual(false)}
      className={`w-2/2 py-2 h-11 rounded-full text-md font-semibold ${
        isAnnual
          ? "text-primary bg-transparent shadow-none hover:shadow-xl hover:bg-black/5"
          : "bg-white shadow text-primary hover:bg-white hover:shadow-md"
      }`}
    >
      Monthly
    </AnimatedButton>
  </div>
);

// --- Main Pricing Section Component ---
const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  // Define plan features
  const basicFeatures = [
    "Unlimited projects",
    "Unlimited clients",
    "Time tracking",
    "CRM",
    "iOS & Andriod app",
  ];

  const premiumFeatures = [
    "Everything in Basic",
    "Invoices & payments",
    "Expense tracking",
    "Income tracking",
    "Scheduling",
  ];

  const enterpriseFeatures = [
    "Everything in Premium",
    "Custom data import",
    "Advanced onboarding",
    "Hubspot integration",
    "Timesheets",
  ];

  return (
    <section className="bg-linear-to-b from-cream/50 via-sky-50 to-sky-100 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-8">
        {/* --- Top Header --- */}
        <div className="text-center">
          <p className="text-[13px] font-semibold font-open-runde uppercase tracking-widest text-amber-950">
            PRICING
          </p>
          <h2 className="text-4xl lg:text-[55px] font-open-runde font-semibold text-primary mt-4">
            Simple plans
            <br />
            for serious work
          </h2>
        </div>

        {/* --- Pricing Cards Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 items-end ">
          {/* --- Card 1: Dreelio Basic --- */}
          <div className="bg-white rounded-3xl shadow-2xl p-9 ">
            <h3 className="text-secondary font-medium font-open-runde text-[18px]">
              Dreelio Basic
            </h3>
            <p className="text-primary text-[40px] font-open-runde font-semibold">
              Free
            </p>
            <p className="text-secondary mt-3 font-open-runde">
              For solo use with light needs.
            </p>
            <ul className="space-y-3 mt-6 ">
              {basicFeatures.map((feature) => (
                <FeatureItem key={feature}>{feature}</FeatureItem>
              ))}
            </ul>
            {/* 5. Replaced <button> with <AnimatedButton> */}
            <AnimatedButton className="rounded-full w-full text-md mt-8 font-semibold h-14 px-6 bg-cream/40 text-primary shadow-xl hover:bg-cream/60 hover:shadow-xl transition-all duration-300">
              Try Freelio free
            </AnimatedButton>
          </div>

          {/* --- Card 2: Dreelio Premium (Highlighted) --- */}
          <div className="bg-linear-to-b from-blue-300  via-cream/20 to-cream rounded-3xl shadow-2xl p-6 border-4 border-blue-400">
            <div className="p-2">
              <PricingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
              <div className="text-left mt-6">
                <div className="flex space-x-4">
                  <h3 className="text-secondary font-medium font-open-runde text-[18px]">
                    Dreelio Premium
                  </h3>
                  {isAnnual && (
                    <Label className="bg-green-50 text-green-500 border border-green-600 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      Save 20%
                    </Label>
                  )}
                </div>
                <div className="flex items-baseline gap-2 mt-2">
                  <p className="text-[40px] text-primary font-open-runde font-semibold">
                    {isAnnual ? "$189/mo" : "$229/mo"}{" "}
                  </p>
                </div>
                <p className="text-secondary mt-3 font-open-runde">
                  For pro use with light needs.
                </p>
              </div>
              <ul className="space-y-3 mt-6">
                {premiumFeatures.map((feature) => (
                  <FeatureItem key={feature}>{feature}</FeatureItem>
                ))}
              </ul>
              {/* 5. Replaced <button> with <AnimatedButton> */}
              <AnimatedButton className="rounded-full w-full text-md mt-8 font-semibold h-14 px-6 bg-primary text-primary-foreground shadow-xl  hover:shadow-2xl transition-all duration-300">
                Get Started
              </AnimatedButton>
            </div>
          </div>

          {/* --- Card 3: Dreelio Enterprise --- */}
          <div className="bg-white rounded-3xl shadow-2xl p-9">
            <h3 className="text-secondary font-medium font-open-runde text-[18px]">
              Dreelio Enterprise
            </h3>
            <p className="text-primary text-[40px] font-open-runde font-semibold">
              Flexible
            </p>
            <p className="text-secondary mt-3 font-open-runde">
              For team use with light needs.
            </p>
            <ul className="space-y-3 mt-6">
              {enterpriseFeatures.map((feature) => (
                <FeatureItem key={feature}>{feature}</FeatureItem>
              ))}
            </ul>
            {/* 5. Replaced <button> with <AnimatedButton> */}
            <AnimatedButton className="rounded-full w-full text-md mt-8 font-semibold h-14 px-6 bg-cream/40 text-primary shadow-xl hover:bg-cream/60 hover:shadow-xl transition-all duration-300">
              Contact Sales
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
