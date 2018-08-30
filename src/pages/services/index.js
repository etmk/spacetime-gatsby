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
        <h1 className="page-hero__headline">You have a really big problem</h1>

        <div className="">
          <div className="fl-ns w-50-ns">
            <p className="page-hero__text">
              Maybe you know what it is, maybe you don't. Whatever your circumstance, we can help you investigate, diagnose, and creatively plan how to tackle your problem to accomplish business&nbsp;goals.
            </p>
            <h2 className="f2 f1-ns fw7">We like big problems</h2>
          </div>
          <div className="fr-ns w-40-ns w-30-l">
            <div className="">
              <ul className="lh-copy f6 mb4">
                <li>UI & UX Design</li>
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>Front-end Development</li>
              </ul>
              <ul className="lh-copy f6 mv4">
                <li>Product Strategy</li>
                <li>Technology Consultation</li>
                <li>Startup Incubation</li>
                <li>Specially Tailored Retainers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </section>

    <MainWrapper>

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
            <p className="f3 f1-ns f-subheadline-l fw6 sans-serif salmon lh-solid mt0">
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
