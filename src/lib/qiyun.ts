/*
 * 气运系统
 * 根据日期计算当日时尚气运
 */

export interface Qiyun {
  score: number; // 0-5
  level: string;
  mainElement: string;
  mainElementCn: string;
  suitable: string[];
  avoid: string[];
  advice: string;
  luckyColors: string[];
}

// 天干
const tiangan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
// 地支
const dizhi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

// 计算某日的天干地支
export function getGanzhi(date: Date): { gan: string; zhi: string } {
  // 简化计算：以2024年1月1日为基准
  const base = new Date(2024, 0, 1);
  const diff = Math.floor((date.getTime() - base.getTime()) / (1000 * 60 * 60 * 24));
  
  const ganIndex = (diff + 0) % 10;
  const zhiIndex = (diff + 0) % 12;
  
  return {
    gan: tiangan[ganIndex],
    zhi: dizhi[zhiIndex]
  };
}

// 五行对应
const wuxingMap: Record<string, string> = {
  "甲": "木", "乙": "木",
  "丙": "火", "丁": "火",
  "戊": "土", "己": "土",
  "庚": "金", "辛": "金",
  "壬": "水", "癸": "水",
  "子": "水", "丑": "土", "寅": "木", "卯": "木",
  "辰": "土", "巳": "火", "午": "火", "未": "土",
  "申": "金", "酉": "金", "戌": "土", "亥": "水"
};

// 根据日期计算气运
export function getDailyQiyun(date: Date = new Date()): Qiyun {
  const { gan, zhi } = getGanzhi(date);
  const dayWuxing = wuxingMap[gan] || "土";
  
  // 基于日期计算分数（伪随机但固定）
  const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
  const score = ((seed * 9301 + 49297) % 233280) / 233280;
  const finalScore = Math.floor(score * 5) + 1;
  
  // 根据五行生成建议
  const wuxingAdvice: Record<string, { suitable: string[]; avoid: string[]; colors: string[] }> = {
    "金": {
      suitable: ["极简穿搭", "金属配饰", "结构化单品"],
      avoid: ["过于繁复", "过度装饰"],
      colors: ["白", "银", "灰"]
    },
    "木": {
      suitable: ["自然材质", "植物色系", "宽松版型"],
      avoid: ["化纤面料", "紧身束缚"],
      colors: ["青", "绿", "棕"]
    },
    "水": {
      suitable: ["流动感面料", "深色单品", "层次搭配"],
      avoid: ["僵硬剪裁", "过于正式"],
      colors: ["黑", "蓝", "紫"]
    },
    "火": {
      suitable: ["个性表达", "大胆配色", "实验性单品"],
      avoid: ["过于保守", "平淡无奇"],
      colors: ["红", "橙", "紫"]
    },
    "土": {
      suitable: ["经典单品", "大地色系", "实用主义"],
      avoid: ["盲目追新", "过度消费"],
      colors: ["黄", "棕", "驼"]
    }
  };
  
  const advice = wuxingAdvice[dayWuxing] || wuxingAdvice["土"];
  
  const levelMap: Record<number, string> = {
    1: "低迷",
    2: "平稳",
    3: "上升",
    4: "旺盛",
    5: "大吉"
  };
  
  return {
    score: finalScore,
    level: levelMap[finalScore],
    mainElement: dayWuxing,
    mainElementCn: dayWuxing,
    suitable: advice.suitable,
    avoid: advice.avoid,
    advice: `今日${dayWuxing}气当令，${advice.suitable[0]}最为适宜`,
    luckyColors: advice.colors
  };
}

// 获取节气（简化版）
export function getJieqi(date: Date): string | null {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  // 简化节气判断（近似）
  const jieqiTable: Record<string, string> = {
    "2-4": "立春", "2-19": "雨水", "3-6": "惊蛰", "3-21": "春分",
    "4-5": "清明", "4-20": "谷雨", "5-6": "立夏", "5-21": "小满",
    "6-6": "芒种", "6-21": "夏至", "7-7": "小暑", "7-23": "大暑",
    "8-7": "立秋", "8-23": "处暑", "9-8": "白露", "9-23": "秋分",
    "10-8": "寒露", "10-23": "霜降", "11-7": "立冬", "11-22": "小雪",
    "12-7": "大雪", "12-22": "冬至", "1-6": "小寒", "1-20": "大寒"
  };
  
  const key = `${month}-${day}`;
  return jieqiTable[key] || null;
}
