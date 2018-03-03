import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'

const TeamPage = () => (
  <div>
    <Helmet title={`Team | ${config.siteTitle}`} />
    <h1>Hello from the Team</h1>
    <p>The Spaceteam knows</p>
  </div>
)

export default TeamPage
