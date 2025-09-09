'use client'; // Required for client-side interactivity

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { gsap } from "gsap";

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Rehan Ahmad",
    role: "President",
    image: "/team members/rehan.png",
    bio: "Leading the tech team and driving innovation across all projects.",
    linkedin: "https://www.linkedin.com/in/rehan-ahmad-2712r/",
    github: "https://github.com/rehan1360",
  },
  {
    id: 2,
    name: "Diksha Jha",
    role: "Event Lead",
    image: "/team members/diksha.png",
    bio: "Organizing and managing all community events and workshops.",
    linkedin: "https://www.linkedin.com/in/diksha-jha-8368a0295/",
    github: "https://github.com/dikshajha25",
  },
  {
    id: 3,
    name: "Sarthak Gupta",
    role: "Vice President",
    image: "/team members/sarthak.png",
    bio: "Leading the community and communication.",
    linkedin: "https://www.linkedin.com/in/sarthak-stranger/",
    github: "https://github.com/XSTRANGER-7",
  },
  {
    id: 4,
    name: "Vinayak Rastogi",
    role: "Technical Head",
    image: "/team members/vinayak.png",
    bio: "Creating and managing all tech support for geekroom",
    linkedin: "https://www.linkedin.com/in/vinayakrastogi3010/",
    github: "https://github.com/VinVorteX",
  },
  {
    id: 5,
    name: "Arpit Goswami",
    role: "Design Team",
    image: "/team members/arpit.png",
    bio: "Creating visual identity and promotional materials for all events.",
    linkedin: "https://www.linkedin.com/in/arpit-goswami03/",
    github: "https://github.com/arpitgoswami03",
  },
  {
    id: 6,
    name: "Nishant Nayan",
    role: "Marketing Lead",
    image: "/team members/nishant.jpg",
    bio: "Coordinating marketing research methodologies.",
    linkedin: "https://www.linkedin.com/in/thenishantnayan/",
    github: "https://github.com/thenishantnayan",
  },
  {
    id: 7,
    name: "Sunny kanojiya",
    role: "Content Creator",
    image: "/team members/sunny.png",
    bio: "Making content that attracts mass.",
    linkedin: "https://www.linkedin.com/in/sunny-kanojiya-248897236/",
    github: "https://github.com/sunnykanojiya",
  },
  {
    id: 8,
    name: "Raj Singh",
    role: "Treasurer",
    image: "/team members/raj.png",
    bio: "Managing funds, accounts, and budgeting.",
    linkedin: "https://www.linkedin.com/in/raj-singh-5222a5295/",
    github: "https://github.com/rajsingh19",
  },
  {
    id: 9,
    name: "Devansh Agrahari",
    role: "Sponsorship Head",
    image: "/team members/devansh.png",
    bio: "Making content that attracts mass.",
    linkedin: "https://www.linkedin.com/in/devansh-agrahari-15874229b/",
    github: "https://github.com/dagrahari",
  },
  {
    id: 10,
    name: "Yash Yadav",
    role: "Secretary",
    image: "/team members/yash.png",
    bio: "Managing community and roles distribution.",
    linkedin: "https://www.linkedin.com/in/yash-yadav23/",
    github: "https://github.com/YASH-YADAV-dynamo",
  }
];

// Glowing Strips Component
const GlowingStrips: React.FC<{ cardIndex: number }> = ({ cardIndex }) => {
  const stripsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (stripsRef.current) {
      const strips = stripsRef.current.querySelectorAll('.glow-strip');
      
      strips.forEach((strip, index) => {
        // Random initial positions and rotations
        gsap.set(strip, {
          x: Math.random() * 400 - 200,
          y: Math.random() * 400 - 200,
          rotation: Math.random() * 360,
          opacity: 0.3 + Math.random() * 0.7
        });

        // Continuous floating animation with different durations for variety
        gsap.to(strip, {
          x: `+=${Math.random() * 100 - 50}`,
          y: `+=${Math.random() * 100 - 50}`,
          rotation: `+=${Math.random() * 180 - 90}`,
          duration: 8 + Math.random() * 6,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: index * 0.5 + cardIndex * 0.2
        });

        // Opacity pulsing
        gsap.to(strip, {
          opacity: 0.2 + Math.random() * 0.8,
          duration: 3 + Math.random() * 4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: Math.random() * 2
        });
      });
    }
  }, [cardIndex]);

  return (
    <div 
      ref={stripsRef}
      className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl"
    >
      {/* Cyan Strip */}
      <div 
        className="glow-strip absolute w-24 h-1.5 rounded-full blur-sm"
        style={{
          background: 'linear-gradient(90deg, transparent, #00FFFF, transparent)',
          boxShadow: '0 0 15px #00FFFF, 0 0 30px #00FFFF, 0 0 45px #00FFFF'
        }}
      />
      
      {/* Blue Strip */}
      <div 
        className="glow-strip absolute w-20 h-1 rounded-full blur-sm"
        style={{
          background: 'linear-gradient(90deg, transparent, #0080FF, transparent)',
          boxShadow: '0 0 12px #0080FF, 0 0 24px #0080FF, 0 0 36px #0080FF'
        }}
      />
      
      {/* Light Blue Strip */}
      <div 
        className="glow-strip absolute w-22 h-0.5 rounded-full blur-sm"
        style={{
          background: 'linear-gradient(90deg, transparent, #40E0FF, transparent)',
          boxShadow: '0 0 10px #40E0FF, 0 0 20px #40E0FF, 0 0 30px #40E0FF'
        }}
      />
      
      {/* Teal Strip */}
      <div 
        className="glow-strip absolute w-16 h-2 rounded-full blur-sm"
        style={{
          background: 'linear-gradient(90deg, transparent, #008B8B, transparent)',
          boxShadow: '0 0 14px #008B8B, 0 0 28px #008B8B, 0 0 42px #008B8B'
        }}
      />
    </div>
  );
};

