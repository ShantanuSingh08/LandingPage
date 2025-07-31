"use client";
import { useEffect } from "react";

export default function RootLayoutWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Lazy load images using IntersectionObserver
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
          }
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));

    // Handle visibility change for performance optimization
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.body.classList.add('page-hidden');
      } else {
        document.body.classList.remove('page-hidden');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      imageObserver.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return <>{children}</>;
}
