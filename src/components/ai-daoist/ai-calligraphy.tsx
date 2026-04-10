'use client';

import { useEffect, useState, useRef } from 'react';

interface AICalligraphyProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

// AI书写效果 - 如AI在实时书写道德经
export function AICalligraphy({ text, className = '', delay = 0, speed = 80 }: AICalligraphyProps) {
  const [displayText, setDisplayText] = useState('');
  const [isWriting, setIsWriting] = useState(false);
  const [inkTrail, setInkTrail] = useState<Array<{ x: number; y: number; opacity: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsWriting(true);
      let index = 0;
      
      const writeChar = () => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
          
          // 随机速度，模拟真人书写
          const randomSpeed = speed + (Math.random() - 0.5) * 40;
          setTimeout(writeChar, randomSpeed);
        } else {
          setIsWriting(false);
        }
      };

      writeChar();
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, delay, speed]);

  // 墨水拖尾效果
  useEffect(() => {
    if (!isWriting || !containerRef.current) return;

    const interval = setInterval(() => {
      setInkTrail((prev) => {
        const newTrail = prev
          .map((p) => ({ ...p, opacity: p.opacity - 0.05 }))
          .filter((p) => p.opacity > 0);
        return newTrail;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isWriting]);

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      {/* 主文字 */}
      <span className="relative z-10">
        {displayText}
        {isWriting && (
          <span className="inline-block w-0.5 h-[1em] bg-[#8b7355] ml-0.5 animate-pulse" />
        )}
      </span>

      {/* 墨水未干效果 */}
      {isWriting && (
        <span 
          className="absolute inset-0 blur-[2px] opacity-30 text-[#8b7355]"
          style={{ 
            transform: 'translate(2px, 2px)',
          }}
        >
          {displayText}
        </span>
      )}

      {/* 书写时的飞白效果 */}
      {isWriting && displayText.length > 0 && (
        <svg 
          className="absolute -inset-4 pointer-events-none overflow-visible"
          style={{ zIndex: 5 }}
        >
          <defs>
            <filter id="ink-blur">
              <feGaussianBlur stdDeviation="2" />
            </filter>
          </defs>
          {inkTrail.map((point, i) => (
            <circle
              key={i}
              cx={point.x}
              cy={point.y}
              r={3}
              fill="rgba(139, 115, 85, 0.3)"
              filter="url(#ink-blur)"
            />
          ))}
        </svg>
      )}

      <style jsx>{`
        @keyframes ink-spread {
          from {
            opacity: 0.6;
            transform: scale(0.8);
          }
          to {
            opacity: 0;
            transform: scale(1.5);
          }
        }
      `}</style>
    </div>
  );
}

// 用于标题的渐变显现
export function GradientReveal({ 
  children, 
  className = '',
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span
      className={`inline-block transition-all duration-1000 ${className}`}
      style={{
        background: isVisible 
          ? 'linear-gradient(135deg, #1a1a1a 0%, #8b7355 50%, #1a1a1a 100%)' 
          : 'linear-gradient(135deg, transparent 0%, transparent 100%)',
        backgroundSize: '200% 100%',
        backgroundPosition: isVisible ? '0% 50%' : '100% 50%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {children}
    </span>
  );
}
