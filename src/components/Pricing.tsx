"use client";
import { useState } from "react";
import { Check } from "lucide-react"; // For check icon

const plans = [
  {
    name: "Starter",
    monthly: 29,
    yearly: 300,
    description: "Perfect for small teams getting started with AI marketing",
    features: [
      "5,000 contacts",
      "Basic AI automation",
      "Email campaigns",
      "Core analytics",
      "24/7 chat support",
    ],
    buttonText: "Start Free Trial",
    buttonClass: "border border-[#1a6873] text-[#1a6873] hover:bg-[#1a6873] hover:text-white py-2 px-4 rounded w-full",
  },
  {
    name: "Professional",
    monthly: 49,
    yearly: 499,
    description: "For growing businesses ready to scale with advanced AI",
    popular: true,
    features: [
      "25,000 contacts",
      "Advanced AI features",
      "Multi-channel campaigns",
      "A/B testing",
      "Predictive analytics",
      "Priority support",
    ],
    buttonText: "Start Free Trial",
    buttonClass: "bg-[#1a6873] text-white py-2 px-4 rounded w-full hover:bg-white border-2 border-white hover:text-[#1a6873] hover:border-[#1a6873] transition",
  },
  {
    name: "Enterprise",
    monthly: 299,
    yearly: 2500,
    description: "For large organizations with custom requirements",
    features: [
      "Unlimited contacts",
      "Custom AI models",
      "Advanced integrations",
      "Dedicated account manager",
      "Custom reporting",
      "SLA guarantee",
    ],
    buttonText: "Contact Sales",
    buttonClass: "border border-[#1a6873] text-[#1a6873] hover:bg-[#1a6873] hover:text-white py-2 px-4 rounded w-full",
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [animatePrice, setAnimatePrice] = useState(false);

  const togglePricing = () => {
    setAnimatePrice(true);
    setTimeout(() => {
      setIsYearly((prev) => !prev);
      setAnimatePrice(false);
    }, 150);
  };

  return (
    <section
      id="pricing"
      className="py-32 bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold mb-2 text-gray-900">Choose Your Plan</h2>
          <p className="text-lg text-gray-600">Start free and scale as you grow</p>

          {/* Toggle */}
          <div className="my-10 flex text-lg items-center justify-center space-x-6">
            <span className="font-medium text-gray-700">Monthly</span>
            <button
              onClick={togglePricing}
              aria-pressed={isYearly}
              aria-label="Toggle pricing between monthly and yearly billing"
              type="button"
              className={`${isYearly ? "bg-[#1a6873]" : "bg-[#1a69734f]"} relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1a6873] focus:ring-offset-2`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isYearly ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className="font-medium text-gray-700 flex items-center">
              Yearly&nbsp;
              <span className="ml-2 inline-block rounded-full bg-[#1a6873] px-2 py-0.5 text-xs font-semibold text-white select-none">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative bg-white bg-opacity-90 backdrop-blur-md border-2 rounded-lg p-8 flex flex-col text-center transition transform ${
                plan.popular
                  ? "border-[#1a6873] shadow-[#1a6873] scale-105 shadow-md"
                  : "border-gray-300 hover:shadow-lg hover:-translate-y-2"
              }`}
            >
              {/* Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block rounded-full bg-[#1a6873] px-3 py-1 text-xs font-semibold text-white select-none">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{plan.name}</h3>
              <p className="text-gray-600 mb-8">{plan.description}</p>

              {/* Price */}
              <div className="flex justify-center items-baseline mb-8">
                <span className="text-2xl font-bold text-gray-900 mr-1 select-none">$</span>
                <span
                  aria-live="polite"
                  className={`font-bold text-6xl text-gray-900 transition-transform duration-150 ${
                    animatePrice ? "scale-90 opacity-50" : "scale-100 opacity-100"
                  }`}
                  data-monthly={plan.monthly}
                  data-yearly={plan.yearly}
                >
                  {isYearly ? plan.yearly : plan.monthly}
                </span>
                <span className="text-lg text-gray-600 ml-1 select-none">
                  {isYearly ? "/year" : "/month"}
                </span>
              </div>

              {/* Features */}
              <ul className="mb-8 space-y-3 text-left">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 border-b border-gray-200 pb-2 last:border-none"
                  >
                    <Check size={16} className="text-[#1a6873] flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className={`${plan.buttonClass} mt-auto`} type="button">
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
