module.exports = {
  title: '梦殇918',
  tagline: '博客、知识记录',
  url: 'https://mengshang918.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'mengshang918', // Usually your GitHub org/user name.
  projectName: 'mengshang918.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '梦殇918',
      logo: {
        alt: 'My Site Logo',
        src:
          'https://avatars1.githubusercontent.com/u/19370610?s=400&u=54df52a932ca8904a187c86709db70196b69321b&v=4',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: '文档',
          position: 'right',
        },
        {
          to: 'xmind',
          label: '思维导图',
          position: 'right',
        },
        { to: 'blog', label: '博客', position: 'right' },
        {
          href: 'https://github.com/mengshang918/blog',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '关于',
          items: [
            {
              label: '关于该repo',
              to: 'docs/',
            },
            {
              label: 'README',
              href:
                'https://github.com/mengshang918/blog/blob/master/README.md',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/',
            },
            {
              label: 'medium',
              href: 'https://medium.com/',
            },
            {
              label: '掘金',
              href: 'https://juejin.im/',
            },
            {
              label: 'reddit',
              href: 'https://www.reddit.com/',
            },
            {
              label: 'twitter',
              href: 'https://twitter.com/home',
            },
            {
              label: 'V2EX',
              href: 'https://www.v2ex.com/',
            },
          ],
        },
        {
          title: '资源',
          items: [
            {
              label: 'web前端导航',
              href: 'http://www.alloyteam.com/nav/',
            },
            {
              label: '印记中文文档',
              href: 'https://docschina.org/',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/mengshang918',
            },
            {
              label: '博客',
              to: 'blog',
            },
            {
              label: 'CSDN博客',
              href: 'https://blog.csdn.net/mengshang529',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 梦殇918`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/mengshang918/blog/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/mengshang918/blog/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
}
