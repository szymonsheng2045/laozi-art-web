"use client";

import { useState, useEffect } from "react";
import { XuanxueSidebar } from "./xuanxui/xuanxue-sidebar";

interface ReadingModeProps {
  children: React.ReactNode;
  articleTitle?: string;
}

export function ReadingMode({ children, articleTitle }: ReadingModeProps) {
  const [isReadingMode, setIsReadingMode] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsReadingMode(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (isReadingMode) {
    return (
      <div className="reading-mode min-h-screen bg-[var(--color-bg)]">
        {/* 专注模式头部 */}
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-[var(--color-bg)]/95 backdrop-blur-sm border-b border-[var(--color-border)]">
          <button
            onClick={() => setIsReadingMode(false)}
            className="text-sm opacity-60 hover:opacity-100 transition-opacity flex items-center gap-2"
          >
            <span>←</span>
            <span>退出专注</span>
          </button>
          <span className="text-xs opacity-40 uppercase tracking-widest">专注阅读</span>
        </header>

        {/* 专注内容区 */}
        <main className="pt-24 pb-20 px-6 max-w-3xl mx-auto">
          <article className="prose prose-lg max-w-none">
            {children}
          </article>
        </main>

        {/* 底部进度 */}
        <ReadingProgress />
      </div>
    );
  }

  return (
    <div className="normal-mode flex">
      <div className="flex-1 min-w-0">
        {children}
      </div>
      <div className="hidden lg:block flex-shrink-0">
        <XuanxueSidebar />
      </div>
      
      {/* 进入专注模式按钮 */}
      <button
        onClick={() => setIsReadingMode(true)}
        className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-[var(--color-text)] text-[var(--color-bg)] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        title="进入专注阅读模式"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
      </button>
    </div>
  );
}

// 阅读进度条
function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-1 bg-[var(--color-border)]">
      <div 
        className="h-full bg-[var(--color-accent)] transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
