"use client";
import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const featuredPost = {
  title: "How to start a 100k creative agency in 2025",
  image: "/assets/4.avif",
  description:
    "Learn how to kickstart your journey into agency ownership with our comprehensive guide.",
  tags: ["Must Read", "Featured"],
  author: {
    name: "Dhyna Phils",
    title: "Head of Marketing",
    avatar: "/assets/4.avif",
  },
  href: "#",
};

const blogPosts = [
  {
    title: "Top 10 digital agency software",
    image: "/assets/5.avif",
    tag: "TOOLS",
    tagColors: "bg-blue-600 text-white ",
    href: "#",
  },
  {
    title: "A complete guide to project success in 2026",
    image: "/assets/6.avif",
    tag: "INSIGHT",
    tagColors: "bg-yellow-600 text-white ",
    href: "#",
  },
  {
    title: "What Are Billable Hours",
    image: "/assets/7.avif",
    tag: "MANAGEMENT",
    tagColors: "bg-green-600 text-white",
    href: "#",
  },
];

const Blog = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Triggers early
          toggleActions: "play none none none",
        },
      });

      tl.from(".blog-subheading", {
        opacity: 0,
        y: 40,
        filter: "blur(8px)",
        duration: 0.8,
        ease: "power3.out",
      }).from(
        ".blog-heading",
        {
          opacity: 0,
          y: 50,
          filter: "blur(10px)",
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      );

      // Featured post animation
      gsap.fromTo(
        ".featured-post",
        {
          opacity: 0,
          y: 60,
          scale: 0.97,
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
            trigger: ".featured-post",
            start: "top 85%", // Early trigger
            toggleActions: "play none none none",
          },
        }
      );

      // Blog grid cards with stagger
      gsap.fromTo(
        ".blog-card",
        {
          opacity: 0,
          y: 50,
          scale: 0.95,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          stagger: 0.12,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".blog-grid",
            start: "top 85%", // Early trigger
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="py-20 lg:py-28 bg-sky-100 relative overflow-hidden"
    >
      <div className="container-section relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="blog-subheading text-[13px] font-semibold uppercase tracking-widest text-amber-950">
            BLOG
          </p>
          <h2 className="blog-heading text-[42px] mt-2 lg:text-[57px] font-semibold leading-[1.2] tracking-[-0.01em] font-open-runde text-primary">
            Ideas to level-up
            <br /> your freelance game
          </h2>
        </div>

        <div className="space-y-6">
          {/* Featured Post */}
          <a
            href={featuredPost.href}
            className="featured-post group grid grid-cols-1 lg:grid-cols-5 bg-white rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] overflow-hidden"
          >
            {/* --- 1. Image Column --- */}
            <div className="col-span-1 lg:col-span-2 h-64 lg:h-[460px] w-[460px] relative overflow-hidden rounded-3xl">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>

            {/* --- 2. Content Column --- */}
            <div className="col-span-1 lg:col-span-3 p-6 lg:p-14 flex flex-col">
              <div className="flex-1">
                <span className="bg-amber-800 text-white font-open-runde text-md font-semibold px-2.5 py-1.5 rounded-full">
                  MUST READ
                </span>

                {/* Title */}
                <h3 className="text-2xl lg:text-[40px] font-semibold font-open-runde leading-tight tracking-tight text-gray-900 mt-5">
                  {featuredPost.title}
                </h3>

                {/* Description */}
                <p className="text-[18px] text-secondary leading-relaxed mt-3">
                  {featuredPost.description}
                </p>
              </div>

              {/* --- Bottom Row (Author & Featured Tag) --- */}
              <div className="flex items-center justify-between mt-8">
                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold font-open-runde text-md text-primary">
                      {featuredPost.author.name}
                    </p>
                    <p className="text-sm text-secondary">
                      {featuredPost.author.title}
                    </p>
                  </div>
                </div>

                {/* "FEATURED" Tag */}
                <span className="bg-orange-600 text-white text-sm font-semibold px-3 py-1.5 rounded-full">
                  FEATURED
                </span>
              </div>
            </div>
          </a>

          {/* Blog Grid */}
          <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogPosts.map((post, index) => (
              <a
                key={index}
                href={post.href}
                className="blog-card group flex flex-col font-open-runde"
              >
                <div className="relative w-full aspect-4/3 overflow-hidden bg-muted rounded-[20px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="pt-5 flex flex-row items-center justify-between flex-1 gap-3">
                  <h5 className="text-xl font-semibold text-primary leading-[1.4] font-open-runde">
                    {post.title}
                  </h5>
                  <span
                    className={`inline-block text-sm font-semibold px-3 py-1.5 rounded-full font-open-runde ${post.tagColors} shrink-0`}
                  >
                    {post.tag}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;