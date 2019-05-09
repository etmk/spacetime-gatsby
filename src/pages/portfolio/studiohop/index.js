import React            from 'react'
import Helmet           from 'react-helmet'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import config           from '../../../../data/site-config'

import Layout           from '../../../components/layout'
import MainWrapper      from '../../../components/MainWrapper/MainWrapper'
import PageHero         from '../../../components/PageHero'

const StudioHopPage = () => (
  <Layout>
    <Helmet
      title={`️💪StudioHop Fitness Startup • reviving a startup`}
      meta={[
        { name: 'description', content: 'StudioHop was growing and finding product-market fit, but the tech stack was holding the company back. Spacetime rebuilt the startup from scratch for a sustainable, scalable future.' },
        { name: 'keywords', content: 'studiohop, ruby on rails, startup' },
      ]}
      link={[
        { rel: 'canonical', href: `${config.siteUrl}/portfolio/studiohop/` }
      ]}
      bodyAttributes={{
        class: 'light-theme'
      }}
    />

    <PageHero
      bgColor="#00C2F2"
      bgImage="/portfolio/studiohop/studiohop-bg.jpg">
        <img src="/client-logos/studiohop-white-icon.svg" className="" alt="StudioHop logo" />
        <h1 className="t-headline">StudioHop&mdash;<span className="o-40">fitness classes whenever and wherever you like</span></h1>
    </PageHero>

    <MainWrapper>

      <section className="pv5 pv6-ns bg-near-white tc">
        <span className="t-small-caps red">TL;DR</span>
        <h2 className="t-mega measure-tight center">StudioHop needed a technology overhaul to keep up with customer demand</h2>
      </section>

      <div className="pv5 pv6-ns row narrow">
        <h3 className="f2">Startup with a restart</h3>
        <p>StudioHop approached Spacetime to tackle a crushing issue holding their business back.</p>
        <p>StudioHop had previously attempted to build the business software by hiring overseas labor once and a local agency another time. And while they had <em>something</em>, the app was buggy and barely functional.</p>
        <p>We stepped in to replatform the struggling StudioHop app from a proprietary PHP framework to the open source Ruby on Rails framework.</p>
      </div>

      <div className="bg-banded flex items-start justify-center mv5 mv6-l">
        <img src="/portfolio/studiohop/spacetime-studiohop-fitness-home-design.jpg" className="w-40 w-30-l mh2 mh4-l br2 box-shadow relative" alt="StudioHop website home page screenshot" />
        <img src="/portfolio/studiohop/spacetime-studiohop-website-membership-page.jpg" className="w-40 w-30-l mh2 mh4-l br2 box-shadow relative" alt="StudioHop website membership page screenshot" />
      </div>

      <div className="row narrow pv5 pv6-ns">
        <h3>Our approach to startup technology</h3>
        <p>Technology can make or break a startup. Startup apps need to be stable, easy to maintain, capable of growth, and be clearly documented. At Spacetime, we always use common, well-known technologies. We avoid any type of "proprietary" code or platforms and opt for open source code.</p>
        <p>Here are some of the tools and services we used for StudioHop:</p>
        <ul className="lh-copy">
          <li>Ruby on Rails</li>
          <li>Heroku</li>
          <li>Postgres</li>
          <li>Amazon S3</li>
          <li>Recurly</li>
          <li>Mindbody API</li>
          <li>ZingFit API</li>
          <li>Stripe</li>
          <li>Frontend development</li>
          <li>Mobile first development</li>
          <li>Responsive web design (RWD)</li>
          <li>Google Analytics</li>
          <li>MailChimp integration</li>
        </ul>

      </div>

      <div className="row narrow">

        <hr className="mv5 mv6-ns bw4 b--studiohop o-10" />

        <h3>Sitemap</h3>
        <p>A sitemap helps organize the heirarchy and structure of a website or app.</p>

      </div>

      <img src="/portfolio/studiohop/spacetime-studiohop-fitness-sitemap.jpg" className="center db" alt="" />

      <div className="row narrow">

        <hr className="mv5 mv6-ns bw4 b--studiohop o-10" />
        <h3>Wireframes</h3>
        <p>Wireframes were created to quickly gain insight on the new user flow and layout for the StudioHop website.</p>
        <p>Wireframes allow our team and clients to delve into the functionality and business logic of the startup, without muddying the waters with color, logos, photos, etc.</p>

      </div>

      <img src="/portfolio/studiohop/spacetime-studiohop-website-wireframes.png" className="center db" alt="" />

      <div className="pv5 pv6-ns row narrow">
        <h3>Without breaking a sweat</h3>
        <p>StudioHop has continued to grow and expand their offering. The Ruby on Rails application we founded is still running the business, and continues to grow.</p>
        <small className="i o-50">Note: the StudioHop site and app design was recently updated from what you see here</small>
      </div>

      <OutboundLink
        href="https://www.studiohopfitness.com/"
        target="_blank"
        className="big-circle-button hover-bg-studiohop hover-b--studiohop center mb7">
        Visit StudioHop ↗
      </OutboundLink>

    </MainWrapper>

  </Layout>
)

export default StudioHopPage
