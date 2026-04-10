"use client";

import { useState } from "react";
import { Wuxing, calculateBazi, wuxingNames as baziWuxingNames } from "@/lib/bazi";
import { 
  jewelryDatabase, 
  getJewelryByWuxing, 
  getRecommendations,
  jewelryArticles,
  wuxingNames
} from "@/lib/jewelry";
import { JewelryCard } from "@/components/jewelry/jewelry-card";
import { WuxingChart } from "@/components/jewelry/wuxing-chart";
import { BaziForm } from "@/components/jewelry/bazi-form";
import { useLanguage } from "@/components/language-provider";
import Link from "next/link";

export default function JewelryPage() {
  const [showCalculator, setShowCalculator] = useState(false);
  const [baziResult, setBaziResult] = useState<ReturnType<typeof calculateBazi> | null>(null);
  const { t, locale } = useLanguage();

  const handleBaziSubmit = (year: number, month: number, day: number, hour: number) => {
    const result = calculateBazi(year, month, day, hour);
    setBaziResult(result);
  };

  const wuxingOrder: Wuxing[] = ['metal', 'wood', 'water', 'fire', 'earth'];

  // 获取珠宝数量
  const getJewelryCount = (wuxing: Wuxing) => {
    return jewelryDatabase.filter(j => j.primaryWuxing === wuxing).length;
  };

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-light tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
            {t('jewelry.title')}
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-4 font-serif italic">
            {t('jewelry.subtitle')}
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {t('jewelry.description')}
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowCalculator(true)}
              className="px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors"
            >
              {t('jewelry.baziButton')}
            </button>
            <Link
              href="#collection"
              className="px-8 py-3 border border-zinc-300 dark:border-zinc-700 rounded-full hover:border-zinc-900 dark:hover:border-zinc-100 transition-colors text-center"
            >
              {t('jewelry.browseButton')}
            </Link>
          </div>
        </div>
      </section>

      {/* Bazi Calculator Modal */}
      {showCalculator && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-serif">{t('jewelry.bazi.title')}</h2>
              <button
                onClick={() => setShowCalculator(false)}
                className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
              >
                ✕
              </button>
            </div>
            
            {!baziResult ? (
              <BaziForm onSubmit={handleBaziSubmit} />
            ) : (
              <div className="space-y-6">
                {/* 八字显示 */}
                <div className="text-center p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                  <p className="text-sm text-zinc-500 mb-2">{t('jewelry.bazi.yourBazi')}</p>
                  <p className="text-lg font-serif tracking-wider">
                    {baziResult.yearStem}{baziResult.yearBranch} {baziResult.monthStem}{baziResult.monthBranch} {baziResult.dayStem}{baziResult.dayBranch} {baziResult.hourStem}{baziResult.hourBranch}
                  </p>
                  <p className="text-sm text-zinc-500 mt-2">
                    {t('jewelry.bazi.dayMaster')}：{baziResult.dayMaster}（{wuxingNames[stemToWuxing(baziResult.dayMaster)].cn}）
                  </p>
                </div>

                {/* 五行图表 */}
                <WuxingChart wuxing={baziResult.wuxing} />

                {/* 喜忌 */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <p className="text-sm text-green-700 dark:text-green-400 font-medium">{t('jewelry.bazi.favorable')}</p>
                    <p className="text-lg">
                      {baziResult.favorable.map(w => wuxingNames[w].cn).join('、')}
                    </p>
                  </div>
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <p className="text-sm text-red-700 dark:text-red-400 font-medium">{t('jewelry.bazi.unfavorable')}</p>
                    <p className="text-lg">
                      {baziResult.unfavorable.map(w => wuxingNames[w].cn).join('、') || t('common.notFound')}
                    </p>
                  </div>
                </div>

                {/* 推荐 */}
                <div className="space-y-4">
                  <h3 className="font-medium">{t('jewelry.bazi.recommendations')}</h3>
                  {getRecommendations(baziResult).slice(0, 2).map((rec, i) => (
                    <div key={i} className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                      <p className="text-sm text-zinc-500">
                        {rec.type === 'supplement' ? t('jewelry.bazi.supplement') : rec.type === 'enhance' ? t('jewelry.bazi.enhance') : t('jewelry.bazi.avoid')}
                        {wuxingNames[rec.wuxing].cn}
                      </p>
                      <div className="flex gap-2 mt-2 overflow-x-auto pb-2">
                        {rec.jewelry.slice(0, 3).map(j => (
                          <span key={j.id} className="text-xs whitespace-nowrap px-2 py-1 bg-white dark:bg-zinc-700 rounded">
                            {locale === 'zh' ? j.nameCn : j.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setBaziResult(null)}
                  className="w-full py-2 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                >
                  {t('jewelry.bazi.recalculate')}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Five Elements Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-serif text-center mb-12">{t('jewelry.fiveElements')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {wuxingOrder.map(wuxing => (
              <Link
                key={wuxing}
                href={`/jewelry/wuxing/${wuxing}`}
                className="group text-center p-6 rounded-2xl bg-white dark:bg-zinc-900 hover:shadow-lg transition-all"
              >
                <div 
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-serif text-white"
                  style={{ backgroundColor: wuxingNames[wuxing].color }}
                >
                  {wuxingNames[wuxing].cn}
                </div>
                <h3 className="font-medium mb-1">{wuxingNames[wuxing].en}</h3>
                <p className="text-sm text-zinc-500">
                  {getJewelryCount(wuxing)} {locale === 'zh' ? '件珠宝' : 'items'}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section id="collection" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-serif mb-8">{t('jewelry.featured')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {jewelryDatabase.slice(0, 8).map(jewelry => (
              <JewelryCard key={jewelry.id} jewelry={jewelry} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/jewelry/collection"
              className="inline-block px-8 py-3 border border-zinc-300 dark:border-zinc-700 rounded-full hover:border-zinc-900 dark:hover:border-zinc-100 transition-colors"
            >
              {t('jewelry.viewAll')} {jewelryDatabase.length} {locale === 'zh' ? '件珠宝' : 'items'}
            </Link>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif mb-8">{t('jewelry.articles')}</h2>
          <div className="space-y-6">
            {jewelryArticles.map(article => (
              <Link
                key={article.slug}
                href={`/observation/${article.slug}`}
                className="block p-6 bg-white dark:bg-zinc-900 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs text-zinc-500 uppercase tracking-wider">
                      {article.category}
                    </span>
                    <h3 className="text-lg font-medium mt-1 mb-2">{article.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                      {article.excerpt}
                    </p>
                  </div>
                  <span className="text-sm text-zinc-400 whitespace-nowrap ml-4">
                    {article.readTime} {t('common.readTime')}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Helper function
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
