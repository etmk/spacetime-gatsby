import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'

import PageHero from '../components/PageHero'

const ServicesPage = () => (
  <div>
    <Helmet title={`Services | ${config.siteTitle}`} />

    <PageHero
      title={"Services"}
      description={"Whether you’re building a marketing website, a mobile app or the next Facebook, we’re experienced in the right tool for the xxx."} />

    <section className="ph5-l pv5 cf bg-fog-white">
      <div className="fl w-50-ns">
        <h2 className="f1 serif red">Our team provides the expertise and skill you need to drive your project forward to success.</h2>
        <p className="sans-serif black-50 fw5 measure">Unlike our competitors who push a one-size-fits-all solution, we opt for specialized project plans on a per client basis, because your problem is unique and deserves a strategy to drive results and lead to success.</p>
        <ul className="lh-copy f6 mv4">
          <li>Exploring a business problem</li>
          <li>Exploring a business problem</li>
          <li>Exploring a business problem</li>
          <li>Exploring a business problem</li>
        </ul>
      </div>
    </section>
    <section>
      <div className="row">
        <Link
          to="services/design"
          title="Design Services"
          className="tc bg-washed-yellow db pv5 no-underline fl w-30 pa2 mh2 mv2">
          <span className="dib f1">🎨</span>
          <h2 className="f2 black-80">Design Services</h2>
          <p className="f5 black-60 ml-auto mr-auto mb0 measure-narrow">Startups need special attention and a healthy dose of ingenuity to grow toward success.</p>
        </Link>
        <Link
          to="services/startups"
          title="Design Services"
          className="tc bg-dark-red db pv5 no-underline fl w-30 pa2 mh2 mv2">
          <span className="dib f1">🚀</span>
          <h2 className="f2 white">Startups</h2>
          <p className="f5 white-80 ml-auto mr-auto mb0 measure-narrow">Startups need special attention and a healthy dose of ingenuity to grow toward success.</p>
        </Link>
        <Link
          to="services/design"
          title="Design Services"
          className="tc bg-wordpress-blue db pv5 no-underline fl w-30 pa2 mh2 mv2">
          <span className="dib f1">☠️</span>
          <h2 className="f2 white">WordPress Hosting</h2>
          <p className="f5 white-80 ml-auto mr-auto mb0 measure-narrow">Startups need special attention and a healthy dose of ingenuity to grow toward success.</p>
        </Link>
      </div>
    </section>

  </div>
)

export default ServicesPage;
