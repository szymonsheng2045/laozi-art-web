"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface TiancaiNavProps {
  currentCategory?: string;
}

const categories = [
  { 
    id: "heaven", 
    label: "天", 
    subtitle: "趋势",
    description: "数据分析 · 行业趋势 · 宏观观察",
    href: "/observation?category=heaven"
  },
  { 
    id: "earth", 
    label: "地", 
    subtitle: "品牌",
    description: "品牌解析 · 工艺技术 · 材料研究",
    href: "/observation?category=earth"
  },
  { 
    id: "human", 
    label: "人", 
    subtitle: "哲思",
    description: "道家思想 · 生活美学 · 穿搭哲学",
    href: "/observation?category=human"
  },
];

export function TiancaiNav({ currentCategory }: TiancaiNavProps) {
  const pathname = usePathname();

  return (
    <nav className="tiancai-nav">
      {categories.map((cat) => (
        <Link
          key={cat.id}
          href={cat.href}
          className={`tiancai-link ${currentCategory === cat.id ? 'active' : ''}`}
          data-category={cat.id}
          title={cat.description}
        >
          <span className="text-lg">{cat.label}</span>
          <span className="text-xs ml-1 opacity-60">{cat.subtitle}</span>
        </Link>
      ))}
    </nav>
  );
}
