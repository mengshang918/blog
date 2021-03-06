module.exports = {
  title: '梦殇918',
  tagline: '博客、知识记录',
  url: 'https://mengshang918.github.io/',
  baseUrl: '/blog/',
  onBrokenLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'mengshang918', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
  customFields: {
    projectConfig: [
      {
        name: 'babel-form',
        description: '基于react和jsonSchema的动态表单渲染方案。',
        href: 'https://github.com/mengshang918/babel-form',
      },
      {
        name: 'blog',
        description: '基于docusaurus开发的个人博客网站。（当前网址）',
        href: 'https://github.com/mengshang918/blog',
      },
      {
        name: 'branchclear-cli',
        description: '快速清理已经合并的本地或远程分支。',
        href: 'https://github.com/mengshang918/branchclear-cli',
      },
      {
        name: 'project-cli',
        description: '自定义配置，快速构建项目脚手架。',
        href: 'https://github.com/mengshang918/project-cli#readme',
      },
      {
        name: 'node-common',
        description: '封装一些常用的node方法',
      },
      {
        name: 'fetch-api',
        description: '基于whatwg-fetch封装的接口缓存包。',
      },
    ],
  },
  themeConfig: {
    // announcementBar: {
    //   id: 'alert',
    //   content: '欢迎来到我的博客～',
    //   backgroundColor: '#eee',
    //   textColor: '#091E42',
    //   isCloseable: true,
    // },
    navbar: {
      hideOnScroll: true,
      title: '梦殇918',
      logo: {
        alt: 'My Site Logo',
        src:
          'https://avatars1.githubusercontent.com/u/19370610?s=400&u=54df52a932ca8904a187c86709db70196b69321b&v=4',
      },
      items: [
        {
          href: 'https://mengshang918.github.io/',
          label: '返回旧版',
          position: 'left',
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: '文档',
          position: 'right',
        },
        {
          label: '思维导图',
          position: 'right',
          items: [
            {
              label: '文档思维导图',
              to: 'x_mind',
            },
            {
              label: 'processon',
              href:
                'https://www.processon.com/view/link/5f71a569e401fd64b5e1143b#map',
            },
          ],
        },
        { to: 'blog', label: '博客', position: 'right' },
        {
          to: 'project',
          label: '项目页',
          position: 'right',
        },
        {
          to: 'docs/todo',
          label: '规划',
          position: 'right',
        },
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
            {
              label: '现代 JavaScript 教程',
              href: 'https://zh.javascript.info/',
            },
            {
              label: 'egghead视屏',
              href: 'https://egghead.io/',
            },
            {
              label: 'css-tricks',
              href: 'https://css-tricks.com/',
            },
            {
              label: 'tc39',
              href: 'https://tc39.es/',
            },
            {
              label: '开源奖',
              href: 'https://osawards.com/',
            },
            {
              label: 'js发展',
              href: 'https://stateofjs.com/',
            },
            {
              label: 'css发展',
              href: 'https://stateofcss.com/',
            },
            {
              label: 'kentcdodds blog',
              href: 'https://kentcdodds.com/blog',
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
            {
              label: '前端达人',
              href: 'https://zju.date/fe-newbility/',
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
        debug: true,
        docs: {
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/mengshang918/blog/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/mengshang918/blog/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false,
        },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
  scripts: [
    // disqus 评论引入 受网络影响
    // 'https://mengshang918.github.io/blog/js/disqus.js',
    // gittalk 评论引入
    'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js',
    'https://mengshang918.github.io/blog/js/gittalk.js',
  ],
  stylesheets: ['https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css'],
}