export default function TeamPage() {
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Enhanced hover animations for cards
    cardRefs.current.forEach((card, index) => {
      if (card) {
        const strips = card.querySelectorAll('.glow-strip');
        
        card.addEventListener('mouseenter', () => {
          // Intensify strips on hover
          strips.forEach((strip) => {
            gsap.to(strip, {
              opacity: 1,
              scale: 1.2,
              duration: 0.3,
              ease: "power2.out"
            });
          });
          
          // Card elevation
          gsap.to(card, {
            y: -8,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          });
        });
        
        card.addEventListener('mouseleave', () => {
          // Return strips to normal
          strips.forEach((strip) => {
            gsap.to(strip, {
              opacity: 0.3 + Math.random() * 0.7,
              scale: 1,
              duration: 0.4,
              ease: "power2.out"
            });
          });
          
          // Return card to normal
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
          });
        });
      }
    });
  }, []);

  const addToCardRefs = (el: HTMLDivElement | null) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };
  return (
    <>
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Our Team
          </h1>

          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Meet the dedicated individuals who drive Geek Room KIET forward, bringing their expertise
            and passion to create a vibrant tech community at GeekRoom-KIET.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => {
              // Cycle through colors for orbiting animation
              const orbitColors = ['#FF2D55', '#00FFFF', '#0080FF']; // Red, Cyan, Blue
              const currentColor = orbitColors[index % 3];
              
              return (
                <Card
                  key={member.id}
                  ref={addToCardRefs}
                  className="relative bg-background/30 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:shadow-lg transition-all duration-300 overflow-hidden"
                  style={{ minHeight: '380px' }} // Make cards more vertical
                >
                {/* Glowing Strips Background */}
                <GlowingStrips cardIndex={index} />
                
                {/* Additional Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 rounded-xl pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-xl pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Clickable Avatar with Dynamic Colored Rotating Animation */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mb-6 group"
                  >
                    <div 
                      className="absolute inset-0 rounded-full border-2 group-hover:opacity-75 transition-all duration-300 animate-orbit"
                      style={{ 
                        borderColor: `${currentColor}30`,
                        boxShadow: `0 0 20px ${currentColor}40`
                      }}
                    >
                      <div 
                        className="absolute w-4 h-4 rounded-full -top-2 left-1/2 transform -translate-x-1/2 animate-spin-orbit"
                        style={{ 
                          backgroundColor: currentColor,
                          boxShadow: `0 0 15px ${currentColor}, 0 0 30px ${currentColor}`
                        }}
                      ></div>
                    </div>
                    <Avatar className="h-28 w-28 border-3 group-hover:scale-105 transition-all duration-300" 
                           style={{ 
                             borderColor: `${currentColor}40`,
                             boxShadow: `0 0 25px ${currentColor}20`
                           }}>
                      <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </a>

                  <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                  <p className="text-sm font-medium mb-3" style={{ color: currentColor }}>{member.role}</p>

                  <p className="text-muted-foreground text-xs mb-4 leading-relaxed px-2">
                    {member.bio}
                  </p>

                  <div className="flex space-x-4 mt-auto">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-white transition-colors p-2 rounded-full"
                      style={{ 
                        backgroundColor: `${currentColor}20`,
                        border: `1px solid ${currentColor}30`
                      }}
                    >
                      <Linkedin size={18} />
                    </a>
                 
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-white transition-colors p-2 rounded-full"
                      style={{ 
                        backgroundColor: `${currentColor}20`,
                        border: `1px solid ${currentColor}30`
                      }}
                    >
                      <Github size={18} />
                    </a>
                  </div>
        


                </div>
              </Card>
              );
            })}
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Enhanced orbiting ring animation with glow */
        @keyframes orbit {
          0% {
            transform: rotate(0deg);
            filter: brightness(1);
          }
          25% {
            filter: brightness(1.2);
          }
          50% {
            transform: rotate(180deg);
            filter: brightness(1.4);
          }
          75% {
            filter: brightness(1.2);
          }
          100% {
            transform: rotate(360deg);
            filter: brightness(1);
          }
        }

        /* Enhanced spinning dot animation with trail effect */
        @keyframes spin-orbit {
          0% {
            transform: translateX(-50%) rotate(0deg) translateY(-2rem);
            opacity: 1;
          }
          25% {
            opacity: 0.8;
          }
          50% {
            transform: translateX(-50%) rotate(180deg) translateY(-2rem);
            opacity: 1;
          }
          75% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(-50%) rotate(360deg) translateY(-2rem);
            opacity: 1;
          }
        }

        .animate-orbit {
          animation: orbit 8s ease-in-out infinite;
        }

        .animate-spin-orbit {
          animation: spin-orbit 3s linear infinite;
        }

        /* Add pulsing glow effect */
        @keyframes pulse-glow {
          0%, 100% {
            filter: drop-shadow(0 0 5px currentColor);
          }
          50% {
            filter: drop-shadow(0 0 20px currentColor) drop-shadow(0 0 30px currentColor);
          }
        }

        .animate-orbit::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          background: conic-gradient(from 0deg, transparent, currentColor, transparent);
          animation: pulse-glow 4s ease-in-out infinite;
        }
      `}</style>

      <Footer />
    </>
  );
}