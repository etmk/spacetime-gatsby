import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'
import MainWrapper from '../layouts/MainWrapper/MainWrapper'
import PageHero from '../components/PageHero'

const NotFoundPage = ({transition}) => (
  <div>
    <Helmet
      title={`404 | ${config.siteTitle}`}
      meta={[
        { name: 'description', content: 'Oops, something went wrong' },
        { name: 'keywords', content: 'hey spacetime, spacetime, business, agency, ux, ui, website, 404' },
        { name: 'robots', content: 'noindex'},
      ]}
      bodyAttributes={{
        class: 'light-theme'
      }}
    />

    <MainWrapper>

      <section className="bg-black pv7 white relative overflow-hidden" style={transition && transition.style}>
        <div className="row mw8 relative z-1 tc">

          <h2 className="f1">404</h2>
          <p className="white measure-narrow center sans-serif">That means something went wrong (in layman's terms). If you can't find what you're looking for <Link to="/contact/" className="blue hover-blue">send&nbsp;us&nbsp;a&nbsp;message</Link> and we will help!</p>

        </div>
        <img src="/bgs/404-lost.gif" className="w-100 absolute top-0 right-0 z-0 o-40" alt="Spacetime background image" />
      </section>

    </MainWrapper>
  </div>
)

export default NotFoundPage
