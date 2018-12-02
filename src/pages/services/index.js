import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../../data/site-config'
import MainWrapper from '../../layouts/MainWrapper/MainWrapper'
import PageHero from '../../components/PageHero'
import ServiceCard from '../../components/ServiceCard'

const ServicesPage = ({ transition }) => (
  <div className="bg-yellow">
    <Helmet title={`Services | ${config.siteTitle}`} />

    <section id="PageHero" className="page-hero bg-yellow" style={transition && transition.style}>

      <div className="page-hero__content row">
        <h1 className="page-hero__headline">A very particular set of skills&mdash;<span>acquired over a very long career</span></h1>
      </div>

    </section>

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

      <section className="pv5">
        <div className="ph3 mw9 ml-auto mr-auto cf">
          <ServiceCard
            name={`design`}
            title={`Design Services`}
            description={`Design is the communication of the business, brand, identity, and&nbsp;product`}
            icon={`🎨`}
            iconPath={``}
            bgColor={`#3A333D`}
            textColor={`white`} />

          <ServiceCard
            name={`startups`}
            title={`Startups`}
            description={`Startups require a special, diverse set of skills to progress from idea to marketable business`}
            icon={`🚀`}
            iconPath={``}
            bgColor={`#F03F47`}
            textColor={`white`} />

          <ServiceCard
            name={`wordpress-hosting`}
            title={`WordPress Hosting`}
            description={`WordPress hosting for people serious about their online business`}
            icon={``}
            iconPath={`/icons/wordpress-logo.svg`}
            bgColor={`#21759B`}
            textColor={`white`} />

            <ServiceCard
              name={`websites`}
              title={`Websites`}
              description={`Websites provide a first touch opportunity and prolonged relationship with your customer`}
              icon={`🕸`}
              iconPath={``}
              bgColor={`#1DE9B6`}
              textColor={`black`} />

            <ServiceCard
              name={`cto`}
              title={`CTO As A Service`}
              description={`Gain the technical leadership you need as your team and business&nbsp;grow`}
              icon={`💎`}
              iconPath={``}
              bgColor={`#EA5500`}
              textColor={`black`} />

            <ServiceCard
              name={`strategy-retainer`}
              title={`Strategy Retainer`}
              description={`We provide the strategic and tactical expertise you need to catalyze your&nbsp;business`}
              icon={`🎯`}
              iconPath={``}
              bgColor={`#5A62FF`}
              textColor={`white`} />

            <ServiceCard
              name={`coffee-time`}
              title={`Coffee Time`}
              description={`Drink a hot cup of joe while receiving 6 months of strategy and insight in two hours`}
              icon={`☕️`}
              iconPath={``}
              bgColor={`#3D3B33`}
              textColor={`white`} />
        </div>
      </section>

      <section className="pv5 mt5 bg-coconut-white">
        <div className="row">
          <div className="">
            <h2 className="black-80 fw4 mt0">Not sure what you need?</h2>
            <p className="f3 f2-ns fw6 sans-serif salmon lh-solid mt0 measure-narrow">
              No problem, let’s schedule a time to talk about the problem you need solved
            </p>

            <a
              href="/contact"
              className="no-underline f6 fw6 tc dib pa3 bg-deep-purple dim white-90">
                Schedule a free consultation →
            </a>
          </div>
        </div>
      </section>

    </MainWrapper>

  </div>
)

export default ServicesPage
