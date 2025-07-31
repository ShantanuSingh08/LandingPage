"use client";
import { Linkedin, Twitter, Facebook, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer bg-gray-900 text-gray-200 pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="footer__content grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 mb-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-white mb-4">ADmyBRAND AI Suite</h3>
            <p className="text-gray-400 mb-6">
              AI-powered marketing automation platform that helps businesses grow with intelligent campaigns and predictive analytics.
            </p>
            <div className="footer__social flex gap-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="footer__social-link flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-200 transition-colors duration-150 hover:bg-indigo-600 hover:text-white"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="footer__social-link flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-200 transition-colors duration-150 hover:bg-indigo-600 hover:text-white"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="footer__social-link flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-200 transition-colors duration-150 hover:bg-indigo-600 hover:text-white"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="footer__social-link flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-200 transition-colors duration-150 hover:bg-indigo-600 hover:text-white"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer__links grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div className="footer__column min-w-[120px]">
              <h4 className="mb-4 text-lg text-gray-200">Product</h4>
              <ul>
                <li className="mb-2">
                  <a href="#features" className="text-gray-400 hover:text-indigo-600 transition-colors duration-150">
                    Features
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#pricing" className="text-gray-400 hover:text-indigo-600 transition-colors duration-150">
                    Pricing
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-150">
                    Integrations
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-150">
                    API
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="footer__column min-w-[120px]">
              <h4 className="mb-4 text-lg text-gray-200">Company</h4>
              <ul>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-150">
                    About
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-150">
                    Careers
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-150">
                    Press
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#contact" className="text-gray-400 hover:text-indigo-600 transition-colors duration-150">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="footer__column min-w-[120px]">
              <h4 className="mb-4 text-lg text-gray-200">Resources</h4>
              <ul>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-150">
                    Blog
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-150">
                    Help Center
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-150">
                    Community
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-150">
                    Webinars
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="footer__column min-w-[120px]">
              <h4 className="mb-4 text-lg text-gray-200">Legal</h4>
              <ul>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-150">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-150">
                    Terms of Service
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-150">
                    Security
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-150">
                    GDPR
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>© 2025 ADmyBRAND AI Suite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
