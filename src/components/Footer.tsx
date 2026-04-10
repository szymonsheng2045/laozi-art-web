"use client";

import Link from "next/link";
import { useLanguage } from "./language-provider";

export default function Footer() {
  const { t, locale } = useLanguage();

  const footerLinks = {
    explore: [
      { label: t('nav.observation'), href: "/observation" },
      { label: t('nav.insight'), href: "/insight" },
      { label: t('nav.essence'), href: "/essence" },
      { label: t('nav.void'), href: "/void" },
    ],
    connect: [
      { label: "Instagram", href: "https://instagram.com/laozi.art" },
      { label: "Pinterest", href: "https://pinterest.com/laoziart" },
      { label: t('footer.newsletter'), href: "/newsletter" },
    ],
    info: [
      { label: t('footer.about'), href: "/about" },
      { label: t('footer.contact'), href: "/contact" },
      { label: "Admin", href: "/admin" },
    ],
  };

  return (
    <footer className="border-t border-[#e5e5e5] dark:border-zinc-800 mt-32">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-xl tracking-[0.2em] font-light block mb-6">
              LAOZI<span className="text-[#8a8a8a]">.</span>ART
            </Link>
            <p className="text-sm text-[#8a8a8a] leading-relaxed max-w-xs">
              {t('footer.slogan')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-[#8a8a8a]">{t('footer.explore')}</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-[#8a8a8a] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-[#8a8a8a]">{t('footer.connect')}</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-[#8a8a8a] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-[#8a8a8a]">{t('footer.info')}</h4>
            <ul className="space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-[#8a8a8a] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-[#e5e5e5] dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#8a8a8a]">
            {t('footer.copyright')}
          </p>
          <p className="text-xs text-[#8a8a8a] tracking-widest">
            {locale === 'zh' ? '道法自然' : 'Wu Wei'}
          </p>
        </div>
      </div>
    </footer>
  );
}
