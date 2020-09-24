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

const MutationObserver =
  window.MutationObserver ||
  window.WebKitMutationObserver ||
  window.MozMutationObserver
// target
const list = document.querySelector('#__docusaurus')
// options
const config = {
  attributes: true,
  childList: true,
  characterData: true,
  subtree: true,
}
// instance
const observer = new MutationObserver(function (mutations) {
  // console.log(`mutations =`, mutations); // MutationRecord
  console.log(mutations)
  mutations.forEach((mutation) => {
    // console.log("mutation =", mutation);
    // if (mutation.type === 'characterData') {
    //   // target & object === typeof(mutation.target)
    //   // console.log("A child node has been added OR removed.", mutation.target, typeof(mutation.target));
    //   // console.log("[...mutation.addedNodes].length", [...mutation.addedNodes].length);
    //   // console.log("[...mutation.removedNodes].length", [...mutation.removedNodes].length);
    //   // if (mutation.target && [...mutation.addedNodes].length) {
    //   //     // [...mutation.addedNodes].length
    //   //     console.log(`A child node ${mutation.target} has been added!`, mutation.target);
    //   // }
    //   // if (mutation.target && [...mutation.removedNodes].length) {
    //   //     // [...mutation.removedNodes].length
    //   //     console.log(`A child node ${mutation.target} has been removed!`, mutation.target);
    //   // }
    // }
    if (mutation.type === 'childList') {
      if (mutation.target && [...mutation.addedNodes].length) {
        console.log(
          `A child node ${mutation.target} has been added!`,
          mutation.target
        )
        renderGitTalk()
      }
      //   if (mutation.target && [...mutation.removedNodes].length) {
      //     console.log(
      //       `A child node ${mutation.target} has been removed!`,
      //       mutation.target
      //     )
      //   }
      //   // do somwthings
      //   let list_values = []
      //   list_values = [].slice
      //     .call(list.children)
      //     .map(function (node) {
      //       return node.innerHTML
      //     })
      //     .filter(function (str) {
      //       if (str === '<br>') {
      //         return false
      //       } else {
      //         return true
      //       }
      //     })
      //   console.log(list_values)
      // }
      // if (mutation.type === 'attributes') {
      //   console.log('mutation =', mutation)
      //   console.log(`The \`${mutation.attributeName}\` attribute was modified.`)
      //   // console.log("list style =", list.style);
      //   let { width, height } = list.style
      //   let style = {
      //     width,
      //     height,
      //   }
      //   console.log('style =\n', JSON.stringify(style, null, 4))
    }
  })
})
observer.observe(list, config)
