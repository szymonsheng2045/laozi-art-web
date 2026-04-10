'use client';

import { useRef, useState } from 'react';
import { Jewelry, wuxingNames } from '@/lib/jewelry';
import { useLanguage } from '../language-provider';
import Link from 'next/link';

interface JewelryCardLuxuryProps {
  jewelry: Jewelry;
  index: number;
  featured?: boolean;
}

// 道家诗意命名
const daoistNames: Record<string, { zh: string; en: string; meaning: string }> = {
  'j001': { zh: '凝露', en: 'Dew Condensed', meaning: 'Pure as morning dew' },
  'j002': { zh: '素练', en: 'White Silk', meaning: 'Simple and elegant' },
  'j003': { zh: '流光', en: 'Flowing Light', meaning: 'Moonlight captured' },
  'j004': { zh: '独照', en: 'Solo Shine', meaning: 'Standing alone in brilliance' },
  'j005': { zh: '生发', en: 'New Growth', meaning: 'Life emerging' },
  'j006': { zh: '温润', en: 'Warm Jade', meaning: 'Gentle as virtue' },
  'j007': { zh: '自然', en: 'Naturally', meaning: 'Following the way' },
  'j008': { zh: '通幽', en: 'Path to Seclusion', meaning: 'Communication with depth' },
  'j009': { zh: '玄珠', en: 'Mysterious Pearl', meaning: 'Deep as the ocean' },
  'j010': { zh: '滴翠', en: 'Dripping Green', meaning: 'Wisdom flowing' },
  'j011': { zh: '守中', en: 'Center Guard', meaning: 'Protection and balance' },
  'j012': { zh: '澄明', en: 'Crystal Clear', meaning: 'Clarity of mind' },
  'j013': { zh: '炎上', en: 'Rising Flame', meaning: 'Passion ascending' },
  'j014': { zh: '赤子', en: 'Red Heart', meaning: 'Pure vitality' },
  'j015': { zh: '温煦', en: 'Warm Glow', meaning: 'Gentle warmth' },
  'j016': { zh: '明锐', en: 'Sharp Light', meaning: 'Clear insight' },
  'j017': { zh: '黄中', en: 'Golden Center', meaning: 'Earth\'s abundance' },
  'j018': { zh: '含章', en: 'Hidden Beauty', meaning: 'Virtue within' },
  'j019': { zh: '守静', en: 'Keep Still', meaning: 'Tranquility preserved' },
  'j020': { zh: '抱朴', en: 'Embrace Simplicity', meaning: 'True to nature' },
};

