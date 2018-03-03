import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'

const ContactPage = () => (
  <div>
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <h1>Contact</h1>

    Call me maybe
  </div>
)

export default ContactPage
