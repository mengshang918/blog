const PAGE_IDENTIFIER = window.location.pathname

document.addEventListener('DOMContentLoaded', function () {
  const gittalkContainer = document.createElement('div')
  gittalkContainer.id = 'gitalk-container'
  const postContainer = document.querySelectorAll(
    '.main-wrapper main .container'
  )[0]
  const isDocsPage = PAGE_IDENTIFIER.indexOf('/docs') !== -1
  if (postContainer && isDocsPage) {
    postContainer.appendChild(gittalkContainer)
    // eslint-disable-next-line no-undef
    const gitalk = new Gitalk({
      clientID: 'e02b0955ca2deebc1e28',
      clientSecret: '3c974c9006f37c4482e1dce6e178860ca62a23e1',
      repo: 'blog', // The repository of store comments,
      owner: 'mengshang918',
      admin: ['mengshang918'],
      id: location.pathname, // Ensure uniqueness and length less than 50
      distractionFreeMode: false, // Facebook-like distraction free mode
    })

    gitalk.render('gitalk-container')
  }
})
