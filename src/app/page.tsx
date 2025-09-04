// 'use client'; // Required for GSAP animations (Client Component)

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Code, LayoutDashboard, Bug, Calendar, BookOpen, Paintbrush, ExternalLink } from "lucide-react";

// // Featured gallery images
// const featuredGalleryImages = [
//   {
//     id: "featured-1",
//     src: "/1.jpg",
//     alt: "Git Workshop",
//     title: ""
//   },
//   {
//     id: "featured-2",
//     src: "/2.jpg",
//     alt: "Code Clash",
//     title: ""
//   },
//   {
//     id: "featured-3",
//     src: "3.jpg",
//     alt: "Hack Summit",
//     title: ""
//   },
//   {
//     id: "featured-4", 
//     src: "/4.jpg",
//     alt: "TensorFlow Workshop",
//     title: ""
//   }
// ];

// export default function Home() {
//   // GSAP animation refs
//   const splashRef = useRef<HTMLDivElement>(null);
//   const splashLogoRef = useRef<HTMLDivElement>(null);
//   const splashTextRef = useRef<HTMLHeadingElement>(null);
//   const heroRef = useRef<HTMLDivElement>(null);
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const textRefs = useRef<HTMLParagraphElement[]>([]);
//   const buttonRef = useRef<HTMLAnchorElement>(null);

//   // GSAP animation logic
//   useEffect(() => {
//     // Squid Game inspired splash screen animation
//     const splashTl = gsap.timeline({
//       onComplete: () => {
//         if (splashRef.current) {
//           gsap.to(splashRef.current, {
//             y: "-100%",
//             duration: 0.8,
//             ease: "power3.inOut",
//             onComplete: () => {
//               if (splashRef.current) {
//                 splashRef.current.style.display = "none";
//               }
//             }
//           });
//         }
//       },
//     });

//     // Animate the shapes
//     if (splashLogoRef.current) {
//       const shapes = splashLogoRef.current.querySelectorAll(".shape");
//       shapes.forEach((shape, index) => {
//         gsap.fromTo(
//           shape,
//           { 
//             scale: 0, 
//             opacity: 0 
//           },
//           { 
//             scale: 1, 
//             opacity: 1, 
//             duration: 0.6, 
//             delay: index * 0.15, 
//             ease: "back.out(1.7)" 
//           }
//         );
//       });
//     }

//     splashTl
//       .fromTo(
//         splashTextRef.current,
//         { opacity: 0, y: 30 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           delay: 0.8,
//           ease: "power3.out",
//         }
//       )
//       .to(
//         splashTextRef.current,
//         {
//           duration: 2.5,
//         }
//       );

//     // Hero section animations
//     const heroTl = gsap.timeline({ 
//       defaults: { ease: "power3.out" },
//       delay: 3.5 // Wait for splash screen to complete
//     });

//     heroTl
//       .fromTo(
//         heroRef.current,
//         { opacity: 0, y: 50 },
//         { opacity: 1, y: 0, duration: 1.2 }
//       )
//       .fromTo(
//         titleRef.current,
//         { opacity: 0, y: 30 },
//         { opacity: 1, y: 0, duration: 0.8 },
//         "-=0.8"
//       )
//       .fromTo(
//         textRefs.current,
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 0.6, stagger: 0.2 },
//         "-=0.5"
//       )
//       .fromTo(
//         buttonRef.current,
//         { opacity: 0, scale: 0.8 },
//         { opacity: 1, scale: 1, duration: 0.5 },
//         "-=0.3"
//       );
//   }, []);

//   // Collect paragraph refs
//   const addToTextRefs = (el: HTMLParagraphElement | null) => {
//     if (el && !textRefs.current.includes(el)) {
//       textRefs.current.push(el);
//     }
//   };

