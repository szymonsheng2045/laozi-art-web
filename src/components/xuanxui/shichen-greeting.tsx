"use client";

import { useEffect, useState } from "react";
import { getCurrentShichen, Shichen } from "@/lib/shichen";

export function ShichenGreeting() {
  const [shichen, setShichen] = useState<Shichen | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setShichen(getCurrentShichen());
    
    // 每分钟更新一次
    const interval = setInterval(() => {
      setShichen(getCurrentShichen());
    }, 60000);
    
    return () => clearInterval(interval);
  }, []);

  if (!mounted || !shichen) {
    return (
      <div className="shichen-greeting">
        <span className="text-sm opacity-60">Loading...</span>
      </div>
    );
  }

  return (
    <div className="shichen-greeting">
      <div className="flex items-center gap-2 text-sm flex-wrap">
        <span className="text-2xl font-medium" title={`${shichen.nameCn}时`}>
          {shichen.nameCn}
        </span>
        <span className="opacity-60 text-xs">{shichen.timeRange}</span>
      </div>
      <p className="text-sm mt-2 opacity-80 zh-text leading-relaxed">{shichen.greeting}</p>
      <div className="mt-2 text-xs opacity-60">
        <span className="zh-text">宜：{shichen.recommendType}</span>
      </div>
    </div>
  );
}
