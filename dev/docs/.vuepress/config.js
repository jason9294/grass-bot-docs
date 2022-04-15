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
                //path: '/guide/daily/',      // 可选的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    '/guide/daily/1A2B',
                    '/guide/daily/covid-19',
                ]
              },
              {
                title: '自訂義回覆',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    '/guide/custom_reply/dictionary',
                    '/guide/custom_reply/keyword'
                ]
              }
            ],

            // fallback
            '/': [
              '',        /* / */
            ]
          },

        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' } 
        ]
    }
}