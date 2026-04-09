/**
 * 珠宝数据模型与五行推荐系统
 */

import { Wuxing, wuxingNames as baziWuxingNames, BaziResult } from './bazi';

// 重新导出 wuxingNames 供组件使用
export const wuxingNames = baziWuxingNames;

export type JewelryCategory = 'ring' | 'necklace' | 'earring' | 'bracelet' | 'brooch' | 'pendant';
export type Material = 'platinum' | 'white_gold' | 'yellow_gold' | 'rose_gold' | 'silver' | 'jade' | 'wood' | 'pearl' | 'crystal';
export type Gemstone = 'diamond' | 'ruby' | 'sapphire' | 'emerald' | 'jadeite' | 'pearl_black' | 'pearl_white' | 'amethyst' | 'citrine' | 'opal' | 'garnet' | 'aquamarine' | 'turquoise' | 'obsidian' | 'moonstone' | 'crystal_clear' | 'crystal_smoky';

export interface Jewelry {
  id: string;
  name: string;
  nameCn?: string;
  category: JewelryCategory;
  material: Material;
  gemstone?: Gemstone;
  primaryWuxing: Wuxing; // 主五行
  secondaryWuxing?: Wuxing; // 次五行
  intensity: 1 | 2 | 3 | 4 | 5; // 五行能量强度 1-5
  color: string; // 主色调
  shape: 'round' | 'square' | 'rectangle' | 'drop' | 'triangle' | 'irregular' | 'bead';
  description: string;
  daoistConcept?: string; // 关联的道家概念
  priceRange?: 'low' | 'medium' | 'high' | 'luxury';
  brands?: string[];
  image?: string;
}

