"use client";
import { useEffect, useRef } from "react";
import { X, PlayCircle } from "lucide-react";

type DemoModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Body scroll lock when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Close when clicking overlay
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="demoModalTitle"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md opacity-100 visible transition-opacity duration-300 ease-in-out"
    >
      <div className="relative bg-white rounded-lg p-8 max-w-lg w-[90%] transform scale-100 transition-transform duration-300 ease-in-out shadow-xl animate-fadeIn">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-600 hover:text-gray-900 transition"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h3 id="demoModalTitle" className="text-xl font-semibold text-gray-900">
            Watch Our Demo
          </h3>
        </div>

        {/* Body content */}
        <div className="text-center text-gray-600">
          <div className="bg-indigo-100 rounded-md p-8 flex flex-col items-center space-y-6">
            <PlayCircle size={64} className="text-[#21808d]" />
            <p className="text-base">Demo video would be embedded here</p>
            <button className="bg-[#21808d] text-white px-6 py-2 rounded-lg hover:bg-[#1a6873] transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Schedule Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
