/*
 * 十二时辰系统
 * 根据访问时间推荐不同内容
 */

export interface Shichen {
  id: number;
  name: string;
  nameCn: string;
  timeRange: string;
  startHour: number;
  energy: string;
  energyDesc: string;
  recommendType: string;
  recommendDesc: string;
  greeting: string;
}

export const shichenData: Shichen[] = [
  {
    id: 0,
    name: "Zi",
    nameCn: "子",
    timeRange: "23:00 - 01:00",
    startHour: 23,
    energy: "阴盛",
    energyDesc: "阴气最盛，万籁俱寂",
    recommendType: "深度哲思",
    recommendDesc: "夜深人静，宜读深度长文",
    greeting: "子时静谧，适合与思想独处"
  },
  {
    id: 1,
    name: "Chou",
    nameCn: "丑",
    timeRange: "01:00 - 03:00",
    startHour: 1,
    energy: "阴转",
    energyDesc: "夜色深沉，阳气初生",
    recommendType: "品牌故事",
    recommendDesc: "沉睡之时，宜慢读细品",
    greeting: "丑时夜深，品牌故事伴你入眠"
  },
  {
    id: 2,
    name: "Yin",
    nameCn: "寅",
    timeRange: "03:00 - 05:00",
    startHour: 3,
    energy: "阳生",
    energyDesc: "阳气初生，万物萌动",
    recommendType: "趋势预测",
    recommendDesc: "一日之计，宜展望未来",
    greeting: "寅时破晓，新趋势正在萌芽"
  },
  {
    id: 3,
    name: "Mao",
    nameCn: "卯",
    timeRange: "05:00 - 07:00",
    startHour: 5,
    energy: "阳升",
    energyDesc: "日出东方，阳气渐盛",
    recommendType: "晨间灵感",
    recommendDesc: "晨光熹微，宜获取灵感",
    greeting: "卯时日出，今日灵感已就绪"
  },
  {
    id: 4,
    name: "Chen",
    nameCn: "辰",
    timeRange: "07:00 - 09:00",
    startHour: 7,
    energy: "阳旺",
    energyDesc: "食时养胃，精神饱满",
    recommendType: "实用指南",
    recommendDesc: "上午时光，宜实用内容",
    greeting: "辰时食时，实用指南开启一天"
  },
  {
    id: 5,
    name: "Si",
    nameCn: "巳",
    timeRange: "09:00 - 11:00",
    startHour: 9,
    energy: "阳极",
    energyDesc: "阳气充足，效率最高",
    recommendType: "数据分析",
    recommendDesc: "头脑清醒，宜理性阅读",
    greeting: "巳时高效，数据洞察助你做决策"
  },
  {
    id: 6,
    name: "Wu",
    nameCn: "午",
    timeRange: "11:00 - 13:00",
    startHour: 11,
    energy: "阳盛",
    energyDesc: "阳气至极，日正当中",
    recommendType: "行业快讯",
    recommendDesc: "午休之前，宜快速浏览",
    greeting: "午时日中，行业动态一览"
  },
  {
    id: 7,
    name: "Wei",
    nameCn: "未",
    timeRange: "13:00 - 15:00",
    startHour: 13,
    energy: "阳转",
    energyDesc: "日侧之时，阳气渐收",
    recommendType: "美学欣赏",
    recommendDesc: "午后慵懒，宜审美享受",
    greeting: "未时日侧，美学内容为你提神"
  },
  {
    id: 8,
    name: "Shen",
    nameCn: "申",
    timeRange: "15:00 - 17:00",
    startHour: 15,
    energy: "阴生",
    energyDesc: "阳气衰退，阴气渐生",
    recommendType: "创新突破",
    recommendDesc: "下午时光，宜突破常规",
    greeting: "申时下午，创新思维活跃"
  },
  {
    id: 9,
    name: "You",
    nameCn: "酉",
    timeRange: "17:00 - 19:00",
    startHour: 17,
    energy: "阴长",
    energyDesc: "日落西方，阴气渐盛",
    recommendType: "穿搭哲学",
    recommendDesc: "黄昏之时，宜思考穿搭",
    greeting: "酉时日暮，穿搭哲学伴你归家"
  },
  {
    id: 10,
    name: "Xu",
    nameCn: "戌",
    timeRange: "19:00 - 21:00",
    startHour: 19,
    energy: "阴盛",
    energyDesc: "黄昏之时，万物收敛",
    recommendType: "慢时尚",
    recommendDesc: "夜幕降临，宜慢品细读",
    greeting: "戌时黄昏，慢时尚适合此刻"
  },
  {
    id: 11,
    name: "Hai",
    nameCn: "亥",
    timeRange: "21:00 - 23:00",
    startHour: 21,
    energy: "阴极",
    energyDesc: "阴气渐盛，夜深人静",
    recommendType: "冥想静修",
    recommendDesc: "入夜时分，宜静心沉淀",
    greeting: "亥时入夜，静修内容助你入眠"
  }
];

export function getCurrentShichen(date: Date = new Date()): Shichen {
  const hour = date.getHours();
  const shichenIndex = Math.floor((hour + 1) % 24 / 2);
  return shichenData[shichenIndex];
}

export function getShichenByHour(hour: number): Shichen {
  const shichenIndex = Math.floor((hour + 1) % 24 / 2);
  return shichenData[shichenIndex];
}
