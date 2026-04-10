'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Jewelry, wuxingNames } from '@/lib/jewelry';
import { useLanguage } from '../language-provider';

interface JewelrySpotlightProps {
  jewelry: Jewelry;
  index: number;
}

export function JewelrySpotlight({ jewelry, index }: JewelrySpotlightProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const { locale } = useLanguage();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`);
  };

  const handleMouseLeave = () => {
    setTransform('');
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // 五行光晕颜色
  const wuxingGlow = wuxingNames[jewelry.primaryWuxing].color;

  return (
    <div
      ref={cardRef}
      className="group relative cursor-pointer"
      style={{
        transform,
        transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {/* 聚光灯效果背景 */}
      <div 
        className={`absolute -inset-4 rounded-2xl transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: `radial-gradient(circle at center, ${wuxingGlow}20 0%, transparent 70%)`,
          filter: 'blur(20px)',
        }}
      />
      
      {/* 五行光晕 */}
      <div 
        className="absolute -inset-1 rounded-xl transition-all duration-500 group-hover:shadow-2xl"
        style={{
          boxShadow: isHovered ? `0 0 40px ${wuxingGlow}40, 0 0 80px ${wuxingGlow}20` : 'none',
        }}
      />

      {/* 卡片内容 */}
      <div className="relative bg-gradient-to-b from-[#faf8f5] to-[#f0ebe3] dark:from-zinc-900 dark:to-zinc-800 rounded-xl overflow-hidden border border-[#e8e0d5] dark:border-zinc-700">
        {/* 图片区域 */}
        <div className="aspect-square relative overflow-hidden">
          {/* 珠宝图片占位 */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ backgroundColor: jewelry.color + '15' }}
          >
            <div 
              className="w-32 h-32 rounded-full opacity-40 transition-transform duration-700 group-hover:scale-110"
              style={{ 
                backgroundColor: jewelry.color,
                boxShadow: `0 0 60px ${jewelry.color}60`,
              }}
            />
          </div>
          
          {/* 光泽效果 */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%)`,
              transform: 'translateX(-100%)',
              animation: isHovered ? 'shine 1s ease-in-out' : 'none',
            }}
          />

          {/* 五行标识 */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span 
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium shadow-lg"
              style={{ 
                backgroundColor: wuxingNames[jewelry.primaryWuxing].color,
                boxShadow: `0 4px 15px ${wuxingNames[jewelry.primaryWuxing].color}50`,
              }}
            >
              {wuxingNames[jewelry.primaryWuxing].cn}
            </span>
            {jewelry.secondaryWuxing && (
              <span 
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium opacity-70"
                style={{ backgroundColor: wuxingNames[jewelry.secondaryWuxing].color }}
              >
                {wuxingNames[jewelry.secondaryWuxing].cn}
              </span>
            )}
          </div>

          {/* 能量强度 */}
          <div className="absolute top-4 right-4 bg-white/80 dark:bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }, (_, i) => (
                <div
                  key={i}
                  className={`w-1 h-3 rounded-full ${
                    i < jewelry.intensity 
                      ? 'bg-gradient-to-t from-amber-600 to-amber-400' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 信息区域 */}
        <div className="p-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[#8b7355] mb-2">
            {locale === 'zh' ? 
              { ring: '戒指', necklace: '项链', earring: '耳环', bracelet: '手镯', brooch: '胸针', pendant: '吊坠' }[jewelry.category]
              : jewelry.category
            }
          </p>
          
          <h3 className="font-serif text-xl mb-2 group-hover:text-[#8b7355] transition-colors">
            {locale === 'zh' ? jewelry.nameCn : jewelry.name}
          </h3>
          
          {jewelry.daoistConcept && (
            <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-4">
              「{jewelry.daoistConcept.split(' - ')[0]}」
            </p>
          )}

          {/* 价格和购买按钮 */}
          <div className="flex items-center justify-between pt-4 border-t border-[#e8e0d5] dark:border-zinc-700">
            <span className="font-serif text-lg">
              {jewelry.priceRange === 'luxury' ? '¥¥¥¥' : 
               jewelry.priceRange === 'high' ? '¥¥¥' : 
               jewelry.priceRange === 'medium' ? '¥¥' : '¥'}
            </span>
            <button className="px-6 py-2 bg-[#1a1a1a] dark:bg-[#d4a574] text-white dark:text-[#1a1a1a] text-sm tracking-wider rounded-full hover:bg-[#8b7355] dark:hover:bg-[#b8956a] transition-colors">
              {locale === 'zh' ? '臻藏' : 'Acquire'}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
