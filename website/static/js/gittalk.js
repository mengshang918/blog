const PAGE_IDENTIFIER = window.location.pathname
const idMap = PAGE_IDENTIFIER.split('/').filter((item) => item)
const id = idMap[idMap.length - 1]

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
      id, // Ensure uniqueness and length less than 50
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
;(function (win) {
  'use strict'

  var listeners = []
  var doc = win.document
  var MutationObserver = win.MutationObserver || win.WebKitMutationObserver
  var observer

  function ready(selector, fn) {
    // 储存选择器和回调函数
    listeners.push({
      selector: selector,
      fn: fn,
    })
    if (!observer) {
      // 监听document变化
      observer = new MutationObserver(check)
      observer.observe(doc.documentElement, {
        childList: true,
        subtree: true,
      })
    }
    // 检查该节点是否已经在DOM中
    check()
  }

  function check() {
    // 检查是否匹配已储存的节点
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i]
      // 检查指定节点是否有匹配
      var elements = doc.querySelectorAll(listener.selector)
      for (var j = 0; j < elements.length; j++) {
        var element = elements[j]
        // 确保回调函数只会对该元素调用一次
        if (!element.ready) {
          element.ready = true
          // 对该节点调用回调函数
          listener.fn.call(element, element)
        }
      }
    }
  }

  // 对外暴露ready
  window.ready = ready
  console.log(222)
})(this)

// 使用方法
window.ready('#__docusaurus', function () {
  // ...
  console.log(1)
})
