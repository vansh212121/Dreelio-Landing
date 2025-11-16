"use client";

import { Moon, Instagram, Twitter, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-sky-200 pt-16 pb-16 md:pb-20 font-open-runde">
      <div className="container-section px-4">
        <div className="bg-white/50 text-primary rounded-[40px] p-10 shadow-sm">
          <div className="flex flex-col lg:flex-row mb-18 justify-between gap-12 lg:gap-8">
            {/* Left Side */}
            <div className="flex flex-col gap-6" style={{ maxWidth: "334px" }}>
              <Link href="/" className="flex items-center gap-2 text-primary">
                <Image src="/assets/logo1.svg" alt="logo" width={32} height={32} />
                <span className="text-2xl font-open-runde font-semibold tracking-tight">
                  Dreelio
                </span>
              </Link>
              <p className="text-md text-secondary font-open-runde leading-relaxed">
                Your favourite business management software. Built for early
                startup founders.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="h-10 w-10  bg-primary rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-wrap gap-12 md:gap-16 ">
              <div className="flex flex-col gap-4">
                <h3 className="text-priamry font-open-runde font-semibold ">
                  PAGES
                </h3>
                <ul className="flex flex-col gap-3">
                  <li>
                    <Link
                      href="/"
                      className="text-md text-secondary font-open-runde"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#features"
                      className="text-md text-secondary font-open-runde"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#pricing"
                      className="text-md text-secondary font-open-runde"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-md text-secondary font-open-runde"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-priamry font-open-runde font-semibold ">
                  INFORMATION
                </h3>

                <ul className="flex flex-col gap-3">
                  <li>
                    <Link
                      href="/contact-us"
                      className="text-md text-secondary font-open-runde"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-md text-secondary font-open-runde"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms-of-use"
                      className="text-md text-secondary font-open-runde"
                    >
                      Terms of use
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/404"
                      className="text-md text-secondary font-open-runde"
                    >
                      404
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Replaced `border-border` with a neutral gray */}
          <hr className="my-6 border-gray-300" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-md font-open-runde text-secondary text-center md:text-left">
              © 2025 Dreelio. Created by{" "}
              <span className="font-semibold">Vansh Arora</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
