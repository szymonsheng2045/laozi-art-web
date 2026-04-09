"use client";

import { usePathname } from "next/navigation";

export function StructuredData() {
  const pathname = usePathname();
  const baseUrl = "https://laozi-art.surge.sh";
  const currentUrl = `${baseUrl}${pathname}`;

  // 网站结构化数据
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LAOZI.ART",
    url: baseUrl,
    description: "以道家哲学视角观察当代时尚。玄学五行与时尚趋势的深度碰撞。",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // 组织结构化数据
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LAOZI.ART",
    url: baseUrl,
    logo: `${baseUrl}/icon-512x512.png`,
    sameAs: [
      "https://instagram.com/laozi.art",
      "https://twitter.com/laoziart",
      "https://pinterest.com/laoziart",
    ],
  };

  // 如果是文章页面，添加文章结构化数据
  const isArticle = pathname.startsWith("/observation/");
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      {isArticle && (
        <ArticleStructuredData 
          url={currentUrl} 
          slug={pathname.replace("/observation/", "")}
        />
      )}
    </>
  );
}

// 文章结构化数据
function ArticleStructuredData({ url, slug }: { url: string; slug: string }) {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: getArticleTitle(slug),
    url: url,
    image: `https://laozi-art.surge.sh/og-image.jpg`,
    datePublished: getArticleDate(slug),
    dateModified: getArticleDate(slug),
    author: {
      "@type": "Organization",
      name: "LAOZI.ART",
      url: "https://laozi-art.surge.sh",
    },
    publisher: {
      "@type": "Organization",
      name: "LAOZI.ART",
      logo: {
        "@type": "ImageObject",
        url: "https://laozi-art.surge.sh/icon-512x512.png",
      },
    },
    description: getArticleDescription(slug),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleData),
      }}
    />
  );
}

// 辅助函数
function getArticleTitle(slug: string): string {
  const titles: Record<string, string> = {
    "return-of-silence": "The Return of Silence | LAOZI.ART",
    "material-as-philosophy": "Material as Philosophy | LAOZI.ART",
    "doing-less-lemaire": "Lemaire: The Art of Doing Less | LAOZI.ART",
    "void-in-fashion": "The Void: Presence in Absence | LAOZI.ART",
    "slow-revolution": "The Slow Revolution | LAOZI.ART",
    "issey-miyake-pleats": "Issey Miyake: The Geometry of Flow | LAOZI.ART",
    "wabi-sabi-fashion": "Wabi-Sabi: The Beauty of Imperfection | LAOZI.ART",
    "quiet-luxury-data": "The Numbers Behind Quiet Luxury | LAOZI.ART",
  };
  return titles[slug] || "Article | LAOZI.ART";
}

function getArticleDate(slug: string): string {
  const dates: Record<string, string> = {
    "return-of-silence": "2026-04-02",
    "material-as-philosophy": "2026-03-28",
    "doing-less-lemaire": "2026-03-20",
    "void-in-fashion": "2026-04-05",
    "slow-revolution": "2026-04-08",
    "issey-miyake-pleats": "2026-04-10",
    "wabi-sabi-fashion": "2026-04-12",
    "quiet-luxury-data": "2026-04-15",
  };
  return dates[slug] || "2026-01-01";
}

function getArticleDescription(slug: string): string {
  const descriptions: Record<string, string> = {
    "return-of-silence": "In a season of maximalism, a quiet movement emerges. Designers are rediscovering the power of restraint.",
    "material-as-philosophy": "Why raw silk and unbleached cotton are becoming the new luxury language. The Dao of fabric.",
    "doing-less-lemaire": "Christophe Lemaire on intentionality, elimination, and the quiet confidence of clothes.",
    "void-in-fashion": "Exploring negative space in garment design. When what is removed becomes more powerful.",
    "slow-revolution": "Why the fastest trend in fashion is the decision to stop chasing trends entirely.",
    "issey-miyake-pleats": "How one designer merged technology and nature to create garments that move like water.",
    "wabi-sabi-fashion": "How Japanese aesthetics of impermanence are reshaping contemporary fashion.",
    "quiet-luxury-data": "Data reveals: the fastest growing trend in fashion is toward no trends at all.",
  };
  return descriptions[slug] || "LAOZI.ART article";
}
