import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'
import PageHero from '../components/PageHero'

const ServicesPage = () => (
  <div>
    <Helmet title={`Services | ${config.siteTitle}`} />

    <section className="ph5-l pt6 pb5 bg-dark-purple">
      <h1 className="f1-ns white tc mt0">Services</h1>
      <p className="f4 white-70 tc ml-auto mr-auto mb0 measure-narrow">Whether you’re building a marketing website, a mobile app or the next Facebook, we’re experienced in the right tool for the xxx.</p>
    </section>
    <section className="ph5-l pv5 cf">
      <div className="fl w-50-ns">
        <p>Roadmapping is paid discovery (which is a fancy way of saying it’s a way to get you and your soon-to-be client on the same wavelength about their project, goals, risks, and so on.)</p>
        <ul>
          <li>Exploring a business problem</li>
          <li>Exploring a business problem</li>
          <li>Exploring a business problem</li>
          <li>Exploring a business problem</li>
        </ul>
      </div>
    </section>
    <section>
      <Link
        to="services/design"
        title="Design Services"
        className="tc bg-washed-yellow db pv5 no-underline">
        <span className="dib f1">🎨</span>
        <h2 className="f2 black-80">Design Services</h2>
        <p className="f5 black-60 ml-auto mr-auto mb0 measure-narrow">Startups need special attention and a healthy dose of ingenuity to grow toward success.</p>
      </Link>
      <Link
        to="services/startups"
        title="Design Services"
        className="tc bg-dark-red db pv5 no-underline">
        <span className="dib f1">🚀</span>
        <h2 className="f2 white">Startups</h2>
        <p className="f5 white-80 ml-auto mr-auto mb0 measure-narrow">Startups need special attention and a healthy dose of ingenuity to grow toward success.</p>
      </Link>
      <Link
        to="services/design"
        title="Design Services"
        className="tc bg-wordpress-blue db pv5 no-underline">
        <span className="dib f1">☠️</span>
        <h2 className="f2 white">WordPress Hosting</h2>
        <p className="f5 white-80 ml-auto mr-auto mb0 measure-narrow">Startups need special attention and a healthy dose of ingenuity to grow toward success.</p>
      </Link>
    </section>

  </div>
)

export default ServicesPage;