//   return (
//     <>
//       {/* Squid Game Inspired Dark Theme Splash Screen */}
//       <div
//         ref={splashRef}
//         className="fixed inset-0 z-50 flex items-center justify-center"
//         style={{
//           backgroundImage: "linear-gradient(to bottom, #0A0A0A, #121212)",
//         }}
//       >
//         <div className="text-center">
//           {/* Squid Game inspired geometric shapes */}
//           <div 
//             ref={splashLogoRef}
//             className="relative w-64 h-64 mb-8 mx-auto"
//           >
//             {/* Triangle */}
//             <div 
//               className="shape absolute top-0 left-1/2 transform -translate-x-1/2 w-52 h-52"
//               style={{ 
//                 clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
//                 backgroundColor: "#FF2D55", // Brighter pink from Squid Game
//                 boxShadow: "0 0 30px rgba(255, 45, 85, 0.5)",
//               }}
//             ></div>
            
//             {/* Circle */}
//             <div 
//               className="shape absolute top-8 left-1/2 transform -translate-x-1/2 w-40 h-40 rounded-full"
//               style={{ 
//                 backgroundColor: "#00C8B5", // Brighter cyan from Squid Game
//                 boxShadow: "0 0 30px rgba(0, 200, 181, 0.5)", 
//               }}
//             ></div>
            
//             {/* Square */}
//             <div 
//               className="shape absolute top-12 left-1/2 transform -translate-x-1/2 w-32 h-32"
//               style={{ 
//                 backgroundColor: "#786EFF", // Brighter purple
//                 boxShadow: "0 0 30px rgba(120, 110, 255, 0.5)", 
//               }}
//             ></div>
//           </div>
          
//           <h1
//             ref={splashTextRef}
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
//             style={{
//               textShadow: "0 0 15px rgba(255, 255, 255, 0.6)",
//             }}
//           >
//             Geek Room <span className="text-[#FF2D55]">KIET</span>
//           </h1>
//         </div>
//       </div>

//       <Navbar />

//       {/* Hero Section with GSAP Animations */}
//       <section
//         ref={heroRef}
//         className="relative pt-24 pb-16 md:pt-32 md:pb-24 text-center bg-gradient-to-b from-gray-900 to-black min-h-screen flex items-center justify-center"
//       >
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-gray-700/50">
//             <div className="space-y-8">
//               <h1
//                 ref={titleRef}
//                 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D55] to-[#786EFF]"
//               >
//                 Why Join Us?
//               </h1>
//               <div className="space-y-6 text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
//                 <p ref={addToTextRefs}>
//                   <span className="font-semibold text-[#00C8B5]">
//                     Geek Room KIET
//                   </span>{" "}
//                   is a vibrant community dedicated to leveling up your coding
//                   skills. Join us to collaborate on exciting projects and grow
//                   together! As an official chapter of Geek Room, we're passionate
//                   about fostering a dynamic tech culture among students eager to
//                   dive into interdisciplinary learning.
//                 </p>
//                 <p ref={addToTextRefs}>
//                   We empower students to sharpen their technical expertise, explore
//                   cutting-edge technologies, and build innovative projects. From
//                   hands-on workshops to coding sessions and collaborative teams,
//                   Geek Room KIET offers a supportive space to connect, learn, and
//                   leave a lasting impact.
//                 </p>
//               </div>
//               <div className="pt-4">
//                 <Link ref={buttonRef} href="/join-us">
//                   <Button className="relative bg-gradient-to-r from-[#FF2D55] to-[#786EFF] hover:from-[#FF1A47] hover:to-[#5A4DFF] text-white rounded-xl px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold transition-all duration-300 shadow-md hover:shadow-2xl transform hover:-translate-y-1">
//                     <span className="mr-2">🚀</span> Join Us
//                     <span className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-12 md:py-16 bg-black">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 max-w-4xl mx-auto">
//             <div className="border border-[#00C8B5]/30 rounded-xl p-6 text-center card-hover bg-gray-900/70">
//               <h2 className="text-4xl font-bold text-[#00C8B5] mb-2">16+</h2>
//               <p className="text-gray-300">Active Members</p>
//             </div>
//             <div className="border border-[#FF2D55]/30 rounded-xl p-6 text-center card-hover bg-gray-900/70">
//               <h2 className="text-4xl font-bold text-[#FF2D55] mb-2">4+</h2>
//               <p className="text-gray-300">Events Held</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Gallery Preview Section */}
//       <section className="py-16 md:py-24 bg-gray-900">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4 text-white">Event Gallery</h2>
//             <p className="max-w-3xl mx-auto text-gray-300">
//               Take a look at some of our past events and activities. Visit our full gallery
//               to see more of what we do at Geek Room Plaksha.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
//             {featuredGalleryImages.map((image) => (
//               <div
//                 key={image.id}
//                 className="group relative aspect-video overflow-hidden rounded-lg border border-gray-700"
//               >
//                 <Image
//                   src={image.src}
//                   alt={image.alt}
//                   fill
//                   className="object-cover transition-transform duration-300 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
//                   <h3 className="text-white font-medium text-sm">{image.title}</h3>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center">
//             <Link href="/gallery">
//               {/* <Button variant="outline" className="group">
//                 View Full Gallery
//                 <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </Button> */}
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Team Structure Section */}
//       <section className="py-16 md:py-24 bg-black">
//         <div className="container mx-auto px-4 md:px-6">
//           <h2 className="text-3xl font-bold text-center mb-16 text-white">
//             Our Team Structure
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <Card className="bg-gray-900 border-none shadow-lg p-6 text-center card-hover">
//               <div className="mx-auto w-16 h-16 bg-[#00C8B5]/20 rounded-full flex items-center justify-center mb-4">
//                 <Code className="text-[#00C8B5] h-8 w-8" />
//               </div>
//               <h3 className="text-xl font-semibold uppercase mb-3 text-white">Tech</h3>
//               <p className="text-sm text-gray-300">
//                 Our Tech team is divided into DSA, Development, AI-ML, and Emerging Tech subdivisions,
//                 each focusing on innovative projects that benefit the community and advance technical skills.
//               </p>
//             </Card>