export function JewelryCardLuxury({ jewelry, index, featured = false }: JewelryCardLuxuryProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const { locale } = useLanguage();

  const daoistName = daoistNames[jewelry.id];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !featured) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform('');
    setIsHovered(false);
  };

  const wuxingGlow = wuxingNames[jewelry.primaryWuxing].color;

  return (
    <Link href={`/jewelry/item/${jewelry.id}`}>
      <div
        ref={cardRef}
        className={`group relative cursor-pointer ${featured ? 'col-span-2 row-span-2' : ''}`}
        style={{
          transform,
          transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setIsHovered(true)}
      >
        {/* 光晕效果 */}
        <div 
          className={`absolute -inset-4 rounded-3xl transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          style={{
            background: `radial-gradient(circle at center, ${wuxingGlow}15 0%, transparent 60%)`,
            filter: 'blur(30px)',
          }}
        />

        {/* 卡片 */}
        <div className={`relative bg-white dark:bg-zinc-900 overflow-hidden border border-[#e8e0d5] dark:border-zinc-800 transition-all duration-500 hover:border-[#8b7355] dark:hover:border-[#d4a574] ${featured ? 'rounded-2xl' : 'rounded-xl'}`}>
          
          {/* 图片区域 */}
          <div className={`relative overflow-hidden ${featured ? 'aspect-[4/5]' : 'aspect-square'}`}>
            {/* 渐变背景 */}
            <div 
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              style={{ 
                background: `linear-gradient(135deg, ${jewelry.color}20 0%, ${jewelry.color}05 100%)`,
              }}
            />
            
            {/* 中心珠宝占位 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className={`rounded-full transition-all duration-700 ${featured ? 'w-48 h-48' : 'w-32 h-32'} group-hover:scale-110`}
                style={{ 
                  backgroundColor: jewelry.color,
                  boxShadow: isHovered 
                    ? `0 0 ${featured ? '100px' : '60px'} ${jewelry.color}60, inset 0 0 ${featured ? '60px' : '40px'} rgba(255,255,255,0.3)`
                    : `0 0 ${featured ? '40px' : '20px'} ${jewelry.color}40`,
                }}
              />
            </div>

            {/* 光泽扫过效果 */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%)',
                transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
                transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s',
              }}
            />

            {/* 五行标识 */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <div 
                className={`rounded-full flex items-center justify-center text-white font-medium shadow-lg transition-transform duration-300 group-hover:scale-110 ${featured ? 'w-12 h-12 text-lg' : 'w-10 h-10 text-sm'}`}
                style={{ 
                  backgroundColor: wuxingNames[jewelry.primaryWuxing].color,
                  boxShadow: `0 4px 20px ${wuxingNames[jewelry.primaryWuxing].color}40`,
                }}
              >
                {wuxingNames[jewelry.primaryWuxing].cn}
              </div>
              {jewelry.secondaryWuxing && (
                <div 
                  className={`rounded-full flex items-center justify-center text-white opacity-70 ${featured ? 'w-10 h-10 text-base' : 'w-8 h-8 text-xs'}`}
                  style={{ backgroundColor: wuxingNames[jewelry.secondaryWuxing].color }}
                >
                  {wuxingNames[jewelry.secondaryWuxing].cn}
                </div>
              )}
            </div>

            {/* 能量强度 */}
            <div className="absolute top-4 right-4">
              <div className={`flex gap-0.5 ${featured ? '' : 'scale-75'}`}>
                {Array.from({ length: 5 }, (_, i) => (
                  <div
                    key={i}
                    className={`w-1 rounded-full transition-all duration-300 ${
                      i < jewelry.intensity 
                        ? 'bg-gradient-to-t from-amber-600 to-amber-300 h-4' 
                        : 'bg-[#e8e0d5] dark:bg-zinc-700 h-2'
                    }`}
                    style={{
                      transitionDelay: `${i * 50}ms`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* 底部装饰线 */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b7355] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
          </div>

          {/* 信息区域 */}
          <div className={`${featured ? 'p-8' : 'p-6'}`}>
            {/* 分类 */}
            <p className="text-xs tracking-[0.2em] uppercase text-[#8b7355] mb-2">
              {locale === 'zh' ? 
                { ring: '指环', necklace: '项饰', earring: '耳饰', bracelet: '腕饰', brooch: '胸针', pendant: '坠饰' }[jewelry.category]
                : jewelry.category
              }
            </p>
            
            {/* 道家诗意名称 */}
            <h3 className={`font-serif mb-1 text-[#1a1a1a] dark:text-[#f5f0e8] group-hover:text-[#8b7355] transition-colors ${featured ? 'text-3xl' : 'text-xl'}`}>
              「{locale === 'zh' ? daoistName?.zh : daoistName?.en}」
            </h3>
            
            {/* 英文名 */}
            <p className={`text-[#8b7355] mb-3 ${featured ? 'text-base' : 'text-sm'}`}>
              {locale === 'zh' ? jewelry.nameCn : jewelry.name}
            </p>
            
            {/* 道家寓意 */}
            <p className={`text-[#6b6b6b] dark:text-[#a0a0a0] italic mb-4 ${featured ? 'text-base' : 'text-sm'}`}>
              {locale === 'zh' ? daoistName?.meaning : daoistName?.meaning}
            </p>

            {/* 价格和购买 */}
            <div className={`flex items-center justify-between pt-4 border-t border-[#e8e0d5] dark:border-zinc-800 ${featured ? '' : ''}`}>
              <div className="flex items-baseline gap-2">
                <span className="text-xs text-[#8b7355]">{locale === 'zh' ? '缘' : 'Price'}</span>
                <span className="font-serif text-lg text-[#1a1a1a] dark:text-[#f5f0e8]">
                  {jewelry.priceRange === 'luxury' ? '¥¥¥¥¥' : 
                   jewelry.priceRange === 'high' ? '¥¥¥¥' : 
                   jewelry.priceRange === 'medium' ? '¥¥¥' : '¥¥'}
                </span>
              </div>
              <span className="text-xs tracking-[0.15em] text-[#8b7355] group-hover:text-[#1a1a1a] dark:group-hover:text-white transition-colors">
                {locale === 'zh' ? '详赏 →' : 'View →'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
