import React from 'react'
import Helmet from 'react-helmet'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import config from '../../data/site-config'

import Layout from '../components/layout'
import PageHero from '../components/PageHero'

const NotFoundPage = () => (
  <Layout>
    <Helmet
      title={`404 😵${config.siteTitle}`}
      meta={[
        { name: 'description', content: 'Oops, something went wrong' },
        { name: 'keywords', content: 'hey spacetime, spacetime, business, agency, ux, ui, website, 404' },
        { name: 'robots', content: 'noindex'},
      ]}
      bodyAttributes={{
        class: 'light-theme'
      }}
    />

    <PageHero bgColor="black">
      <div className="relative z-1 w-100 tc">
        <h2 className="t-headline">404</h2>
        <p className="white measure-narrow center">That means something went wrong (in layman&rsquo;s terms). If you can&rsquo;t find what you&rsquo;re looking for <AniLink cover bg="#f03f47" to="/contact/" className="blue hover-blue">send&nbsp;us&nbsp;a&nbsp;message</AniLink> and we will help!</p>
      </div>

      <img src="/bgs/404-lost.gif" className="w-100 absolute top-0 right-0 z-0 o-40" alt="John Travolta scene from Resevoir Dogs where he is lost" />
    </PageHero>

  </Layout>
)

export default NotFoundPage
