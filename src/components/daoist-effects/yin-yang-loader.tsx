'use client';

import { useEffect, useState } from 'react';

interface YinYangLoaderProps {
  onComplete?: () => void;
  duration?: number;
}

export function YinYangLoader({ onComplete, duration = 3000 }: YinYangLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);
      
      if (newProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          setIsVisible(false);
          onComplete?.();
        }, 500);
      }
    };

    requestAnimationFrame(updateProgress);
  }, [duration, onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#faf8f5] dark:bg-zinc-950 transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div className="relative">
        {/* 阴阳图 */}
        <div 
          className="w-24 h-24 rounded-full relative overflow-hidden animate-spin"
          style={{ 
            animationDuration: '3s',
            background: 'linear-gradient(to bottom, #1a1a1a 50%, #faf8f5 50%)',
          }}
        >
          {/* 上部分白点 */}
          <div 
            className="absolute w-12 h-12 rounded-full bg-[#1a1a1a]"
            style={{ top: '25%', left: '25%', transform: 'translate(-50%, -50%)' }}
          >
            <div className="absolute w-4 h-4 rounded-full bg-[#faf8f5] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          
          {/* 下部分黑点 */}
          <div 
            className="absolute w-12 h-12 rounded-full bg-[#faf8f5]"
            style={{ bottom: '25%', right: '25%', transform: 'translate(50%, 50%)' }}
          >
            <div className="absolute w-4 h-4 rounded-full bg-[#1a1a1a] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* 外圈旋转 */}
        <div 
          className="absolute inset-0 w-24 h-24 rounded-full border-2 border-[#8b7355] animate-spin"
          style={{ animationDuration: '6s', animationDirection: 'reverse' }}
        />

        {/* 品牌文字 */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <p className="text-sm tracking-[0.3em] text-[#8b7355]">LAOZI.ART</p>
        </div>

        {/* 进度 */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="w-32 h-px bg-[#e8e0d5] overflow-hidden">
            <div 
              className="h-full bg-[#8b7355] transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
