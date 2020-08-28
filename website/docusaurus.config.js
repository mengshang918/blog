module.exports = {
  title: '梦殇918',
  tagline: '博客、知识记录',
  url: 'https://mengshang918.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
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
          title: '文档',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '博客',
              to: 'blog',
            },
            {
              label: 'CSDN博客',
              href: 'https://blog.csdn.net/mengshang529',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/mengshang918',
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
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'operating_system/linux/linux_basis/linux_basis',
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
