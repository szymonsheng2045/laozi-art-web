/**
 * 八字五行计算工具
 * 基于农历和干支历法的简化实现
 */

export type Wuxing = 'metal' | 'wood' | 'water' | 'fire' | 'earth';
export type Yinyang = 'yin' | 'yang';

// 天干
export type Stem = '甲' | '乙' | '丙' | '丁' | '戊' | '己' | '庚' | '辛' | '壬' | '癸';

// 地支
export type Branch = '子' | '丑' | '寅' | '卯' | '辰' | '巳' | '午' | '未' | '申' | '酉' | '戌' | '亥';

// 天干五行映射
const stemToWuxing: Record<Stem, Wuxing> = {
  '甲': 'wood', '乙': 'wood',
  '丙': 'fire', '丁': 'fire',
  '戊': 'earth', '己': 'earth',
  '庚': 'metal', '辛': 'metal',
  '壬': 'water', '癸': 'water'
};

// 地支五行映射（本气）
const branchToWuxing: Record<Branch, Wuxing> = {
  '子': 'water', '丑': 'earth', '寅': 'wood', '卯': 'wood',
  '辰': 'earth', '巳': 'fire', '午': 'fire', '未': 'earth',
  '申': 'metal', '酉': 'metal', '戌': 'earth', '亥': 'water'
};

// 天干阴阳
const stemYinyang: Record<Stem, Yinyang> = {
  '甲': 'yang', '乙': 'yin',
  '丙': 'yang', '丁': 'yin',
  '戊': 'yang', '己': 'yin',
  '庚': 'yang', '辛': 'yin',
  '壬': 'yang', '癸': 'yin'
};

export interface BaziResult {
  yearStem: Stem;
  yearBranch: Branch;
  monthStem: Stem;
  monthBranch: Branch;
  dayStem: Stem;
  dayBranch: Branch;
  hourStem: Stem;
  hourBranch: Branch;
  dayMaster: Stem; // 日主
  wuxing: Record<Wuxing, number>; // 五行分数 0-100
  favorable: Wuxing[]; // 喜用神
  unfavorable: Wuxing[]; // 忌神
  missing: Wuxing[]; // 缺失的五行
}

// 简化版：公历转八字（基于1900-2100的近似算法）
export function calculateBazi(
  year: number,
  month: number,
  day: number,
  hour: number
): BaziResult {
  // 年柱计算
  const yearStemIndex = (year - 4) % 10;
  const yearBranchIndex = (year - 4) % 12;
  
  // 月柱计算（基于节气简化，这里用近似值）
  const monthStemIndex = (yearStemIndex * 2 + month + 1) % 10;
  const monthBranchIndex = (month + 1) % 12;
  
  // 日柱计算（简化版，基于1900-01-31为基准）
  const baseDate = new Date(1900, 0, 31);
  const targetDate = new Date(year, month - 1, day);
  const diffDays = Math.floor((targetDate.getTime() - baseDate.getTime()) / (1000 * 60 * 60 * 24));
  const dayStemIndex = diffDays % 10;
  const dayBranchIndex = diffDays % 12;
  
  // 时柱计算
  const hourBranchIndex = Math.floor((hour + 1) / 2) % 12;
  const hourStemIndex = (dayStemIndex * 2 + hourBranchIndex) % 10;
  
  const stems: Stem[] = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
  const branches: Branch[] = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
  
  const yearStem = stems[yearStemIndex];
  const yearBranch = branches[yearBranchIndex];
  const monthStem = stems[monthStemIndex];
  const monthBranch = branches[monthBranchIndex];
  const dayStem = stems[dayStemIndex];
  const dayBranch = branches[dayBranchIndex];
  const hourStem = stems[hourStemIndex];
  const hourBranch = branches[hourBranchIndex];
  
  // 计算五行分布
  const wuxingCount: Record<Wuxing, number> = {
    metal: 0, wood: 0, water: 0, fire: 0, earth: 0
  };
  
  // 天干五行
  [yearStem, monthStem, dayStem, hourStem].forEach(stem => {
    wuxingCount[stemToWuxing[stem]]++;
  });
  
  // 地支五行（本气，简化计算）
  [yearBranch, monthBranch, dayBranch, hourBranch].forEach(branch => {
    wuxingCount[branchToWuxing[branch]] += 0.8; // 地支本气权重略低
  });
  
  // 转换为百分比
  const total = Object.values(wuxingCount).reduce((a, b) => a + b, 0);
  const wuxing: Record<Wuxing, number> = {
    metal: Math.round((wuxingCount.metal / total) * 100),
    wood: Math.round((wuxingCount.wood / total) * 100),
    water: Math.round((wuxingCount.water / total) * 100),
    fire: Math.round((wuxingCount.fire / total) * 100),
    earth: Math.round((wuxingCount.earth / total) * 100)
  };
  
  // 找出缺失的五行（低于10%视为缺失）
  const missing = (Object.keys(wuxing) as Wuxing[]).filter(w => wuxing[w] < 10);
  
  // 计算喜用神（简化逻辑：根据日主和五行强弱）
  const dayMaster = dayStem;
  const dayMasterWuxing = stemToWuxing[dayMaster];
  const dayMasterYinyang = stemYinyang[dayMaster];
  
  let favorable: Wuxing[] = [];
  let unfavorable: Wuxing[] = [];
  
  // 根据日主五行和整体平衡判断喜忌
  const wuxingEntries = Object.entries(wuxing) as [Wuxing, number][];
  const strongest = wuxingEntries.reduce((a, b) => a[1] > b[1] ? a : b);
  const weakest = wuxingEntries.reduce((a, b) => a[1] < b[1] ? a : b);
  
  // 简化喜用神判断：补足最弱的，避免最强的过旺
  favorable = [weakest[0]];
  if (missing.length > 0) {
    favorable = [...new Set([...missing, ...favorable])];
  }
  
  // 忌神为最强的五行（过旺）
  if (strongest[1] > 30) {
    unfavorable = [strongest[0]];
  }
  
  return {
    yearStem, yearBranch,
    monthStem, monthBranch,
    dayStem, dayBranch,
    hourStem, hourBranch,
    dayMaster,
    wuxing,
    favorable,
    unfavorable,
    missing
  };
}

// 五行中文名称
export const wuxingNames: Record<Wuxing, { cn: string; en: string; color: string }> = {
  metal: { cn: '金', en: 'Metal', color: '#C0C0C0' },
  wood: { cn: '木', en: 'Wood', color: '#228B22' },
  water: { cn: '水', en: 'Water', color: '#1E90FF' },
  fire: { cn: '火', en: 'Fire', color: '#DC143C' },
  earth: { cn: '土', en: 'Earth', color: '#D2691E' }
};

// 获取五行相生关系
export function getGeneratingWuxing(wuxing: Wuxing): Wuxing {
  const generating: Record<Wuxing, Wuxing> = {
    metal: 'water',
    water: 'wood',
    wood: 'fire',
    fire: 'earth',
    earth: 'metal'
  };
  return generating[wuxing];
}

// 获取五行相克关系
export function getOvercomingWuxing(wuxing: Wuxing): Wuxing {
  const overcoming: Record<Wuxing, Wuxing> = {
    metal: 'wood',
    wood: 'earth',
    earth: 'water',
    water: 'fire',
    fire: 'metal'
  };
  return overcoming[wuxing];
}
