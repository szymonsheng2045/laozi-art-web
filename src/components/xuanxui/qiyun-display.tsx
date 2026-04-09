"use client";

import { useEffect, useState } from "react";
import { getDailyQiyun, Qiyun } from "@/lib/qiyun";

export function QiyunDisplay() {
  const [qiyun, setQiyun] = useState<Qiyun | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setQiyun(getDailyQiyun());
  }, []);

  if (!mounted || !qiyun) {
    return (
      <div className="qiyun-display">
        <span className="text-sm opacity-60">Loading...</span>
      </div>
    );
  }

  return (
    <div className="qiyun-display">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <span className="text-sm opacity-60 zh-text">今日气运</span>
        <span className="text-lg">{"★".repeat(qiyun.score)}{"☆".repeat(5 - qiyun.score)}</span>
      </div>
      
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <span 
          className="inline-block px-2 py-1 rounded text-xs font-medium"
          style={{ 
            backgroundColor: getElementColor(qiyun.mainElement),
            color: "#fff"
          }}
        >
          {qiyun.mainElementCn}气当令
        </span>
        <span className="text-sm opacity-80 zh-text">{qiyun.level}</span>
      </div>
      
      <p className="text-xs mt-2 opacity-70 zh-text leading-relaxed">{qiyun.advice}</p>
      
      <div className="mt-2 text-xs">
        <span className="opacity-60 zh-text">宜：</span>
        {qiyun.suitable.map((item, i) => (
          <span key={i} className="mr-2 zh-text">{item}</span>
        ))}
      </div>
      
      <div className="mt-1 text-xs">
        <span className="opacity-60 zh-text">忌：</span>
        {qiyun.avoid.map((item, i) => (
          <span key={i} className="mr-2 opacity-60 zh-text">{item}</span>
        ))}
      </div>
      
      <div className="mt-2 text-xs">
        <span className="opacity-60 zh-text">幸运色：</span>
        {qiyun.luckyColors.map((color, i) => (
          <span key={i} className="mr-2 zh-text">{color}</span>
        ))}
      </div>
    </div>
  );
}

function getElementColor(element: string): string {
  const colors: Record<string, string> = {
    "金": "#C0C0C0",
    "木": "#4A7C59",
    "水": "#2C3E50",
    "火": "#8B4513",
    "土": "#8B6914"
  };
  return colors[element] || "#666";
}
