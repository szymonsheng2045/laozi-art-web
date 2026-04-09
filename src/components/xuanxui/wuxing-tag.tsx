"use client";

import { wuxingData, Wuxing, getArticleWuxing } from "@/lib/wuxing";

interface WuxingTagProps {
  wuxing?: Wuxing;
  articleSlug?: string;
  showDetail?: boolean;
}

export function WuxingTag({ wuxing, articleSlug, showDetail = false }: WuxingTagProps) {
  const element = wuxing || (articleSlug ? getArticleWuxing(articleSlug) : "earth");
  const data = wuxingData[element];

  if (showDetail) {
    return (
      <div className="wuxing-tag-detail">
        <div className="flex items-center gap-2 mb-2">
          <span 
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
            style={{ backgroundColor: data.color }}
          >
            {data.nameCn}
          </span>
          <div>
            <span className="font-medium">{data.nameCn}</span>
            <span className="text-sm opacity-60 ml-2">{data.name}</span>
          </div>
        </div>
        <p className="text-sm opacity-70">{data.fashionStyle}</p>
        <div className="mt-2 text-xs opacity-60">
          <span>代表品牌：</span>
          {data.brands.join("、")}
        </div>
      </div>
    );
  }

  return (
    <span 
      className="wuxing-tag inline-flex items-center gap-1 px-2 py-1 rounded text-xs"
      style={{ 
        backgroundColor: `${data.color}20`,
        color: data.color,
        border: `1px solid ${data.color}40`
      }}
    >
      <span className="font-bold">{data.nameCn}</span>
      <span className="opacity-70">{data.name}</span>
    </span>
  );
}

// 五行相生相克图
export function WuxingCycle() {
  return (
    <div className="wuxing-cycle">
      <svg viewBox="0 0 200 200" className="w-32 h-32">
        {/* 简化版五行图 */}
        <circle cx="100" cy="30" r="20" fill="#C0C0C20" stroke="#C0C0C0" />
        <text x="100" y="35" textAnchor="middle" fill="#C0C0C0" fontSize="14">金</text>
        
        <circle cx="170" cy="70" r="20" fill="#4A7C5920" stroke="#4A7C59" />
        <text x="170" y="75" textAnchor="middle" fill="#4A7C59" fontSize="14">木</text>
        
        <circle cx="170" cy="130" r="20" fill="#2C3E5020" stroke="#2C3E50" />
        <text x="170" y="135" textAnchor="middle" fill="#2C3E50" fontSize="14">水</text>
        
        <circle cx="100" cy="170" r="20" fill="#8B451320" stroke="#8B4513" />
        <text x="100" y="175" textAnchor="middle" fill="#8B4513" fontSize="14">火</text>
        
        <circle cx="30" cy="130" r="20" fill="#8B691420" stroke="#8B6914" />
        <text x="30" y="135" textAnchor="middle" fill="#8B6914" fontSize="14">土</text>
        
        <circle cx="30" cy="70" r="20" fill="#66666620" stroke="#666" />
        <text x="30" y="75" textAnchor="middle" fill="#666" fontSize="14">?</text>
      </svg>
      <p className="text-xs text-center mt-2 opacity-60">五行相生</p>
    </div>
  );
}
