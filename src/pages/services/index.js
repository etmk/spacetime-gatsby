import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../../data/site-config'
import MainWrapper from '../../layouts/MainWrapper/MainWrapper'
import PageHero from '../../components/PageHero'
import ServiceCard from '../../components/Services/ServiceCard'

const ServicesPage = ({ transition }) => (
  <div className="bg-yellow">
    <Helmet
      title={`Services 🛠 ${config.siteTitle}`}
      meta={[
        { name: 'description', content: 'Spacetime provides professional web based services such as design, ux, ui, WordPress development and hosting, seo, ecommerce, Shopify, Kickstarter' },
        { name: 'keywords', content: 'hey spacetime, spacetime, dallas, plano, texas, wordpress, shopify, kickstarter, youtube, ux, ui, web design, ecommerce, startups, seo, websites' },
      ]}
      link={[
        { rel: 'canonical', href: `${config.siteUrl}/services/` }
      ]}
    />

    <PageHero>
        <h1 className="t-headline">A very particular set of skills&mdash;<span className="t-headline__alt">acquired over a very long career</span></h1>
    </PageHero>

    <MainWrapper>

      <section className="bg-near-white pv5">
        <div className="f6 f5-ns row flex flex-wrap justify-between-l">
          <ul className="w-50 w-auto-l ph3 dib lh-copy">
            <li>User Interface Design (UI)</li>
            <li>User Experience Design (UX)</li>
            <li>Wireframing</li>
            <li>Prototyping</li>
          </ul>
          <ul className="w-50 w-auto-l ph3 dib lh-copy">
            <li>Technology Consultation</li>
            <li>Ruby on Rails</li>
            <li>Product Strategy</li>
            <li>Startup Incubation</li>
          </ul>
          <ul className="w-50 w-auto-l ph3 dib lh-copy">
            <li>WordPress</li>
            <li>eCommerce</li>
            <li>Shopify</li>
            <li>Web Hosting</li>
          </ul>
          <ul className="w-50 w-auto-l ph3 dib lh-copy">
            <li>Kickstarter</li>
            <li>Front-end Development</li>
            <li>Technical SEO</li>
            <li>Product Roadmaps</li>
          </ul>
        </div>
      </section>

      <section className="pv5 bg-white">
        <div className="row ServiceCardsGrid">

          <ServiceCard
            name={`technical-seo`}
            title={`Technical SEO`}
            description={`for a lean mean search engine optimization machine`}
            icon={`🔍`}
            iconPath={``}
            bgColor={`#86fc9e`}
            cta={`Crush the competition with unparalleled Technical SEO`} />

          <ServiceCard
            name={`startups`}
            title={`Startups`}
            description={`go from a back-of-the-napkin idea to scalable startup`}
            icon={`🚀`}
            iconPath={``}
            bgColor={`#F03F47`}
            cta={`How to grow your startup`} />

          <ServiceCard
            name={`wordpress-hosting`}
            title={`WordPress Hosting`}
            description={`for people serious about their online&nbsp;business`}
            icon={``}
            iconPath={`/icons/wordpress-logo.svg`}
            bgColor={`#21759B`}
            cta={`The ultimate WordPress hosting`} />

          <ServiceCard
            name={`design`}
            title={`Design Services`}
            description={`design is the communication of the business, brand, identity, and&nbsp;product`}
            icon={`🎨`}
            iconPath={``}
            bgColor={`#cd96e5`}
            cta={`Stand out from the crowd`} />

            <ServiceCard
              name={`websites`}
              title={`Websites`}
              description={`websites provide a first touch opportunity and prolonged relationship with your customer`}
              icon={`🕸`}
              iconPath={``}
              bgColor={`#1DE9B6`}
              cta={`How to build a website that works for you`} />

            <ServiceCard
              name={`cto`}
              title={`CTO As A Service`}
              description={`gain the technical leadership needed as your team and business&nbsp;grow`}
              icon={`💎`}
              iconPath={``}
              bgColor={`#EA5500`}
              cta={`Focus on what's important with an interim CTO`} />

            <ServiceCard
              name={`strategy-retainer`}
              title={`Strategy Retainer`}
              description={`we provide the strategic and tactical expertise you need to catalyze your&nbsp;business`}
              icon={`🎯`}
              iconPath={``}
              bgColor={`#5A62FF`}
              cta={`Tap into the brain trust with our strategy department`} />

            <ServiceCard
              name={`coffee-time`}
              title={`Coffee Time`}
              description={`business strategy and insight over a cup of coffee`}
              icon={`☕️`}
              iconPath={``}
              bgColor={`#c0b282`}
              cta={`Order a shot of insight at coffee time`} />
        </div>
      </section>

      <section className="pv5 mt5 bg-coconut-white">
        <div className="row">
          <div className="">
            <h2 className="black-80 fw4 mt0">Not sure what you need?</h2>
            <p className="f3 f2-ns fw6 sans-serif salmon lh-solid mt0 measure-narrow">
              No problem, let’s schedule a time to talk about the problem you need solved
            </p>

            <Link
              to="/contact/"
              className="no-underline f6 fw6 tc dib pa3 bg-deep-purple dim white-90">
                Schedule a free consultation →
            </Link>

          </div>
        </div>
      </section>

    </MainWrapper>

  </div>
)

export default ServicesPage
