"use client";

import { useAuth } from "@/components/auth/auth-provider";
import Navigation from "@/components/Navigation";
import { XuanxueSidebar } from "@/components/xuanxui/xuanxue-sidebar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  const { user, isLoading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/");
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="opacity-60">加载中...</p>
      </main>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <main className="min-h-screen">
      <div className="flex">
        <div className="flex-1">
          <Navigation />
          
          <section className="section-padding max-w-4xl mx-auto pt-32">
            <div className="flex items-center gap-6 mb-12">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 rounded-full border-2 border-[var(--color-border)]"
              />
              <div>
                <h1 className="text-3xl font-light mb-2">{user.name}</h1>
                <p className="opacity-60">{user.email}</p>
                <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-[var(--color-bg-soft)]">
                  {user.provider === "github" ? "GitHub" : "Google"} 登录
                </span>
              </div>
            </div>

            <div className="space-y-8">
              <section className="p-6 border border-[var(--color-border)] rounded-lg">
                <h2 className="text-lg font-medium mb-4">阅读统计</h2>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-[var(--color-bg-soft)] rounded">
                    <p className="text-2xl font-light">12</p>
                    <p className="text-xs opacity-60 mt-1">已读文章</p>
                  </div>
                  <div className="text-center p-4 bg-[var(--color-bg-soft)] rounded">
                    <p className="text-2xl font-light">3</p>
                    <p className="text-xs opacity-60 mt-1">收藏文章</p>
                  </div>
                  <div className="text-center p-4 bg-[var(--color-bg-soft)] rounded">
                    <p className="text-2xl font-light">85</p>
                    <p className="text-xs opacity-60 mt-1">阅读分钟</p>
                  </div>
                </div>
              </section>

              <section className="p-6 border border-[var(--color-border)] rounded-lg">
                <h2 className="text-lg font-medium mb-4">我的五行</h2>
                <p className="text-sm opacity-70 mb-4">
                  基于你的阅读偏好，你的时尚五行属性为：
                </p>
                <div className="flex items-center gap-4">
                  <span className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white" style={{ backgroundColor: '#4A7C59' }}>
                    木
                  </span>
                  <div>
                    <p className="font-medium">木型人格</p>
                    <p className="text-sm opacity-60">偏爱自然、有机、生长的时尚理念</p>
                  </div>
                </div>
              </section>

              <section className="p-6 border border-[var(--color-border)] rounded-lg">
                <h2 className="text-lg font-medium mb-4">设置</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2">
                    <span>邮件订阅</span>
                    <span className="text-sm text-[var(--color-heaven)]">已开启</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>新文章通知</span>
                    <span className="text-sm text-[var(--color-heaven)]">已开启</span>
                  </div>
                </div>
              </section>

              <button
                onClick={logout}
                className="w-full py-3 border border-red-300 text-red-500 rounded hover:bg-red-50 transition-colors"
              >
                退出登录
              </button>
            </div>
          </section>
        </div>
        
        <XuanxueSidebar />
      </div>
    </main>
  );
}
