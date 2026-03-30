import Link from "next/link";
import { sideHustles } from "../../../data/sideHustles";

export default async function DetailDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = sideHustles.find(hustle => hustle.slug === slug);

  // 兜底页面：如果没有对应 slug 的数据，显示正在补充
  if (!data) {
    return (
      <main className="py-16 sm:py-24 px-4 max-w-3xl mx-auto text-center space-y-6">
        <div className="text-6xl mb-6">🚧</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          该副业详情正在快马加鞭补充中...
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          我们正在为您整理这部分内容，敬请期待！
        </p>
        <div className="pt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors shadow-sm"
          >
            ← 返回首页
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto space-y-6 sm:space-y-8">
      {/* Navigation Breadcrumb */}
      <nav className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors bg-white dark:bg-zinc-800 px-4 py-2 rounded-full border border-gray-100 dark:border-zinc-700 shadow-sm"
        >
          ← 返回首页
        </Link>
        <span className="text-sm font-medium text-gray-400 bg-gray-100 dark:bg-zinc-800 px-3 py-1 rounded-md">
          {data.category}
        </span>
      </nav>

      {/* Header Section */}
      <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-sm p-6 sm:p-8 border border-gray-100 dark:border-zinc-700 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="text-4xl sm:text-5xl bg-gray-50 dark:bg-zinc-700/50 p-4 rounded-2xl w-fit">
            {data.icon}
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
              {data.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mt-2">
              {data.summary}
            </p>
          </div>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-zinc-800 rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 dark:border-zinc-700">
          <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1 sm:mb-2 flex items-center gap-1">👥 适合人群</h3>
          <p className="text-gray-900 dark:text-white font-medium text-sm sm:text-base">{data.suitableFor}</p>
        </div>
        <div className="bg-white dark:bg-zinc-800 rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 dark:border-zinc-700">
          <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1 sm:mb-2 flex items-center gap-1">💰 启动成本</h3>
          <p className="text-gray-900 dark:text-white font-medium text-sm sm:text-base">{data.startupCost}</p>
        </div>
        <div className="bg-white dark:bg-zinc-800 rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 dark:border-zinc-700">
          <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1 sm:mb-2 flex items-center gap-1">🛠️ 所需工具</h3>
          <p className="text-gray-900 dark:text-white font-medium text-sm sm:text-base">{data.tools}</p>
        </div>
      </div>

      {/* Steps Section */}
      <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-sm p-6 sm:p-8 border border-gray-100 dark:border-zinc-700 space-y-6 sm:space-y-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-zinc-700 pb-4">
          如何开始（{data.steps.length} 个核心步骤）
        </h2>
        <div className="space-y-6">
          {data.steps.map((step, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm sm:text-base">
                {idx + 1}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pitfalls Section */}
      <div className="bg-orange-50 dark:bg-orange-950/20 rounded-2xl shadow-sm p-6 sm:p-8 border border-orange-100 dark:border-orange-900/50 space-y-3">
        <h2 className="text-lg font-bold text-orange-800 dark:text-orange-400 flex items-center gap-2">
          <span>⚠️</span> 避坑指南
        </h2>
        <p className="text-orange-700 dark:text-orange-300 text-sm sm:text-base leading-relaxed">
          {data.pitfalls}
        </p>
      </div>
    </main>
  );
}