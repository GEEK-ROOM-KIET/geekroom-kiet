'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');

  // Check if mobile on component mount
  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      const errorData = await res.json();
      setResponseMessage(
        errorData.errors
          ? errorData.errors.map((err: any) => err.message).join(", ")
          : "Something went wrong"
      );
      return;
    }

    const data = await res.json();
    setResponseMessage(data.message || "Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => setResponseMessage(""), 5000);
  } catch (error) {
    setResponseMessage("Sorry, there was an error sending your message. Please try again.");
  }
};


  return (
  <div
      className="flex justify-center items-center py-16 md:py-24"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        marginBottom: "50px"
      }}
    >
      <div className="container mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side content */}
          <div className="w-full md:w-1/2 space-y-6 order-1 flex flex-col items-center">
            {/* Lottie Animation */}
            {isClient && (
              <div className="w-64 h-64 md:w-80 md:h-80">
                <Lottie
                  loop
                  path="https://lottie.host/fac86623-a350-45e0-a3b0-1eca0167786d/SmFAUCiEvD.json"
                  play
                  speed={0.5}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            )}
            <p className="text-lg text-gray-300 leading-relaxed text-center md:text-left px-4 md:px-0">
              Send us your query and our team will get back to you as soon as
              possible!!
            </p>
          </div>

          {/* Right side form */}
          <div className="w-full md:w-2/5 order-2">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-700/30"
              style={{
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 30px rgba(255, 255, 255, 0.05)',
              }}
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-[#00C8B5]/30 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00C8B5] focus:border-[#00C8B5] bg-transparent placeholder-gray-400 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-[#00C8B5]/30 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00C8B5] focus:border-[#00C8B5] bg-transparent placeholder-gray-400 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-4 border-2 border-[#00C8B5]/30 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00C8B5] focus:border-[#00C8B5] bg-transparent placeholder-gray-400 resize-none transition-all duration-300"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FF2D55] to-[#FF5722] text-white py-4 px-6 rounded-xl font-semibold hover:from-[#FF5722] hover:to-[#FF2D55] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                style={{
                  boxShadow: '0 8px 25px rgba(255, 45, 85, 0.3)',
                }}
              >
                Send Message
              </button>
              
              {responseMessage && (
                <div className="p-4 rounded-xl bg-green-500/20 border border-green-500/30">
                  <p className="text-green-300 text-center font-medium">{responseMessage}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}
