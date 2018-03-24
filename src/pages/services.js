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

    <section className="ph5-l pv5 cf bg-fog-white">
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
    </section>
    <section>
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

  </div>
)

export default ServicesPage
