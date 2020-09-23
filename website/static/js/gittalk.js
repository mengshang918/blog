const PAGE_IDENTIFIER = window.location.pathname

const renderGitTalk = () => {
  const hasGitTalk = document.getElementById('gitalk-container')
  const gittalkContainer = document.createElement('div')
  gittalkContainer.id = 'gitalk-container'
  const postContainer = document.querySelectorAll(
    '.main-wrapper main .container .margin-vert--lg'
  )[0]
  const isDocsPage = PAGE_IDENTIFIER.indexOf('/docs') !== -1
  if (postContainer && isDocsPage) {
    if (!hasGitTalk) {
      postContainer.parentNode.appendChild(gittalkContainer)
    }
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
}

document.addEventListener('DOMContentLoaded', function () {
  renderGitTalk()
})

window.addEventListener('popstate', function () {
  renderGitTalk()
})

var _wr = function (type) {
  var orig = history[type]
  return function () {
    var rv = orig.apply(this, arguments)
    var e = new Event(type)
    e.arguments = arguments
    window.dispatchEvent(e)
    return rv
  }
}
history.pushState = _wr('pushState')
history.replaceState = _wr('replaceState')

window.addEventListener('replaceState', function () {
  renderGitTalk()
})
window.addEventListener('pushState', function () {
  renderGitTalk()
})
