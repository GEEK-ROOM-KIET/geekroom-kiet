'use client';

import type React from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

// Type definitions
interface FloatingAvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
  borderColor?: string;
  top: number;
  left: number;
  delay?: number;
  id?: string;
}

interface FloatingLabelProps {
  children: React.ReactNode;
  color: string;
  top: number;
  left: number;
  delay?: number;
}

// Floating Avatar Component
const FloatingAvatar: React.FC<FloatingAvatarProps> = ({
  src,
  alt,
  size = "lg",
  borderColor,
  top,
  left,
  delay = 0,
  id
}) => {
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (avatarRef.current) {
      // Initial animation
      gsap.fromTo(avatarRef.current,
        {
          opacity: 0,
          scale: 0,
          rotation: -180
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          delay: delay * 0.3,
          ease: "back.out(1.7)"
        }
      );

      // Continuous floating animation
      gsap.to(avatarRef.current, {
        y: "+=10",
        duration: 2 + Math.random() * 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: Math.random() * 2
      });

      gsap.to(avatarRef.current, {
        x: "+=10",
        duration: 3 + Math.random() * 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: Math.random() * 3
      });
    }
  }, [delay]);

  const sizeClasses = {
    sm: "w-8 h-8 md:w-12 md:h-12",
    md: "w-12 h-12 md:w-16 md:h-16", 
    lg: "w-14 h-14 md:w-20 md:h-20",
    xl: "w-16 h-16 md:w-24 md:h-24"
  };

  return (
    <div
      id={id}
      ref={avatarRef}
      className="absolute"
      style={{ 
        top: `${top*1 }px`, 
        left: `${left * 0.7}px`
      }}
    >
      <div 
        className={`${sizeClasses[size]} rounded-full overflow-hidden border-2 md:border-4 shadow-lg relative`}
        style={{ 
          borderColor: borderColor || '#FF2D55',
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 64px, 96px"
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: `0 0 20px ${borderColor || '#FF2D55'}40`
          }}
        />
      </div>
    </div>
  );
};

// Floating Label Component
const FloatingLabel: React.FC<FloatingLabelProps> = ({
  children,
  color,
  top,
  left,
  delay = 0
}) => {
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (labelRef.current) {
      gsap.fromTo(labelRef.current,
        {
          opacity: 0,
          y: 20,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: delay * 0.4 + 0.5,
          ease: "power2.out"
        }
      );

      // Gentle floating
      gsap.to(labelRef.current, {
        y: "+=8",
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: Math.random() * 2
      });
    }
  }, [delay]);

  return (
    <div
      ref={labelRef}
      className="absolute font-bold text-lg px-3 py-1 rounded-full border-2 backdrop-blur-sm"
      style={{
        top: `${top}px`,
        left: `${left}px`,
        color: color,
        borderColor: color,
        backgroundColor: `${color}20`
      }}
    >
      {children}
    </div>
  );
};

// Animated SVG Lines Component
const ConnectingLines = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll('path');
      paths.forEach((path, index) => {
        const length = (path as SVGPathElement).getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length
        });

        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.5,
          delay: 1 + index * 0.3,
          ease: "power2.out"
        });
      });
    }
  }, []);

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    >
      {/* Lines connecting avatars to center */}
      <path
        d="M 80 150 Q 150 120 200 180"
        stroke="#374151"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M 320 180 Q 250 150 200 180"
        stroke="#374151"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M 130 320 Q 165 250 200 180"
        stroke="#374151"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
};

// Center Point Component
const CenterPoint = () => {
  const centerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (centerRef.current) {
      gsap.fromTo(centerRef.current,
        {
          opacity: 0,
          scale: 0
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 1.2,
          ease: "back.out(2)"
        }
      );

      // Pulsing animation
      gsap.to(centerRef.current, {
        scale: 1.2,
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });
    }
  }, []);

  return (
    <div
      ref={centerRef}
      className="absolute w-4 h-4 bg-gradient-to-r from-[#FF2D55] to-[#786EFF] rounded-full"
      style={{ top: '170px', left: '190px' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF2D55] to-[#786EFF] rounded-full animate-ping opacity-75" />
    </div>
  );
};

const WhyJoinUsSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRefs = useRef<HTMLParagraphElement[]>([]);

  const addToTextRefs = (el: HTMLParagraphElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Title animation
    if (titleRef.current) {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }

    // Text animations
    textRefs.current.forEach((text, index) => {
      gsap.fromTo(text,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3 + index * 0.2,
          ease: "power2.out"
        }
      );
    });
  }, []);

  // Avatar data with team member photos
  const avatarData = [
    {
      src: "/team members/rehan.png",
      alt: "Team Member 1",
      borderColor: "#00C8B5",
      top: 120,
      left: 50
    },
    {
      src: "/team members/sunny.png",
      alt: "Team Member 2",
      borderColor: "#FF2D55",
      top: 150,
      left: 290
    },
    {
      src: "/team members/yash.png",
      alt: "Team Member 3",
      borderColor: "#786EFF",
      top: 290,
      left: 100
    }
  ];

  // Floating label data
  const labelData = [
    {
      label: "Projects",
      color: "#00C8B5",
      top: 80,
      left: 10
    },
    {
      label: "Events",
      color: "#FF2D55",
      top: 110,
      left: 250
    },
    {
      label: "Learning",
      color: "#786EFF",
      top: 328,
      left: 140
    }
  ];

  return (
    <section className="pt-32 pb-24 md:py-24 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 mt-10">
            <h2
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D55] to-[#786EFF] pb-2"
            >
              Why Join Us?
            </h2>

            <div className="space-y-6 text-gray-300 text-2xl leading-relaxed">
              <p ref={addToTextRefs}>
                <span className="font-semibold text-[#00C8B5]">Geek Room KIET</span> is a
                community dedicated to helping each other get better at coding. Join us in
                building meaningful projects together! As an official chapter of Geek Room,
                we are committed to fostering a strong tech culture among students who are
                passionate about interdisciplinary learning.
              </p>

              <p ref={addToTextRefs}>
                Our focus is on empowering students to enhance their technical skills, explore
                cutting-edge technologies, and collaborate on innovative projects. With a variety
                of workshops, coding sessions, and project teams, Geek Room KIET offers a
                supportive environment to grow, connect with like-minded peers, and make a lasting impact.
              </p>
            </div>
          </div>

          {/* Right Interactive Visualization */}
          <div className="relative h-96 lg:h-[500px]">
            <div className="absolute inset-0">
              {/* Connecting Lines */}
              <ConnectingLines />

              {/* Floating Avatars */}
              {avatarData.map((avatar, index) => (
                <FloatingAvatar
                  key={`${avatar.src}-${avatar.borderColor}`}
                  id={`avatar-${index}`}
                  src={avatar.src}
                  alt={avatar.alt}
                  size="xl"
                  borderColor={avatar.borderColor}
                  top={avatar.top}
                  left={avatar.left}
                  delay={index}
                />
              ))}

              {/* Center Point */}
              <CenterPoint />

              {/* Floating Labels */}
              {labelData.map((label, index) => (
                <FloatingLabel
                  key={`${label.label}-${label.color}`}
                  color={label.color}
                  top={label.top}
                  left={label.left}
                  delay={index}
                >
                  {label.label}
                </FloatingLabel>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUsSection;
