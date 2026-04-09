import { Wuxing, wuxingNames } from "@/lib/bazi";
import { jewelryDatabase, getJewelryByWuxing } from "@/lib/jewelry";
import { JewelryCard } from "@/components/jewelry/jewelry-card";
import Link from "next/link";
import { notFound } from "next/navigation";

const wuxingDescriptions: Record<Wuxing, { 
  concept: string; 
  meaning: string;
  materials: string[];
  colors: string[];
}> = {
  metal: {
    concept: "从革",
    meaning: "收敛、精致、决断。金曰从革，代表变革后的纯粹与秩序。",
    materials: ["铂金", "白金", "银", "白金", "钻石", "白水晶"],
    colors: ["白色", "银色", "金色"]
  },
  wood: {
    concept: "曲直",
    meaning: "生长、舒展、生机。木曰曲直，代表向上生长的力量。",
    materials: ["翡翠", "祖母绿", "绿松石", "橄榄石", "木质"],
    colors: ["绿色", "青色"]
  },
  water: {
    concept: "润下",
    meaning: "流动、智慧、柔韧。水曰润下，代表向下流动的智慧。",
    materials: ["黑珍珠", "蓝宝石", "海蓝宝", "黑曜石", "月光石"],
    colors: ["黑色", "蓝色", "灰色"]
  },
  fire: {
    concept: "炎上",
    meaning: "热情、活力、绽放。火曰炎上，代表上升的热情与光明。",
    materials: ["红宝石", "石榴石", "尖晶石", "玫瑰金"],
    colors: ["红色", "紫色", "橙色", "粉色"]
  },
  earth: {
    concept: "稼穑",
    meaning: "承载、包容、安定。土爰稼穑，代表承载与孕育的力量。",
    materials: ["黄钻", "黄水晶", "和田玉", "茶晶", "黄金"],
    colors: ["黄色", "棕色", "米色"]
  }
};

// 为静态导出生成所有可能的参数
export function generateStaticParams() {
  return ['metal', 'wood', 'water', 'fire', 'earth'].map((type) => ({
    type,
  }));
}

interface Props {
  params: Promise<{ type: string }>;
}

export default async function WuxingPage({ params }: Props) {
  const { type } = await params;
  const wuxingType = type as Wuxing;
  
  if (!wuxingNames[wuxingType]) {
    notFound();
  }

  const wuxing = wuxingNames[wuxingType];
  const description = wuxingDescriptions[wuxingType];
  const jewelry = getJewelryByWuxing(wuxingType, 20);

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Hero */}
      <section 
        className="py-16 px-4"
        style={{ backgroundColor: wuxing.color + '10' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl text-white"
            style={{ backgroundColor: wuxing.color }}
          >
            {wuxing.cn}
          </div>
          <h1 className="text-4xl font-serif mb-2">{wuxing.en}</h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-4">
            {wuxing.cn}曰{description.concept}
          </p>
          <p className="max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400">
            {description.meaning}
          </p>
        </div>
      </section>

      {/* Characteristics */}
      <section className="py-12 px-4 bg-white dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-medium mb-4">推荐材质</h2>
              <div className="flex flex-wrap gap-2">
                {description.materials.map(m => (
                  <span 
                    key={m}
                    className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-medium mb-4">推荐颜色</h2>
              <div className="flex flex-wrap gap-2">
                {description.colors.map(c => (
                  <span 
                    key={c}
                    className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jewelry Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-serif mb-8">
            {wuxing.cn}属性珠宝 
            <span className="text-base font-normal text-zinc-500 ml-2">
              共 {jewelry.length} 件
            </span>
          </h2>
          
          {jewelry.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {jewelry.map(j => (
                <JewelryCard key={j.id} jewelry={j} showWuxing={false} />
              ))}
            </div>
          ) : (
            <p className="text-center text-zinc-500 py-12">
              该分类暂无珠宝，敬请期待
            </p>
          )}
        </div>
      </section>

      {/* Other Elements */}
      <section className="py-12 px-4 bg-white dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-medium mb-6 text-center">探索其他五行</h2>
          <div className="flex justify-center gap-4">
            {(['metal', 'wood', 'water', 'fire', 'earth'] as Wuxing[])
              .filter(w => w !== wuxingType)
              .map(w => (
                <Link
                  key={w}
                  href={`/jewelry/wuxing/${w}`}
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  style={{ backgroundColor: wuxingNames[w].color }}
                >
                  {wuxingNames[w].cn}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