// 珠宝数据库
export const jewelryDatabase: Jewelry[] = [
  // 金属性珠宝
  {
    id: 'j001',
    name: 'Platinum Diamond Ring',
    nameCn: '铂金钻戒',
    category: 'ring',
    material: 'platinum',
    gemstone: 'diamond',
    primaryWuxing: 'metal',
    intensity: 5,
    color: '#E8E8E8',
    shape: 'round',
    description: '铂金与钻石的完美结合，代表金的纯粹与永恒。白色光芒象征收敛、精致与决断力。',
    daoistConcept: '纯粹 - 金曰从革，代表变革后的纯粹状态',
    priceRange: 'luxury',
    brands: ['Cartier', 'Tiffany', 'Harry Winston']
  },
  {
    id: 'j002',
    name: 'White Gold Chain',
    nameCn: '白金细链',
    category: 'necklace',
    material: 'white_gold',
    primaryWuxing: 'metal',
    intensity: 3,
    color: '#F5F5F5',
    shape: 'round',
    description: '简约的白金链，不张扬却精致。适合日常佩戴，增强决断力与执行力。',
    daoistConcept: '简约 - 少则得，多则惑',
    priceRange: 'medium',
    brands: ['Tiffany', 'Cartier']
  },
  {
    id: 'j003',
    name: 'Silver Moonstone Earrings',
    nameCn: '银镶月光石耳环',
    category: 'earring',
    material: 'silver',
    gemstone: 'moonstone',
    primaryWuxing: 'metal',
    secondaryWuxing: 'water',
    intensity: 3,
    color: '#F0F0FF',
    shape: 'drop',
    description: '月光石的柔和光泽如月光洒落，银的纯净增强其灵性。金水相生，主智慧与直觉。',
    daoistConcept: '明澈 - 静胜躁，寒胜热',
    priceRange: 'medium',
    brands: ['Pandora', 'Thomas Sabo']
  },
  {
    id: 'j004',
    name: 'Platinum Solitaire',
    nameCn: '铂金单钻吊坠',
    category: 'pendant',
    material: 'platinum',
    gemstone: 'diamond',
    primaryWuxing: 'metal',
    intensity: 4,
    color: '#FFFFFF',
    shape: 'round',
    description: '单颗钻石吊坠，极致简约。代表金的核心价值——纯粹、永恒、不容杂质。',
    daoistConcept: '专一 - 抱一为天下式',
    priceRange: 'high',
    brands: ['De Beers', 'Tiffany']
  },
  
  // 木属性珠宝
  {
    id: 'j005',
    name: 'Emerald Cut Ring',
    nameCn: '祖母绿切割戒指',
    category: 'ring',
    material: 'yellow_gold',
    gemstone: 'emerald',
    primaryWuxing: 'wood',
    secondaryWuxing: 'earth',
    intensity: 5,
    color: '#228B22',
    shape: 'rectangle',
    description: '祖母绿是木属性的极致代表，象征生长与生机。长方形切割增强其舒展的能量。',
    daoistConcept: '生发 - 木曰曲直，代表生长之力',
    priceRange: 'luxury',
    brands: ['Cartier', 'Van Cleef & Arpels']
  },
  {
    id: 'j006',
    name: 'Jadeite Pendant',
    nameCn: '翡翠吊坠',
    category: 'pendant',
    material: 'jade',
    primaryWuxing: 'wood',
    intensity: 4,
    color: '#2E8B57',
    shape: 'irregular',
    description: '东方美学的极致，翡翠温润如玉，木土相生。象征仁德与生机。',
    daoistConcept: '温润 - 上善若水，玉德之美',
    priceRange: 'high',
    brands: ['传统翡翠工坊', 'Buccellati']
  },
  {
    id: 'j007',
    name: 'Olive Wood Bracelet',
    nameCn: '橄榄木手串',
    category: 'bracelet',
    material: 'wood',
    primaryWuxing: 'wood',
    intensity: 3,
    color: '#8B7355',
    shape: 'bead',
    description: '天然木质手串，保留木材原始纹理。最纯粹的木属性能量，亲近自然。',
    daoistConcept: '自然 - 道法自然',
    priceRange: 'low',
    brands: ['独立工匠', '自然主义品牌']
  },
  {
    id: 'j008',
    name: 'Turquoise Necklace',
    nameCn: '绿松石项链',
    category: 'necklace',
    material: 'silver',
    gemstone: 'turquoise',
    primaryWuxing: 'wood',
    secondaryWuxing: 'water',
    intensity: 3,
    color: '#40E0D0',
    shape: 'irregular',
    description: '天蓝色绿松石，木质纹理的石头。木水相生，主沟通与表达。',
    daoistConcept: '交流 - 木条达，主疏通',
    priceRange: 'medium',
    brands: ['Tiffany', 'Native American Artists']
  },
  
  // 水属性珠宝
  {
    id: 'j009',
    name: 'Black Pearl Strand',
    nameCn: '黑珍珠项链',
    category: 'necklace',
    material: 'pearl',
    gemstone: 'pearl_black',
    primaryWuxing: 'water',
    intensity: 5,
    color: '#1C1C1C',
    shape: 'round',
    description: '大溪地黑珍珠，深海之精华。水的极致表现，神秘、深邃、智慧。',
    daoistConcept: '深邃 - 渊兮似万物之宗',
    priceRange: 'luxury',
    brands: ['Mikimoto', 'Tasaki']
  },
  {
    id: 'j010',
    name: 'Sapphire Drop Earrings',
    nameCn: '蓝宝石水滴耳环',
    category: 'earring',
    material: 'white_gold',
    gemstone: 'sapphire',
    primaryWuxing: 'water',
    intensity: 4,
    color: '#0F52BA',
    shape: 'drop',
    description: '水滴形蓝宝石，形态与颜色皆属水。象征智慧流动与沟通能力。',
    daoistConcept: '流动 - 天下莫柔弱于水',
    priceRange: 'high',
    brands: ['Cartier', 'Graff']
  },
  {
    id: 'j011',
    name: 'Obsidian Bracelet',
    nameCn: '黑曜石手串',
    category: 'bracelet',
    material: 'crystal',
    gemstone: 'obsidian',
    primaryWuxing: 'water',
    secondaryWuxing: 'earth',
    intensity: 3,
    color: '#1A1A1A',
    shape: 'bead',
    description: '火山玻璃黑曜石，吸纳负能量。水土属性，主保护与稳定情绪。',
    daoistConcept: '包容 - 江海所以能为百谷王者',
    priceRange: 'low',
    brands: ['能量珠宝品牌', '独立工匠']
  },
  {
    id: 'j012',
    name: 'Aquamarine Pendant',
    nameCn: '海蓝宝吊坠',
    category: 'pendant',
    material: 'silver',
    gemstone: 'aquamarine',
    primaryWuxing: 'water',
    intensity: 3,
    color: '#7FFFD4',
    shape: 'drop',
    description: '海蓝宝石，如海水般清澈。增强表达力与情绪平衡。',
    daoistConcept: '清澈 - 孰能浊以静之徐清',
    priceRange: 'medium',
    brands: ['Tiffany', 'Pomellato']
  },
  
  // 火属性珠宝
  {
    id: 'j013',
    name: 'Ruby Ring',
    nameCn: '红宝石戒指',
    category: 'ring',
    material: 'rose_gold',
    gemstone: 'ruby',
    primaryWuxing: 'fire',
    intensity: 5,
    color: '#DC143C',
    shape: 'round',
    description: '鸽血红宝石，火之精华。玫瑰金底座增强热情与活力。',
    daoistConcept: '热情 - 火曰炎上，代表上升之力',
    priceRange: 'luxury',
    brands: ['Cartier', 'Bulgari', 'Van Cleef & Arpels']
  },
  {
    id: 'j014',
    name: 'Garnet Stud Earrings',
    nameCn: '石榴石耳钉',
    category: 'earring',
    material: 'yellow_gold',
    gemstone: 'garnet',
    primaryWuxing: 'fire',
    intensity: 3,
    color: '#8B0000',
    shape: 'round',
    description: '深红色石榴石，火土相生。增强行动力与生命力。',
    daoistConcept: '活力 - 天地之大德曰生',
    priceRange: 'low',
    brands: ['Pandora', '独立品牌']
  },
  {
    id: 'j015',
    name: 'Rose Gold Bangle',
    nameCn: '玫瑰金手镯',
    category: 'bracelet',
    material: 'rose_gold',
    primaryWuxing: 'fire',
    secondaryWuxing: 'metal',
    intensity: 3,
    color: '#B76E79',
    shape: 'round',
    description: '玫瑰金的温暖色调，介于金火之间。增强魅力与人际关系。',
    daoistConcept: '温暖 - 万物负阴而抱阳',
    priceRange: 'medium',
    brands: ['Cartier', 'Tiffany']
  },
  {
    id: 'j016',
    name: 'Spinel Triangle Brooch',
    nameCn: '尖晶石三角胸针',
    category: 'brooch',
    material: 'yellow_gold',
    gemstone: 'ruby',
    primaryWuxing: 'fire',
    intensity: 4,
    color: '#FF1493',
    shape: 'triangle',
    description: '三角形切割红色尖晶石，火之锐利形态。增强决断与领导力。',
    daoistConcept: '明锐 - 知人者智，自知者明',
    priceRange: 'high',
    brands: ['Van Cleef & Arpels', '独立设计师']
  },
  
  // 土属性珠宝
  {
    id: 'j017',
    name: 'Yellow Diamond Ring',
    nameCn: '黄钻戒指',
    category: 'ring',
    material: 'yellow_gold',
    gemstone: 'diamond',
    primaryWuxing: 'earth',
    secondaryWuxing: 'metal',
    intensity: 5,
    color: '#FFD700',
    shape: 'square',
    description: '艳彩黄钻，土之精华。方形切割增强稳定感。土生金，旺财聚气。',
    daoistConcept: '承载 - 土爰稼穑，代表承载与孕育',
    priceRange: 'luxury',
    brands: ['Graff', 'Tiffany']
  },
  {
    id: 'j018',
    name: 'Citrine Pendant',
    nameCn: '黄水晶吊坠',
    category: 'pendant',
    material: 'yellow_gold',
    gemstone: 'citrine',
    primaryWuxing: 'earth',
    intensity: 3,
    color: '#FFA500',
    shape: 'drop',
    description: '黄水晶，大地的阳光。增强自信与财富能量。',
    daoistConcept: '丰盛 - 知足者富',
    priceRange: 'low',
    brands: ['Swarovski', 'Pandora']
  },
  {
    id: 'j019',
    name: 'Hetian Jade Bracelet',
    nameCn: '和田玉手镯',
    category: 'bracelet',
    material: 'jade',
    primaryWuxing: 'earth',
    intensity: 4,
    color: '#F5F5DC',
    shape: 'round',
    description: '羊脂和田玉，温润如脂。最纯粹的土属性能量，守护与安定。',
    daoistConcept: '安定 - 致虚极，守静笃',
    priceRange: 'high',
    brands: ['传统玉雕工坊']
  },
  {
    id: 'j020',
    name: 'Smoky Quartz Earrings',
    nameCn: '茶晶耳环',
    category: 'earring',
    material: 'silver',
    gemstone: 'crystal_smoky',
    primaryWuxing: 'earth',
    secondaryWuxing: 'water',
    intensity: 3,
    color: '#6B4423',
    shape: 'drop',
    description: '茶色水晶，大地深处的颜色。增强落地感与务实精神。',
    daoistConcept: '踏实 - 合抱之木，生于毫末',
    priceRange: 'medium',
    brands: ['独立设计师', '能量珠宝']
  }
];