//             <Card className="bg-gray-900 border-none shadow-lg p-6 text-center card-hover">
//               <div className="mx-auto w-16 h-16 bg-[#FF2D55]/20 rounded-full flex items-center justify-center mb-4">
//                 <Calendar className="text-[#FF2D55] h-8 w-8" />
//               </div>
//               <h3 className="text-xl font-semibold uppercase mb-3 text-white">Events</h3>
//               <p className="text-sm text-gray-300">
//                 Open to all members, events are driven by the collective efforts of interested members from all the teams.
//                 The Events team organizes workshops, competitions, etc to foster a culture of learning and collaboration.
//               </p>
//             </Card>

//             <Card className="bg-gray-900 border-none shadow-lg p-6 text-center card-hover">
//               <div className="mx-auto w-16 h-16 bg-[#786EFF]/20 rounded-full flex items-center justify-center mb-4">
//                 <Bug className="text-[#786EFF] h-8 w-8" />
//               </div>
//               <h3 className="text-xl font-semibold uppercase mb-3 text-white">Robotics</h3>
//               <p className="text-sm text-gray-300">
//                 The Robotics team empowers members to design, build, and program robots through engaging projects and interactive workshops.
//               </p>
//             </Card>

//             <Card className="bg-gray-900 border-none shadow-lg p-6 text-center card-hover">
//               <div className="mx-auto w-16 h-16 bg-[#00C8B5]/20 rounded-full flex items-center justify-center mb-4">
//                 <LayoutDashboard className="text-[#00C8B5] h-8 w-8" />
//               </div>
//               <h3 className="text-xl font-semibold uppercase mb-3 text-white">Content</h3>
//               <p className="text-sm text-gray-300">
//                 The Content team produces engaging blogs, newsletters, and video content that keeps our community informed and inspired,
//                 sharing insights on the latest trends and developments.
//               </p>
//             </Card>

