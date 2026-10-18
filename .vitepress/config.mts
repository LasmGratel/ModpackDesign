import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/ModpackDesign/',
  srcDir: "docs",
  
  title: "科技整合包路线设计",
  description: "从配方网络、玩家投入与科技演进理解整合包路线设计。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '路线设计', link: '/route-principles' },
      { text: '定量分析', link: '/network-analysis' }
    ],

    sidebar: [
      {
        text: '路线设计讨论',
        collapsed: false,
        items: [
          { text: '路线设计的基本问题', link: '/route-principles' },
          { text: '把配方流程变成可分析的网络', link: '/network-analysis' },
          { text: '玩家投资：成本、回报与风险', link: '/investment-model' },
          { text: '深度、广度与聚合度', link: '/aggregation-and-machines' },
          { text: '科技演进、手搓与自动化', link: '/progression-and-automation' }
        ]
      }
    ],

    outline: { label: '本页目录' }
  }
})
