/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import clsx from 'clsx'
import './index.sass'

function Project() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  return (
    <Layout title={`${siteConfig.title}|项目`}>
      <div className="container">
        <div className="row">
          {siteConfig.customFields.projectConfig.map((item) => {
            return (
              <div key={item.name} className="col--6 col blog-project--item">
                <div className="card-demo">
                  <div className="card">
                    <div className="card__header">
                      <h3>{item.name}</h3>
                    </div>
                    <div className="card__body">
                      <p>{item.description}</p>
                    </div>
                    <div className="card__footer">
                      <button
                        className={clsx(
                          'button button--secondary button--block',
                          !item.href && 'disabled'
                        )}
                        onClick={() => {
                          window.open(item.href, '_blank')
                        }}
                      >
                        {item.href ? '查看更多' : '敬请期待'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Project
