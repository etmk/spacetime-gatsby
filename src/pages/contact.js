import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'
import PageHero from '../components/PageHero'

const ContactPage = ({ transition }) => (
  <div>
    <Helmet title={`Contact | ${config.siteTitle}`} />

    <PageHero
      title={"Contact"}
      description={"Whether you’re building a marketing website, a mobile app or the next Facebook, we’re experienced in the right tool for the xxx."} />

    <section className="bg-red pv5 white relative overflow-hidden" style={transition && transition.style}>
      <div className="row mw8 relative z-1">
        <h2>Contact</h2>
        <hr className="mw2 mh0 mv4" />
        <h3 className="f2 fw5 lh-title measure-narrow">xxx</h3>
      </div>
      <img src="/bgs/saturn-bg.jpg" className="w-100 absolute top-0 right-0 z-0" alt="Spacetime background image" />
    </section>
  </div>
)

export default ContactPage