// 根据五行获取推荐珠宝
export function getJewelryByWuxing(wuxing: Wuxing, limit: number = 5): Jewelry[] {
  return jewelryDatabase
    .filter(j => j.primaryWuxing === wuxing || j.secondaryWuxing === wuxing)
    .sort((a, b) => b.intensity - a.intensity)
    .slice(0, limit);
}

// 根据八字分析结果推荐珠宝
export interface JewelryRecommendation {
  type: 'supplement' | 'enhance' | 'avoid';
  wuxing: Wuxing;
  jewelry: Jewelry[];
  reason: string;
}

export function getRecommendations(bazi: BaziResult): JewelryRecommendation[] {
  const recommendations: JewelryRecommendation[] = [];
  
  // 补足型推荐（针对缺失五行）
  bazi.missing.forEach(wuxing => {
    recommendations.push({
      type: 'supplement',
      wuxing,
      jewelry: getJewelryByWuxing(wuxing, 4),
      reason: `您的五行缺${wuxingNames[wuxing].cn}，佩戴${wuxingNames[wuxing].cn}属性珠宝可补足能量，增强运势。`
    });
  });
  
  // 增强型推荐（针对喜用神）
  bazi.favorable.forEach(wuxing => {
    if (!bazi.missing.includes(wuxing)) {
      recommendations.push({
        type: 'enhance',
        wuxing,
        jewelry: getJewelryByWuxing(wuxing, 3),
        reason: `${wuxingNames[wuxing].cn}是您的喜用神，增强${wuxingNames[wuxing].cn}能量可提升整体运势。`
      });
    }
  });
  
  // 避免型建议（针对忌神）
  bazi.unfavorable.forEach(wuxing => {
    recommendations.push({
      type: 'avoid',
      wuxing,
      jewelry: getJewelryByWuxing(wuxing, 2),
      reason: `${wuxingNames[wuxing].cn}是您的忌神，建议减少${wuxingNames[wuxing].cn}属性珠宝的佩戴。`
    });
  });
  
  return recommendations;
}

