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

    <section>

      <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className="pa4 black-80">
        <div className="mv4">
          <label for="name" className="f6 b db mb2">Name</label>
          <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
          <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
        </div>
        <div className="mv4">
          <label for="email" className="f6 b db mb2">Email address</label>
          <input id="email" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="email" aria-describedby="email-field" />
        </div>
        <div className="mv4">
          <label for="message" className="f6 b db mb2">Message</label>
          <textarea id="message" className="input-reset ba b--black-20 pa2 mb2 db w-100" />
        </div>
        <div className="mv4">
          <button type="submit">Send</button>
        </div>
      </form>

    </section>
  </div>
)

export default ContactPage
