module.exports = {
    title: 'Discord grass bot',
    description: 'grass bot',
    base: '/my_first_vuepress/',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        smoothScroll: true,
        sidebar: [
            '/',
            {
              title: 'Daily',
              path: '/daily/',
              collapsable: false,
              children: [
                '/daily/1A2B'
              ]
            }
        ],

        nav: [
            { text: 'Home', link: '/' }
        ]
    }
}