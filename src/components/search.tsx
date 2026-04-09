"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { articles } from "@/lib/articles";
import { getArticleWuxing, wuxingData } from "@/lib/wuxing";

interface SearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const SEARCH_HISTORY_KEY = "laozi_search_history";
const MAX_HISTORY = 5;

export function Search({ isOpen, onClose }: SearchProps) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "heaven" | "earth" | "human">("all");
  const [history, setHistory] = useState<string[]>([]);

  // 加载搜索历史
  useEffect(() => {
    const saved = localStorage.getItem(SEARCH_HISTORY_KEY);
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  // 保存搜索历史
  const saveToHistory = (term: string) => {
    if (!term.trim()) return;
    const newHistory = [term, ...history.filter(h => h !== term)].slice(0, MAX_HISTORY);
    setHistory(newHistory);
    localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(newHistory));
  };

  // 清除历史
  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem(SEARCH_HISTORY_KEY);
  };

  // 处理搜索提交
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      saveToHistory(query.trim());
    }
  };

  const results = useMemo(() => {
    let filtered = articles;

    // 文字搜索
    if (query) {
      const lowerQuery = query.toLowerCase();
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(lowerQuery) ||
        article.excerpt.toLowerCase().includes(lowerQuery) ||
        article.content.toLowerCase().includes(lowerQuery)
      );
    }

    // 三才筛选
    if (filter !== "all") {
      filtered = filtered.filter(article => {
        const categoryMap: Record<string, string[]> = {
          heaven: ["observation"],
          earth: ["essence"],
          human: ["insight", "void"]
        };
        return categoryMap[filter]?.includes(article.category);
      });
    }

    return filtered;
  }, [query, filter]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[var(--color-bg)]/95 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto px-6 py-8 pt-24">
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 opacity-60 hover:opacity-100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 搜索框 */}
        <form onSubmit={handleSearch} className="relative mb-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜索文章..."
            className="w-full px-6 py-4 text-lg bg-transparent border border-[var(--color-border)] rounded-lg focus:border-[var(--color-accent)] focus:outline-none transition-colors"
            autoFocus
          />
          <button 
            type="submit"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 opacity-40 hover:opacity-100 transition-opacity"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>

        {/* 搜索历史 */}
        {history.length > 0 && !query && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs opacity-40 uppercase tracking-wider">搜索历史</span>
              <button 
                onClick={clearHistory}
                className="text-xs opacity-40 hover:opacity-100 transition-opacity"
              >
                清除
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {history.map((term, index) => (
                <button
                  key={index}
                  onClick={() => setQuery(term)}
                  className="px-3 py-1.5 text-sm bg-[var(--color-bg-soft)] rounded-full hover:bg-[var(--color-border)] transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 三才筛选 */}
        <div className="flex gap-4 mb-8">
          {[
            { id: "all", label: "全部", color: "var(--color-text)" },
            { id: "heaven", label: "天 · 趋势", color: "var(--color-heaven)" },
            { id: "earth", label: "地 · 品牌", color: "var(--color-earth)" },
            { id: "human", label: "人 · 哲思", color: "var(--color-human)" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id as any)}
              className={`px-4 py-2 text-sm rounded-full border transition-all ${
                filter === item.id
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                  : "border-[var(--color-border)] hover:border-[var(--color-accent)]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* 结果列表 */}
        <div className="space-y-4 max-h-[60vh] overflow-y-auto">
          {results.length === 0 ? (
            <p className="text-center opacity-60 py-12">未找到相关文章</p>
          ) : (
            results.map((article) => {
              const wuxing = getArticleWuxing(article.slug);
              const wuxingInfo = wuxingData[wuxing];
              
              return (
                <Link
                  key={article.id}
                  href={`/observation/${article.slug}`}
                  onClick={onClose}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-[var(--color-bg-soft)] transition-colors group"
                >
                  {/* 五行颜色条 */}
                  <div
                    className="w-1 h-12 rounded-full flex-shrink-0"
                    style={{ backgroundColor: wuxingInfo.color }}
                  />
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs opacity-50 uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="text-xs opacity-30">·</span>
                      <span className="text-xs opacity-50">{article.date}</span>
                    </div>
                    <h3 className="font-medium mb-1 group-hover:opacity-70 transition-opacity truncate">
                      {article.title}
                    </h3>
                    <p className="text-sm opacity-60 line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              );
            })
          )}
        </div>

        {/* 结果数量 */}
        <p className="mt-4 text-sm opacity-40 text-center">
          找到 {results.length} 篇文章
        </p>
      </div>
    </div>
  );
}