//             <Card className="bg-gray-900 border-none shadow-lg p-6 text-center card-hover">
//               <div className="mx-auto w-16 h-16 bg-[#FF2D55]/20 rounded-full flex items-center justify-center mb-4">
//                 <Paintbrush className="text-[#FF2D55] h-8 w-8" />
//               </div>
//               <h3 className="text-xl font-semibold uppercase mb-3 text-white">Marketing and Design</h3>
//               <p className="text-sm text-gray-300">
//                 The Marketing & Design team creates visually compelling campaigns, promotes our initiatives,
//                 and ensures our message resonates with a wide audience.
//               </p>
//             </Card>

//             <Card className="bg-gray-900 border-none shadow-lg p-6 text-center card-hover">
//               <div className="mx-auto w-16 h-16 bg-[#786EFF]/20 rounded-full flex items-center justify-center mb-4">
//                 <BookOpen className="text-[#786EFF] h-8 w-8" />
//               </div>
//               <h3 className="text-xl font-semibold uppercase mb-3 text-white">Research</h3>
//               <p className="text-sm text-gray-300">
//                 The Research team promotes a strong research culture at Plaksha, offering a space for
//                 students to learn research methodologies and conduct meaningful studies.
//               </p>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-16 md:py-24 bg-gray-900">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold mb-8 text-white">
//                 Have a Question?
//               </h2>
//               <p className="text-gray-300 mb-8">
//                 Mail us your query on gmails or insta and our team will get back to you as soon as possible!
//               </p>
//             </div>

           
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }




















