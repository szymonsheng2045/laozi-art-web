"use client";

import { useState } from "react";

interface BaziFormProps {
  onSubmit: (year: number, month: number, day: number, hour: number) => void;
}

export function BaziForm({ onSubmit }: BaziFormProps) {
  const [year, setYear] = useState(1990);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);
  const [hour, setHour] = useState(12);
  const [useLunar, setUseLunar] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(year, month, day, hour);
  };

  // 时辰选项
  const shichen = [
    { value: 0, label: '子时 (23:00-01:00)' },
    { value: 2, label: '丑时 (01:00-03:00)' },
    { value: 4, label: '寅时 (03:00-05:00)' },
    { value: 6, label: '卯时 (05:00-07:00)' },
    { value: 8, label: '辰时 (07:00-09:00)' },
    { value: 10, label: '巳时 (09:00-11:00)' },
    { value: 12, label: '午时 (11:00-13:00)' },
    { value: 14, label: '未时 (13:00-15:00)' },
    { value: 16, label: '申时 (15:00-17:00)' },
    { value: 18, label: '酉时 (17:00-19:00)' },
    { value: 20, label: '戌时 (19:00-21:00)' },
    { value: 22, label: '亥时 (21:00-23:00)' },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center justify-center gap-4 mb-6">
        <button
          type="button"
          onClick={() => setUseLunar(false)}
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            !useLunar 
              ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900' 
              : 'text-zinc-500 hover:text-zinc-700'
          }`}
        >
          阳历
        </button>
        <button
          type="button"
          onClick={() => setUseLunar(true)}
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            useLunar 
              ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900' 
              : 'text-zinc-500 hover:text-zinc-700'
          }`}
        >
          阴历
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="block text-sm text-zinc-500 mb-1">年</label>
          <input
            type="number"
            min="1900"
            max="2100"
            value={year}
            onChange={(e) => setYear(parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400"
          />
        </div>
        <div>
          <label className="block text-sm text-zinc-500 mb-1">月</label>
          <select
            value={month}
            onChange={(e) => setMonth(parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400"
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}月</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm text-zinc-500 mb-1">日</label>
          <input
            type="number"
            min="1"
            max="31"
            value={day}
            onChange={(e) => setDay(parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-zinc-500 mb-1">出生时辰</label>
        <select
          value={hour}
          onChange={(e) => setHour(parseInt(e.target.value))}
          className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400"
        >
          {shichen.map((sc) => (
            <option key={sc.value} value={sc.value}>{sc.label}</option>
          ))}
        </select>
      </div>

      <p className="text-xs text-zinc-400 text-center">
        💡 八字计算在本地完成，不会上传您的个人信息
      </p>

      <button
        type="submit"
        className="w-full py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors font-medium"
      >
        分析五行
      </button>
    </form>
  );
}
