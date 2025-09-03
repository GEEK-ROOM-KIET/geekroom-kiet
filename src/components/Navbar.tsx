"use client";

import { useState } from "react";
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

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto py-4 px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="logo.png"
                alt="Geek Room Plaksha"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="no-underline"
                >
                  <li className={cn(
                    "transition-all duration-300 ease-in-out",
                    pathname === link.href ? "border-b-2 border-primary" : "hover:border-b-2 hover:border-primary"
                  )}>
                    <div className="text-sm font-medium py-2">
                      {link.label}
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="p-2 text-muted-foreground hover:text-foreground"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="no-underline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <li className={cn(
                    "transition-all duration-300 ease-in-out py-2 px-4 rounded-md",
                    pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted/50"
                  )}>
                    <div className="font-medium">
                      {link.label}
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
