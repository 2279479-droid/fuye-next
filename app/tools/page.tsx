import Link from "next/link";
import { tools, toolCategories } from "../../data/tools";

export default function ToolsPage() {
  return (
    <main className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10 sm:space-y-12">
      {/* Navigation Breadcrumb */}
      <nav>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors bg-white dark:bg-zinc-800 px-4 py-2 rounded-full border border-gray-100 dark:border-zinc-700 shadow-sm"
        >
          ← 返回首页
        </Link>
      </nav>

      {/* Header Section */}
      <div className="space-y-3 sm:space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          副业工具库
        </h1>
        <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400">
          工欲善其事，必先利其器。精选高效副业工具推荐。
        </p>
      </div>

      {/* Tool Categories Section */}
      <div className="space-y-10 sm:space-y-12">
        {toolCategories.map((category) => {
          const categoryTools = tools.filter(t => t.category === category.title);
          
          if (categoryTools.length === 0) return null;

          return (
            <section key={category.id} className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-zinc-800 pb-3 flex items-center gap-2">
                <span>{category.icon}</span> {category.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {categoryTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="group flex flex-col sm:flex-row items-start gap-4 p-5 sm:p-6 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-zinc-700"
                  >
                    <div className="flex w-full sm:w-auto items-start gap-4">
                      <div className="text-3xl bg-gray-50 dark:bg-zinc-700/50 p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                        {tool.icon}
                      </div>
                      <div className="flex-1 sm:hidden flex justify-between items-start">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {tool.name}
                        </h3>
                        <span className={`text-xs px-2 py-1 rounded-md font-medium whitespace-nowrap ${
                          tool.price === '付费' 
                            ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                            : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        }`}>
                          {tool.price}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 w-full">
                      <div className="hidden sm:flex justify-between items-start mb-1">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {tool.name}
                        </h3>
                        <span className={`text-xs px-2 py-1 rounded-md font-medium whitespace-nowrap ${
                          tool.price === '付费' 
                            ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                            : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        }`}>
                          {tool.price}
                        </span>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                        {tool.desc}
                      </p>
                      <button className="w-full sm:w-auto px-5 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-zinc-700/50 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-200 text-sm font-medium rounded-xl transition-colors border border-gray-200 dark:border-zinc-600">
                        查看工具
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}