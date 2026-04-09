"use client";

import { useEffect, useState } from "react";

export function TextShare() {
  const [selection, setSelection] = useState<string>("");
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleSelection = () => {
      const selected = window.getSelection();
      const text = selected?.toString().trim();

      if (text && text.length > 0) {
        const range = selected?.getRangeAt(0);
        const rect = range?.getBoundingClientRect();
        
        if (rect) {
          setSelection(text);
          setPosition({
            x: rect.left + rect.width / 2,
            y: rect.top - 50
          });
        }
      } else {
        setSelection("");
        setPosition(null);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.text-share-popup')) {
        setSelection("");
        setPosition(null);
      }
    };

    document.addEventListener("mouseup", handleSelection);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mouseup", handleSelection);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const shareToTwitter = () => {
    const text = encodeURIComponent(`"${selection.substring(0, 100)}${selection.length > 100 ? '...' : ''}" — from LAOZI.ART`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(window.location.href)}`, '_blank');
    setSelection("");
    setPosition(null);
  };

  const shareToWeibo = () => {
    const text = encodeURIComponent(`"${selection.substring(0, 100)}${selection.length > 100 ? '...' : ''}" — from LAOZI.ART`);
    window.open(`https://service.weibo.com/share/share.php?title=${text}&url=${encodeURIComponent(window.location.href)}`, '_blank');
    setSelection("");
    setPosition(null);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`"${selection}" — from LAOZI.ART ${window.location.href}`);
      alert("已复制到剪贴板");
    } catch {
      alert("复制失败，请手动复制");
    }
    setSelection("");
    setPosition(null);
  };

  if (!selection || !position) return null;

  return (
    <div 
      className="text-share-popup fixed z-50 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg shadow-xl p-2 flex gap-1"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translateX(-50%)"
      }}
    >
      <button
        onClick={shareToTwitter}
        className="p-2 hover:bg-[var(--color-bg-soft)] rounded transition-colors"
        title="分享到 Twitter"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </button>
      <button
        onClick={shareToWeibo}
        className="p-2 hover:bg-[var(--color-bg-soft)] rounded transition-colors"
        title="分享到微博"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.737 5.439l-.002.004zM9.05 17.219c-.384.616-1.208.884-1.829.602-.612-.279-.793-.991-.406-1.593.379-.595 1.176-.861 1.793-.601.622.263.82.972.442 1.592zm1.27-1.627c-.141.237-.449.353-.689.253-.236-.09-.313-.361-.177-.586.138-.227.436-.346.672-.24.239.09.315.36.18.573h.014zm.176-2.719c-1.893-.493-4.033.45-4.857 2.118-.836 1.704-.026 3.591 1.886 4.21 1.983.64 4.318-.341 5.132-2.179.8-1.793-.201-3.642-2.161-4.149zm7.563-1.224c-.346-.105-.579-.18-.405-.649.388-1.031.428-1.924.008-2.557-.789-1.187-2.924-1.109-5.382-.031 0 0-.768.334-.571-.271.383-1.217.324-2.229-.27-2.817-1.344-1.33-4.918.045-7.985 3.088C1.32 10.466 0 12.58 0 14.403c0 3.493 4.488 5.62 8.878 5.62 5.747 0 9.572-3.337 9.572-5.988 0-1.601-1.35-2.507-2.391-2.386z"/>
        </svg>
      </button>
      <button
        onClick={copyToClipboard}
        className="p-2 hover:bg-[var(--color-bg-soft)] rounded transition-colors"
        title="复制"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      </button>
    </div>
  );
}
