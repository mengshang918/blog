/* eslint-disable no-unused-vars */
import React, { useEffect, useCallback, useState } from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'

function Xmind() {
  const [height, setHeight] = useState(0)
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  useEffect(() => {
    setHeight(
      document.querySelector('.main-wrapper').getBoundingClientRect().height
    )
  }, [])

  const getWidth = useCallback(() => {
    setHeight(
      document.querySelector('.main-wrapper').getBoundingClientRect().height
    )
  })

  useEffect(() => {
    window.addEventListener('resize', getWidth)
    return () => {
      window.removeEventListener('resize', getWidth)
    }
  })

  return (
    <Layout title={`${siteConfig.title}|思维导图`} noFooter={true}>
      <iframe
        src={useBaseUrl('xmind.html')}
        frameBorder="0"
        style={{ minHeight: 600 }}
        height={height}
        width="100%"
      ></iframe>
    </Layout>
  )
}

export default Xmind
