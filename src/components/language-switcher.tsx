'use client';

import { useLanguage } from './language-provider';
import { Locale, localeNames } from '@/lib/i18n';
import { useState } from 'react';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLocale = () => {
    const newLocale: Locale = locale === 'en' ? 'zh' : 'en';
    setLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-1 px-2 py-1 text-sm tracking-wider text-[#8a8a8a] hover:text-[#1a1a1a] dark:hover:text-white transition-colors"
      aria-label="Switch language"
    >
      <span>{localeNames[locale].flag}</span>
      <span className="hidden sm:inline">{localeNames[locale].name}</span>
      <span className="text-xs opacity-50">/</span>
      <span className="text-xs opacity-50">
        {locale === 'en' ? localeNames.zh.name : localeNames.en.name}
      </span>
    </button>
  );
}

// 移动端用的下拉版本
export function LanguageSwitcherDropdown() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-2 py-1 text-sm tracking-wider text-[#8a8a8a] hover:text-[#1a1a1a] dark:hover:text-white transition-colors"
      >
        <span>{localeNames[locale].flag}</span>
        <span>{localeNames[locale].name}</span>
        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 py-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-lg min-w-[120px]">
          {(Object.keys(localeNames) as Locale[]).map((loc) => (
            <button
              key={loc}
              onClick={() => {
                setLocale(loc);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm text-left hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors ${
                locale === loc ? 'text-[#1a1a1a] dark:text-white font-medium' : 'text-[#8a8a8a]'
              }`}
            >
              <span>{localeNames[loc].flag}</span>
              <span>{localeNames[loc].name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
