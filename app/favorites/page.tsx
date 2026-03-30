"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { sideHustles } from "../../data/sideHustles";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedFavorites = localStorage.getItem("fuyeFavorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const toggleFavorite = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    e.stopPropagation();

    const newFavorites = favorites.filter(id => id !== slug);
    setFavorites(newFavorites);
    localStorage.setItem("fuyeFavorites", JSON.stringify(newFavorites));
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) return null;

  const favoriteItems = sideHustles.filter(hustle => favorites.includes(hustle.slug));

  const HustleCard = ({ item }: { item: any }) => {
    return (
      <Link
        href={`/detail/${item.slug}`}
        className="group relative flex gap-4 p-5 sm:p-6 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-zinc-700"
      >
        <button
          onClick={(e) => toggleFavorite(e, item.slug)}
          className="absolute top-4 right-4 p-2 rounded-full transition-all text-yellow-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 bg-yellow-50 dark:bg-yellow-900/20"
          title="取消收藏"
        >
          <svg className="w-5 h-5" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </button>

        <div className="text-3xl sm:text-4xl bg-gray-50 dark:bg-zinc-700/50 p-3 sm:p-4 rounded-xl h-fit group-hover:scale-110 transition-transform flex-shrink-0">
          {item.icon}
        </div>
        <div className="flex flex-col justify-center pr-8">
          <div className="flex items-center gap-2 mb-1 sm:mb-2">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {item.title}
            </h3>
            <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-zinc-700 text-gray-600 dark:text-gray-300 rounded-md">
              {item.category}
            </span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            {item.summary}
          </p>
        </div>
      </Link>
    );
  };

  return (
    <main className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10 sm:space-y-12">
      {/* Navigation Breadcrumb */}
      <nav>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors bg-white dark:bg-zinc-800 px-4 py-2 rounded-full border border-gray-100 dark:border-zinc-700 shadow-sm w-fit"
        >
          ← 返回首页
        </Link>
      </nav>

      {/* Header Section */}
      <div className="space-y-3 sm:space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white flex items-center gap-3">
          <span>⭐</span> 我的收藏
        </h1>
        <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400">
          你收藏的副业项目都在这里（共 {favoriteItems.length} 个）
        </p>
      </div>

      {/* Favorites List Section */}
      {favoriteItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {favoriteItems.map((item) => (
            <HustleCard key={item.slug} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white dark:bg-zinc-800 rounded-2xl border border-gray-100 dark:border-zinc-700">
          <span className="text-5xl mb-4 block">📭</span>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            暂无收藏
          </h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto mb-8">
            你还没有收藏任何副业项目。去首页或分类页看看，遇到感兴趣的项目就点击右上角的星星收藏吧！
          </p>
          <Link
            href="/category"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-sm sm:text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors shadow-sm"
          >
            去探索副业 →
          </Link>
        </div>
      )}
    </main>
  );
}