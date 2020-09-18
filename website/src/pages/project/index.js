/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import projects from './config'
import clsx from 'clsx'
import './index.sass'

function Project() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  return (
    <Layout title={`${siteConfig.title}|项目`}>
      <div className="container">
        <div className="row">
          {projects.map((item) => {
            return (
              <div key={item.name} className="col--6 col blog-project--item">
                <div class="card-demo">
                  <div class="card">
                    <div class="card__header">
                      <h3>{item.name}</h3>
                    </div>
                    <div class="card__body">
                      <p>{item.description}</p>
                    </div>
                    <div class="card__footer">
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
