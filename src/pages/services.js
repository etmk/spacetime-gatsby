import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'

const ServicesPage = () => (
  <div>
    <Helmet title={`Services | ${config.siteTitle}`} />
    <h1>Our Services</h1>
    <p>What do you need</p>
  </div>
)

export default ServicesPage