// 获取场景化推荐
export function getSceneRecommendations(
  bazi: BaziResult, 
  scene: 'work' | 'social' | 'romance' | 'meditation'
): Jewelry[] {
  const sceneWuxing: Record<typeof scene, Wuxing[]> = {
    work: ['metal', 'water'],      // 金主决断，水主智慧
    social: ['fire', 'water'],     // 火主魅力，水主流动
    romance: ['fire', 'earth'],    // 火主热情，土主稳定
    meditation: ['earth', 'water'] // 土主安定，水主流动
  };
  
  const targetWuxing = sceneWuxing[scene];
  return jewelryDatabase
    .filter(j => targetWuxing.includes(j.primaryWuxing))
    .filter(j => !bazi.unfavorable.includes(j.primaryWuxing))
    .sort((a, b) => b.intensity - a.intensity)
    .slice(0, 6);
}

// 获取道家珠宝文章
export const jewelryArticles = [
  {
    slug: 'wuxing-jewelry-guide',
    title: '五行珠宝入门：找到属于你的能量宝石',
    excerpt: '根据生辰八字选择珠宝，不仅是审美，更是能量的调和。本文详解五行与珠宝的对应关系。',
    category: 'insight' as const,
    date: '2026.04.20',
    readTime: 8
  },
  {
    slug: 'jade-daoist-aesthetics',
    title: '玉之道：翡翠中的道家美学',
    excerpt: '从「君子如玉」到「温润而泽」，探索东方珠宝中的道家哲学。',
    category: 'essence' as const,
    date: '2026.04.22',
    readTime: 10
  },
  {
    slug: 'luxury-wuxing-cartier',
    title: 'Cartier的五行密码：西方奢华中的东方智慧',
    excerpt: '解析经典珠宝品牌的设计如何暗合五行相生之道。',
    category: 'observation' as const,
    date: '2026.04.25',
    readTime: 7
  }
];
