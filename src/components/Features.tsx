"use client";
import { useEffect, useRef } from "react";
import {
  Zap,
  TrendingUp,
  UserCheck,
  Target,
  Network,
  RefreshCw,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const features = [
  {
    title: "Smart Campaign Automation",
    description:
      "AI-driven email sequences and social media campaigns that adapt in real-time to customer behavior, increasing engagement by up to 300%.",
    icon: Zap,
  },
  {
    title: "Predictive Analytics",
    description:
      "Forecast customer behavior and campaign performance with 95% accuracy using advanced machine learning algorithms.",
    icon: TrendingUp,
  },
  {
    title: "Dynamic Personalization",
    description:
      "Real-time content adaptation based on user behavior, demographics, and preferences across all marketing channels.",
    icon: UserCheck,
  },
  {
    title: "Lead Scoring & Qualification",
    description:
      "AI-powered lead identification and prioritization that increases conversion rates by identifying your most valuable prospects.",
    icon: Target,
  },
  {
    title: "Multi-channel Attribution",
    description:
      "Track customer journeys across all touchpoints with advanced attribution modeling and unified customer view.",
    icon: Network,
  },
  {
    title: "Automated A/B Testing",
    description:
      "Continuous optimization without manual intervention, automatically testing and implementing the best-performing variations.",
    icon: RefreshCw,
  },
];

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const cards = containerRef.current.querySelectorAll<HTMLDivElement>(".feature-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          // markers: true,
        },
      }
    );

    // Clean up on unmount
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      className="features py-32 bg-surface"
      id="features"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="container mx-auto px-4">
        <div className="features__header mb-8">
          <h2 className="section-title text-3xl font-semibold mb-8">Powerful AI Features</h2>
          <p className="section-subtitle text-gray-600">
            Transform your marketing strategy with cutting-edge artificial intelligence
          </p>
        </div>
        <div
          className="
            features__grid 
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] 
            gap-8
          "
          ref={containerRef}
        >
          {features.map(({ title, description, icon: Icon }, idx) => (
            <div
              key={idx}
              className="feature-card relative overflow-hidden rounded-lg border border-card-border bg-white bg-opacity-70 backdrop-blur-[20px] p-8 text-center transition-shadow duration-300 ease-standard opacity-0 hover:translate-y-[-2.5rem] hover:shadow-lg hover:border-primary"
              style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
            >
              {/* Gradient shimmer :before effect not fully replicable with Tailwind alone,
                  implement this by adding a custom CSS class for ::before or via Tailwind plugin */}
              
              <div
                className="
                  feature-card__icon 
                  w-16 h-16 
                  mx-auto mb-6 
                  rounded-lg 
                  flex 
                  items-center 
                  justify-center 
                  bg-gradient-to-tr 
                  from-primary 
                  to-teal-400 
                  text-white
                  text-2xl
                "
              >
                <Icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="feature-card__title mb-4 text-xl font-semibold text-text">
                {title}
              </h3>
              <p className="feature-card__description text-text-secondary leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
