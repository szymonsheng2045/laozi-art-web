"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Mock data for demonstration
const mockStats = {
  totalArticles: 12,
  publishedArticles: 8,
  pendingScrapes: 47,
  analyzedItems: 128,
  weeklyViews: 2340,
};

const mockArticles = [
  { id: 1, title: "The Return of Silence", status: "published", date: "2026-04-02", views: 423 },
  { id: 2, title: "Material as Philosophy", status: "published", date: "2026-03-28", views: 567 },
  { id: 3, title: "Lemaire: Doing Less", status: "draft", date: "2026-03-20", views: 0 },
];

const mockScraped = [
  { id: 1, source: "Vogue", title: "Paris Fashion Week SS27", status: "analyzed", date: "2026-04-01" },
  { id: 2, source: "Pinterest", title: "Minimalist Interiors", status: "pending", date: "2026-04-02" },
  { id: 3, source: "The Row", title: "New Collection Drop", status: "curated", date: "2026-03-30" },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  // Simple password protection (replace with proper auth in production)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "laozi2026") {
      setIsAuthenticated(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fafafa]">
        <div className="w-full max-w-md p-8">
          <h1 className="text-2xl font-light tracking-widest text-center mb-8">
            LAOZI<span className="text-[#8a8a8a]">.</span>ART
          </h1>
          <p className="text-center text-[#8a8a8a] mb-8">Admin Access</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-3 border border-[#e5e5e5] bg-transparent focus:outline-none focus:border-[#1a1a1a]"
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#1a1a1a] text-[#fafafa] text-sm tracking-widest uppercase hover:bg-[#333] transition-colors"
            >
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Admin Header */}
      <header className="border-b border-[#e5e5e5] bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-lg tracking-widest">
            LAOZI<span className="text-[#8a8a8a]">.</span>ART <span className="text-[#8a8a8a] text-sm">/ Admin</span>
          </Link>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-sm text-[#8a8a8a] hover:text-[#1a1a1a]"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Admin Navigation */}
      <nav className="border-b border-[#e5e5e5] bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8">
            {["overview", "articles", "scraper", "analytics", "settings"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 text-sm tracking-widest uppercase border-b-2 transition-colors ${
                  activeTab === tab
                    ? "border-[#1a1a1a] text-[#1a1a1a]"
                    : "border-transparent text-[#8a8a8a] hover:text-[#1a1a1a]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 border border-[#e5e5e5]">
                <p className="text-xs tracking-widest uppercase text-[#8a8a8a] mb-2">Articles</p>
                <p className="text-3xl font-light">{mockStats.totalArticles}</p>
                <p className="text-sm text-[#8a8a8a] mt-1">{mockStats.publishedArticles} published</p>
              </div>
              <div className="bg-white p-6 border border-[#e5e5e5]">
                <p className="text-xs tracking-widest uppercase text-[#8a8a8a] mb-2">Scraped Items</p>
                <p className="text-3xl font-light">{mockStats.analyzedItems}</p>
                <p className="text-sm text-[#8a8a8a] mt-1">{mockStats.pendingScrapes} pending analysis</p>
              </div>
              <div className="bg-white p-6 border border-[#e5e5e5]">
                <p className="text-xs tracking-widest uppercase text-[#8a8a8a] mb-2">Weekly Views</p>
                <p className="text-3xl font-light">{mockStats.weeklyViews.toLocaleString()}</p>
                <p className="text-sm text-[#8a8a8a] mt-1">+12% from last week</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 border border-[#e5e5e5]">
              <h3 className="text-sm tracking-widest uppercase mb-4">Quick Actions</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-[#1a1a1a] text-[#fafafa] text-sm tracking-widest uppercase hover:bg-[#333] transition-colors">
                  New Article
                </button>
                <button className="px-6 py-3 border border-[#1a1a1a] text-sm tracking-widest uppercase hover:bg-[#1a1a1a] hover:text-[#fafafa] transition-colors">
                  Run Scraper
                </button>
                <button className="px-6 py-3 border border-[#e5e5e5] text-sm tracking-widest uppercase hover:border-[#1a1a1a] transition-colors">
                  Generate Report
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "articles" && (
          <div className="bg-white border border-[#e5e5e5]">
            <div className="p-6 border-b border-[#e5e5e5] flex justify-between items-center">
              <h3 className="text-sm tracking-widest uppercase">Articles</h3>
              <button className="px-4 py-2 bg-[#1a1a1a] text-[#fafafa] text-sm tracking-widest uppercase">
                New Article
              </button>
            </div>
            <table className="w-full">
              <thead className="bg-[#fafafa]">
                <tr>
                  <th className="text-left p-4 text-xs tracking-widest uppercase text-[#8a8a8a] font-normal">Title</th>
                  <th className="text-left p-4 text-xs tracking-widest uppercase text-[#8a8a8a] font-normal">Status</th>
                  <th className="text-left p-4 text-xs tracking-widest uppercase text-[#8a8a8a] font-normal">Date</th>
                  <th className="text-left p-4 text-xs tracking-widest uppercase text-[#8a8a8a] font-normal">Views</th>
                  <th className="text-left p-4 text-xs tracking-widest uppercase text-[#8a8a8a] font-normal">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockArticles.map((article) => (
                  <tr key={article.id} className="border-t border-[#e5e5e5]">
                    <td className="p-4">{article.title}</td>
                    <td className="p-4">
                      <span className={`text-xs uppercase tracking-wider ${
                        article.status === "published" ? "text-green-600" : "text-[#c9a961]"
                      }`}>
                        {article.status}
                      </span>
                    </td>
                    <td className="p-4 text-[#8a8a8a]">{article.date}</td>
                    <td className="p-4 text-[#8a8a8a]">{article.views}</td>
                    <td className="p-4">
                      <button className="text-sm text-[#8a8a8a] hover:text-[#1a1a1a]">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "scraper" && (
          <div className="bg-white border border-[#e5e5e5]">
            <div className="p-6 border-b border-[#e5e5e5] flex justify-between items-center">
              <h3 className="text-sm tracking-widest uppercase">Scraped Items</h3>
              <button className="px-4 py-2 bg-[#1a1a1a] text-[#fafafa] text-sm tracking-widest uppercase">
                Run Scraper
              </button>
            </div>
            <table className="w-full">
              <thead className="bg-[#fafafa]">
                <tr>
                  <th className="text-left p-4 text-xs tracking-widest uppercase text-[#8a8a8a] font-normal">Source</th>
                  <th className="text-left p-4 text-xs tracking-widest uppercase text-[#8a8a8a] font-normal">Title</th>
                  <th className="text-left p-4 text-xs tracking-widest uppercase text-[#8a8a8a] font-normal">Status</th>
                  <th className="text-left p-4 text-xs tracking-widest uppercase text-[#8a8a8a] font-normal">Date</th>
                  <th className="text-left p-4 text-xs tracking-widest uppercase text-[#8a8a8a] font-normal">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockScraped.map((item) => (
                  <tr key={item.id} className="border-t border-[#e5e5e5]">
                    <td className="p-4">{item.source}</td>
                    <td className="p-4">{item.title}</td>
                    <td className="p-4">
                      <span className={`text-xs uppercase tracking-wider ${
                        item.status === "analyzed" ? "text-green-600" : 
                        item.status === "curated" ? "text-blue-600" : "text-[#8a8a8a]"
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="p-4 text-[#8a8a8a]">{item.date}</td>
                    <td className="p-4">
                      <button className="text-sm text-[#8a8a8a] hover:text-[#1a1a1a]">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "analytics" && (
          <div className="space-y-6">
            <div className="bg-white p-6 border border-[#e5e5e5]">
              <h3 className="text-sm tracking-widest uppercase mb-4">Traffic Overview</h3>
              <p className="text-[#8a8a8a]">Analytics data will be displayed here once connected to database.</p>
            </div>
            <div className="bg-white p-6 border border-[#e5e5e5]">
              <h3 className="text-sm tracking-widest uppercase mb-4">Popular Content</h3>
              <p className="text-[#8a8a8a]">Content performance metrics will appear here.</p>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="bg-white p-6 border border-[#e5e5e5]">
            <h3 className="text-sm tracking-widest uppercase mb-6">Settings</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-xs tracking-widest uppercase text-[#8a8a8a] mb-2">Site Title</label>
                <input type="text" defaultValue="LAOZI.ART" className="w-full px-4 py-3 border border-[#e5e5e5] bg-transparent" />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-[#8a8a8a] mb-2">Site Description</label>
                <textarea defaultValue="The essence beyond trend" className="w-full px-4 py-3 border border-[#e5e5e5] bg-transparent h-24" />
              </div>
              <button className="px-6 py-3 bg-[#1a1a1a] text-[#fafafa] text-sm tracking-widest uppercase">
                Save Changes
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
