import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'
import PageHero from '../components/PageHero'
import ServiceCard from '../components/ServiceCard'

const ServicesPage = ({ transition }) => (
  <div style={transition && transition.style}>
    <Helmet title={`Services | ${config.siteTitle}`} />

    <PageHero
      title={"Services"}
      description={"Whether you’re building a marketing website, a mobile app or the next Facebook, we’re experienced in the right tool for the xxx."} />

    <section className="pv5 cf bg-fog-white">
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
          <img src="illustrations/services-illustration.png" alt="" className="" />
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
      </div>
    </section>

    <section className="pv4">
      <div className="row">
        <div className="br2 ba b--light-blue bg-lightest-blue">
          <div className="dt-ns dt--fixed-ns w-100">
            <div className="pa3 pa4-ns dtc-ns v-mid">
              <div>
                <h2 className="fw4 mt0 mb3">
                  Not sure what you need?
                </h2>
                <p className="black-70 measure lh-copy mv0">
                  This is suporting copy for the wonderful promo catchphrase that is going to be used.
                </p>
              </div>
            </div>
            <div className="pa3 pa4-ns dtc-ns v-mid">
              <a
                href="#"
                className="no-underline f6 tc db w-100 pv3 bg-animate bg-blue hover-bg-dark-blue white br2"
                >
                  Sign up for free
                </a>
              </div>
          </div>
        </div>
      </div>
    </section>

  </div>
)

export default ServicesPage