'use client'; // Required for GSAP animations (Client Component)

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";
import GalleryCarousel from "@/components/Gallery/GalleryCarousel";
import WhyJoinUsSection from "@/components/WhyJoinUsSection";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, LayoutDashboard, Bug, Calendar, BookOpen, Paintbrush, ExternalLink } from "lucide-react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {

  const splashRef = useRef<HTMLDivElement>(null);
  const splashLogoRef = useRef<HTMLDivElement>(null);
  const splashTextRef = useRef<HTMLHeadingElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRefs = useRef<HTMLParagraphElement[]>([]);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  // GSAP animation refs for team cards only
  const teamCardsRef = useRef<HTMLDivElement[]>([]);

  // Add team card refs
  const addToTeamCardRefs = (el: HTMLDivElement | null) => {
    if (el && !teamCardsRef.current.includes(el)) {
      teamCardsRef.current.push(el);
    }
  };

  // Main GSAP animations useEffect
  useEffect(() => {
    // Squid Game inspired splash screen animation
    const splashTl = gsap.timeline({
      onComplete: () => {
        if (splashRef.current) {
          gsap.to(splashRef.current, {
            y: "-100%",
            duration: 0.8,
            ease: "power3.inOut",
            onComplete: () => {
              if (splashRef.current) {
                splashRef.current.style.display = "none";
              }
            }
          });
        }
      },
    });

    // Animate the shapes
    if (splashLogoRef.current) {
      const shapes = splashLogoRef.current.querySelectorAll(".shape");
      shapes.forEach((shape, index) => {
        gsap.fromTo(
          shape,
          { 
            scale: 0, 
            opacity: 0 
          },
          { 
            scale: 1, 
            opacity: 1, 
            duration: 0.6, 
            delay: index * 0.15, 
            ease: "back.out(1.7)" 
          }
        );
      });
    }

    splashTl
      .fromTo(
        splashTextRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.8,
          ease: "power3.out",
        }
      )
      .to(
        splashTextRef.current,
        {
          duration: 2.5,
        }
      );

    // Hero section animations
    const heroTl = gsap.timeline({ 
      defaults: { ease: "power3.out" },
      delay: 3.5 // Wait for splash screen to complete
    });

    heroTl
      .fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2 }
      )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.8"
      )
      .fromTo(
        textRefs.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.2 },
        "-=0.5"
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5 },
        "-=0.3"
      );
  }, []);

  // Team cards animation useEffect
  useEffect(() => {
    // Team cards animation with scroll trigger
    const teamCards = teamCardsRef.current;
    if (teamCards.length > 0) {
      // Define delay values matching your styled components version
      const delays = [0, 800, 600, 200, 400, 800]; // in milliseconds
      
      teamCards.forEach((card, index) => {
        const logo = card.querySelector('.team-logo');
        const icon = card.querySelector('.team-icon');
        const content = card.querySelector('.team-content');
        
        // Set initial states
        gsap.set(card, { opacity: 0, y: 60, scale: 0.8 });
        gsap.set(logo, { scale: 0, rotation: -180 });
        gsap.set(content, { opacity: 0, y: 30 });

        // Create timeline for this card
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });

        // Card entrance animation with custom delay
        tl.to(card, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.4)",
          delay: delays[index] / 1000 // Convert to seconds
        })
        // Logo animation with jelly effect
        .to(logo, {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)"
        }, `-=0.5`)
        // Icon jelly wriggle animation
        .to(icon, {
          scale: 1.3,
          rotation: 15,
          duration: 0.3,
          ease: "power2.out"
        }, `-=0.3`)
        .to(icon, {
          scale: 0.9,
          rotation: -8,
          duration: 0.2,
          ease: "power2.inOut"
        })
        .to(icon, {
          scale: 1.1,
          rotation: 5,
          duration: 0.15,
          ease: "power2.inOut"
        })
        .to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.1,
          ease: "power2.out"
        })
        // Content fade in
        .to(content, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        }, `-=0.8`);

        // Continuous jelly animation for icons
        if (icon) {
          gsap.to(icon, {
            rotation: "+=2",
            duration: 2,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1
          });
          
          gsap.to(icon, {
            scale: 1.05,
            duration: 3,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: 0.5
          });
        }

        // Enhanced hover animations with jelly effect
        if (logo && content && icon) {
          card.addEventListener('mouseenter', () => {
            gsap.to(logo, { 
              scale: 1.15, 
              rotation: 8,
              duration: 0.4, 
              ease: "back.out(1.5)" 
            });
            gsap.to(icon, { 
              scale: 1.2, 
              rotation: 15,
              duration: 0.3, 
              ease: "elastic.out(1, 0.8)" 
            });
            gsap.to(card, { 
              y: -12, 
              scale: 1.09,
              duration: 0.4, 
              ease: "power2.out" 
            });
          });
          
          card.addEventListener('mouseleave', () => {
            gsap.to(logo, { 
              scale: 1, 
              rotation: 0,
              duration: 0.4, 
              ease: "elastic.out(1, 0.6)" 
            });
            gsap.to(icon, { 
              scale: 1, 
              rotation: 0,
              duration: 0.4, 
              ease: "elastic.out(1, 0.8)" 
            });
            gsap.to(card, { 
              y: 0, 
              scale: 1,
              duration: 0.4, 
              ease: "power2.out" 
            });
          });
        }
      });
    }
  }, []);

  // Collect paragraph refs
  const addToTextRefs = (el: HTMLParagraphElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <>

      {/* Squid Game Inspired Dark Theme Splash Screen */}
      <div
        ref={splashRef}
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(to bottom, #0A0A0A, #121212)",
        }}
      >
        <div className="text-center">
          {/* Squid Game inspired geometric shapes */}
          <div 
            ref={splashLogoRef}
            className="relative w-64 h-64 mb-8 mx-auto"
          >
            {/* Triangle */}
            <div 
              className="shape absolute top-0 left-1/2 transform -translate-x-1/2 w-52 h-52"
              style={{ 
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                backgroundColor: "#FF2D55", // Brighter pink from Squid Game
                boxShadow: "0 0 30px rgba(255, 45, 85, 0.5)",
              }}
            ></div>
            
            {/* Circle */}
            <div 
              className="shape absolute top-8 left-1/2 transform -translate-x-1/2 w-40 h-40 rounded-full"
              style={{ 
                backgroundColor: "#00C8B5", // Brighter cyan from Squid Game
                boxShadow: "0 0 30px rgba(0, 200, 181, 0.5)", 
              }}
            ></div>
            
            {/* Square */}
            <div 
              className="shape absolute top-12 left-1/2 transform -translate-x-1/2 w-32 h-32"
              style={{ 
                backgroundColor: "#786EFF", // Brighter purple
                boxShadow: "0 0 30px rgba(120, 110, 255, 0.5)", 
              }}
            ></div>
          </div>
          
          <h1
            ref={splashTextRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
            style={{
              textShadow: "0 0 15px rgba(255, 255, 255, 0.6)",
            }}
          >
            Geek Room <span className="text-[#FF2D55]">KIET</span>
          </h1>
        </div>
      </div>

      <Navbar />

      {/* Animated Why Join Us Section */}
      <WhyJoinUsSection />

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-40 max-w-7xl mx-auto">
            <div className="border border-[#00C8B5]/20 rounded-3xl p-16 md:p-24 text-center card-hover bg-gray-900/20 backdrop-blur-sm transform transition-all duration-500 hover:scale-110 hover:bg-gray-900/30">
              <h2 className="text-8xl md:text-9xl font-bold text-[#00C8B5] mb-6 drop-shadow-2xl">16+</h2>
              <p className="text-gray-300 text-xl md:text-2xl font-medium">Active Members</p>
            </div>
            <div className="border border-[#FF2D55]/20 rounded-3xl p-16 md:p-24 text-center card-hover bg-gray-900/20 backdrop-blur-sm transform transition-all duration-500 hover:scale-110 hover:bg-gray-900/30">
              <h2 className="text-8xl md:text-9xl font-bold text-[#FF2D55] mb-6 drop-shadow-2xl">4+</h2>
              <p className="text-gray-300 text-xl md:text-2xl font-medium">Events Held</p>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Gallery Carousel */}
      <GalleryCarousel />

      {/* Team Structure Section */}
      <section className="py-16 md:py-24 bg-black/80 backdrop-blur-sm overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">
            Our Team Structure
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tech Team Card */}
            <div
              ref={addToTeamCardRefs}
              className="group relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 text-center border border-gray-700/30 transition-all duration-300"
              style={{
                boxShadow: '0 20px 60px rgba(255, 138, 101, 0.15), 0 8px 30px rgba(0, 0, 0, 0.3)',
                transform: 'translateZ(0)', // Force hardware acceleration
              }}
            >
              <div 
                className="team-logo mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-8 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #FF5722, #FF8A65)',
                  boxShadow: '0 0 40px rgba(255, 138, 101, 0.4), inset 0 2px 10px rgba(255, 255, 255, 0.2)',
                  zIndex: 20,
                  position: 'relative'
                }}
              >
                <Code className="team-icon text-white h-12 w-12 relative" style={{ zIndex: 25 }} />
                <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent rounded-full"></div>
                <div 
                  className="absolute -inset-2 rounded-full opacity-75 blur-md"
                  style={{ background: 'radial-gradient(circle, rgba(255, 138, 101, 0.3) 0%, transparent 70%)' }}
                ></div>
              </div>
              <div className="team-content space-y-6 relative" style={{ zIndex: 20 }}>
                <h3 className="text-3xl font-bold uppercase text-white tracking-widest" style={{ opacity: 1 }}>Tech</h3>
                <p className="text-gray-300 leading-relaxed text-base" style={{ opacity: 1 }}>
                  Our Tech team is divided into DSA, Development, AI-ML, and Emerging Tech subdivisions,
                  each focusing on innovative projects that benefit the community and advance technical skills.
                </p>
              </div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FF5722]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ zIndex: 1 }}></div>
            </div>

            {/* Events Team Card */}
            <div
              ref={addToTeamCardRefs}
              className="group relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 text-center border border-gray-700/30 transition-all duration-300"
              style={{
                boxShadow: '0 20px 60px rgba(100, 216, 203, 0.15), 0 8px 30px rgba(0, 0, 0, 0.3)',
                transform: 'translateZ(0)', // Force hardware acceleration
              }}
            >
              <div 
                className="team-logo mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-8 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #0F9D58, #64D8CB)',
                  boxShadow: '0 0 40px rgba(100, 216, 203, 0.4), inset 0 2px 10px rgba(255, 255, 255, 0.2)',
                  zIndex: 20,
                  position: 'relative'
                }}
              >
                <Calendar className="team-icon text-white h-12 w-12 relative" style={{ zIndex: 25 }} />
                <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent rounded-full"></div>
                <div 
                  className="absolute -inset-2 rounded-full opacity-75 blur-md"
                  style={{ background: 'radial-gradient(circle, rgba(100, 216, 203, 0.3) 0%, transparent 70%)' }}
                ></div>
              </div>
              <div className="team-content space-y-6 relative" style={{ zIndex: 20 }}>
                <h3 className="text-3xl font-bold uppercase text-white tracking-widest" style={{ opacity: 1 }}>Events</h3>
                <p className="text-gray-300 leading-relaxed text-base" style={{ opacity: 1 }}>
                  Open to all members, events are driven by the collective efforts of interested members from all the teams.
                  The Events team organizes workshops, competitions, etc to foster a culture of learning and collaboration.
                </p>
              </div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0F9D58]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ zIndex: 1 }}></div>
            </div>

            {/* Robotics Team Card */}
            <div
              ref={addToTeamCardRefs}
              className="group relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 text-center border border-gray-700/30 transition-all duration-300"
              style={{
                boxShadow: '0 20px 60px rgba(255, 138, 101, 0.15), 0 8px 30px rgba(0, 0, 0, 0.3)',
                transform: 'translateZ(0)', // Force hardware acceleration
              }}
            >
              <div 
                className="team-logo mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-8 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #FF5722, #FF8A65)',
                  boxShadow: '0 0 40px rgba(255, 138, 101, 0.4), inset 0 2px 10px rgba(255, 255, 255, 0.2)',
                  zIndex: 20,
                  position: 'relative'
                }}
              >
                <Bug className="team-icon text-white h-12 w-12 relative" style={{ zIndex: 25 }} />
                <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent rounded-full"></div>
                <div 
                  className="absolute -inset-2 rounded-full opacity-75 blur-md"
                  style={{ background: 'radial-gradient(circle, rgba(255, 138, 101, 0.3) 0%, transparent 70%)' }}
                ></div>
              </div>
              <div className="team-content space-y-6 relative" style={{ zIndex: 20 }}>
                <h3 className="text-3xl font-bold uppercase text-white tracking-widest" style={{ opacity: 1 }}>Robotics</h3>
                <p className="text-gray-300 leading-relaxed text-base" style={{ opacity: 1 }}>
                  The Robotics team empowers members to design, build, and program robots through engaging projects and interactive workshops.
                </p>
              </div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FF5722]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ zIndex: 1 }}></div>
            </div>

            {/* Content Team Card */}
            <div
              ref={addToTeamCardRefs}
              className="group relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 text-center border border-gray-700/30 transition-all duration-300"
              style={{
                boxShadow: '0 20px 60px rgba(100, 216, 203, 0.15), 0 8px 30px rgba(0, 0, 0, 0.3)',
                transform: 'translateZ(0)', // Force hardware acceleration
              }}
            >
              <div 
                className="team-logo mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-8 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #0F9D58, #64D8CB)',
                  boxShadow: '0 0 40px rgba(100, 216, 203, 0.4), inset 0 2px 10px rgba(255, 255, 255, 0.2)',
                  zIndex: 20,
                  position: 'relative'
                }}
              >
                <LayoutDashboard className="team-icon text-white h-12 w-12 relative" style={{ zIndex: 25 }} />
                <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent rounded-full"></div>
                <div 
                  className="absolute -inset-2 rounded-full opacity-75 blur-md"
                  style={{ background: 'radial-gradient(circle, rgba(100, 216, 203, 0.3) 0%, transparent 70%)' }}
                ></div>
              </div>
              <div className="team-content space-y-6 relative" style={{ zIndex: 20 }}>
                <h3 className="text-3xl font-bold uppercase text-white tracking-widest" style={{ opacity: 1 }}>Content</h3>
                <p className="text-gray-300 leading-relaxed text-base" style={{ opacity: 1 }}>
                  The Content team produces engaging blogs, newsletters, and video content that keeps our community informed and inspired,
                  sharing insights on the latest trends and developments.
                </p>
              </div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0F9D58]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ zIndex: 1 }}></div>
            </div>

            {/* Marketing and Design Team Card */}
            <div
              ref={addToTeamCardRefs}
              className="group relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 text-center border border-gray-700/30 transition-all duration-300"
              style={{
                boxShadow: '0 20px 60px rgba(255, 138, 101, 0.15), 0 8px 30px rgba(0, 0, 0, 0.3)',
                transform: 'translateZ(0)', // Force hardware acceleration
              }}
            >
              <div 
                className="team-logo mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-8 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #FF5722, #FF8A65)',
                  boxShadow: '0 0 40px rgba(255, 138, 101, 0.4), inset 0 2px 10px rgba(255, 255, 255, 0.2)',
                  zIndex: 20,
                  position: 'relative'
                }}
              >
                <Paintbrush className="team-icon text-white h-12 w-12 relative" style={{ zIndex: 25 }} />
                <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent rounded-full"></div>
                <div 
                  className="absolute -inset-2 rounded-full opacity-75 blur-md"
                  style={{ background: 'radial-gradient(circle, rgba(255, 138, 101, 0.3) 0%, transparent 70%)' }}
                ></div>
              </div>
              <div className="team-content space-y-6 relative" style={{ zIndex: 20 }}>
                <h3 className="text-3xl font-bold uppercase text-white tracking-widest" style={{ opacity: 1 }}>Marketing and Design</h3>
                <p className="text-gray-300 leading-relaxed text-base" style={{ opacity: 1 }}>
                  The Marketing & Design team creates visually compelling campaigns,
                  promotes our initiatives, and ensures our message resonates with a wide audience.
                </p>
              </div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FF5722]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ zIndex: 1 }}></div>
            </div>

            {/* Research Team Card */}
            <div
              ref={addToTeamCardRefs}
              className="group relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 text-center border border-gray-700/30 transition-all duration-300"
              style={{
                boxShadow: '0 20px 60px rgba(100, 216, 203, 0.15), 0 8px 30px rgba(0, 0, 0, 0.3)',
                transform: 'translateZ(0)', // Force hardware acceleration
              }}
            >
              <div 
                className="team-logo mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-8 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #0F9D58, #64D8CB)',
                  boxShadow: '0 0 40px rgba(100, 216, 203, 0.4), inset 0 2px 10px rgba(255, 255, 255, 0.2)',
                  zIndex: 20,
                  position: 'relative'
                }}
              >
                <BookOpen className="team-icon text-white h-12 w-12 relative" style={{ zIndex: 25 }} />
                <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent rounded-full"></div>
                <div 
                  className="absolute -inset-2 rounded-full opacity-75 blur-md"
                  style={{ background: 'radial-gradient(circle, rgba(100, 216, 203, 0.3) 0%, transparent 70%)' }}
                ></div>
              </div>
              <div className="team-content space-y-6 relative" style={{ zIndex: 20 }}>
                <h3 className="text-3xl font-bold uppercase text-white tracking-widest" style={{ opacity: 1 }}>Research</h3>
                <p className="text-gray-300 leading-relaxed text-base" style={{ opacity: 1 }}>
                  The Research team promotes a strong research culture at KIET,
                  offering a space for students to learn research methodologies and conduct meaningful studies.
                </p>
              </div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0F9D58]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ zIndex: 1 }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <ContactSection />

      <Footer />
    </>
  );
}