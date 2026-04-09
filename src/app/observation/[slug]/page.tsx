import { notFound } from "next/navigation";
import { getArticleBySlug, articles } from "@/lib/articles";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) {
    return {
      title: "Not Found | LAOZI.ART",
    };
  }
  
  return {
    title: `${article.title} | LAOZI.ART`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) {
    notFound();
  }

  // Convert markdown-style content to HTML
  const contentHtml = article.content
    .split('\n\n')
    .map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return `<h2 class="text-2xl font-light mt-16 mb-8" key="${index}">${paragraph.replace('## ', '')}</h2>`;
      }
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return `<h3 class="text-lg font-normal mt-8 mb-4 text-[#1a1a1a]" key="${index}">${paragraph.replace(/\*\*/g, '')}</h3>`;
      }
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').map(line => line.replace('- ', ''));
        return `<ul class="list-disc list-inside space-y-2 mb-6 text-[#8a8a8a]" key="${index}">${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
      }
      if (paragraph.startsWith('---')) {
        return `<hr class="border-t border-[#e5e5e5] my-12" key="${index}" />`;
      }
      return `<p class="text-[#8a8a8a] leading-loose mb-6" key="${index}">${paragraph}</p>`;
    })
    .join('');

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <article className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link 
            href="/" 
            className="text-sm tracking-widest uppercase text-[#8a8a8a] hover:text-[#1a1a1a] transition-colors mb-12 inline-block"
          >
            ← Back
          </Link>
          
          {/* Article header */}
          <header className="mb-16">
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-xs tracking-[0.2em] uppercase text-[#c9a961]">
                {article.category}
              </span>
              <span className="text-xs text-[#8a8a8a]">
                {article.date} · {article.readTime} min read
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              {article.title}
            </h1>
            <p className="text-xl text-[#8a8a8a] leading-relaxed max-w-2xl">
              {article.excerpt}
            </p>
          </header>
          
          {/* Divider */}
          <div className="w-px h-16 bg-gradient-to-b from-[#1a1a1a] to-transparent mx-auto mb-16" />
          
          {/* Article content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
          
          {/* Article footer */}
          <footer className="mt-20 pt-12 border-t border-[#e5e5e5]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <p className="text-sm text-[#8a8a8a]">
                  Published on {article.date}
                </p>
              </div>
              <div className="flex space-x-6">
                <a 
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://laozi.art/observation/${article.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#8a8a8a] hover:text-[#1a1a1a] transition-colors"
                >
                  Share on X
                </a>
                <a 
                  href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(`https://laozi.art/observation/${article.slug}`)}&description=${encodeURIComponent(article.excerpt)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#8a8a8a] hover:text-[#1a1a1a] transition-colors"
                >
                  Pin it
                </a>
              </div>
            </div>
          </footer>
        </div>
      </article>
      
      <Footer />
    </main>
  );
}
