import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../../data/site-config'
import MainWrapper from '../../layouts/MainWrapper/MainWrapper'
import ContactForm from '../../components/ContactForm'
import ServicePageHero from '../../components/ServicePageHero'
import PricingTable from '../../components/PricingTable'

const WordPressHostingPage = () => (
  <div className="service-page content-page">
    <Helmet title={`Design Services | ${config.siteTitle}`} />

    <ServicePageHero
      name={`wordpress-hosting`}
      title={`WordPress Hosting`}
      description={`Startups need special attention and a healthy dose of ingenuity to grow toward success.`}
      icon={``}
      iconPath={`/icons/wordpress-logo.svg`}
      bgColor={`#21759B`}
      textColor={`white`} />

    <MainWrapper>
      <section className="pv4">
        <div className="row narrow">
          <p>Whatever your need, we always treat your project like our own. We only succeed when you succeed.</p>
          <p>Our specialized team will take you through our battle-hardened process. Provide strategy and insight into business building, customer acquisition, product development, pricing, and much more.</p>
        </div>
      </section>

      <section className="pv4">
        <div className="row flex justify-around">

          <PricingTable
            icon={'📦'}
            title={'Basic Hosting'}
            columnWidth={'w-30'}
            price={'$50/month'}
            items={[
              'Cool thing one',
              'Cool thing number two',
              'Cool thing three',
              'Cool stuff four'
            ]}
          />

          <PricingTable
            icon={'🏆⚔️'}
            title={'Premium Hosting'}
            columnWidth={'w-30'}
            price={'$100/month'}
            items={[
              'Cool thing one',
              'Cool thing number two',
              'Cool thing three',
              'Cool stuff four',
              'Cool thing one',
              'Cool thing number two',
              'Cool thing three',
              'Cool thing one',
              'Cool thing number two',
              'Cool thing three',
            ]}
          />

          <PricingTable
            icon={'👑'}
            title={'White Glove Hosting'}
            columnWidth={'w-30'}
            price={'$250/month'}
            items={[
              'Cool thing one',
              'Cool thing number two',
              'Cool thing three',
              'Cool stuff four'
            ]}
          />

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

export default WordPressHostingPage
