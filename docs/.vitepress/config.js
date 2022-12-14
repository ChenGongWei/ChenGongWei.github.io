/** vitepress 配置文件 */
import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'ChenGongWei',
    description: '陈晨的博客',
    base: '/', // 部署时的路径
    lastUpdated: true,

    head: [
        ['link', { rel: 'icon', href: '/logo.jpeg' }],
        ['script', { src: 'https://lib.baomitu.com/medium-zoom/1.0.6/medium-zoom.min.js' }],
        ['link', { rel: 'stylesheet', href: '/zoom.css' }],
        ['script', { src: '/zoom.js' }]
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
                    { text: 'React', link: '/front-end/react/react-api1' },
                ]
            },
            {
                text: '工程化',
                items: [
                    { text: 'Git', link: '/engine/git/' }
                ]
            },
            {
                text: '其他',
                items: [
                    { text: '工具', link: '/other/tools/packetcapture' },
                    { text: 'LeetCode', link: '/other/leetcode/leetcode1' },
                    { text: 'GitHub', link: '/other/github/syncToGitee' }
                ]
            },
            // { text: '关于', link: '/about' },
        ],
        // 侧边导航
        sidebar: {
            '/front-end/typescript': [
                {
                    text: 'TypeScript学习笔记',
                    collapsible: true,
                    items: [
                        { text: 'TS笔记（一）- 基础类型', link: '/front-end/typescript/ts-study1' },
                        { text: 'TS笔记（二）- 接口&类', link: '/front-end/typescript/ts-study2' },
                        { text: 'TS笔记（三）- 进阶类型', link: '/front-end/typescript/ts-study3' },
                        { text: 'TS笔记（四）- 高级类型', link: '/front-end/typescript/ts-study4' },
                        { text: 'TS笔记（五）- ts配置', link: '/front-end/typescript/ts-study5' },
                    ]
                }
            ],
            '/front-end/react': [
                {
                    text: 'React',
                    collapsible: true,
                    items: [
                        { text: 'React Api - 组件类', link: '/front-end/react/react-api1' },
                        { text: 'React Api - 工具类', link: '/front-end/react/react-api2' },
                        { text: 'React Api - hooks', link: '/front-end/react/react-api3' },
                        { text: 'React Api - react-dom', link: '/front-end/react/react-api4' },
                        { text: '自定义 hook 实现 redux', link: '/front-end/react/useRedux' },

                    ]
                }
            ],
            '/other/tools': [
                {
                    items: [
                        { text: '抓包工具', link: '/other/tools/packetcapture' }
                    ]
                }
            ],
            '/other/leetcode': [
                {
                    text: 'LeetCode',
                    collapsible: true,
                    items: [
                        { text: '1、两数之和', link: '/other/leetcode/leetcode1' },
                        { text: '2、两数相加', link: '/other/leetcode/leetcode2' },
                        { text: '3、无重复字符的最长子串', link: '/other/leetcode/leetcode3' },
                        { text: '4、寻找两个正序数组的中位数', link: '/other/leetcode/leetcode4' },
                        { text: '5、最长回文子串', link: '/other/leetcode/leetcode5' },
                        { text: '6、Z 字形变换', link: '/other/leetcode/leetcode6' },
                        { text: '7、整数反转', link: '/other/leetcode/leetcode7' },
                        { text: '8、字符串转换整数(atoi)', link: '/other/leetcode/leetcode8' },
                        { text: '9、回文数', link: '/other/leetcode/leetcode9' },
                        { text: '11、盛最多水的容器', link: '/other/leetcode/leetcode11' },
                    ]
                }
            ],
            '/other/github': [
                {
                    text: 'Github',
                    collapsible: true,
                    items: [
                        { text: 'Github 代码同步 Gitee', link: '/other/github/syncToGitee' },
                    ]
                }
            ]
        },
        // 社交链接
        socialLinks: [
            { icon: 'github', link: 'https://github.com/ChenGongWei' },
            // { icon: 'twitter', link: 'https://twitter.com/TWI_XXGGG' },
            // { icon: 'instagram', link: 'https://www.instagram.com/xiexiage/' },
            // { icon: 'youtube', link: 'https://www.youtube.com/channel/UCjzdLs5HAhATbfZH6vaJCEA' },
        ],
        // 页脚
        footer: {
            copyright: 'Copyright © 2020-present 陈晨'
        },
        editLink: {
            pattern: 'https://github.com/ChenGongWei/ChenGongWei.github.io/edit/main/docs/:path',
            text: '在GitHub上编辑此页'
        },
        lastUpdatedText: '上次更新',
        outlineTitle: '目录',
    },

    markdown: {
        lineNumbers: true,
        config: (md) => {
            // use more markdown-it plugins!
            md.use(require('markdown-it-sup'))
          }
    }
})