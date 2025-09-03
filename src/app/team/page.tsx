'use client'; // Required for client-side interactivity

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Linkedin } from "lucide-react";

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Rehan Ahmad",
    role: "President",
    image: "/rehan.png",
    bio: "Leading the tech team and driving innovation across all projects.",
    linkedin: "https://www.linkedin.com/in/rehan-ahmad-2712r/",
  },
  {
    id: 2,
    name: "Diksha Jha",
    role: "Event Lead",
    image: "/diksha.png",
    bio: "Organizing and managing all community events and workshops.",
    linkedin: "https://www.linkedin.com/in/diksha-jha-8368a0295/",
  },
  {
    id: 3,
    name: "Sarthak Gupta",
    role: "Vice President",
    image: "/sarthak.png",
    bio: "Leading the community and communication.",
    linkedin: "https://www.linkedin.com/in/sarthak-stranger/",
  },
  {
    id: 4,
    name: "Vinayak Rastogi",
    role: "Technical Head",
    image: "/vinayak.png",
    bio: "Creating and managing all tech support for geekroom",
    linkedin: "https://www.linkedin.com/in/vinayakrastogi3010/",
  },
  {
    id: 5,
    name: "Arpit Goswami",
    role: "Design Team",
    image: "/arpit.png",
    bio: "Creating visual identity and promotional materials for all events.",
    linkedin: "https://www.linkedin.com/in/arpit-goswami03/",
  },
  {
    id: 6,
    name: "Shalu Singh",
    role: "Marketing Lead",
    image: "/shalu.png",
    bio: "Coordinating marketing research methodologies.",
    linkedin: "https://www.linkedin.com/in/shalu-singh-26b32027b/",
  },
  {
    id: 7,
    name: "Sunny kanojiya",
    role: "Content Creator",
    image: "/sunny.png",
    bio: "Making content that attracts mass.",
    linkedin: "https://www.linkedin.com/in/sunny-kanojiya-248897236/",
  },
  {
    id: 8,
    name: "Raj Singh",
    role: "Treasurer",
    image: "/raj.png",
    bio: "Making content that attracts mass.",
    linkedin: "https://www.linkedin.com/in/raj-singh-5222a5295/",
  },
  {
    id: 9,
    name: "Devansh Agrahari",
    role: "Sponsorship Head",
    image: "/devansh.png",
    bio: "Making content that attracts mass.",
    linkedin: "https://www.linkedin.com/in/devansh-agrahari-15874229b/",
  },
  {
    id: 10,
    name: "Yash Yadav",
    role: "Secretary",
    image: "/yash.png",
    bio: "Managing community and roles distribution.",
    linkedin: "https://www.linkedin.com/in/yash-yadav23/",
  }
];

export default function TeamPage() {
  return (
    <>
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Our Team
          </h1>

          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Meet the dedicated individuals who drive Geek Room Plaksha forward, bringing their expertise
            and passion to create a vibrant tech community at Plaksha University.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card
                key={member.id}
                className="bg-background/30 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Clickable Avatar with Rotating Animation */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mb-4 group"
                  >
                    <div className="absolute inset-0 rounded-full border-2 border-orange-400/30 group-hover:border-orange-400/50 transition-all duration-300 animate-orbit">
                      <div className="absolute w-3 h-3 bg-orange-400 rounded-full -top-1 left-1/2 transform -translate-x-1/2 animate-spin-orbit"></div>
                    </div>
                    <Avatar className="h-24 w-24 border-2 border-orange-400/20 group-hover:border-orange-400/40 transition-all duration-300">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </a>

                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-orange-400 text-sm font-medium mb-4">{member.role}</p>

                  <p className="text-muted-foreground text-sm mb-6">
                    {member.bio}
                  </p>

                  <div className="flex space-x-4 mt-auto">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-orange-400 transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Orbiting ring animation */
        @keyframes orbit {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Spinning dot animation */
        @keyframes spin-orbit {
          0% {
            transform: translateX(-50%) rotate(0deg) translateY(-1.5rem);
          }
          100% {
            transform: translateX(-50%) rotate(360deg) translateY(-1.5rem);
          }
        }

        .animate-orbit {
          animation: orbit 6s linear infinite;
        }

        .animate-spin-orbit {
          animation: spin-orbit 2s linear infinite;
        }
      `}</style>

      <Footer />
    </>
  );
}