/**
 * 国际化 (i18n) 配置
 * 支持中英文切换
 */

export type Locale = 'zh' | 'en';

export const defaultLocale: Locale = 'en';
export const locales: Locale[] = ['zh', 'en'];

export const localeNames: Record<Locale, { name: string; flag: string }> = {
  zh: { name: '中文', flag: '🇨🇳' },
  en: { name: 'English', flag: '🇬🇧' },
};

// 翻译内容
export const translations = {
  // 导航
  nav: {
    observation: { zh: '观察', en: 'Observation' },
    insight: { zh: '洞察', en: 'Insight' },
    essence: { zh: '本质', en: 'Essence' },
    void: { zh: '虚无', en: 'Void' },
    jewelry: { zh: '珠宝', en: 'Jewelry' },
    login: { zh: '登录', en: 'Login' },
  },

  // 首页 Hero
  hero: {
    title: { zh: '道家美学时尚观察', en: 'The Essence Beyond Trend' },
    subtitle: { zh: 'The Essence Beyond Trend', en: 'Daoist Aesthetics in Fashion' },
    description: { 
      zh: '以道家哲学视角观察当代时尚。玄学五行与时尚趋势的深度碰撞。', 
      en: 'Observing fashion through the lens of Daoist philosophy. Less noise, more essence.' 
    },
    ctaPrimary: { zh: '开始探索', en: 'Start Observing' },
    ctaSecondary: { zh: '关于我们', en: 'About LAOZI.ART' },
  },

  // 珠宝页面
  jewelry: {
    title: { zh: '五行珠宝', en: 'Wuxing Jewelry' },
    subtitle: { zh: 'The Dao of Adornment', en: 'The Dao of Adornment' },
    description: { 
      zh: '以道家五行哲学为指引，找到与你能量共振的珠宝。不只是佩戴，更是调和。', 
      en: 'Find jewelry that resonates with your energy through Daoist Five Elements philosophy.' 
    },
    baziButton: { zh: '八字测珠宝', en: 'Bazi Calculator' },
    browseButton: { zh: '浏览图鉴', en: 'Browse Collection' },
    fiveElements: { zh: '五行与珠宝', en: 'Five Elements' },
    featured: { zh: '精选图鉴', en: 'Featured Collection' },
    viewAll: { zh: '查看全部', en: 'View All' },
    articles: { zh: '五行珠宝指南', en: 'Jewelry Guide' },
    // 八字计算器
    bazi: {
      title: { zh: '八字五行分析', en: 'Bazi Analysis' },
      solar: { zh: '阳历', en: 'Solar' },
      lunar: { zh: '阴历', en: 'Lunar' },
      year: { zh: '年', en: 'Year' },
      month: { zh: '月', en: 'Month' },
      day: { zh: '日', en: 'Day' },
      hour: { zh: '出生时辰', en: 'Birth Hour' },
      privacy: { zh: '💡 八字计算在本地完成，不会上传您的个人信息', en: '💡 Calculated locally, no data uploaded' },
      analyze: { zh: '分析五行', en: 'Analyze' },
      yourBazi: { zh: '您的八字', en: 'Your Bazi' },
      dayMaster: { zh: '日主', en: 'Day Master' },
      wuxingDist: { zh: '五行能量分布', en: 'Five Elements Distribution' },
      favorable: { zh: '喜用神', en: 'Favorable' },
      unfavorable: { zh: '忌神', en: 'Unfavorable' },
      recommendations: { zh: '推荐珠宝', en: 'Recommendations' },
      supplement: { zh: '💎 补足', en: '💎 Supplement' },
      enhance: { zh: '✨ 增强', en: '✨ Enhance' },
      avoid: { zh: '⚠️ 避免', en: '⚠️ Avoid' },
      recalculate: { zh: '重新计算', en: 'Recalculate' },
      low: { zh: '↓ 偏低（<15%）建议补足', en: '↓ Low (<15%) needs supplement' },
      high: { zh: '↑ 偏旺（>30%）可能过强', en: '↑ High (>30%) may be excessive' },
    },
  },

  // 五行
  wuxing: {
    metal: { zh: '金', en: 'Metal' },
    wood: { zh: '木', en: 'Wood' },
    water: { zh: '水', en: 'Water' },
    fire: { zh: '火', en: 'Fire' },
    earth: { zh: '土', en: 'Earth' },
    metalDesc: { zh: '收敛、精致、决断', en: 'Convergence, refinement, decisiveness' },
    woodDesc: { zh: '生长、舒展、生机', en: 'Growth, expansion, vitality' },
    waterDesc: { zh: '流动、智慧、柔韧', en: 'Flow, wisdom, flexibility' },
    fireDesc: { zh: '热情、活力、绽放', en: 'Passion, energy, bloom' },
    earthDesc: { zh: '承载、包容、安定', en: 'Support, inclusiveness, stability' },
  },

  // 珠宝详情
  jewelryDetail: {
    category: { zh: '分类', en: 'Category' },
    material: { zh: '材质', en: 'Material' },
    shape: { zh: '形状', en: 'Shape' },
    priceRange: { zh: '价格区间', en: 'Price Range' },
    primaryWuxing: { zh: '主属性', en: 'Primary Element' },
    secondaryWuxing: { zh: '次属性', en: 'Secondary Element' },
    intensity: { zh: '能量强度', en: 'Intensity' },
    brands: { zh: '推荐品牌', en: 'Recommended Brands' },
    related: { zh: '同属性推荐', en: 'Related Items' },
    low: { zh: '亲民', en: 'Affordable' },
    medium: { zh: '中等', en: 'Mid-range' },
    high: { zh: '高端', en: 'High-end' },
    luxury: { zh: '奢华', en: 'Luxury' },
  },

  // 分类
  categories: {
    ring: { zh: '戒指', en: 'Ring' },
    necklace: { zh: '项链', en: 'Necklace' },
    earring: { zh: '耳环', en: 'Earring' },
    bracelet: { zh: '手镯', en: 'Bracelet' },
    brooch: { zh: '胸针', en: 'Brooch' },
    pendant: { zh: '吊坠', en: 'Pendant' },
  },

  // 形状
  shapes: {
    round: { zh: '圆形', en: 'Round' },
    square: { zh: '方形', en: 'Square' },
    rectangle: { zh: '长方形', en: 'Rectangle' },
    drop: { zh: '水滴形', en: 'Drop' },
    triangle: { zh: '三角形', en: 'Triangle' },
    irregular: { zh: '不规则', en: 'Irregular' },
    bead: { zh: '珠形', en: 'Bead' },
  },

  // Footer
  footer: {
    slogan: { zh: '道法自然。时尚之道，归于本质。', en: 'The essence beyond trend.' },
    explore: { zh: '探索', en: 'Explore' },
    connect: { zh: '连接', en: 'Connect' },
    info: { zh: '信息', en: 'Info' },
    about: { zh: '关于', en: 'About' },
    contact: { zh: '联系', en: 'Contact' },
    newsletter: { zh: '订阅', en: 'Newsletter' },
    copyright: { zh: '© 2026 LAOZI.ART. 保留所有权利。', en: '© 2026 LAOZI.ART. All rights reserved.' },
  },

  // 通用
  common: {
    loading: { zh: '加载中...', en: 'Loading...' },
    readMore: { zh: '阅读更多', en: 'Read More' },
    readTime: { zh: '分钟阅读', en: 'min read' },
    notFound: { zh: '未找到', en: 'Not Found' },
    backToHome: { zh: '返回首页', en: 'Back to Home' },
  },
} as const;

// 获取翻译的辅助函数
export function t(key: string, locale: Locale): string {
  const keys = key.split('.');
  let value: any = translations;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // 找不到返回原 key
    }
  }
  
  if (value && typeof value === 'object' && locale in value) {
    return value[locale];
  }
  
  return key;
}
