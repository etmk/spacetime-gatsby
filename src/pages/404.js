import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'
import MainWrapper from '../layouts/MainWrapper/MainWrapper'
import PageHero from '../components/PageHero'

const NotFoundPage = ({transition}) => (
  <div>
    <Helmet title={`404 | ${config.siteTitle}`} />

    <PageHero
      title={"404"}
      description={"xxx"} />

    <MainWrapper>

      <section className="bg-red pv5 white relative overflow-hidden" style={transition && transition.style}>
        <div className="row mw8 relative z-1">
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <h2>404</h2>
          <hr className="mw2 mh0 mv4" />
          <h3 className="f2 fw5 lh-title measure-narrow">xxx</h3>
        </div>
        <img src="/bgs/saturn-bg.jpg" className="w-100 absolute top-0 right-0 z-0" alt="Spacetime background image" />
      </section>

    </MainWrapper>
  </div>
)

export default NotFoundPage
