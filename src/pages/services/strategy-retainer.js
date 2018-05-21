import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../../data/site-config'
import MainWrapper from '../../layouts/MainWrapper/MainWrapper'
import ContactForm from '../../components/ContactForm'
import ServicePageHero from '../../components/ServicePageHero'

const StrategyRetainerPage = () => (
  <div className="service-page content-page">
    <Helmet title={`🎯 Strategy Retainer | ${config.siteTitle}`} />

    <ServicePageHero
      name={`strategy-retainer`}
      title={`Strategy Retainer`}
      description={`Startups need special attention and a healthy dose of ingenuity to grow toward success.`}
      icon={`🎯`}
      iconPath={``}
      bgColor={`#5A62FF`}
      textColor={`white`} />

    <MainWrapper>
      <section id="table-of-content" className="pv4">
        <div className="row narrow">
          <p>Whatever your need, we always treat your project like our own. We only succeed when you succeed.</p>
          <p>Our specialized team will take you through our battle-hardened process. Provide strategy and insight into business building, customer acquisition, product development, pricing, and much more.</p>
        </div>
      </section>

      <section className="pv5 bg-washed-yellow">
        <div className="row narrow">
          <h2 className="f1 serif red mt0 mb4 lh-solid">Let's Talk About Your&nbsp;Startup</h2>

          <ContactForm />

        </div>
      </section>
    </MainWrapper>
  </div>
)

export default StrategyRetainerPage
