import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'
import PageHero from '../components/PageHero'
import ServiceCard from '../components/ServiceCard'

const ServicesPage = ({ transition }) => (
  <div>
    <Helmet title={`Services | ${config.siteTitle}`} />

    <PageHero
      title={"Services"}
      description={"We help influential companies craft outstanding&nbsp;digital experiences."} />

    <section className="pv5 cf bg-fog-white" style={transition && transition.style}>
      <div className="row">
        <div className="fl w-50-ns">
          <h2 className="f1 serif red">Our team provides the expertise and skill you need to drive your project forward to success.</h2>
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
          <img src="illustrations/services-illustration.png" alt="" className="relative nt6-l nb6-l dn dib-ns" />
        </div>
      </div>
    </section>
    <section className="pv4">
      <div className="row cf">
        <ServiceCard
          name={`design`}
          title={`Design Services`}
          description={`Startups need special attention and a healthy dose of ingenuity to grow toward success.`}
          icon={`🎨`}
          iconPath={``}
          bgColor={`#f7f7f6`}/>

        <ServiceCard
          name={`startups`}
          title={`Startups`}
          description={`Startups need special attention and a healthy dose of ingenuity to grow toward success.`}
          icon={`🚀`}
          iconPath={``}
          bgColor={`#F03F47`}/>

        <ServiceCard
          name={`wordpress-hosting`}
          title={`WordPress Hosting`}
          description={`Startups need special attention and a healthy dose of ingenuity to grow toward success.`}
          icon={``}
          iconPath={`icons/wordpress-logo.svg`}
          bgColor={`#21759B`}/>

          <ServiceCard
            name={`websites`}
            title={`Websites`}
            description={`Startups need special attention and a healthy dose of ingenuity to grow toward success.`}
            icon={`🕸`}
            iconPath={``}
            bgColor={`#1DE9B6`}/>

          <ServiceCard
            name={`research`}
            title={`Research`}
            description={`Startups need special attention and a healthy dose of ingenuity to grow toward success.`}
            icon={`🔍`}
            iconPath={``}
            bgColor={`#EA5500`}/>

          <ServiceCard
            name={`consulting`}
            title={`Consulting`}
            description={`Startups need special attention and a healthy dose of ingenuity to grow toward success.`}
            icon={`📣`}
            bgColor={`#80CBC4`}/>

          <ServiceCard
            name={`strategy-retainer`}
            title={`Strategy Retainer`}
            description={`Startups need special attention and a healthy dose of ingenuity to grow toward success.`}
            icon={`🎯`}
            iconPath={``}
            bgColor={`#5A62FF`}/>

          <ServiceCard
            name={`teardowns`}
            title={`Teardowns`}
            description={`Startups need special attention and a healthy dose of ingenuity to grow toward success.`}
            icon={`🔮`}
            iconPath={``}
            bgColor={`#ECAC1D`}/>

          <ServiceCard
            name={`coffee-time`}
            title={`Coffee Time`}
            description={`Startups need special attention and a healthy dose of ingenuity to grow toward success.`}
            icon={`☕️`}
            iconPath={``}
            bgColor={`#3D3B33`}/>
      </div>
    </section>

    <section className=" pv5 mt5 bg-clip-up">
      <div className="row">
        <div className="bg-white deep-shadow pa4 ph5-l flex-l justify-between-l">
          <div className="w-80-m w-70-l mw6">
            <div>
              <h2 className="f4 fw5 mb3">
                Not sure what you need?
              </h2>
              <p className="f3 f2-ns fw6 mt3-l mb3-l serif red measure-narrow lh-solid">
                No problem, let’s schedule a time to talk about the problem you need solved
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <a
              href="#"
              className="no-underline f6 fw6 tc dib pa3 bg-deep-purple dim white-90">
                Get in touch for a free consultation →
            </a>
          </div>
        </div>
      </div>
    </section>

  </div>
)

export default ServicesPage
