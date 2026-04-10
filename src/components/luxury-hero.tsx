'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from './language-provider';
import { TextReveal, BreathReveal } from './daoist-effects/breath-reveal';

export default function LuxuryHero() {
  const [mounted, setMounted] = useState(false);
  const { locale, t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景层次 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f0e8] via-[#faf8f5] to-[#f5f0e8] dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950" />
      
      {/* 装饰圆环 - 阴阳意境 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10">
        <div 
          className="w-full h-full rounded-full border border-[#8b7355]"
          style={{
            animation: 'slowRotate 60s linear infinite',
          }}
        />
        <div 
          className="absolute inset-8 rounded-full border border-[#8b7355]"
          style={{
            animation: 'slowRotate 40s linear infinite reverse',
          }}
        />
      </div>

      {/* 主内容 */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* 顶部印章 */}
        <BreathReveal delay={0}>
          <div className="mb-12 flex justify-center">
            <div className="w-16 h-16 border-2 border-[#c41e3a] rounded-sm flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-500">
              <span className="text-[#c41e3a] font-serif text-2xl writing-vertical">
                {locale === 'zh' ? '道' : 'Tao'}
              </span>
            </div>
          </div>
        </BreathReveal>

        {/* 英文副标题 */}
        <BreathReveal delay={200}>
          <p className="text-sm tracking-[0.4em] uppercase text-[#8b7355] mb-8">
            {locale === 'zh' ? 'Wu Wei · Natural Flow' : 'Wu Wei · Natural Flow'}
          </p>
        </BreathReveal>

        {/* 主标题 */}
        <BreathReveal delay={400}>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 text-[#1a1a1a] dark:text-[#f5f0e8]">
            {locale === 'zh' ? (
              <>
                <span className="block">道家美学</span>
                <span className="block text-[#8b7355]">时尚</span>
                <span className="block">观察</span>
              </>
            ) : (
              <>
                <span className="block">The Essence</span>
                <span className="block text-[#8b7355]">Beyond</span>
                <span className="block">Trend</span>
              </>
            )}
          </h1>
        </BreathReveal>

        {/* 分隔线 */}
        <BreathReveal delay={600}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#8b7355]" />
            <span className="text-[#8b7355] text-xs tracking-[0.3em]">✦</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#8b7355]" />
          </div>
        </BreathReveal>

        {/* 描述 */}
        <BreathReveal delay={800}>
          <p className="text-lg sm:text-xl text-[#6b6b6b] dark:text-[#a0a0a0] max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            {locale === 'zh' 
              ? '以道家哲学视角观察当代时尚。玄学五行与时尚趋势的深度碰撞，发现属于你的能量珠宝。'
              : 'Observing fashion through the lens of Daoist philosophy. Discover jewelry that resonates with your energy.'
            }
          </p>
        </BreathReveal>

        {/* CTA 按钮 */}
        <BreathReveal delay={1000}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/jewelry"
              className="group relative px-10 py-4 overflow-hidden"
            >
              {/* 按钮背景 */}
              <span className="absolute inset-0 bg-[#1a1a1a] dark:bg-[#d4a574] transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute inset-0 border border-[#1a1a1a] dark:border-[#d4a574] opacity-0 group-hover:opacity-100 scale-110 transition-all duration-500" />
              
              <span className="relative text-white dark:text-[#1a1a1a] text-sm tracking-[0.2em] uppercase font-medium">
                {locale === 'zh' ? '探索珠宝' : 'Explore Jewelry'}
              </span>
            </a>
            
            <a
              href="/observation"
              className="text-sm tracking-[0.15em] text-[#8b7355] hover:text-[#1a1a1a] dark:hover:text-[#f5f0e8] transition-colors duration-300 border-b border-[#8b7355] pb-1 hover:border-[#1a1a1a] dark:hover:border-[#f5f0e8]"
            >
              {locale === 'zh' ? '阅读观察' : 'Read Observations'}
            </a>
          </div>
        </BreathReveal>

        {/* 底部滚动提示 */}
        <BreathReveal delay={1200}>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-xs tracking-[0.2em] text-[#8b7355]">
              {locale === 'zh' ? '向下探索' : 'Scroll'}
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-[#8b7355] to-transparent animate-pulse" />
          </div>
        </BreathReveal>
      </div>

      {/* 右下角装饰 */}
      <div className="absolute bottom-8 right-8 text-right hidden lg:block">
        <p className="text-xs tracking-[0.2em] text-[#8b7355] mb-1">EST.</p>
        <p className="font-serif text-2xl text-[#8b7355]">2026</p>
      </div>

      <style jsx>{`
        @keyframes slowRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .writing-vertical {
          writing-mode: vertical-rl;
          text-orientation: upright;
        }
      `}</style>
    </section>
  );
}
