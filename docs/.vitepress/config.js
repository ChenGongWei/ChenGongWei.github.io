/** vitepress 配置文件 */
import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'ChenGongWei',
    description: '陈晨的博客',
    base: '/', // 部署时的路径

    head: [
        ['link', { rel: 'icon', href: '/logo.jpeg' }],
    ],

    /**
     * 主题配置
     * 配置文档：https://vitepress.vuejs.org/config/theme-configs.html
     */
    themeConfig: {
        repo: 'https://github.com/ChenGongWei', // github 仓库地址
        siteTitle: '「陈晨的博客」',
        logo: '/logo.jpeg',
        // 头部导航
        nav: [
            { text: '首页', link: '/' },
            { 
                text: '前端', 
                items: [
                    { text: 'HTML', link: '/front-end/html/' },
                    { text: 'CSS', link: '/front-end/css/' },
                    { text: 'JavaScript', link: '/front-end/javascript/' },
                    { text: 'TypeScript', link: '/front-end/typescript/ts-study1' },
                ]
            },
            { text: '关于', link: '/about' },
        ],
        // 侧边导航
        sidebar: {
            '/front-end/typescript': [
                {
                    text: '📔TypeScript学习笔记',
                    collapsible: true,
                    items: [
                        { text: 'TS笔记（一）- 基础类型', link: '/front-end/typescript/ts-study1' },
                        { text: 'TS笔记（二）- 接口&类', link: '/front-end/typescript/ts-study2' },
                        { text: 'TS笔记（三）- 进阶类型', link: '/front-end/typescript/ts-study3' },
                        { text: 'TS笔记（四）- 高级类型', link: '/front-end/typescript/ts-study4' },
                        { text: 'TS笔记（五）- ts配置', link: '/front-end/typescript/ts-study5' },
                    ]
                }
            ]
        }
    }
})