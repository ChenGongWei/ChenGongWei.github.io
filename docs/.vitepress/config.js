/** vitepress 配置文件 */
import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'ChenGongWei',
    description: '我的博客站',
    base: '/', // 部署时的路径

    /**
     * 主题配置
     * 配置文档：https://vitepress.vuejs.org/config/theme-configs.html
     */
    themeConfig: {
        // repo: '', // github 仓库地址
        siteTitle: '测试',
        // 头部导航
        nav: [
            { text: '首页', link: '/' },
            { text: '关于', link: '/about' },
        ],
        // 侧边导航
        sidebae: [
            { text: '我的', link: '/mine/' }
        ]
    }
})