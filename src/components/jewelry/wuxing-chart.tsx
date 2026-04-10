"use client";

import { Wuxing } from "@/lib/bazi";
import { wuxingNames } from "@/lib/jewelry";
import { useLanguage } from "../language-provider";

interface WuxingChartProps {
  wuxing: Record<Wuxing, number>;
}

export function WuxingChart({ wuxing }: WuxingChartProps) {
  const wuxingOrder: Wuxing[] = ['metal', 'wood', 'water', 'fire', 'earth'];
  const { t } = useLanguage();
  
  // 找出最大值用于归一化
  const maxValue = Math.max(...Object.values(wuxing));
  
  return (
    <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
      <p className="text-sm text-zinc-500 mb-4">{t('jewelry.bazi.wuxingDist')}</p>
      <div className="space-y-3">
        {wuxingOrder.map(w => {
          const percentage = wuxing[w];
          const isLow = percentage < 15;
          const isHigh = percentage > 30;
          
          return (
            <div key={w} className="flex items-center gap-3">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium"
                style={{ backgroundColor: wuxingNames[w].color }}
              >
                {wuxingNames[w].cn}
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1">
                  <span>{wuxingNames[w].en}</span>
                  <span className={isLow ? 'text-amber-600' : isHigh ? 'text-green-600' : ''}>
                    {percentage}%
                    {isLow && ' ↓'}
                    {isHigh && ' ↑'}
                  </span>
                </div>
                <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ 
                      width: `${percentage}%`,
                      backgroundColor: wuxingNames[w].color
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* 图例说明 */}
      <div className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-700 text-xs text-zinc-500 flex gap-4">
        <span>{t('jewelry.bazi.low')}</span>
        <span>{t('jewelry.bazi.high')}</span>
      </div>
    </div>
  );
}
