"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { articles, Article } from "@/lib/articles";

export default function Observation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("observations");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="observations" className="section-padding max-w-7xl mx-auto">
      {/* Section header */}
      <div className={`grid-asymmetric mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div>
          <p className="text-[#8a8a8a] text-sm tracking-[0.3em] uppercase mb-4">Latest</p>
          <h2 className="heading-lg">Observations</h2>
        </div>
        <div className="flex items-end">
          <p className="body-lg">
            Curated insights from the intersection of Eastern philosophy 
            and global fashion. Each piece seeks the essence beneath the surface.
          </p>
        </div>
      </div>

      {/* Observation cards */}
      <div className="space-y-16">
        {articles.map((item, index) => (
          <article
            key={item.id}
            className={`group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Link href={`/observation/${item.slug}`} className="block">
              <div className="grid-asymmetric items-start py-8 border-t border-[#e5e5e5] group-hover:border-[#1a1a1a] transition-colors duration-300">
                {/* Meta */}
                <div className="flex flex-col space-y-2">
                  <span className="text-xs tracking-[0.2em] uppercase text-[#c9a961]">
                    {item.category}
                  </span>
                  <span className="text-xs text-[#8a8a8a]">
                    {item.date} · {item.readTime} min
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-light group-hover:text-[#8a8a8a] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#8a8a8a] leading-relaxed max-w-xl">
                    {item.excerpt}
                  </p>
                  <span className="inline-block text-sm tracking-widest uppercase border-b border-transparent group-hover:border-[#1a1a1a] transition-all duration-300">
                    Read
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* View all */}
      <div className="mt-20 text-center">
        <Link
          href="/observation"
          className="inline-block px-12 py-4 border border-[#e5e5e5] text-sm tracking-widest uppercase hover:border-[#1a1a1a] transition-colors duration-300"
        >
          View All Observations
        </Link>
      </div>
    </section>
  );
}
