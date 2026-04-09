"use client";

import { Jewelry, wuxingNames } from "@/lib/jewelry";
import Link from "next/link";

interface JewelryCardProps {
  jewelry: Jewelry;
  showWuxing?: boolean;
}

export function JewelryCard({ jewelry, showWuxing = true }: JewelryCardProps) {
  const categoryNames: Record<string, string> = {
    ring: '戒指',
    necklace: '项链',
    earring: '耳环',
    bracelet: '手镯',
    brooch: '胸针',
    pendant: '吊坠'
  };

  return (
    <Link
      href={`/jewelry/item/${jewelry.id}`}
      className="group block bg-white dark:bg-zinc-900 rounded-xl overflow-hidden hover:shadow-lg transition-all"
    >
      {/* Image Placeholder */}
      <div 
        className="aspect-square relative overflow-hidden"
        style={{ backgroundColor: jewelry.color + '20' }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="w-24 h-24 rounded-full opacity-30"
            style={{ backgroundColor: jewelry.color }}
          />
        </div>
        
        {/* 五行标签 */}
        {showWuxing && (
          <div className="absolute top-3 left-3 flex gap-1">
            <span 
              className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs"
              style={{ backgroundColor: wuxingNames[jewelry.primaryWuxing].color }}
            >
              {wuxingNames[jewelry.primaryWuxing].cn}
            </span>
            {jewelry.secondaryWuxing && (
              <span 
                className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs opacity-70"
                style={{ backgroundColor: wuxingNames[jewelry.secondaryWuxing].color }}
              >
                {wuxingNames[jewelry.secondaryWuxing].cn}
              </span>
            )}
          </div>
        )}

        {/* 强度指示 */}
        <div className="absolute top-3 right-3">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }, (_, i) => (
              <div
                key={i}
                className={`w-1 h-3 rounded-full ${
                  i < jewelry.intensity 
                    ? 'bg-zinc-800 dark:bg-zinc-200' 
                    : 'bg-zinc-200 dark:bg-zinc-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs text-zinc-500 mb-1">{categoryNames[jewelry.category]}</p>
            <h3 className="font-medium group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
              {jewelry.nameCn || jewelry.name}
            </h3>
          </div>
        </div>
        
        {jewelry.daoistConcept && (
          <p className="text-xs text-zinc-500 mt-2 line-clamp-1">
            {jewelry.daoistConcept.split(' - ')[0]}
          </p>
        )}

        {jewelry.brands && jewelry.brands.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {jewelry.brands.slice(0, 2).map(brand => (
              <span 
                key={brand}
                className="text-xs px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded"
              >
                {brand}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
