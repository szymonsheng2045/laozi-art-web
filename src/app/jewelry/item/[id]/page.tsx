import { jewelryDatabase, wuxingNames } from "@/lib/jewelry";
import Link from "next/link";
import { notFound } from "next/navigation";

// 为静态导出生成所有可能的参数
export function generateStaticParams() {
  return jewelryDatabase.map((jewelry) => ({
    id: jewelry.id,
  }));
}

interface Props {
  params: Promise<{ id: string }>;
}

export default async function JewelryDetailPage({ params }: Props) {
  const { id } = await params;
  
  const jewelry = jewelryDatabase.find(j => j.id === id);
  
  if (!jewelry) {
    notFound();
  }

  const categoryNames: Record<string, string> = {
    ring: '戒指', necklace: '项链', earring: '耳环',
    bracelet: '手镯', brooch: '胸针', pendant: '吊坠'
  };

  const shapeNames: Record<string, string> = {
    round: '圆形', square: '方形', rectangle: '长方形',
    drop: '水滴形', triangle: '三角形', irregular: '不规则', bead: '珠形'
  };

  const materialNames: Record<string, string> = {
    platinum: '铂金', white_gold: '白金', yellow_gold: '黄金',
    rose_gold: '玫瑰金', silver: '银', jade: '翡翠/玉',
    wood: '木质', pearl: '珍珠', crystal: '水晶'
  };

  const priceNames: Record<string, string> = {
    low: '亲民', medium: '中等', high: '高端', luxury: '奢华'
  };

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 pt-6">
        <nav className="text-sm text-zinc-500">
          <Link href="/jewelry" className="hover:underline">五行珠宝</Link>
          <span className="mx-2">/</span>
          <Link href={`/jewelry/wuxing/${jewelry.primaryWuxing}`} className="hover:underline">
            {wuxingNames[jewelry.primaryWuxing].cn}属性
          </Link>
          <span className="mx-2">/</span>
          <span>{jewelry.nameCn}</span>
        </nav>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div 
            className="aspect-square rounded-2xl flex items-center justify-relative overflow-hidden relative"
            style={{ backgroundColor: jewelry.color + '15' }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-48 h-48 rounded-full opacity-40"
                style={{ backgroundColor: jewelry.color }}
              />
            </div>
            
            {/* 五行标识 */}
            <div className="absolute top-4 left-4 flex gap-2">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                style={{ backgroundColor: wuxingNames[jewelry.primaryWuxing].color }}
              >
                <span className="text-lg">{wuxingNames[jewelry.primaryWuxing].cn}</span>
              </div>
              {jewelry.secondaryWuxing && (
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white opacity-70"
                  style={{ backgroundColor: wuxingNames[jewelry.secondaryWuxing].color }}
                >
                  <span className="text-lg">{wuxingNames[jewelry.secondaryWuxing].cn}</span>
                </div>
              )}
            </div>
          </div>

          {/* Info Section */}
          <div>
            <p className="text-sm text-zinc-500 mb-2">{categoryNames[jewelry.category]}</p>
            <h1 className="text-3xl font-serif mb-2">{jewelry.nameCn}</h1>
            <p className="text-zinc-500 italic mb-6">{jewelry.name}</p>

            {/* 五行属性 */}
            <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl mb-6">
              <h2 className="text-sm font-medium mb-3">五行属性</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-500">主属性</span>
                  <span 
                    className="px-2 py-0.5 rounded text-white"
                    style={{ backgroundColor: wuxingNames[jewelry.primaryWuxing].color }}
                  >
                    {wuxingNames[jewelry.primaryWuxing].cn} · {wuxingNames[jewelry.primaryWuxing].en}
                  </span>
                </div>
                {jewelry.secondaryWuxing && (
                  <div className="flex justify-between">
                    <span className="text-zinc-500">次属性</span>
                    <span 
                      className="px-2 py-0.5 rounded text-white opacity-80"
                      style={{ backgroundColor: wuxingNames[jewelry.secondaryWuxing].color }}
                    >
                      {wuxingNames[jewelry.secondaryWuxing].cn}
                    </span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-zinc-500">能量强度</span>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 rounded-full ${
                          i < jewelry.intensity 
                            ? 'bg-zinc-800 dark:bg-zinc-200' 
                            : 'bg-zinc-200 dark:bg-zinc-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 材质信息 */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-3 bg-white dark:bg-zinc-900 rounded-lg">
                <p className="text-xs text-zinc-500">材质</p>
                <p className="font-medium">{materialNames[jewelry.material]}</p>
              </div>
              <div className="p-3 bg-white dark:bg-zinc-900 rounded-lg">
                <p className="text-xs text-zinc-500">形状</p>
                <p className="font-medium">{shapeNames[jewelry.shape]}</p>
              </div>
              {jewelry.priceRange && (
                <div className="p-3 bg-white dark:bg-zinc-900 rounded-lg">
                  <p className="text-xs text-zinc-500">价格区间</p>
                  <p className="font-medium">{priceNames[jewelry.priceRange]}</p>
                </div>
              )}
            </div>

            {/* 道家概念 */}
            {jewelry.daoistConcept && (
              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl mb-6">
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  {jewelry.daoistConcept}
                </p>
              </div>
            )}

            {/* 描述 */}
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              {jewelry.description}
            </p>

            {/* 推荐品牌 */}
            {jewelry.brands && jewelry.brands.length > 0 && (
              <div>
                <h3 className="text-sm font-medium mb-3">推荐品牌</h3>
                <div className="flex flex-wrap gap-2">
                  {jewelry.brands.map(brand => (
                    <span 
                      key={brand}
                      className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related */}
        <div className="mt-16">
          <h2 className="text-xl font-serif mb-6">同属性推荐</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {jewelryDatabase
              .filter(j => j.primaryWuxing === jewelry.primaryWuxing && j.id !== jewelry.id)
              .slice(0, 4)
              .map(j => (
                <Link
                  key={j.id}
                  href={`/jewelry/item/${j.id}`}
                  className="p-4 bg-white dark:bg-zinc-900 rounded-xl hover:shadow-md transition-shadow"
                >
                  <div 
                    className="w-12 h-12 rounded-full mb-3"
                    style={{ backgroundColor: j.color }}
                  />
                  <p className="font-medium">{j.nameCn}</p>
                  <p className="text-xs text-zinc-500">{j.gemstone}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
