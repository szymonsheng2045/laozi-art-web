"use client";

import { useState } from "react";
import Link from "next/link";
import { LoginButton } from "./auth/login-button";
import { LanguageSwitcher } from "./language-switcher";
import { useLanguage } from "./language-provider";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { label: t('nav.observation'), href: "/observation" },
    { label: t('nav.insight'), href: "/insight" },
    { label: t('nav.essence'), href: "/essence" },
    { label: t('nav.void'), href: "/void" },
    { label: t('nav.jewelry'), href: "/jewelry" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafafa]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl tracking-[0.2em] font-light">
          LAOZI<span className="text-[#8a8a8a]">.</span>ART
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="nav-link text-sm tracking-widest uppercase text-[#8a8a8a] hover:text-[#1a1a1a] dark:hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="pl-4 border-l border-[#e5e5e5] dark:border-zinc-700 flex items-center gap-4">
            <LanguageSwitcher />
            <LoginButton />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-px bg-[#1a1a1a] transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-full h-px bg-[#1a1a1a] transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`w-full h-px bg-[#1a1a1a] transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#fafafa] dark:bg-zinc-900 border-t border-[#e5e5e5] dark:border-zinc-700 py-8">
          <div className="flex flex-col items-center space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm tracking-widest uppercase text-[#8a8a8a] hover:text-[#1a1a1a] dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-[#e5e5e5] dark:border-zinc-700 flex flex-col items-center gap-4">
              <LanguageSwitcher />
              <LoginButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
