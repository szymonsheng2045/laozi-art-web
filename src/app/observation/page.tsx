import { articles } from "@/lib/articles";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Observations | LAOZI.ART",
  description: "Curated insights from the intersection of Eastern philosophy and global fashion.",
};

export default function ObservationsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Page header */}
          <div className="max-w-2xl mb-20">
            <p className="text-[#8a8a8a] text-sm tracking-[0.3em] uppercase mb-4">Archive</p>
            <h1 className="heading-xl mb-6">All Observations</h1>
            <p className="body-lg">
              A collection of essays exploring the quiet side of fashion—
              where Daoist philosophy meets contemporary design.
            </p>
          </div>
          
          {/* Category filters */}
          <div className="flex flex-wrap gap-4 mb-16 pb-8 border-b border-[#e5e5e5]">
            {["all", "observation", "insight", "essence", "void"].map((cat) => (
              <button
                key={cat}
                className="text-sm tracking-widest uppercase text-[#8a8a8a] hover:text-[#1a1a1a] transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
          
          {/* Articles list */}
          <div className="space-y-12">
            {articles.map((article) => (
              <article key={article.id} className="group">
                <Link href={`/observation/${article.slug}`} className="block">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start py-8 border-t border-[#e5e5e5] group-hover:border-[#1a1a1a] transition-colors duration-300">
                    {/* Meta */}
                    <div className="md:col-span-1">
                      <span className="text-xs tracking-[0.2em] uppercase text-[#c9a961] block mb-2">
                        {article.category}
                      </span>
                      <span className="text-xs text-[#8a8a8a]">
                        {article.date}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="md:col-span-3">
                      <h2 className="text-2xl font-light mb-3 group-hover:text-[#8a8a8a] transition-colors duration-300">
                        {article.title}
                      </h2>
                      <p className="text-[#8a8a8a] leading-relaxed max-w-xl mb-4">
                        {article.excerpt}
                      </p>
                      <span className="text-xs text-[#8a8a8a]">
                        {article.readTime} min read
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
