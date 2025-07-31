"use client";
import { useState, useRef } from "react";
import { CheckCircle } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const validateField = (name: keyof FormData, value: string): string | null => {
    if (value.trim() === "") {
      switch (name) {
        case "name":
          return "Name is required";
        case "email":
          return "Email is required";
        case "company":
          return "Company name is required";
        case "message":
          return "Message is required";
        default:
          return null;
      }
    }
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value.trim())) {
        return "Please enter a valid email address";
      }
    }
    return null;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const validationErrors: FormErrors = {};
    (Object.keys(form) as (keyof FormData)[]).forEach((key) => {
      const error = validateField(key, form[key]);
      if (error) validationErrors[key] = error;
    });
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const scrollToFirstError = () => {
    if (!formRef.current) return;
    const firstErrorField = formRef.current.querySelector<HTMLElement>(".error-message");
    if (firstErrorField) {
      firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      scrollToFirstError();
      return;
    }

    setSuccessVisible(false);
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call

      setSuccessVisible(true);
      setForm({ name: "", email: "", company: "", message: "" });

      setTimeout(() => setSuccessVisible(false), 5000); // Hide after 5 seconds
    } catch (error) {
      alert("There was an error submitting your form. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact py-16 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="md:flex md:space-x-12">
          {/* Info Section */}
          <div className="mt-0 md:mt-30 md:mb-0 md:w-1/2">
            <h2 className="text-3xl font-bold mb-10 text-left">
              Ready to Transform Your Marketing?
            </h2>
            <p className="section-subtitle mb-6 text-gray-700 text-left">
              Get started with ADmyBRAND AI Suite today and see the difference AI can make for your business.
            </p>
            <div className="space-y-4">
              {[
                "14-day free trial",
                "No credit card required",
                "Cancel anytime",
              ].map((text, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-[#21808d]">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <form
            ref={formRef}
            className="md:w-1/2 space-y-6 bg-white p-8 rounded-lg shadow-lg backdrop-blur-sm border border-gray-200"
            id="contactForm"
            noValidate
            onSubmit={handleSubmit}
            aria-describedby="formSuccess"
          >
            {/* Full Name */}
            <div>
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full rounded border px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  errors.name ? "border-red-600" : "border-gray-300"
                }`}
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-describedby="nameError"
                aria-invalid={!!errors.name}
                required
                disabled={isSubmitting}
              />
              <p
                className={`error-message mt-1 text-red-600 text-sm ${
                  errors.name ? "block" : "hidden"
                }`}
                id="nameError"
                role="alert"
              >
                {errors.name}
              </p>
            </div>

            {/* Email Address */}
            <div>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full rounded border px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  errors.email ? "border-red-600" : "border-gray-300"
                }`}
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-describedby="emailError"
                aria-invalid={!!errors.email}
                required
                disabled={isSubmitting}
              />
              <p
                className={`error-message mt-1 text-red-600 text-sm ${
                  errors.email ? "block" : "hidden"
                }`}
                id="emailError"
                role="alert"
              >
                {errors.email}
              </p>
            </div>

            {/* Company Name */}
            <div>
              <input
                type="text"
                id="company"
                name="company"
                className={`w-full rounded border px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  errors.company ? "border-red-600" : "border-gray-300"
                }`}
                placeholder="Company Name"
                value={form.company}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-describedby="companyError"
                aria-invalid={!!errors.company}
                required
                disabled={isSubmitting}
              />
              <p
                className={`error-message mt-1 text-red-600 text-sm ${
                  errors.company ? "block" : "hidden"
                }`}
                id="companyError"
                role="alert"
              >
                {errors.company}
              </p>
            </div>

            {/* Message */}
            <div>
              <textarea
                id="message"
                name="message"
                className={`w-full rounded border px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none ${
                  errors.message ? "border-red-600" : "border-gray-300"
                }`}
                placeholder="Tell us about your marketing goals..."
                rows={4}
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-describedby="messageError"
                aria-invalid={!!errors.message}
                required
                disabled={isSubmitting}
              />
              <p
                className={`error-message mt-1 text-red-600 text-sm ${
                  errors.message ? "block" : "hidden"
                }`}
                id="messageError"
                role="alert"
              >
                {errors.message}
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded bg-[#21808d] py-3 font-semibold text-white hover:bg-[#1a6873] transition disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center space-x-2"
              disabled={isSubmitting}
              aria-live="polite"
            >
              {!isSubmitting ? (
                <span>Start Free Trial</span>
              ) : (
                <span className="flex items-center space-x-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  <span>Processing...</span>
                </span>
              )}
            </button>

            {/* Success Message */}
            {successVisible && (
              <div
                className="mt-4 flex items-center space-x-2 rounded border border-green-200 bg-green-50 p-3 text-[rgba(50, 184, 198, 1)] text-sm font-medium"
                id="formSuccess"
                role="alert"
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span>Thank you! We&apos;ll be in touch within 24 hours.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
