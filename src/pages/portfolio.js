import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'

const PortfolioPage = () => (
  <div>
    <Helmet title={`Portfolio | ${config.siteTitle}`} />
    <h1>Our Portfolio</h1>
    <p>See what we did</p>
  </div>
)

export default PortfolioPage
