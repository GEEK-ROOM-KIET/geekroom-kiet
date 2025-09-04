'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ContactForm } from './ContactForm';
import { useIntersectionObserver } from '@/hooks';

export function ContactSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 transition-all duration-1000 ${
        entry?.isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        marginBottom: "50px"
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side content */}
          <div className="w-full md:w-1/3 space-y-6 order-1">
            {!isClient || !isMobile ? (
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                HAVE A QUESTION?
              </h1>
            ) : (
              <h1 className="text-3xl font-bold text-white text-center">
                HAVE A QUESTION?
              </h1>
            )}
            <p className="text-lg text-gray-300 leading-relaxed">
              Send us your query and our team will get back to you as soon as
              possible!!
            </p>
          </div>

          {/* Middle Image */}
          <div className="w-1 md:w-1/4 order-2 flex justify-center">
            <div className="relative w-24 h-24 md:w-20 md:h-20">
              <Image
                src="/emailc.png"
                alt="Contact Us"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>

          {/* Right side form */}
          <div className="w-full md:w-2/5 order-3">
            <div
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-700/30"
              style={{
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 30px rgba(255, 255, 255, 0.05)',
              }}
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
