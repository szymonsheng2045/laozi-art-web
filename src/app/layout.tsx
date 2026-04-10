import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AuthProvider } from "@/components/auth/auth-provider";
import { PWARegister, IOSInstallHint } from "@/components/pwa-register";
import { StructuredData } from "@/components/structured-data";
import { LanguageProvider } from "@/components/language-provider";

export const metadata: Metadata = {
  title: "LAOZI ART | 道家美学时尚观察",
  description: "以道家哲学视角观察当代时尚。玄学五行与时尚趋势的深度碰撞。Less noise, more essence.",
  keywords: ["fashion", "daoism", "minimalism", "trend analysis", "laozi", "art", "道家美学", "五行穿搭", "时尚哲学", "东方美学", "易经时尚", "玄学穿搭"],
  authors: [{ name: "LAOZI.ART" }],
  creator: "LAOZI.ART",
  publisher: "LAOZI.ART",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://laozi-art.surge.sh",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "LAOZI.ART",
  },
  icons: {
    icon: [
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icon-192x192.png", sizes: "192x192" },
      { url: "/icon-512x512.png", sizes: "512x512" },
    ],
  },
  openGraph: {
    title: "LAOZI ART | 道家美学时尚观察",
    description: "以道家哲学视角观察当代时尚。玄学五行与时尚趋势的深度碰撞。",
    url: "https://laozi-art.surge.sh",
    siteName: "LAOZI.ART",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "https://laozi-art.surge.sh/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LAOZI.ART - 道家美学时尚观察",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LAOZI ART | 道家美学时尚观察",
    description: "以道家哲学视角观察当代时尚。玄学五行与时尚趋势的深度碰撞。",
    images: ["https://laozi-art.surge.sh/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code", // 需要替换
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="google-site-verification" content="2vOV2uOeIqVVUWdP7CR-IlQS9Q8xroNrzhLKbakOWrA" />
        <meta name="robots" content="index, follow" />
        <meta name="application-name" content="LAOZI.ART" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="LAOZI.ART" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#1a1a1a" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body className="antialiased transition-colors duration-500">
        <LanguageProvider>
          <AuthProvider>
            {children}
            <StructuredData />
            <PWARegister />
            <IOSInstallHint />
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
