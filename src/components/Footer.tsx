import Link from "next/link";

const footerLinks = {
  explore: [
    { label: "Observation", href: "/observation" },
    { label: "Insight", href: "/insight" },
    { label: "Essence", href: "/essence" },
    { label: "Void", href: "/void" },
  ],
  connect: [
    { label: "Instagram", href: "https://instagram.com/laozi.art" },
    { label: "Pinterest", href: "https://pinterest.com/laoziart" },
    { label: "Newsletter", href: "/newsletter" },
  ],
  info: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Admin", href: "/admin" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[#e5e5e5] mt-32">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-xl tracking-[0.2em] font-light block mb-6">
              LAOZI<span className="text-[#8a8a8a]">.</span>ART
            </Link>
            <p className="text-sm text-[#8a8a8a] leading-relaxed max-w-xs">
              The essence beyond trend. 
              Observing fashion through the lens of Daoist philosophy.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-[#8a8a8a]">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-[#8a8a8a] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-[#8a8a8a]">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-[#8a8a8a] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-[#8a8a8a]">Info</h4>
            <ul className="space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-[#8a8a8a] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-[#e5e5e5] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#8a8a8a]">
            © 2026 LAOZI.ART. All rights reserved.
          </p>
          <p className="text-xs text-[#8a8a8a] tracking-widest">
            道法自然
          </p>
        </div>
      </div>
    </footer>
  );
}
