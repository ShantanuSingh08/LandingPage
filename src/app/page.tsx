"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import DemoModal from "../components/DemoModal";
import Footer from "../components/Footer";


export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="relative">
      <Navbar />
      <Hero onDemoClick={openModal} />
      <section id="features" className="bg-gray-50">
        <Features />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="testimonials" className="bg-gray-50">
        <Testimonials />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="contact" className="bg-gray-50">
        <ContactForm />
      </section>
      <section id="footer" className="bg-gray-50">
        <Footer />
      </section>
      <DemoModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}
