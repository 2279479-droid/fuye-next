import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "副业导航 - 找到适合你的副业",
  description: "帮你找到适合自己的副业项目和工具",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 font-sans selection:bg-blue-100 selection:text-blue-900">
        {/* Global Navigation Bar */}
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="text-2xl">🚀</span> 
              <span className="hidden sm:inline">副业导航</span>
            </Link>
            <nav className="flex gap-4 sm:gap-6 text-sm font-medium items-center">
              <Link href="/" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                首页
              </Link>
              <Link href="/category" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                分类
              </Link>
              <Link href="/tools" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                工具库
              </Link>
              <div className="w-px h-4 bg-gray-300 dark:bg-zinc-700 hidden sm:block"></div>
              <Link href="/favorites" className="flex items-center gap-1 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                <span>⭐</span>
                <span className="hidden sm:inline">收藏</span>
              </Link>
            </nav>
          </div>
        </header>
        
        {/* Page Content */}
        <div className="flex-1 w-full">
          {children}
        </div>
      </body>
    </html>
  );
}