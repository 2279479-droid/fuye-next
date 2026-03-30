"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { sideHustles, sideHustleCategories } from "../../data/sideHustles";

export default function CategoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("fuyeFavorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const toggleFavorite = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    e.stopPropagation();

    let newFavorites;
    if (favorites.includes(slug)) {
      newFavorites = favorites.filter(id => id !== slug);
    } else {
      newFavorites = [...favorites, slug];
    }
    
    setFavorites(newFavorites);
    localStorage.setItem("fuyeFavorites", JSON.stringify(newFavorites));
  };

  const HustleCard = ({ item }: { item: any }) => {
    const isFavorited = favorites.includes(item.slug);

    return (
      <Link
        href={`/detail/${item.slug}`}
        className="group relative flex flex-col gap-3 sm:gap-4 p-5 sm:p-6 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-zinc-700"
      >
        <button
          onClick={(e) => toggleFavorite(e, item.slug)}
          className={`absolute top-4 right-4 p-2 rounded-full transition-all z-10 ${
            isFavorited 
              ? "text-yellow-400 hover:text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20" 
              : "text-gray-300 hover:text-yellow-400 hover:bg-gray-50 dark:hover:bg-zinc-700 dark:text-zinc-600"
          }`}
          title={isFavorited ? "取消收藏" : "加入收藏"}
        >
          <svg className="w-5 h-5" fill={isFavorited ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </button>

        <div className="text-3xl sm:text-4xl bg-gray-50 dark:bg-zinc-700/50 p-3 sm:p-4 rounded-xl w-fit group-hover:scale-110 transition-transform">
          {item.icon}
        </div>
        <div className="pr-6">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {item.title}
          </h3>
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
      <div className="space-y-6 sm:space-y-8">
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            副业分类
          </h1>
          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400">
            探索不同领域的副业机会，找到最适合你的方向
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl w-full">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="text-gray-400 group-focus-within:text-blue-500 transition-colors">🔍</span>
            </div>
            <input
              type="text"
              placeholder="在全部分类中搜索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-11 pr-4 py-3.5 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all"
            />
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="space-y-10 sm:space-y-12">
        {sideHustleCategories.map((category) => {
          // Filter items by category and search query
          const itemsInCategory = sideHustles.filter(h => 
            h.category === category.title && 
            (h.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
             h.summary.toLowerCase().includes(searchQuery.toLowerCase()))
          );
          
          if (itemsInCategory.length === 0) return null;

          return (
            <section key={category.id} className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3">
                <div className={`text-xl sm:text-2xl p-2 sm:p-3 rounded-xl ${category.color} dark:bg-opacity-20`}>
                  {category.icon}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {itemsInCategory.map((item) => (
                  <HustleCard key={item.slug} item={item} />
                ))}
              </div>
            </section>
          );
        })}

        {/* Show empty state if everything is filtered out */}
        {sideHustleCategories.every(category => 
          sideHustles.filter(h => 
            h.category === category.title && 
            (h.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
             h.summary.toLowerCase().includes(searchQuery.toLowerCase()))
          ).length === 0
        ) && searchQuery !== "" && (
          <div className="text-center py-12 bg-white dark:bg-zinc-800 rounded-2xl border border-gray-100 dark:border-zinc-700">
            <span className="text-4xl mb-4 block">😅</span>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">没有找到相关的副业</h3>
            <p className="text-gray-500 dark:text-gray-400">换个关键词试试看</p>
          </div>
        )}
      </div>
    </main>
  );
}