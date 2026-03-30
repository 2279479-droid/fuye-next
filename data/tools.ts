export interface Tool {
  name: string;
  desc: string;
  price: string;
  icon: string;
  category: string;
}

export const toolCategories = [
  { id: "writing", title: "写作工具", icon: "✍️" },
  { id: "design", title: "设计工具", icon: "🎨" },
  { id: "video", title: "剪辑工具", icon: "🎬" },
  { id: "ecommerce", title: "电商工具", icon: "🛒" },
];

export const tools: Tool[] = [
  { name: "ChatGPT", desc: "AI 对话与写作辅助，支持多场景交互", price: "基础免费", icon: "🤖", category: "写作工具" },
  { name: "Kimi", desc: "擅长长文生成、超长文档阅读与润色", price: "基础免费", icon: "🌙", category: "写作工具" },
  { name: "Claude", desc: "逻辑严密、文风自然的 AI 写作助手", price: "基础免费", icon: "🧠", category: "写作工具" },
  
  { name: "Canva", desc: "小白也能轻松上手的海报与社媒图文设计", price: "基础免费", icon: "🖌️", category: "设计工具" },
  { name: "Midjourney", desc: "目前最顶级的 AI 绘画与插画生成工具", price: "付费", icon: "🌌", category: "设计工具" },
  { name: "Figma", desc: "专业且支持协作的界面设计神器", price: "基础免费", icon: "📐", category: "设计工具" },

  { name: "剪映", desc: "极其简单易用，自带大量特效的视频剪辑", price: "免费/付费", icon: "✂️", category: "剪辑工具" },
  { name: "CapCut", desc: "剪映国际版，适合做海外短视频", price: "免费/付费", icon: "🎥", category: "剪辑工具" },

  { name: "1688", desc: "全网低价货源平台，一件代发首选", price: "免费", icon: "📦", category: "电商工具" },
  { name: "蝉妈妈", desc: "抖音快手等短视频平台的选品数据分析", price: "基础免费", icon: "📊", category: "电商工具" },
  { name: "千牛", desc: "淘宝天猫商家必备移动工作台", price: "免费", icon: "🛍️", category: "电商工具" },
];
