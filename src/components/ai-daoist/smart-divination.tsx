'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../language-provider';

// 每日卦象数据
const hexagrams = [
  { name: '乾', meaning: '天行健，君子以自强不息', element: 'metal', advice: '今日宜进取，如天行刚健' },
  { name: '坤', meaning: '地势坤，君子以厚德载物', element: 'earth', advice: '今日宜包容，如大地承载' },
  { name: '屯', meaning: '云雷屯，君子以经纶', element: 'water', advice: '今日宜准备，如万物初生' },
  { name: '蒙', meaning: '山下出泉，蒙', element: 'water', advice: '今日宜学习，如初生蒙昧' },
  { name: '需', meaning: '云上于天，需', element: 'water', advice: '今日宜等待，如雨露未降' },
  { name: '讼', meaning: '天与水违行，讼', element: 'metal', advice: '今日宜审慎，如天水分离' },
  { name: '师', meaning: '地中有水，师', element: 'water', advice: '今日宜团结，如地聚水源' },
  { name: '比', meaning: '地上有水，比', element: 'water', advice: '今日宜亲近，如水润大地' },
];

const jewelryAdvice: Record<string, string[]> = {
  metal: ['金属性珠宝可增强决断力', '白金饰品适合今日佩戴', '选择圆形设计的珠宝'],
  wood: ['木属性珠宝助生发之气', '翡翠或绿松石是今日首选', '选择长条形设计的珠宝'],
  water: ['水属性珠宝增智慧流动', '黑珍珠或蓝宝石适合今日', '选择波浪形设计的珠宝'],
  fire: ['火属性珠宝增热情活力', '红宝石或石榴石适合今日', '选择三角形设计的珠宝'],
  earth: ['土属性珠宝增稳定厚重', '黄水晶或和田玉适合今日', '选择方形设计的珠宝'],
};

export function SmartDivination() {
  const [isOpen, setIsOpen] = useState(false);
  const [todayHex, setTodayHex] = useState<typeof hexagrams[0] | null>(null);
  const { locale } = useLanguage();

  useEffect(() => {
    // 根据日期生成固定的卦象（同一天同一用户看到相同结果）
    const today = new Date().toDateString();
    const index = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % hexagrams.length;
    setTodayHex(hexagrams[index]);
  }, []);

  if (!todayHex) return null;

  return (
    <>
      {/* 悬浮按钮 - 如道符 */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-24 right-8 z-40 w-12 h-12 rounded-full border border-[#8b7355] bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm flex items-center justify-center hover:bg-[#8b7355] hover:text-white transition-all duration-300 group"
      >
        <span className="text-lg font-serif">卦</span>
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-[#8b7355] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {locale === 'zh' ? '今日运势' : 'Today'}
        </span>
      </button>

      {/* 弹窗 */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative max-w-md w-full bg-[#faf8f5] dark:bg-zinc-900 rounded-2xl p-8 border border-[#e8e0d5] dark:border-zinc-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 关闭按钮 */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-[#8b7355] hover:text-[#1a1a1a] text-xl"
            >
              ×
            </button>

            {/* 标题 */}
            <div className="text-center mb-8">
              <p className="text-xs tracking-[0.3em] text-[#8b7355] uppercase mb-2">
                {locale === 'zh' ? '今日卦象' : 'Daily Hexagram'}
              </p>
              <h2 className="font-serif text-4xl text-[#1a1a1a] dark:text-[#f5f0e8]">
                {todayHex.name}卦
              </h2>
            </div>

            {/* 卦象图形简化 */}
            <div className="flex justify-center mb-6">
              <div className="flex flex-col gap-1">
                {[1, 1, 1, 0, 0, 1].map((line, i) => (
                  <div 
                    key={i}
                    className={`h-2 rounded-sm ${line ? 'w-16 bg-[#1a1a1a] dark:bg-[#f5f0e8]' : 'w-16 flex gap-2'}`}
                  >
                    {!line && (
                      <>
                        <div className="w-6 h-2 bg-[#1a1a1a] dark:bg-[#f5f0e8] rounded-sm" />
                        <div className="w-6 h-2 bg-[#1a1a1a] dark:bg-[#f5f0e8] rounded-sm" />
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 含义 */}
            <div className="text-center mb-6">
              <p className="text-lg text-[#1a1a1a] dark:text-[#f5f0e8] italic">
                「{todayHex.meaning}」
              </p>
            </div>

            {/* 今日建议 */}
            <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 border border-[#e8e0d5] dark:border-zinc-700">
              <p className="text-sm text-[#8b7355] mb-2">
                {locale === 'zh' ? '今日指引' : 'Guidance'}
              </p>
              <p className="text-[#1a1a1a] dark:text-[#f5f0e8] mb-4">
                {todayHex.advice}
              </p>
              
              <p className="text-sm text-[#8b7355] mb-2">
                {locale === 'zh' ? '珠宝建议' : 'Jewelry Advice'}
              </p>
              <ul className="text-sm text-[#6b6b6b] dark:text-[#a0a0a0] space-y-1">
                {jewelryAdvice[todayHex.element].map((advice, i) => (
                  <li key={i}>· {advice}</li>
                ))}
              </ul>
            </div>

            {/* 底部 */}
            <p className="text-center text-xs text-[#8b7355] mt-6">
              {locale === 'zh' 
                ? 'AI根据日期与五行生成的今日指引'
                : 'AI-generated guidance based on date and five elements'
              }
            </p>
          </div>
        </div>
      )}
    </>
  );
}
