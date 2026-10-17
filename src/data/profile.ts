/**
 * ============================================================
 *  这是整个网站唯一需要你改的文件。
 *  所有文字、链接、经历、项目都写在这里，改完即生效。
 *  页面上不显示的内容（比如某段经历暂时不想放），
 *  就把对应那一项整段删掉，或者把数组留空 []。
 * ============================================================
 */

/* ---------- 1. 基本信息（页头 + 页脚 + SEO 都用它） ---------- */
export const profile = {
  /** 你的名字，显示在页面最上方 */
  name: "白墨",
  /** 一句话介绍，显示在名字下方。建议 15-30 字，说清"你是谁 + 做什么" */
  tagline: "学一点光电，做一点东西。",
  intro: "北京工业大学光电本科在读。目前参与单光子探测方向的科研训练，也在学习用 MATLAB 做仿真。",
  /** 所在城市，可以留空 "" */
  location: "北京",
  /** 联系邮箱 */
  email: "baimo923127@gmail.com",
  /** 头像图片：把图片放进 public/images/ 目录，然后填 "/images/文件名.jpg" */
  avatar: "/images/avatar.jpg",
  /**
   * 简历 PDF（可选）：把 PDF 放进 public/ 目录，这里填 "/resume.pdf"。
   * 不需要就保持空字符串 ""，按钮会自动隐藏。
   */
  resumeFile: "",

  /** 自我介绍段落，每写一句就是一段。想加就加，想删就删 */
  bio: [
    "我是白墨，一个喜欢动手做东西、也还在探索方向的光电本科生。",
    "目前在课题组参与超导纳米线单光子探测器（SNSPD）方向的科研训练，协助开展器件仿真计算，接下来想继续了解光电芯片与单光子探测。",
  ],

  /** 社交链接。不需要的整行删掉即可 */
  socials: [
    { label: "GitHub", url: "https://github.com/baimo923127-ops" },
    { label: "微信", url: "" },
  ],
};

/* ---------- 2. 工作 / 实习经历（最新的一条放最上面） ---------- */
export const experience = [
  // 现在留空：整个「工作经历」栏目和导航栏里的链接都会自动消失，不会留空壳。
  // 以后有实习 / 竞赛 / 科研经历时，把下面这段取消注释、改成你的内容即可：
  //
  // {
  //   period: "2025.07 — 2025.09",
  //   role: "实习岗位 / 参赛角色",
  //   org: "公司 / 实验室 / 战队名称",
  //   location: "城市",
  //   summary: "一句话概括你负责什么。",
  //   highlights: [
  //     "具体成果，最好带数字。",
  //   ],
  // },
];

/* ---------- 3. 项目 / 作品（想放几个放几个） ---------- */
export const projects = [
  {
    title: "超导纳米线单光子探测器（SNSPD）芯片设计与制备",
    shortTitle: "从一束光，到一次探测。",
    status: "科研训练 · 进行中",
    period: "2026 — 至今",
    summary:
      "围绕 SNSPD 的器件结构与制备工艺开展科研训练，逐步了解光电芯片中的单光子探测。",
    image: { src: "/images/photon-study.svg", alt: "光与纳米线回折形态的抽象示意", caption: "光与探测 / 概念示意，非器件设计或实验结果" },
    capabilities: [],
    detailsLabel: "了解这项科研训练",
    details: [
      { label: "课题背景", text: "科研训练课题「面向 AI 的光电芯片」下的子课题，关注超导纳米线单光子探测器的芯片设计与制备。" },
      { label: "我的参与", text: "参与课题组科研训练，协助进行器件仿真计算。" },
      { label: "正在学习", text: "课外自学 MATLAB，将课程学习与器件仿真联系起来。" },
    ],
    tags: ["SNSPD", "超导器件", "光电芯片", "微纳加工"],
    links: [],
    highlights: [],
  },
  {
    title: "dsh-latex-kit · DeepSeek Harness 插件",
    shortTitle: "让 LaTeX 写作少一点折腾。",
    status: "开源工具 · 持续完善",
    period: "v0.1.0",
    summary: "将 LaTeX 编译、参考文献检查与公式渲染整合进 AI 助手的工作流程，减少写作时反复切换工具的麻烦。",
    image: null,
    capabilities: [
      { label: "编译与诊断", description: "管理编译运行时，检查环境，定位编译错误。", tools: "latex_runtime / latex_doctor / latex_compile" },
      { label: "参考文献检查", description: "检查 BibTeX 条目、补全缺失字段、核对引用。", tools: "bib_lint / bib_fill / cite_audit" },
      { label: "公式转 SVG", description: "将 TeX 公式渲染为可缩放的矢量图。", tools: "latex_render" },
    ],
    detailsLabel: "功能与使用说明",
    details: [
      { label: "为什么做", text: "围绕科研写作中的编译、文献和公式处理需求，把常用操作整理为 DeepSeek Harness 可调用的工具。" },
      { label: "如何使用", text: "从 GitHub 安装插件，按需下载 Tectonic 编译运行时。文献补全需要联网，公式渲染需要可选的 MathJax。具体步骤见安装说明。" },
      { label: "当前状态", text: "MIT 开源，早期版本持续完善。仓库记录了 Windows 下的编译与中文文档验证；DSH 宿主内启动与跨平台验证仍待完善。" },
    ],
    tags: ["JavaScript", "LaTeX", "科研工具", "MIT"],
    links: [
      { label: "查看源码", url: "https://github.com/baimo923127-ops/dsh-latex-kit" },
      { label: "安装与使用", url: "https://github.com/baimo923127-ops/dsh-latex-kit#安装" },
    ],
    highlights: [],
  },
];

/* ---------- 4. 技能（按分组写，每组一行标签） ---------- */
export const skills = [
  { group: "工具", items: ["Python", "MATLAB"], note: "正在自学 MATLAB，协助课题组进行器件仿真计算。" },
  { group: "在学", items: ["模拟电子技术", "物理光学", "信号与系统"], note: "把课程里的基础知识，慢慢连接到实际问题。" },
  { group: "关注", items: ["光电芯片", "单光子探测"], note: "继续探索器件、光与信息之间的联系。" },
];

/* ---------- 5. 教育经历（不需要就写 [] ） ---------- */
export const education = [
  {
    period: "2025.09 — 2029.06（预计毕业）",
    school: "北京工业大学",
    degree: "光电信息科学与工程 · 本科在读",
    detail: "",
  },
];

/* ---------- 6. 网站自身的设置 ---------- */
export const site = {
  /** 浏览器标签页上显示的文字 */
  title: "白墨 · 个人主页",
  /** 搜索引擎和分享卡片上显示的描述 */
  description: "我是白墨，北京工业大学光电本科生。记录单光子探测方向的科研训练、仿真学习，以及正在动手做的东西。",
  /**
   * 网站正式域名。买了域名后改这里，形如 "https://yourname.com"。
   * 还没买就先留空字符串 ""。
   */
  url: "https://baimo-48b.pages.dev",
};
