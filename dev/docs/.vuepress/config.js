module.exports = {
    title: 'Discord grass bot',
    description: 'grass bot',
    base: '/my_first_vuepress/',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        smoothScroll: true,
        nextLinks: false,
        prevLinks: false,
        sidebar: {
            '/guide/': [
                '',
              {
                title: '每日功能',
                path: '/guide/daily/',      // 可选的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  '/guide/daily/1A2B',
                  '/guide/daily/covid-19',
                ]
              }
            ],
            '/daily/1A2B': [
                {
                  title: '每日功能',
                  //path: '/',      // 可选的
                  collapsable: false, // 可选的, 默认值是 true,
                  sidebarDepth: 1,    // 可选的, 默认值是 1
                  children: [
                    '/daily/1A2B',
                  ]
                },
                {
                  title: '自訂回覆',
                  //path: '/',      // 可选的
                  collapsable: false, // 可选的, 默认值是 true,
                  sidebarDepth: 1,    // 可选的, 默认值是 1
                  children: [
                    '/custom_reply/dictionary',
                  ]
                }
              ],

            // fallback
            '/': [
              '',        /* / */
            ]
          },

        nav: [
            { text: 'Home', link: '/' }
        ]
    }
}