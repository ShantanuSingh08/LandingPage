"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("Screen width:", window.innerWidth);
  }, []);
  
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navbarStyle = {
    background: isScrolled ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.95)",
    boxShadow: isScrolled ? "0 2px 20px rgba(0, 0, 0, 0.1)" : "none",
    transition: "background 0.3s ease, box-shadow 0.3s ease",
  };

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
   <nav
  className="fixed top-0 left-0 right-0 z-[1000] backdrop-blur-[20px] border-b border-gray-200 w-screen"
  style={navbarStyle as React.CSSProperties}
>
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between py-4">
      <div>
        <h1 className="text-2xl font-bold text-indigo-700 m-0">ADmyBRAND AI Suite</h1>
      </div>

      {/* DESKTOP: visible ≥md */}
      <div className="nav__menu space-x-8 items-center">
      <Link href="#features" className="text-gray-800 font-medium transition-colors duration-150 hover:text-indigo-700">Features</Link>
        <Link href="#pricing" className="text-gray-800 font-medium transition-colors duration-150 hover:text-indigo-700">Pricing</Link>
        <Link href="#testimonials" className="text-gray-800 font-medium transition-colors duration-150 hover:text-indigo-700">Testimonials</Link>
        <Link href="#faq" className="text-gray-800 font-medium transition-colors duration-150 hover:text-indigo-700">FAQ</Link>
        <button className="btn btn-primary btn-sm text-white bg-[#1a6873]">Start Free Trial</button>
      </div>

      <button
        className="flex-col sm:flex md:hidden justify-center space-y-1.5 p-2 bg-transparent border-none cursor-pointer"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={toggleMenu}
        type="button"
      >
        <span className="block w-5 h-[2px] bg-gray-800" />
        <span className="block w-5 h-[2px] bg-gray-800" />
        <span className="block w-5 h-[2px] bg-gray-800" />
      </button>
    </div>
  </div>

  {/* MobileMenu presents overlay when open */}
  <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
</nav>

  );
}
