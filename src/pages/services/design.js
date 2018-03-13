import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../../data/site-config'

const ServicesPage = () => (
  <div>
    <Helmet title={`Services | ${config.siteTitle}`} />

    <section className="ph5-l pv6 bg-washed-yellow tc">
      <span className="f1 dib">🎨</span>
      <h1 className="f2-ns tc mt0">Design</h1>
      <p className="f4 tc ml-auto mr-auto mb0 measure-narrow">Startups need special attention and a healthy dose of ingenuity to grow toward success.</p>
    </section>
  </div>
)

export default ServicesPage
