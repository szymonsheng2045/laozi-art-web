"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./language-provider";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { t, locale } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="section-padding min-h-screen flex flex-col justify-center items-center text-center px-6">
      <div className={`max-w-4xl mx-auto transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Chinese characters */}
        <p className="text-[#8a8a8a] text-sm tracking-[0.5em] mb-8">
          {locale === 'zh' ? '道法自然' : 'Wu Wei'}
        </p>

        {/* Main headline */}
        <h1 className="heading-xl mb-8">
          {locale === 'zh' ? (
            <>
              道家美学
              <br />
              <span className="text-[#8a8a8a]">时尚</span>观察
            </>
          ) : (
            <>
              The Essence
              <br />
              <span className="text-[#8a8a8a]">Beyond</span> Trend
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="body-lg max-w-2xl mx-auto mb-12">
          {t('hero.description')}
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/observation"
            className="px-8 py-3 border border-[#1a1a1a] dark:border-white text-sm tracking-widest uppercase hover:bg-[#1a1a1a] hover:text-[#fafafa] dark:hover:bg-white dark:hover:text-zinc-900 transition-colors duration-300"
          >
            {t('hero.ctaPrimary')}
          </a>
          <a
            href="/about"
            className="px-8 py-3 text-sm tracking-widest uppercase text-[#8a8a8a] hover:text-[#1a1a1a] dark:hover:text-white transition-colors duration-300"
          >
            {t('hero.ctaSecondary')}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-opacity duration-1000 delay-500 ${mounted ? "opacity-100" : "opacity-0"}`}>
        <div className="w-px h-16 bg-gradient-to-b from-[#1a1a1a] to-transparent dark:from-white dark:to-transparent" />
      </div>
    </section>
  );
}
