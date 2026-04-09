"use client";

import Link from "next/link";
import { useAuth } from "../auth/auth-provider";
import { ShichenGreeting } from "./shichen-greeting";
import { QiyunDisplay } from "./qiyun-display";
import { WuxingCycle } from "./wuxing-tag";

export function XuanxueSidebar() {
  const { user } = useAuth();

  return (
    <aside className="xuanxue-sidebar w-64 flex-shrink-0 p-4 border-l border-[var(--color-border)] overflow-y-auto">
      <div className="space-y-6">
        {/* 用户状态 */}
        {user && (
          <>
            <section className="user-section">
              <Link href="/profile" className="flex items-center gap-3 p-3 rounded-lg bg-[var(--color-bg-soft)] hover:opacity-80 transition-opacity overflow-hidden">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full flex-shrink-0"
                />
                <div className="min-w-0 overflow-hidden">
                  <p className="text-sm font-medium truncate">{user.name}</p>
                  <p className="text-xs opacity-60 truncate">查看个人中心</p>
                </div>
              </Link>
            </section>
            <hr className="border-[var(--color-border)]" />
          </>
        )}

        {/* 时辰问候 */}
        <section className="shichen-section">
          <h3 className="text-xs uppercase tracking-widest opacity-50 mb-3">时辰</h3>
          <ShichenGreeting />
        </section>
        
        <hr className="border-[var(--color-border)]" />
        
        {/* 今日气运 */}
        <section className="qiyun-section">
          <h3 className="text-xs uppercase tracking-widest opacity-50 mb-3">气运</h3>
          <QiyunDisplay />
        </section>
        
        <hr className="border-[var(--color-border)]" />
        
        {/* 五行 */}
        <section className="wuxing-section">
          <h3 className="text-xs uppercase tracking-widest opacity-50 mb-3">五行</h3>
          <WuxingCycle />
        </section>
        
        <hr className="border-[var(--color-border)]" />
        
        {/* 玄学说明 */}
        <section className="about-section">
          <h3 className="text-xs uppercase tracking-widest opacity-50 mb-3">关于</h3>
          <p className="text-xs opacity-60 leading-relaxed break-words">
            LAOZI.ART 以道家哲学为根基，融合易经、五行、时辰等传统智慧，
            探索时尚与自然的和谐之道。
          </p>
        </section>
      </div>
    </aside>
  );
}
