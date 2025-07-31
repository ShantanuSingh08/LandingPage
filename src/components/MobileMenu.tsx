"use client";
import React from "react";
import Link from "next/link";

type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  // Lock body scroll when menu is open
  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null; // Render nothing if closed

  return (
    <div className="mobile-menu mobile-menu--open text-xl text-center py-10">
      <nav className="mobile-menu__nav">
        <ul>
          <li className="py-4">
            <Link href="#features" onClick={() => setIsOpen(false)}>
              Features
            </Link>
          </li>
          <li className="py-4">
            <Link href="#pricing" onClick={() => setIsOpen(false)}>
              Pricing
            </Link>
          </li>
          <li className="py-4">
            <Link href="#testimonials" onClick={() => setIsOpen(false)}>
              Testimonials
            </Link>
          </li>
          <li className="py-4">
            <Link href="#faq" onClick={() => setIsOpen(false)}>
              FAQs
            </Link>
          </li>
          <li className="py-4">
            <Link href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
