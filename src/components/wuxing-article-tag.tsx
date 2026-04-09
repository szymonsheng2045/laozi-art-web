"use client";

import { getArticleWuxing, wuxingData } from "@/lib/wuxing";

interface WuxingArticleTagProps {
  slug: string;
  showLabel?: boolean;
}

export function WuxingArticleTag({ slug, showLabel = true }: WuxingArticleTagProps) {
  const wuxing = getArticleWuxing(slug);
  const data = wuxingData[wuxing];

  return (
    <div 
      className="wuxing-article-tag flex items-center gap-2"
      title={`五行：${data.nameCn} - ${data.fashionStyle}`}
    >
      {/* 颜色条 */}
      <div 
        className="w-1 h-8 rounded-full"
        style={{ backgroundColor: data.color }}
      />
      
      {showLabel && (
        <div className="flex flex-col">
          <span 
            className="text-xs font-medium"
            style={{ color: data.color }}
          >
            {data.nameCn}
          </span>
          <span className="text-[10px] opacity-50 uppercase tracking-wider">
            {data.name}
          </span>
        </div>
      )}
    </div>
  );
}

// 五行颜色条（极简版）
export function WuxingColorBar({ slug }: { slug: string }) {
  const wuxing = getArticleWuxing(slug);
  const data = wuxingData[wuxing];

  return (
    <div 
      className="w-full h-1 rounded-full"
      style={{ backgroundColor: data.color }}
      title={`五行：${data.nameCn}`}
    />
  );
}
