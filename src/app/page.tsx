"use client";

import { useState } from "react";
import { SmartNavigation } from "@/components/smart-navigation";
import LuxuryHero from "@/components/luxury-hero";
import Observation from "@/components/Observation";
import Footer from "@/components/Footer";
import { TextShare } from "@/components/text-share";
import { Search } from "@/components/search";
import { InkWashBackground } from "@/components/daoist-effects/ink-wash-background";
import { GenerativeInk, NeuralTalisman, SmartDivination } from "@/components/ai-daoist";

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden relative">
      {/* AI生成式水墨背景 - 道生万物 */}
      <GenerativeInk />
      
      {/* 传统水墨背景 */}
      <InkWashBackground />
      
      {/* 搜索组件 */}
      <Search isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      {/* 文字分享 */}
      <TextShare />
      
      {/* AI智能卦象 - 每日运势 */}
      <SmartDivination />
      
      {/* 神经网络符咒 - AI思考可视化 */}
      <NeuralTalisman />
      
      {/* 导航 */}
      <SmartNavigation />
      
      {/* 主内容 */}
      <LuxuryHero />
      <div className="divider" />
      <Observation />
      <Footer />
      
      {/* 搜索按钮 */}
      <button
        onClick={() => setIsSearchOpen(true)}
        className="fixed bottom-8 left-8 z-40 w-12 h-12 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center shadow-lg hover:border-[var(--color-accent)] transition-colors"
        title="搜索"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </main>
  );
}
