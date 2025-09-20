'use client';

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import styles from "./GalleryCarousel.module.css";

// Gallery slides data
const slides = [
  {
    id: 1,
    src: "/1.jpg",
    alt: "Git Workshop",
    title: "Git Workshop",
    description: "Learn version control with hands-on Git training"
  },
  {
    id: 2,
    src: "/2.jpg",
    alt: "Code Clash",
    title: "Code Clash",
    description: "Competitive programming competition"
  },
  {
    id: 3,
    src: "/3.jpg",
    alt: "Hack Summit",
    title: "Hack Summit",
    description: "24-hour hackathon challenge"
  },
  {
    id: 4,
    src: "/4.jpg",
    alt: "TensorFlow Workshop",
    title: "TensorFlow Workshop",
    description: "Machine Learning with TensorFlow"
  },
  {
    id: 5,
    src: "/IMG-20250411-WA0031.jpg",
    alt: "Team Meeting",
    title: "Team Meeting",
    description: "Strategic planning and team building"
  },
  {
    id: 6,
    src: "/IMG-20250411-WA0032.jpg",
    alt: "Project Demo",
    title: "Project Demo",
    description: "Showcasing innovative student projects"
  }
];

const GalleryCarousel = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Initial title animation
  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 }
      );
    }
  }, []);

  // Pause/resume animation handlers
  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(true);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D55] to-[#786EFF]">
              Highlights from the Past
            </span>
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our journey through memorable events, workshops, and community gatherings
          </p>
        </div>

        {/* 3D Cylindrical Carousel */}
        <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] flex items-start justify-center pt-8 md:pt-16">
          <div
            className={`${styles.cylindricalCarousel} ${isPlaying ? styles.playing : styles.paused}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              '--quantity': slides.length,
            } as React.CSSProperties}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={styles.carouselItem}
                style={{
                  '--position': index + 1,
                } as React.CSSProperties}
              >
                <div className="relative w-full h-full bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden transition-all duration-500 hover:border-[#FF2D55]/70 hover:shadow-[#FF2D55]/20 hover:shadow-2xl group">
                  {/* Image */}
                  <div className="relative h-3/4 overflow-hidden rounded-t-2xl">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="200px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-sm font-bold mb-1 group-hover:text-[#FF2D55] transition-colors duration-300 line-clamp-1">
                      {slide.title}
                    </h3>
                    <p className="text-gray-300 text-xs leading-relaxed line-clamp-2">
                      {slide.description}
                    </p>
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF2D55]/5 to-[#786EFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
