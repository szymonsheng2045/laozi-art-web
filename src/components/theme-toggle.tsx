"use client";

import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`切换${theme === "yang" ? "阴" : "阳"}模式`}
      title={`当前：${theme === "yang" ? "阳" : "阴"} | 点击切换`}
    >
      {theme === "yang" ? (
        <span>☀️</span>
      ) : (
        <span>🌙</span>
      )}
    </button>
  );
}
