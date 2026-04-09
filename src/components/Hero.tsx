"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="section-padding min-h-screen flex flex-col justify-center items-center text-center px-6">
      <div className={`max-w-4xl mx-auto transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Chinese characters */}
        <p className="text-[#8a8a8a] text-sm tracking-[0.5em] mb-8">
          道法自然
        </p>

        {/* Main headline */}
        <h1 className="heading-xl mb-8">
          The Essence
          <br />
          <span className="text-[#8a8a8a]">Beyond</span> Trend
        </h1>

        {/* Subtitle */}
        <p className="body-lg max-w-2xl mx-auto mb-12">
          Observing fashion through the lens of Daoist philosophy.
          Less noise, more essence. A quiet space in a loud industry.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/observation"
            className="px-8 py-3 border border-[#1a1a1a] text-sm tracking-widest uppercase hover:bg-[#1a1a1a] hover:text-[#fafafa] transition-colors duration-300"
          >
            Start Observing
          </a>
          <a
            href="/about"
            className="px-8 py-3 text-sm tracking-widest uppercase text-[#8a8a8a] hover:text-[#1a1a1a] transition-colors duration-300"
          >
            About LAOZI.ART
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-opacity duration-1000 delay-500 ${mounted ? "opacity-100" : "opacity-0"}`}>
        <div className="w-px h-16 bg-gradient-to-b from-[#1a1a1a] to-transparent" />
      </div>
    </section>
  );
}
