export interface Step {
  title: string;
  desc: string;
}

export interface SideHustle {
  slug: string;
  title: string;
  summary: string;
  icon: string;
  category: string;
  suitableFor: string;
  startupCost: string;
  tools: string;
  steps: Step[];
  pitfalls: string;
  isHot?: boolean;
}

export const sideHustleCategories = [
  { id: "ai", title: "AI 副业", icon: "🤖", color: "text-blue-600 bg-blue-100" },
  { id: "content", title: "内容副业", icon: "✍️", color: "text-purple-600 bg-purple-100" },
  { id: "skill", title: "技能接单", icon: "💻", color: "text-green-600 bg-green-100" },
  { id: "ecommerce", title: "电商副业", icon: "🛒", color: "text-orange-600 bg-orange-100" },
];

export const sideHustles: SideHustle[] = [
  {
    slug: "ai-writing",
    title: "AI 写作接单",
    summary: "利用 AI 工具代写文章、报告，轻松变现。",
    icon: "✨",
    category: "AI 副业",
    suitableFor: "学生、白领、自由职业者，有基础文字表达能力。",
    startupCost: "极低（0 ~ 100元/月工具费用）。",
    tools: "ChatGPT、Kimi、Claude 等大模型工具。",
    steps: [
      { title: "熟练使用 AI 工具", desc: "选择并熟悉至少一款主流 AI 工具（如 Kimi、ChatGPT）。学习如何编写优秀的 Prompt（提示词），让 AI 生成高质量、不生硬的内容。" },
      { title: "找准内容垂直领域", desc: "不要什么都写，选择 1-2 个你熟悉的领域深耕。比如：公众号软文、小红书种草文案、电商详情页描述、或者企业工作报告等。" },
      { title: "接单平台注册与运营", desc: "在闲鱼、淘宝、小红书、豆瓣接单群等平台发布你的服务。前期可以低价接单积累案例和好评，后面逐步提高客单价。" }
    ],
    pitfalls: "警惕纯复制粘贴带来的同质化问题，客户需要的是经过人工排版和逻辑润色的成品。",
    isHot: true,
  },
  {
    slug: "ai-drawing",
    title: "AI 绘图变现",
    summary: "利用 AI 生成壁纸、插画、头像进行售卖。",
    icon: "🎨",
    category: "AI 副业",
    suitableFor: "有一定审美、对视觉表现感兴趣的人群。",
    startupCost: "中等（需订阅 Midjourney 等工具，约 100-200元/月）。",
    tools: "Midjourney、Stable Diffusion、剪映。",
    steps: [
      { title: "学习 AI 绘画基础", desc: "掌握基本提示词语法和工具操作，能够稳定生成特定风格的图片。" },
      { title: "确定变现方向", desc: "可以选择做无版权壁纸号、情侣头像定制、老照片修复或者商用插画外包。" },
      { title: "引流与接单", desc: "在抖音、小红书发布精美作品引流，或在闲鱼上架定制服务。" }
    ],
    pitfalls: "版权问题需注意，不要直接售卖带有明显他人IP的生成图像。",
    isHot: false,
  },
  {
    slug: "xiaohongshu",
    title: "小红书代运营",
    summary: "帮助商家或个人运营小红书账号，涨粉引流。",
    icon: "📱",
    category: "内容副业",
    suitableFor: "网感好、懂排版、了解年轻人喜好的人群。",
    startupCost: "基本为 0，只需一部手机或电脑即可开始。",
    tools: "小红书 APP、剪映、Canva 或稿定设计。",
    steps: [
      { title: "打造个人账号矩阵", desc: "先自己做一个垂直领域的账号并拿到结果（几千粉丝），这是你接单的最好背书。" },
      { title: "整理报价方案", desc: "制定不同档位的代运营套餐，例如仅做图文排版、包月发文、甚至包涨粉等不同收费标准。" },
      { title: "主动寻找客户", desc: "在平台内搜索急需流量的本地商家、小品牌，通过私信或者在相关群聊发布自己的接单信息。" }
    ],
    pitfalls: "不要轻易接“包涨粉”的单子，平台流量玄学，很容易达不到指标导致纠纷。",
    isHot: true,
  },
  {
    slug: "notion-template",
    title: "Notion 模板出售",
    summary: "设计高颜值实用的 Notion 模板并出售。",
    icon: "📝",
    category: "内容副业",
    suitableFor: "逻辑清晰、喜欢整理和手账的效率控。",
    startupCost: "0 成本。",
    tools: "Notion、Figma（制作封面）。",
    steps: [
      { title: "发现需求痛点", desc: "寻找学生（复习计划）、职场人（项目管理）、生活家（记账健身）的真实痛点。" },
      { title: "设计与打磨", desc: "制作功能闭环且颜值高的模板，包含示例数据和使用说明。" },
      { title: "多渠道分发售卖", desc: "上架到闲鱼、Gumroad，或者通过小红书展示使用效果来引流转化。" }
    ],
    pitfalls: "模板容易被盗版倒卖，建议做好版本迭代和售后社群来提供额外价值。",
    isHot: false,
  },
  {
    slug: "ppt",
    title: "PPT 定制",
    summary: "为企业或个人制作高质量 PPT，按页收费。",
    icon: "📊",
    category: "技能接单",
    suitableFor: "有一定审美能力、熟练掌握办公软件的人群。",
    startupCost: "极低（可能需要购买一些素材会员，约 50-100元/年）。",
    tools: "Microsoft PowerPoint、WPS、iSlide、各类图标库。",
    steps: [
      { title: "积累高质量作品集", desc: "在接单前，先设计几套不同风格（商务、极简、学术等）的 PPT 模板作为自己的门面。" },
      { title: "入驻接单平台", desc: "注册淘宝、闲鱼，或加入专门的 PPT 设计师接单群、威客网，发布你的作品和接单意向。" },
      { title: "规范沟通与交付流程", desc: "接单时务必确认好对方需求、页数、风格和交稿时间，并收取一定比例定金，带水印交付初稿后再收尾款。" }
    ],
    pitfalls: "沟通不畅会导致反复修改，务必在第一版时就确认好整体风格和排版基调。",
    isHot: true,
  },
  {
    slug: "video-editing",
    title: "视频剪辑接单",
    summary: "为自媒体或商家提供短视频剪辑服务。",
    icon: "🎬",
    category: "技能接单",
    suitableFor: "对视频节奏有把控力、有耐心的人。",
    startupCost: "低（需一台性能尚可的电脑）。",
    tools: "剪映专业版、Premiere Pro、Final Cut Pro。",
    steps: [
      { title: "熟练剪辑工具", desc: "掌握卡点、转场、字幕、基础特效和调色。" },
      { title: "制作样片", desc: "混剪几个热门影视或者模仿爆款短视频风格，作为作品集展示。" },
      { title: "寻找合作方", desc: "在各大自媒体群找急需剪辑的博主，或在豆瓣、兼职群接单。" }
    ],
    pitfalls: "经常遇到甲方需求不明确，记得在接单前明确修改次数，超出需额外加钱。",
    isHot: false,
  },
  {
    slug: "xianyu",
    title: "闲鱼卖货",
    summary: "无货源模式或二手闲置转卖，低成本创业。",
    icon: "🛍️",
    category: "电商副业",
    suitableFor: "时间相对自由、有一定耐心处理客服消息的人群。",
    startupCost: "0 ~ 极低（如果是无货源模式几乎 0 成本）。",
    tools: "闲鱼 APP、1688 / 拼多多（货源平台）。",
    steps: [
      { title: "选择售卖商品类型", desc: "可以先从自己家里的二手闲置开始，或者去 1688、拼多多寻找差价大、有需求的商品进行搬运。" },
      { title: "优化商品上架信息", desc: "拍照要真实（或者找好网图），标题要包含核心搜索关键词，描述要清晰自然，突出商品优势。" },
      { title: "每日擦亮与客服回复", desc: "保持活跃，每天擦亮商品，及时回复买家咨询，遇到讲价可以适当让步以促成交易和好评积累。" }
    ],
    pitfalls: "无货源模式需注意上家发货时效和售后问题，容易引起买家差评。",
    isHot: true,
  },
  {
    slug: "ecommerce-cs",
    title: "电商客服兼职",
    summary: "利用业余时间为网店提供线上客服支持。",
    icon: "💬",
    category: "电商副业",
    suitableFor: "打字快、脾气好、业余时间碎片化的人。",
    startupCost: "0 成本。",
    tools: "千牛、拼多多商家版、微信。",
    steps: [
      { title: "了解平台规则", desc: "熟悉淘宝或拼多多的客服规则，知道违禁词和基本话术。" },
      { title: "寻找兼职岗位", desc: "在招聘软件（如Boss直聘、兼职猫）上搜索兼职客服。" },
      { title: "熟悉产品与回复", desc: "整理一套快捷回复话术，了解店铺产品的基本属性以快速响应买家。" }
    ],
    pitfalls: "按提成算的话可能收入不稳定，时薪制需要看好是否有乱扣钱的霸王条款。",
    isHot: false,
  },
];
