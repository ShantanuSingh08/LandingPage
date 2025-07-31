"use client";

import { useEffect, useState, useRef } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const testimonials = [
  {
    content:
      "ADmyBRAND Suite transformed our marketing strategy. We saw a 250% increase in qualified leads within the first quarter.",
    author: "Sarah Johnson",
    title: "Marketing Director, TechFlow Solutions",
    initials: "SJ",
  },
  {
    content:
      "The predictive analytics helped us identify our best customers before our competitors. ROI increased by 180% in just 6 months.",
    author: "Michael Chen",
    title: "CEO, GrowthLab Inc",
    initials: "MC",
  },
  {
    content:
      "Implementation was seamless, and the AI personalization features are incredible. Our email open rates doubled overnight.",
    author: "Emily Rodriguez",
    title: "Head of Growth, StartupX",
    initials: "ER",
  },
  {
    content:
      "Finally, a marketing platform that truly understands my complex customer journey. The automation saves 20 hours per week.",
    author: "David Thompson",
    title: "VP Marketing, Enterprise Corp",
    initials: "DT",
  },
  {
    content:
      "The multi-channel attribution gave us insights we never had before. We optimized our budget allocation and improved ROAS by 300%.",
    author: "Lisa Park",
    title: "CMO, InnovateTech",
    initials: "LP",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonials.length;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = (index: number) => setCurrentIndex(index);
  const next = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prev = () => setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      next();
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [total]);

  return (
    <section
      id="testimonials"
      aria-label="Testimonials carousel"
      className="bg-surface py-32"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-semibold leading-tight text-gray-900">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-gray-600">
            Join thousands of satisfied customers who transformed their marketing
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Track */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${total * 100}%`,
              transform: `translateX(-${currentIndex * (109 / total)}%)`,
              gap: "1.25rem", // 5 in Tailwind = 1.25rem
            }}
          >
            {testimonials.map((t, i) => (
              <article
                key={i}
                className="bg-white bg-opacity-80 backdrop-blur-lg border border-gray-200 rounded-lg p-8 flex-shrink-0 w-full max-w-[800px] mx-auto text-center"
                aria-hidden={currentIndex !== i}
                role="group"
                aria-roledescription="slide"
                aria-label={`Testimonial ${i + 1} of ${total}`}
                tabIndex={currentIndex === i ? 0 : -1}
                style={{ scrollSnapAlign: "start" }}
              >
                {/* Rating */}
                <div className="flex justify-center gap-1.5 mb-6 text-amber-400">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} size={20} />
                  ))}
                </div>
                {/* Content */}
                <blockquote className="text-lg italic leading-relaxed mb-8 text-gray-800">
                  &ldquo;{t.content}&rdquo;
                </blockquote>
                {/* Author */}
                <div className="flex items-center justify-center gap-6">
                  <div
                    className="flex items-center justify-center rounded-full h-12 w-12 font-bold text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-primary), var(--color-teal-400))",
                    }}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div className="text-left max-w-xs">
                    <span className="font-semibold text-gray-900 text-lg">{t.author}</span>
                    <p className="text-sm text-gray-600">{t.title}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              aria-label="Previous testimonial"
              onClick={prev}
              className="w-10 h-10 bg-surface border border-border rounded-full flex items-center justify-center text-gray-600 transition hover:bg-primary hover:text-primary-foreground hover:border-primary"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border)",
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <div
              role="tablist"
              aria-label="Testimonials navigation"
              className="flex gap-2"
            >
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  role="tab"
                  tabIndex={currentIndex === idx ? 0 : -1}
                  aria-selected={currentIndex === idx}
                  onClick={() => goTo(idx)}
                  className={`w-3 h-3 rounded-full border border-border cursor-pointer transition-colors ${
                    currentIndex === idx
                      ? "bg-primary border-primary"
                      : "bg-border"
                  }`}
                  style={{
                    borderColor: "var(--color-border)",
                    backgroundColor:
                      currentIndex === idx
                        ? "var(--color-primary)"
                        : "var(--color-border)",
                  }}
                />
              ))}
            </div>

            <button
              aria-label="Next testimonial"
              onClick={next}
              className="w-10 h-10 bg-surface border border-border rounded-full flex items-center justify-center text-gray-600 transition hover:bg-primary hover:text-primary-foreground hover:border-primary"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border)",
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
