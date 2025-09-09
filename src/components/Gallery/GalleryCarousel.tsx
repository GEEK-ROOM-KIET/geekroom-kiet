'use client';

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

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
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Add slide refs
  const addToSlidesRef = (el: HTMLDivElement | null) => {
    if (el && !slidesRef.current.includes(el)) {
      slidesRef.current.push(el);
    }
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!isPlaying) return;

    const intervalId = setInterval(() => {
      setCurrentSlideIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(intervalId);
  }, [isPlaying]);

  // GSAP animations for slide transitions
  useEffect(() => {
    const currentSlides = slidesRef.current;
    if (currentSlides.length === 0) return;

    // Reset all slides to default state
    gsap.set(currentSlides, { 
      scale: 0.7, 
      opacity: 0.4,
      z: -400,
      rotationY: 2
    });

    // Calculate positions for better spacing
    const radius = 450; // Increased radius for better spacing
    const angleStep = 360 / slides.length;

    currentSlides.forEach((slide, index) => {
      const angle = (index - currentSlideIndex) * angleStep;
      const radian = (angle * Math.PI) / 180;
      const x = Math.sin(radian) * radius;
      const z = Math.cos(radian) * radius;
      
      let scale = 0.7;
      let opacity = 0.4;
      
      // Make current slide prominent
      if (index === currentSlideIndex) {
        scale = 1;
        opacity = 1;
      }
      // Make adjacent slides more visible
      else if (Math.abs(index - currentSlideIndex) === 1 || 
               (currentSlideIndex === 0 && index === slides.length - 1) ||
               (currentSlideIndex === slides.length - 1 && index === 0)) {
        scale = 0.85;
        opacity = 0.7;
      }

      gsap.to(slide, {
        x: x,
        z: z,
        scale: scale,
        opacity: opacity,
        rotationY: -angle * 0.5, // Slight rotation for depth
        duration: 0.8,
        ease: "power2.out"
      });
    });
  }, [currentSlideIndex]);

  // Initial animation
  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(titleRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 }
      );
    }
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

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

        {/* 3D Carousel Container */}
        <div 
          ref={carouselRef}
          className="relative w-full h-[600px] md:h-[700px]"
          style={{ perspective: '1200px' }}
        >
          <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                ref={addToSlidesRef}
                className="absolute top-1/2 left-1/2 w-80 h-96 cursor-pointer group transform -translate-x-1/2 -translate-y-1/2"
                style={{ transformStyle: 'preserve-3d' }}
                onClick={() => goToSlide(index)}
              >
                <div className="relative w-full h-full bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700/50 overflow-hidden transition-all duration-500 group-hover:border-[#FF2D55]/70 group-hover:shadow-[#FF2D55]/20 group-hover:shadow-2xl">
                  {/* Image */}
                  <div className="relative h-2/3 overflow-hidden rounded-t-3xl">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="320px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-[#FF2D55] transition-colors duration-300">
                      {slide.title}
                    </h3>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      {slide.description}
                    </p>
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FF2D55]/5 to-[#786EFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simple Dot Indicators */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlideIndex
                    ? 'bg-[#FF2D55] scale-125 shadow-lg shadow-[#FF2D55]/50'
                    : 'bg-gray-600 hover:bg-gray-400 hover:scale-110'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
