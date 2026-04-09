"use client";

import { useEffect, useState } from "react";

export function PWARegister() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    // 注册 Service Worker
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          // SW registered successfully
        })
        .catch((error) => {
          // SW registration failed
        });
    }

    // 监听网络状态
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    setIsOffline(!navigator.onLine);

    // 监听安装提示
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setIsInstallable(false);
    }
    setDeferredPrompt(null);
  };

  // 离线提示
  if (isOffline) {
    return (
      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-amber-100 text-amber-800 text-sm rounded-full shadow-lg flex items-center gap-2">
        <span>📡</span>
        <span>离线模式 - 已显示缓存内容</span>
      </div>
    );
  }

  // 安装提示
  if (isInstallable) {
    return (
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-[var(--color-text)] text-[var(--color-bg)] rounded-full shadow-xl flex items-center gap-4">
        <span className="text-sm">添加到主屏幕，随时阅读</span>
        <button
          onClick={handleInstall}
          className="px-4 py-1.5 bg-[var(--color-accent)] text-white text-sm rounded-full hover:opacity-90 transition-opacity"
        >
          安装
        </button>
        <button
          onClick={() => setIsInstallable(false)}
          className="text-sm opacity-60 hover:opacity-100"
        >
          ✕
        </button>
      </div>
    );
  }

  return null;
}

// 添加到主屏提示（iOS Safari）
export function IOSInstallHint() {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    // 检测 iOS Safari 且未安装
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches;

    if (isIOS && isSafari && !isStandalone) {
      // 检查是否已显示过
      const hasShown = localStorage.getItem("laozi_ios_hint_shown");
      if (!hasShown) {
        setShowHint(true);
        localStorage.setItem("laozi_ios_hint_shown", "true");
      }
    }
  }, []);

  if (!showHint) return null;

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-6 py-4 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg shadow-xl max-w-sm">
      <p className="text-sm mb-2">
        📱 <strong>iOS 用户</strong>
      </p>
      <p className="text-xs opacity-70 mb-3">
        点击底部「分享」按钮，然后选择「添加到主屏幕」，即可像 App 一样使用。
      </p>
      <button
        onClick={() => setShowHint(false)}
        className="w-full py-2 text-xs bg-[var(--color-bg-soft)] rounded hover:opacity-80 transition-opacity"
      >
        知道了
      </button>
    </div>
  );
}
