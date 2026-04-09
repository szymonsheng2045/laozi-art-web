"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { LoginButton } from "./auth/login-button";

const navItems = [
  { label: "Observation", href: "/observation" },
  { label: "Insight", href: "/insight" },
  { label: "Essence", href: "/essence" },
  { label: "Void", href: "/void" },
];

export function SmartNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 顶部始终显示
      if (currentScrollY < 100) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }
      
      // 向下滚动隐藏，向上滚动显示
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg)]/95 backdrop-blur-sm border-b border-[var(--color-border)] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-xl tracking-[0.15em] font-medium"
          style={{ fontFamily: "var(--font-display)" }}
        >
          LAOZI<span className="opacity-40">.</span>ART
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="nav-link text-sm tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity"
            >
              {item.label}
            </Link>
          ))}
          <div className="pl-4 border-l border-[var(--color-border)]">
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
            <span className={`w-full h-px bg-[var(--color-text)] transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-full h-px bg-[var(--color-text)] transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`w-full h-px bg-[var(--color-text)] transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-[var(--color-bg)] border-t border-[var(--color-border)] overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="py-8">
          <div className="flex flex-col items-center space-y-6">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm tracking-widest uppercase opacity-60 hover:opacity-100 transition-all duration-300 ${
                  isOpen ? "translate-y-0 opacity-60" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: isOpen ? `${index * 50}ms` : "0ms" }}
              >
                {item.label}
              </Link>
            ))}
            <div 
              className={`pt-4 border-t border-[var(--color-border)] transition-all duration-300 ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? "200ms" : "0ms" }}
            >
              <LoginButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
