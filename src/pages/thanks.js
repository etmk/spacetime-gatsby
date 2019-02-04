import React from 'react'
import Helmet from 'react-helmet'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import config from '../../data/site-config'
import Layout from '../components/layout'

const ThanksPage = () => (
  <Layout className="bg-light-blue">
    <Helmet
      title={`Thanks 📬 ${config.siteTitle}`}
      meta={[
        { name: 'description', content: 'Spacetime provides professional web based services such as design, ux, ui, WordPress development and hosting, seo, ecommerce, Shopify, Kickstarter' },
        { name: 'keywords', content: 'hey spacetime, spacetime, dallas, plano, texas, wordpress, shopify, kickstarter, youtube, ux, ui, web design, ecommerce, startups, seo, websites' },
        { name: 'robots', content: 'noindex'},
      ]}
    />

    <section id="PageHero" className="page-hero">

      <div className="page-hero__content row">
        <h1 className="t-headline">Thank You!</h1>
        <p className="f5 fw4 lh-copy white o-40">We&rsquo;ve received your message and will get back to you in one hot minute! Until then&hellip;</p>
        <AniLink cover bg="#f03f47" to="/portfolio/" className="mt4 no-underline f6 fw6 tc dib pa3 bg-white dim black-80">Check out our portfolio &rarr;</AniLink>

      </div>

    </section>

  </Layout>
)

export default ThanksPage
