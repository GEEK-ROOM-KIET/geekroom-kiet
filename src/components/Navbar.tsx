// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { Menu, X } from "lucide-react";
// import { cn } from "@/lib/utils";

// const navLinks = [
//   { href: "/", label: "Home" },
//   { href: "/events", label: "Events" },
//   { href: "/projects", label: "Projects" },
//   // { href: "/gallery", label: "Gallery" }, 
//   { href: "/team", label: "Team" },
// ];

// export default function Navbar() {
//   const pathname = usePathname();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm">
//       <nav className="container mx-auto py-4 px-4 md:px-6">
//         <div className="flex items-center justify-between">
//           <div className="flex-shrink-0">
//             <Link href="/">
//               <Image
//                 src="logo.png"
//                 alt="Geek Room Plaksha"
//                 width={120}
//                 height={40}
//                 className="h-10 w-auto"
//               />
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:block">
//             <ul className="flex space-x-8">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className="no-underline"
//                 >
//                   <li className={cn(
//                     "transition-all duration-300 ease-in-out",
//                     pathname === link.href ? "border-b-2 border-primary" : "hover:border-b-2 hover:border-primary"
//                   )}>
//                     <div className="text-sm font-medium py-2">
//                       {link.label}
//                     </div>
//                   </li>
//                 </Link>
//               ))}
//             </ul>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               className="p-2 text-muted-foreground hover:text-foreground"
//               onClick={toggleMenu}
//               aria-label="Toggle menu"
//             >
//               {mobileMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden pt-4 pb-2">
//             <ul className="flex flex-col space-y-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className="no-underline"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   <li className={cn(
//                     "transition-all duration-300 ease-in-out py-2 px-4 rounded-md",
//                     pathname === link.href
//                       ? "bg-primary/10 text-primary"
//                       : "hover:bg-muted/50"
//                   )}>
//                     <div className="font-medium">
//                       {link.label}
//                     </div>
//                   </li>
//                 </Link>
//               ))}
//             </ul>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }






















"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/projects", label: "Projects" },
  // { href: "/gallery", label: "Gallery" },
  { href: "/team", label: "Team" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    setIsMobile(mediaQuery.matches);
    
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };
    
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [mobileMenuOpen]);

  const handleToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Main Navbar Container */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-center items-center">
        <nav className="w-[90%] h-full mx-5 my-4 bg-black-900/90 backdrop-blur-[50px] rounded-2xl shadow-lg border border-gray-700/30">
          <div className="w-full h-24 lg:h-20 flex items-center">
            {/* Left Container - Logo */}
            <div className="w-[400px] h-full flex justify-start items-center px-4">
              <Link href="/" className="w-full max-w-[300px] h-auto">
                <div className="w-full max-w-[90px] h-auto cursor-pointer">
                  <Image
                    src="/logo.png"
                    alt="Geekroom Logo"
                    width={500}
                    height={60}
                    priority={true}
                    className="w-full h-auto"
                  />
                </div>
              </Link>
            </div>

            {/* Right Container - Navigation */}
            <div className="flex-[70%] flex justify-end items-center">
              <div className="flex flex-[70%] justify-end mr-4 items-center">
                {isMobile ? (
                  mobileMenuOpen ? (
                    <X
                      className="text-gray-300 cursor-pointer text-[1.8rem] w-7 h-7"
                      onClick={handleToggle}
                    />
                  ) : (
                    <Menu
                      className="text-gray-300 cursor-pointer text-[1.8rem] w-7 h-7"
                      onClick={handleToggle}
                    />
                  )
                ) : (
                  <ul className="flex m-0 p-0 list-none">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="no-underline"
                      >
                        <li
                          className={cn(
                            "overflow-hidden relative mx-3 xl:mx-1 text-decoration-none group",
                            "after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[3px] after:bg-[#f15b22] after:transition-all after:duration-200",
                            pathname === link.href
                              ? "after:scale-x-100"
                              : "after:scale-x-0 hover:after:scale-x-100"
                          )}
                        >
                          <span
                            className={cn(
                              "text-sm font-medium text-gray-300 mx-4 opacity-70 uppercase transition-all duration-200 hover:opacity-100 hover:text-[#f15b22]",
                              pathname === link.href && "text-[#f15b22] opacity-100"
                            )}
                          >
                            {link.label}
                          </span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && isMobile && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center px-12 sm:px-6 py-8 bg-gray-900 z-20 transition-all duration-200 ease-out">
          {/* Top Container */}
          <div className="w-full h-[50px] flex justify-between items-center gap-4">
            <div className="w-[300px] sm:w-[200px] flex justify-start items-center">
              <div className="w-full max-w-[300px] h-auto">
                <Image
                  src="/logo.png"
                  alt="Geekroom Logo"
                  width={500}
                  height={60}
                  priority={true}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="pl-15">
              <X
                className="text-gray-300 cursor-pointer text-[1.8rem] w-7 h-7"
                onClick={handleToggle}
              />
            </div>
          </div>

          {/* Bottom Container - Menu Links */}
          <div className="w-full flex flex-col justify-center items-start px-2 py-8 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "w-full text-decoration-none border-b border-gray-700 pb-2 transition-colors duration-200",
                  pathname === link.href && "text-[#f15b22]"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span
                  className={cn(
                    "text-lg font-medium text-gray-300 transition-colors duration-200",
                    pathname === link.href && "text-[#f15b22]"
                  )}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
