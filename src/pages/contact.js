import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'
import PageHero from '../components/PageHero'

const ContactPage = () => (
  <div>
    <Helmet title={`Contact | ${config.siteTitle}`} />

    <PageHero
      title={"Contact"}
      description={"Whether you’re building a marketing website, a mobile app or the next Facebook, we’re experienced in the right tool for the xxx."} />
  </div>
)

export default ContactPage
