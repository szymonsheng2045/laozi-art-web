"use client";

import { useState, useEffect } from "react";
import { useAuth } from "./auth/auth-provider";
import { articles, Article } from "@/lib/articles";

interface FavoriteItem {
  articleId: string;
  savedAt: string;
}

export function useFavorites() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  useEffect(() => {
    if (user) {
      const saved = localStorage.getItem(`laozi_favorites_${user.id}`);
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    }
  }, [user]);

  const saveFavorite = (articleId: string) => {
    if (!user) return;
    
    const newFavorite: FavoriteItem = {
      articleId,
      savedAt: new Date().toISOString()
    };
    
    const updated = [...favorites.filter(f => f.articleId !== articleId), newFavorite];
    setFavorites(updated);
    localStorage.setItem(`laozi_favorites_${user.id}`, JSON.stringify(updated));
  };

  const removeFavorite = (articleId: string) => {
    if (!user) return;
    
    const updated = favorites.filter(f => f.articleId !== articleId);
    setFavorites(updated);
    localStorage.setItem(`laozi_favorites_${user.id}`, JSON.stringify(updated));
  };

  const isFavorite = (articleId: string) => {
    return favorites.some(f => f.articleId === articleId);
  };

  const getFavoriteArticles = (): Article[] => {
    return articles.filter(article => 
      favorites.some(f => f.articleId === article.id)
    );
  };

  return {
    favorites,
    saveFavorite,
    removeFavorite,
    isFavorite,
    getFavoriteArticles,
    count: favorites.length
  };
}

// 收藏按钮组件
export function FavoriteButton({ articleId }: { articleId: string }) {
  const { user } = useAuth();
  const { isFavorite, saveFavorite, removeFavorite } = useFavorites();
  const [favorited, setFavorited] = useState(false);
  const [showLoginHint, setShowLoginHint] = useState(false);

  useEffect(() => {
    setFavorited(isFavorite(articleId));
  }, [articleId, isFavorite]);

  // 未登录时显示提示按钮
  if (!user) {
    return (
      <div className="relative">
        <button
          onClick={() => setShowLoginHint(!showLoginHint)}
          className="p-2 rounded-full opacity-40 hover:opacity-100 hover:bg-[var(--color-bg-soft)] transition-all"
          title="登录后收藏"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
            />
          </svg>
        </button>
        
        {showLoginHint && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-[var(--color-text)] text-[var(--color-bg)] text-xs rounded-lg whitespace-nowrap">
            登录后即可收藏文章
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[var(--color-text)]" />
          </div>
        )}
      </div>
    );
  }

  const handleClick = () => {
    if (favorited) {
      removeFavorite(articleId);
      setFavorited(false);
    } else {
      saveFavorite(articleId);
      setFavorited(true);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`p-2 rounded-full transition-all ${
        favorited 
          ? "text-red-500 bg-red-50" 
          : "opacity-40 hover:opacity-100 hover:bg-[var(--color-bg-soft)]"
      }`}
      title={favorited ? "取消收藏" : "收藏文章"}
    >
      <svg 
        className="w-5 h-5" 
        fill={favorited ? "currentColor" : "none"} 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
        />
      </svg>
    </button>
  );
}
