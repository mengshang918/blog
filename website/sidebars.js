module.exports = {
  sidebar: [
    {
      type: 'category',
      label: '操作系统',
      items: [
        {
          type: 'category',
          label: 'linux',
          items: [
            {
              type: 'category',
              label: 'linux基础',
              items: [
                'operating_system/linux/linux_basis/linux_basis',
                'operating_system/linux/linux_basis/linux_learn',
              ],
            },
            {
              type: 'category',
              label: '脚本',
              items: [
                'operating_system/linux/script/linux_shell',
                'operating_system/linux/script/linux_expect',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '测试',
      items: [
        {
          type: 'category',
          label: '单元测试',
          items: [
            {
              type: 'category',
              label: 'enzyme',
              items: ['test/unit_test/enzyme/enzyme'],
            },
            {
              type: 'category',
              label: 'jest',
              items: [
                'test/unit_test/jest/jest_repeat',
                'test/unit_test/jest/jest_unit',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'E2E测试',
          items: [
            {
              type: 'category',
              label: 'cypress',
              items: ['test/e2e_test/cypress/cypress_todo'],
            },
            {
              type: 'category',
              label: 'puppeteer',
              items: ['test/e2e_test/puppeteer/puppeteer'],
            },
          ],
        },
      ],
    },
  ],
}
