import { defineConfig } from "astro/config";

// 部署到自己的域名后，把 site 改成 "https://你的域名"，例如 "https://dafeiyu.com"
// 还没买域名就保持注释状态，不影响本地预览和部署。
export default defineConfig({
  site: "https://baimo-48b.pages.dev",
  build: {
    inlineStylesheets: "auto",
  },
});
