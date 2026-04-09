/*
 * 三才分类体系
 * 一生二，二生三，三生万物
 * 
 * 天 - 趋势/数据（宏观）
 * 地 - 品牌/工艺（微观）
 * 人 - 哲思/生活（人文）
 */

export type TiancaiCategory = "heaven" | "earth" | "human";

export interface TiancaiInfo {
  id: TiancaiCategory;
  label: string;
  subtitle: string;
  description: string;
  color: string;
  characteristics: string[];
}

export const tiancaiMap: Record<TiancaiCategory, TiancaiInfo> = {
  heaven: {
    id: "heaven",
    label: "天",
    subtitle: "趋势",
    description: "数据分析 · 行业趋势 · 宏观观察",
    color: "var(--color-heaven)",
    characteristics: ["宏观", "数据", "趋势", "预测"]
  },
  earth: {
    id: "earth",
    label: "地",
    subtitle: "品牌",
    description: "品牌解析 · 工艺技术 · 材料研究",
    color: "var(--color-earth)",
    characteristics: ["微观", "工艺", "品牌", "技术"]
  },
  human: {
    id: "human",
    label: "人",
    subtitle: "哲思",
    description: "道家思想 · 生活美学 · 穿搭哲学",
    color: "var(--color-human)",
    characteristics: ["人文", "哲学", "生活", "美学"]
  }
};

// 文章分类映射到三才
export const categoryToTiancai: Record<string, TiancaiCategory> = {
  "observation": "heaven",  // 观察 -> 天（趋势数据）
  "insight": "human",       // 洞察 -> 人（哲学思考）
  "essence": "earth",       // 本质 -> 地（品牌工艺）
  "void": "human"           // 虚 -> 人（哲学概念）
};

// 根据文章 slug 映射到三才（更精确的映射）
export const slugToTiancai: Record<string, TiancaiCategory> = {
  // 天 - 趋势数据
  "return-of-silence": "heaven",
  "quiet-luxury-data": "heaven",
  
  // 地 - 品牌工艺
  "material-as-philosophy": "earth",
  "issey-miyake-pleats": "earth",
  "doing-less-lemaire": "earth",
  
  // 人 - 哲学思考
  "void-in-fashion": "human",
  "slow-revolution": "human",
  "wabi-sabi-fashion": "human"
};

export function getTiancaiByCategory(category: string): TiancaiInfo {
  const tiancai = categoryToTiancai[category] || "human";
  return tiancaiMap[tiancai];
}

export function getTiancaiBySlug(slug: string): TiancaiInfo {
  const tiancai = slugToTiancai[slug] || categoryToTiancai["insight"];
  return tiancaiMap[tiancai];
}
