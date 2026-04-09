/*
 * 五行时尚体系
 * 金木水火土 - 对应不同时尚属性
 */

export type Wuxing = "metal" | "wood" | "water" | "fire" | "earth";

export interface WuxingInfo {
  id: Wuxing;
  name: string;
  nameCn: string;
  color: string;
  season: string;
  materials: string[];
  brands: string[];
  characteristics: string[];
  fashionStyle: string;
}

export const wuxingData: Record<Wuxing, WuxingInfo> = {
  metal: {
    id: "metal",
    name: "Metal",
    nameCn: "金",
    color: "#C0C0C0",
    season: "Autumn",
    materials: ["silk", "metal", "satin", "structured cotton"],
    brands: ["Jil Sander", "Bottega Veneta", "The Row"],
    characteristics: ["refined", "minimal", "sharp", "precise"],
    fashionStyle: "极简主义 · 金属光泽 · 几何剪裁"
  },
  wood: {
    id: "wood",
    name: "Wood",
    nameCn: "木",
    color: "#4A7C59",
    season: "Spring",
    materials: ["linen", "organic cotton", "plant-dyed fabric", "hemp"],
    brands: ["Story mfg.", "Bode", "Visvim"],
    characteristics: ["natural", "growing", "organic", "earthy"],
    fashionStyle: "自然主义 · 植物染 · 手工质感"
  },
  water: {
    id: "water",
    name: "Water",
    nameCn: "水",
    color: "#2C3E50",
    season: "Winter",
    materials: ["fluid fabrics", "knitwear", "drapey silk", "velvet"],
    brands: ["Issey Miyake", "Lemaire", "Yohji Yamamoto"],
    characteristics: ["flowing", "adaptable", "deep", "intuitive"],
    fashionStyle: "流动感 · 垂坠面料 · 深邃色调"
  },
  fire: {
    id: "fire",
    name: "Fire",
    nameCn: "火",
    color: "#8B4513",
    season: "Summer",
    materials: ["leather", "denim", "bold prints", "textured wool"],
    brands: ["Maison Margiela", "Rick Owens", "Comme des Garçons"],
    characteristics: ["passionate", "transformative", "bold", "creative"],
    fashionStyle: "先锋实验 · 皮革丹宁 · 强烈个性"
  },
  earth: {
    id: "earth",
    name: "Earth",
    nameCn: "土",
    color: "#8B6914",
    season: "All Seasons",
    materials: ["wool", "tweed", "cashmere", "natural canvas"],
    brands: ["Margaret Howell", "A.P.C.", "Studio Nicholson"],
    characteristics: ["stable", "nurturing", "classic", "grounded"],
    fashionStyle: "经典永恒 · 大地色系 · 实穿主义"
  }
};

// 根据日期计算当日五行
export function getDailyWuxing(date: Date = new Date()): Wuxing {
  const day = date.getDay(); // 0-6
  const wuxingList: Wuxing[] = ["metal", "wood", "water", "fire", "earth", "metal", "water"];
  return wuxingList[day];
}

// 文章五行映射
export const articleWuxing: Record<string, Wuxing> = {
  "return-of-silence": "metal",
  "material-as-philosophy": "earth",
  "doing-less-lemaire": "water",
  "void-in-fashion": "water",
  "slow-revolution": "wood",
  "issey-miyake-pleats": "water",
  "wabi-sabi-fashion": "wood",
  "quiet-luxury-data": "metal"
};

export function getArticleWuxing(slug: string): Wuxing {
  return articleWuxing[slug] || "earth";
}
