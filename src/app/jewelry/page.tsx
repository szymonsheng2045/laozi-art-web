'use client';

import { useState } from 'react';
import { Wuxing, calculateBazi } from '@/lib/bazi';
import { 
  jewelryDatabase, 
  getJewelryByWuxing, 
  getRecommendations,
  jewelryArticles,
  wuxingNames
} from '@/lib/jewelry';
import { JewelrySpotlight } from '@/components/daoist-effects/jewelry-spotlight';
import { WuxingChart } from '@/components/jewelry/wuxing-chart';
import { BaziForm } from '@/components/jewelry/bazi-form';
import { BreathReveal } from '@/components/daoist-effects/breath-reveal';
import { useLanguage } from '@/components/language-provider';
import Link from 'next/link';

export default function JewelryPage() {
  const [showCalculator, setShowCalculator] = useState(false);
  const [baziResult, setBaziResult] = useState<ReturnType<typeof calculateBazi> | null>(null);
  const { t, locale } = useLanguage();

  const handleBaziSubmit = (year: number, month: number, day: number, hour: number) => {
    const result = calculateBazi(year, month, day, hour);
    setBaziResult(result);
  };

  const wuxingOrder: Wuxing[] = ['metal', 'wood', 'water', 'fire', 'earth'];

  const getJewelryCount = (wuxing: Wuxing) => {
    return jewelryDatabase.filter(j => j.primaryWuxing === wuxing).length;
  };

  return (
    <main className="min-h-screen bg-[#faf8f5] dark:bg-zinc-950">
      {/* Hero Section - 奢华珠宝氛围 */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* 背景纹理 */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0ebe3] via-[#faf8f5] to-[#faf8f5] dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-950" />
        
        {/* 装饰线条 */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b7355] to-transparent opacity-30" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b7355] to-transparent opacity-30" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <BreathReveal>
            <div className="mb-8">
              <span className="text-xs tracking-[0.4em] uppercase text-[#8b7355]">
                {locale === 'zh' ? '臻品' : 'Collection'}
              </span>
            </div>
          </BreathReveal>

          <BreathReveal delay={200}>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl mb-6 text-[#1a1a1a] dark:text-[#f5f0e8]">
              {locale === 'zh' ? '五行珠宝' : 'Wuxing Jewelry'}
            </h1>
          </BreathReveal>

          <BreathReveal delay={400}>
            <p className="text-xl text-[#8b7355] mb-4 italic">
              {locale === 'zh' ? '道法自然 · 以物载道' : 'The Dao of Adornment'}
            </p>
          </BreathReveal>

          <BreathReveal delay={600}>
            <p className="text-lg text-[#6b6b6b] dark:text-[#a0a0a0] max-w-2xl mx-auto mb-12 leading-relaxed">
              {locale === 'zh' 
                ? '每一件珠宝都承载着五行能量，与佩戴者形成微妙的共振。根据您的生辰八字，找到命中注定的能量宝石。'
                : 'Each piece carries the energy of the Five Elements, resonating with the wearer. Find your destined gem through Bazi analysis.'
              }
            </p>
          </BreathReveal>

          <BreathReveal delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowCalculator(true)}
                className="group relative px-10 py-4 bg-[#1a1a1a] dark:bg-[#d4a574] text-white dark:text-[#1a1a1a] overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <span className="relative text-sm tracking-[0.2em] uppercase font-medium">
                  {locale === 'zh' ? '八字测珠宝' : 'Bazi Analysis'}
                </span>
              </button>
              <Link
                href="#collection"
                className="px-10 py-4 border border-[#8b7355] text-[#8b7355] hover:bg-[#8b7355] hover:text-white transition-all duration-300 text-sm tracking-[0.2em] uppercase"
              >
                {locale === 'zh' ? '浏览臻品' : 'Browse Collection'}
              </Link>
            </div>
          </BreathReveal>
        </div>
      </section>

      {/* Bazi Calculator Modal */}
      {showCalculator && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#faf8f5] dark:bg-zinc-900 rounded-2xl max-w-md w-full p-8 max-h-[90vh] overflow-y-auto border border-[#e8e0d5] dark:border-zinc-700">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-serif">{t('jewelry.bazi.title')}</h2>
              <button
                onClick={() => setShowCalculator(false)}
                className="text-[#8b7355] hover:text-[#1a1a1a] text-2xl"
              >
                ×
              </button>
            </div>
            
            {!baziResult ? (
              <BaziForm onSubmit={handleBaziSubmit} />
            ) : (
              <div className="space-y-6">
                <div className="text-center p-6 bg-white dark:bg-zinc-800 rounded-lg border border-[#e8e0d5] dark:border-zinc-700">
                  <p className="text-sm text-[#8b7355] mb-2">{t('jewelry.bazi.yourBazi')}</p>
                  <p className="text-2xl font-serif tracking-wider text-[#1a1a1a] dark:text-white">
                    {baziResult.yearStem}{baziResult.yearBranch} {baziResult.monthStem}{baziResult.monthBranch} {baziResult.dayStem}{baziResult.dayBranch} {baziResult.hourStem}{baziResult.hourBranch}
                  </p>
                  <p className="text-sm text-[#6b6b6b] mt-2">
                    {t('jewelry.bazi.dayMaster')}：{baziResult.dayMaster}（{wuxingNames[stemToWuxing(baziResult.dayMaster)].cn}）
                  </p>
                </div>

                <WuxingChart wuxing={baziResult.wuxing} />

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-green-50 to-transparent dark:from-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <p className="text-sm text-green-700 dark:text-green-400 font-medium mb-1">{t('jewelry.bazi.favorable')}</p>
                    <p className="text-lg text-[#1a1a1a] dark:text-white">
                      {baziResult.favorable.map(w => wuxingNames[w].cn).join('、')}
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-red-50 to-transparent dark:from-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                    <p className="text-sm text-red-700 dark:text-red-400 font-medium mb-1">{t('jewelry.bazi.unfavorable')}</p>
                    <p className="text-lg text-[#1a1a1a] dark:text-white">
                      {baziResult.unfavorable.map(w => wuxingNames[w].cn).join('、') || t('common.notFound')}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-lg">{t('jewelry.bazi.recommendations')}</h3>
                  {getRecommendations(baziResult).slice(0, 2).map((rec, i) => (
                    <div key={i} className="p-4 bg-white dark:bg-zinc-800 rounded-lg border border-[#e8e0d5] dark:border-zinc-700">
                      <p className="text-sm text-[#8b7355]">
                        {rec.type === 'supplement' ? t('jewelry.bazi.supplement') : rec.type === 'enhance' ? t('jewelry.bazi.enhance') : t('jewelry.bazi.avoid')}
                        {wuxingNames[rec.wuxing].cn}
                      </p>
                      <div className="flex gap-2 mt-2 overflow-x-auto pb-2">
                        {rec.jewelry.slice(0, 3).map(j => (
                          <span key={j.id} className="text-xs whitespace-nowrap px-3 py-1 bg-[#f5f0e8] dark:bg-zinc-700 rounded-full">
                            {locale === 'zh' ? j.nameCn : j.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setBaziResult(null)}
                  className="w-full py-3 text-[#8b7355] hover:text-[#1a1a1a] transition-colors"
                >
                  {t('jewelry.bazi.recalculate')}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Five Elements Navigation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#e8e0d5] dark:border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <BreathReveal>
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.4em] uppercase text-[#8b7355] block mb-4">
                {locale === 'zh' ? '五行相生' : 'Five Elements'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1a1a] dark:text-[#f5f0e8]">
                {locale === 'zh' ? '寻你所缺 · 补你所需' : 'Find What You Need'}
              </h2>
            </div>
          </BreathReveal>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {wuxingOrder.map((wuxing, index) => (
              <BreathReveal key={wuxing} delay={index * 100}>
                <Link
                  href={`/jewelry/wuxing/${wuxing}`}
                  className="group text-center p-8 bg-white dark:bg-zinc-900 rounded-xl border border-[#e8e0d5] dark:border-zinc-800 hover:border-[#8b7355] dark:hover:border-[#d4a574] transition-all duration-500 hover:shadow-xl"
                >
                  <div 
                    className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-serif text-white transition-transform duration-500 group-hover:scale-110"
                    style={{ 
                      backgroundColor: wuxingNames[wuxing].color,
                      boxShadow: `0 8px 30px ${wuxingNames[wuxing].color}40`,
                    }}
                  >
                    {wuxingNames[wuxing].cn}
                  </div>
                  <h3 className="font-serif text-xl mb-2 text-[#1a1a1a] dark:text-[#f5f0e8]">{wuxingNames[wuxing].en}</h3>
                  <p className="text-sm text-[#8b7355]">
                    {getJewelryCount(wuxing)} {locale === 'zh' ? '件臻品' : 'Pieces'}
                  </p>
                </Link>
              </BreathReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection - 聚光灯展示 */}
      <section id="collection" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f5f0e8] to-[#faf8f5] dark:from-zinc-900 dark:to-zinc-950">
        <div className="max-w-7xl mx-auto">
          <BreathReveal>
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.4em] uppercase text-[#8b7355] block mb-4">
                {locale === 'zh' ? '臻选' : 'Featured'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl mb-4 text-[#1a1a1a] dark:text-[#f5f0e8]">
                {locale === 'zh' ? '本季臻品' : 'This Season'}
              </h2>
              <p className="text-[#6b6b6b] dark:text-[#a0a0a0] max-w-xl mx-auto">
                {locale === 'zh' 
                  ? '每一件都经过精心挑选，承载道家哲学与工匠精神的完美融合'
                  : 'Each piece carefully selected, embodying the perfect fusion of Daoist philosophy and craftsmanship'
                }
              </p>
            </div>
          </BreathReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {jewelryDatabase.slice(0, 8).map((jewelry, index) => (
              <BreathReveal key={jewelry.id} delay={index * 100}>
                <JewelrySpotlight jewelry={jewelry} index={index} />
              </BreathReveal>
            ))}
          </div>

          <BreathReveal delay={800}>
            <div className="text-center mt-16">
              <Link
                href="/jewelry/collection"
                className="inline-block px-12 py-4 border-2 border-[#1a1a1a] dark:border-[#f5f0e8] text-[#1a1a1a] dark:text-[#f5f0e8] hover:bg-[#1a1a1a] hover:text-white dark:hover:bg-[#f5f0e8] dark:hover:text-zinc-900 transition-all duration-300 text-sm tracking-[0.2em] uppercase"
              >
                {locale === 'zh' ? `查看全部 ${jewelryDatabase.length} 件臻品` : `View All ${jewelryDatabase.length} Pieces`}
              </Link>
            </div>
          </BreathReveal>
        </div>
      </section>

      {/* Articles */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#e8e0d5] dark:border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <BreathReveal>
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.4em] uppercase text-[#8b7355] block mb-4">
                {locale === 'zh' ? '指南' : 'Guide'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1a1a] dark:text-[#f5f0e8]">
                {locale === 'zh' ? '珠宝与五行' : 'Jewelry & Five Elements'}
              </h2>
            </div>
          </BreathReveal>

          <div className="space-y-8">
            {jewelryArticles.map((article, index) => (
              <BreathReveal key={article.slug} delay={index * 150}>
                <Link
                  href={`/observation/${article.slug}`}
                  className="group block p-8 bg-white dark:bg-zinc-900 rounded-xl border border-[#e8e0d5] dark:border-zinc-800 hover:border-[#8b7355] dark:hover:border-[#d4a574] transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs text-[#8b7355] tracking-[0.2em] uppercase">
                        {article.category}
                      </span>
                      <h3 className="font-serif text-xl mt-2 mb-3 text-[#1a1a1a] dark:text-[#f5f0e8] group-hover:text-[#8b7355] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-[#6b6b6b] dark:text-[#a0a0a0] text-sm leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                    <span className="text-sm text-[#8b7355] whitespace-nowrap ml-4">
                      {article.readTime} {t('common.readTime')}
                    </span>
                  </div>
                </Link>
              </BreathReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function stemToWuxing(stem: string): Wuxing {
  const map: Record<string, Wuxing> = {
    '甲': 'wood', '乙': 'wood',
    '丙': 'fire', '丁': 'fire',
    '戊': 'earth', '己': 'earth',
    '庚': 'metal', '辛': 'metal',
    '壬': 'water', '癸': 'water'
  };
  return map[stem] || 'metal';
}
