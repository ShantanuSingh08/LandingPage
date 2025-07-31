"use client";
import { useEffect, useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Example FAQ data
const faqs = [
  {
    q: "How does the AI personalization work?",
    a: "Our AI analyzes customer behavior, preferences, and interaction history to deliver personalized content, product recommendations, and messaging across all channels in real-time.",
  },
  {
    q: "What integrations are available?",
    a: "We integrate with 500+ platforms including Salesforce, HubSpot, Shopify, Facebook Ads, Google Ads, Slack, and most major email providers and CRMs.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start, and you can upgrade or cancel anytime.",
  },
  {
    q: "How secure is our data?",
    a: "We use enterprise-grade security with SOC 2 Type II compliance, GDPR compliance, and bank-level encryption. Your data is stored in secure, redundant data centers.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely! There are no long-term contracts. You can cancel your subscription at any time, and you'll continue to have access until the end of your billing period.",
  },
  {
    q: "What kind of support do you provide?",
    a: "We offer 24/7 chat support for all plans, priority email support, comprehensive documentation, video tutorials, and dedicated account managers for Enterprise customers.",
  },
  {
    q: "How quickly can I see results?",
    a: "Most customers see improved engagement within the first week and measurable ROI improvements within 30 days. Our AI learns and optimizes continuously.",
  },
  {
    q: "Do you offer custom AI models?",
    a: "Yes, our Enterprise plan includes custom AI model development tailored to your specific industry, customer base, and marketing objectives.",
  },
];

export default function FAQ() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const handleClick = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const faqItems = containerRef.current.querySelectorAll<HTMLDivElement>(".faq-item");
    faqItems.forEach((item) => {
      gsap.fromTo(
        item,
        { autoAlpha: 0, x: 80 },
        {
          duration: 0.6,
          x: 0,
          autoAlpha: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="py-32 bg-gradient-to-br from-[#21808d] to-[#1a6873]"
    >
      <div ref={containerRef} className="max-w-3xl mx-auto px-4">
        <div className="mb-10 text-center text-white">
          <h2 className="text-4xl font-semibold mb-2">Frequently Asked Questions</h2>
          <p className="text-lg opacity-90">
            Everything you need to know about ADmyBRAND AI Suite
          </p>
        </div>

        <div>
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`faq-item bg-white/90 backdrop-blur-lg border border-gray-300 rounded-md mb-4 overflow-hidden transition-shadow duration-300 ${
                  isOpen ? "shadow-lg" : "hover:shadow-md"
                } opacity-0`}
              >
                <button
                  onClick={() => handleClick(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                  type="button"
                  className={`w-full bg-transparent border-none px-6 py-5 text-left cursor-pointer flex justify-between items-center text-lg font-medium text-[#21808d] transition-colors duration-200 ${
                    isOpen ? "bg-[#1a6873] text-[#1a6873]" : "hover:bg-[#ebebebc0] hover:text-[#1a6873]"
                  }`}
                >
                  <span>{item.q}</span>
                  <span
                    className={`transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#1a6873]" : "text-[#21808d]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus aria-hidden="true" size={24} />
                    ) : (
                      <Plus aria-hidden="true" size={24} />
                    )}
                  </span>
                </button>
                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                  className={`max-h-0 overflow-hidden px-6 transition-[max-height] duration-500 ease-in-out ${
                    isOpen ? "max-h-56 py-4" : "py-0"
                  }`}
                >
                  <p className="text-gray-700 leading-relaxed m-0">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
