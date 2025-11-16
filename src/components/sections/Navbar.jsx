"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AnimatedButton } from "../ui/AnimatedButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({
    left: 0,
    width: 0,
    opacity: 0,
    color: "hsl(var(--primary))",
  });

  const navLinks = [
    { id: "features", label: "Features" },
    { id: "benefits", label: "Benefits" },
    { id: "pricing", label: "Pricing" },
    { id: "blog", label: "Blog" },
    { id: "contact us", label: "Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navVariants = {
    top: {
      scale: 1,
      borderRadius: 0,
      transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
    },
    scrolled: {
      scale: 0.985,
      borderRadius: 16,
      transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const overlayVariants = {
    top: {
      backgroundColor: "rgba(255,255,255,0)",
      backdropFilter: "blur(0px)",
      borderColor: "transparent",
    },
    scrolled: {
      backgroundColor: "rgba(255, 255, 255, 0.25)",
      borderColor: "rgba(255, 255, 255, 0.18)",
      backdropFilter: "blur(18px) saturate(180%)",
    },
  };

  const contentVariants = {
    top: { gap: "8rem", transition: { duration: 0.25 } },
    scrolled: { gap: "0.5rem", transition: { duration: 0.25 } },
  };

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay - stops at sidebar edge */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-56 bg-white/95 backdrop-blur-xl border-l border-gray-200 z-60 lg:hidden"
            >
              <div className="flex flex-col h-full p-6">
                {/* Close button */}
                <div className="flex justify-end mb-6 pr-2">
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative right-1 z-60"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Nav links */}
                <nav className="flex-1">
                  <ul className="space-y-4">
                    {navLinks.map((link) => (
                      <li key={link.id}>
                        <button
                          onClick={() => {
                            scrollToSection(link.id);
                            setMobileMenuOpen(false);
                          }}
                          className="w-full text-left text-lg font-semibold text-primary py-3 px-4 rounded-xl"
                        >
                          {link.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* CTA */}
                <div className="pt-6 border-t border-gray-200">
                  <AnimatedButton
                    size="lg"
                    className="w-full bg-gradient-hue shadow-lg group py-3 font-semibold gap-2"
                    onClick={() => {
                      scrollToSection("cta");
                      setMobileMenuOpen(false);
                    }}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </AnimatedButton>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Navbar  */}
      <div className="fixed p-4 top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <motion.nav
          animate={scrolled ? "scrolled" : "top"}
          variants={navVariants}
          className="relative pointer-events-auto w-full  justify-center transition-all duration-200 max-w-7xl hidden lg:flex"
        >
          <motion.div
            variants={overlayVariants}
            animate={scrolled ? "scrolled" : "top"}
            className="flex items-center justify-center px-1.5 py-1.5 rounded-full"
          >
            <motion.div
              variants={contentVariants}
              animate={scrolled ? "scrolled" : "top"}
              className="flex items-center justify-center"
            >
              {/* Logo */}
              <Link href="/">
                <motion.div
                  className="flex items-center shrink-0 cursor-pointer gap-1"
                  whileHover={{ scale: 1.02 }}
                  animate={{ scale: scrolled ? 0.96 : 1 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => scrollToSection("home")}
                >
                  <Image
                    src="/assets/logo.png"
                    alt="NeuroHue logo"
                    width={28}
                    height={28}
                    className=" object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <motion.span
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="text-2xl font-open-runde font-semibold text-primary tracking-tight  leading-none"
                  >
                    Dreelio
                  </motion.span>
                </motion.div>
              </Link>

              {/* Vercel-style hover tabs */}
              <ul
                onMouseLeave={() => setCursorPos((p) => ({ ...p, opacity: 0 }))}
                className="relative flex font-open-runde items-center px-3 py-3 rounded-full"
              >
                {navLinks.map((link) => (
                  <Tab
                    key={link.id}
                    label={link.label}
                    id={link.id}
                    setCursorPos={setCursorPos}
                    scrollToSection={scrollToSection}
                  />
                ))}
                <Cursor position={cursorPos} />
              </ul>

              {/* CTA */}
              <motion.div
                animate={{ scale: scrolled ? 0.96 : 1 }}
                transition={{ duration: 0.25 }}
                className="relative shrink-0"
              >
                <AnimatedButton
                  size="lg"
                  className="rounded-full hidden lg:flex text-md mg-primary shadow-lg group px-6 h-14 font-bold font-open-runde items-center gap-2"
                  onClick={() => scrollToSection("cta")}
                >
                  Try Dreelio Free
                </AnimatedButton>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.nav>

        {/* Mobile Navbar */}
        <div className="relative pointer-events-auto w-full flex justify-between items-center max-w-7xl px-6 py-3 lg:hidden">
          {/* Logo */}
          <div
            className="flex items-center gap-2 shrink-0 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <Image
              src="/log.avif"
              alt="NeuroHue logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="text-2xl font-bold tracking-tight font-open-runde text-primary leading-none">
              NeuroHue
            </span>
          </div>

          {!mobileMenuOpen && (
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
            >
              <Menu className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

/* -------------------------------
   Vercel-style hover tabs 
-------------------------------- */
function Tab({ label, id, setCursorPos, scrollToSection }) {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setCursorPos({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
          color: "hsl(var(--primary))",
        });
      }}
      onClick={() => scrollToSection(id)}
      className="relative z-10 block cursor-pointer px-3 py-1 text-[16px] font-medium text-charcoal transition-all duration-300 hover:text-white"
    >
      {label}
    </li>
  );
}

function Cursor({ position }) {
  return (
    <motion.li
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
        backgroundColor: position.color,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute z-0 h-12 rounded-full"
    />
  );
}
