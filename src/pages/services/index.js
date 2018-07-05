import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../../data/site-config'
import MainWrapper from '../../layouts/MainWrapper/MainWrapper'
import PageHero from '../../components/PageHero'
import ServiceCard from '../../components/ServiceCard'

const ServicesPage = ({ transition }) => (
  <div className="">
    <Helmet title={`Services | ${config.siteTitle}`} />

    <PageHero
      title={"Services"}
      description={"We help influential companies craft outstanding&nbsp;digital experiences."} />

    <MainWrapper>

      <section className="pv5 cf bg-fog-white" style={transition && transition.style}>
        <div className="row">
          <div className="fl w-50-ns">
            <h2 className="f1 system-sans red">Our team provides the expertise and skill you need to drive your project forward to success.</h2>
            <p className="sans-serif black-50 fw5 measure">Unlike our competitors who push a one-size-fits-all solution, we opt for specialized project plans on a per client basis, because your problem is unique and deserves a strategy to drive results and lead to success.</p>
            <div className="flex">
              <ul className="lh-copy f6 mv4">
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
          <div>
            {/* <img src="/illustrations/services-illustration.png" alt="" className="relative nt6-l nb6-l dn dib-ns" /> */}
          </div>
        </div>
      </section>

      <section className="pv4">
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

      <section className="pv5 mt5 bg-clip-up">
        <div className="row">
          <div className="bg-white deep-shadow pa4 ph5-l flex-l justify-between-l">
            <div className="w-80-m w-70-l mw6">
              <div>
                <h2 className="f4 fw5 mb3">
                  Not sure what you need?
                </h2>
                <p className="f3 f2-ns fw6 mt3-l mb3-l sans-serif red measure-narrow lh-solid">
                  No problem, let’s schedule a time to talk about the problem you need solved
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <a
                href="/contact"
                className="no-underline f6 fw6 tc dib pa3 bg-deep-purple dim white-90">
                  Get in touch for a free consultation →
              </a>
            </div>
          </div>
        </div>
      </section>

    </MainWrapper>

  </div>
)

export default ServicesPage
