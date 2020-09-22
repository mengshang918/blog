const PAGE_IDENTIFIER = window.location.pathname
const BASE_URL = 'https://mengshang918.github.io'
const PAGE_URL = BASE_URL + PAGE_IDENTIFIER

/**
 *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
 */
// eslint-disable-next-line no-unused-vars
var disqus_config = function () {
  this.page.url = PAGE_URL // Page's canonical URL variable
  this.page.identifier = PAGE_IDENTIFIER // Page's unique identifier variable
}

function loadDisqus() {
  ;(function () {
    // DON'T EDIT BELOW THIS LINE
    var d = document,
      s = d.createElement('script')
    s.src = 'https://mengshang918.disqus.com/embed.js'
    s.setAttribute('data-timestamp', +new Date())
    ;(d.head || d.body).appendChild(s)
  })()
}

function maybeLoadDisqus() {
  const hr = document.createElement('hr')
  const disqusContainer = document.createElement('disqus')
  disqusContainer.id = 'disqus_thread'
  const postContainer = document.querySelectorAll('.main-wrapper main')[0]
  const isDocsPage = PAGE_IDENTIFIER.indexOf('/docs') !== -1
  if (postContainer && isDocsPage) {
    postContainer.appendChild(hr)
    postContainer.appendChild(disqusContainer)
    loadDisqus()
  }
}

document.addEventListener('DOMContentLoaded', function () {
  maybeLoadDisqus()
})
