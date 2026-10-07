# 个人网站

一个静态的个人主页 + 简历站，用 [Astro](https://astro.build) 构建。
构建产物是纯 HTML/CSS，可以免费托管在 Cloudflare Pages 上，不需要服务器、不需要备案。

---

## 1. 你只需要改这一个文件

**`src/data/profile.ts`** —— 名字、自我介绍、经历、项目、技能、教育、联系方式全在里面，
每一项都有中文注释说明怎么填。

页面是自动拼装的：

- 数组留空 `[]`，对应的整个栏目（包括顶部导航里的链接）会自动隐藏；
- 某项的字符串留空 `""`，那一项就不显示；
- 想加内容直接复制粘贴一项，改改文字即可。

其它你可能想动的地方：

| 想改什么 | 改哪里 |
| --- | --- |
| 头像 | 换掉 `public/images/avatar.svg`，或者放一张 `avatar.jpg` 到 `public/images/`，再把 `profile.ts` 里的 `avatar` 改成 `/images/avatar.jpg` |
| 简历 PDF | 把 PDF 放进 `public/`（例如 `public/resume.pdf`），把 `resumeFile` 填成 `"/resume.pdf"`，首页会出现「下载简历」按钮 |
| 配色 | `src/styles/global.css` 最上面的 `:root` 变量（`--accent` 是主色） |
| 页面结构 | `src/pages/index.astro`（栏目顺序）和 `src/components/` 里的组件 |
| 浏览器标签标题 / 分享卡片描述 | `profile.ts` 最下面的 `site` |

---

## 2. 本地预览

```bash
npm install     # 第一次才需要，装依赖
npm run dev     # 打开 http://localhost:4321
```

改完内容保存，浏览器会自动刷新。

想生成最终产物：

```bash
npm run build   # 产物在 dist/ 目录
npm run preview # 本地预览 dist/ 的成品（http://localhost:4321）
```

---

## 3. 部署上线（Cloudflare Pages，免费）

### 方式 A：直接上传（最快，不需要 Git）

1. 本地跑 `npm run build`，得到 `dist` 文件夹；
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Upload assets**；
3. 项目名随便取（例如 `my-site`），把 `dist` 文件夹里的**内容**拖进去上传；
4. 几十秒后会得到一个 `xxx.pages.dev` 的网址，网站已经在线了。

以后每次改完内容，重新 `npm run build` 再上传一次即可。

### 方式 B：连 GitHub，自动构建（推荐长期用）

1. 把整个项目推到 GitHub 仓库；
2. Cloudflare Pages → **Connect to Git** → 选中这个仓库；
3. 构建配置填：
   - Framework preset：**Astro**
   - Build command：`npm run build`
   - Build output directory：`dist`
4. 以后只要 `git push`，Cloudflare 自动重新构建发布，不用手动上传。

### 绑定自己的域名

1. 在 Cloudflare 买域名，或者把别处买的域名 NS 转到 Cloudflare；
2. Pages 项目 → **Custom domains** → 添加你的域名，按提示加一条 CNAME 记录；
3. HTTPS 证书自动签发，不用管。

绑定后建议顺手改两处，让搜索引擎和分享卡片拿到正确地址：

- `astro.config.mjs`：取消 `site` 的注释，填 `"https://你的域名"`
- `src/data/profile.ts`：`site.url` 填同样的值

---

## 4. 关于备案

用 Cloudflare Pages（海外节点）**不需要 ICP 备案**，域名解析到 Cloudflare 即可直接访问。

需要注意的两点：

- 国内访问速度取决于线路，通常可用但不如国内服务器快；
- 如果以后换成国内服务器/国内 CDN，就必须先完成 ICP 备案。

---

## 5. 常见问题

**改完没生效？**
先确认改的是 `src/data/profile.ts`，然后重启 `npm run dev` 或重新 `npm run build`。

**想加博客栏目？**
Astro 官方支持 Markdown 内容集合，可以后续在 `src/content/` 下加文章目录，再建 `src/pages/blog/` 页面。目前没做，是因为空栏目比没有栏目更减分。

**打印/导出 PDF 简历？**
浏览器里直接 Ctrl+P，样式已经做过打印适配：导航、按钮、页脚会自动隐藏，只留正文内容。

---

## 6. 本项目的部署信息

| 项 | 值 |
| --- | --- |
| 线上地址 | https://baimo-48b.pages.dev |
| GitHub 仓库 | https://github.com/baimo923127-ops/baimo-repository |
| Cloudflare Pages 项目名 | `baimo-48b` |
| 构建命令 | `npm run build` |
| 构建输出目录 | `dist` |
| 生产分支 | `main` |

**日常更新流程**（改完内容后执行）：

```bash
git add -A
git commit -m "更新内容"
git push
```

推送后 Cloudflare 会自动重新构建并发布，约 1 分钟生效。
注意：推送需要能访问 GitHub（挂梯子），但访问自己的网站不需要。
