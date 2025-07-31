import { Menu, X } from "lucide-react";

type HeroProps = {
    onDemoClick: () => void;
  };
  
  export default function Hero({ onDemoClick }: HeroProps) {
    return (
      <section className="hero" id="hero">
        <div className="hero__background"></div>
        <div className="container">
          <div className="hero__content">
            <div className="hero__text">
              <h1 className="hero__title animate-fade-in">
                Transform Your Marketing with AI-Powered Automation
              </h1>
              <p className="hero__subtitle animate-fade-in-delay">
                ADmyBRAND AI Suite combines advanced artificial intelligence with marketing automation to deliver personalized campaigns, predictive analytics, and automated customer journeys that drive real results.
              </p>
              <div className="hero__actions animate-fade-in-delay-2">
                <button className="btn btn--primary btn--lg">Start Free Trial</button>
                <button
                  className="btn btn--outline btn--lg"
                  onClick={onDemoClick}  // <-- open modal on click
                >
                  <i data-lucide="play"></i>
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="hero__visual animate-slide-in-right">
              <div className="hero__graphic">
                <div className="hero__circle hero__circle--1"></div>
                <div className="hero__circle hero__circle--2"></div>
                <div className="hero__circle hero__circle--3"></div>
                <div className="hero__nodes">
                  <div className="hero__node"></div>
                  <div className="hero__node"></div>
                  <div className="hero__node"></div>
                  <div className="hero__node"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  