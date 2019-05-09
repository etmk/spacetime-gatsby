import React            from 'react'
import Helmet           from 'react-helmet'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import config           from '../../../../data/site-config'

import Layout           from '../../../components/layout'
import MainWrapper      from '../../../components/MainWrapper/MainWrapper'
import PageHero         from '../../../components/PageHero'

const FluidityTechPage = () => (
  <Layout>
    <Helmet
      title={`🛸Fluidity Tech • reviving a startup`}
      meta={[
        { name: 'description', content: 'StudioHop was growing and finding product-market fit, but the tech stack was holding the company back. Spacetime rebuilt the startup from scratch for a sustainable, scalable future.' },
        { name: 'keywords', content: 'fluidity tech' },
      ]}
      link={[
        { rel: 'canonical', href: `${config.siteUrl}/portfolio/fluidity-tech/` }
      ]}
      bodyAttributes={{
        class: 'light-theme'
      }}
    />

    <PageHero
      bgColor="#000"
      bgImage="/portfolio/fluidity-tech/fluidity-bg.jpg">
        <img src="/client-logos/fluidity-tech-icon.svg" className="" alt="Fluidity Tech logo" />
        <h1 className="t-headline">Fluidity Tech&mdash;<span className="o-40">the new and future Bell</span></h1>
    </PageHero>

    <MainWrapper>

      <section className="pv5 pv6-ns bg-near-white tc">
        <span className="t-small-caps red">TL;DR</span>
        <h2 className="t-mega measure-tight center">Bell needed a website design update</h2>
      </section>

      <div className="pv5 pv6-ns row narrow">
        <h3 className="f2">Startup with a restart</h3>
        <p>StudioHop approached Spacetime to tackle a crushing issue holding their business back.</p>
        <p>StudioHop had previously attempted to build the business software by hiring overseas labor once and a local agency another time. And while they had <em>something</em>, the app was buggy and barely functional.</p>
        <p>We stepped in to replatform the struggling StudioHop app from a proprietary PHP framework to the open source Ruby on Rails framework.</p>
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

        <hr className="mv5 mv6-ns bw4 b--bell o-10" />

        <h3>Diverge</h3>
        <p>A sitemap helps organize the heirarchy and structure of a website or app.</p>

      </div>

      <img src="/portfolio/bell/bell-helicopter-website-design-concept-exploration.jpg" className="center db" alt="Bell Helicopter website design concept exploration by Spacetime" />

      <div className="row narrow">

        <hr className="mv5 mv6-ns bw4 b--bell o-10" />
        <h3>Wireframes</h3>
        <p>Wireframes were created to quickly gain insight on the new user flow and layout for the StudioHop website.</p>
        <p>Wireframes allow our team and clients to delve into the functionality and business logic of the startup, without muddying the waters with color, logos, photos, etc.</p>

      </div>

      <img src="/portfolio/bell/bell-helicopter-website-menu-design.jpg" className="center db" alt="Bell Helicopter website menu designs by Spacetime" />

      <img src="/portfolio/bell/bell-helicopter-website-navigation-exploration.jpg" className="center db" alt="Bell Helicopter website menu designs by Spacetime" />

      <div className="bg-banded flex items-start justify-center mv5 mv6-l">
        <img src="/portfolio/bell/bell-helicopter-home-web-design.jpg" className="w-40 w-30-l mh2 mh4-l br2 box-shadow relative" alt="StudioHop website home page screenshot" />
        <img src="/portfolio/bell/bell-helicopter-home-rebrand-web-design.jpg" className="w-40 w-30-l mh2 mh4-l br2 box-shadow relative" alt="StudioHop website membership page screenshot" />
      </div>

      <div className="pv5 pv6-ns row narrow">
        <h3>Above and beyond</h3>
        <p>StudioHop has continued to grow and expand their offering. The Ruby on Rails application we founded is still running the business, and continues to grow.</p>
        <small className="i o-50">Note: the StudioHop site and app design was recently updated from what you see here</small>
      </div>

      <OutboundLink
        href="http://www.bellflight.com/"
        target="_blank"
        className="big-circle-button hover-bg-bell center mb7">
        Visit Bell ↗
      </OutboundLink>

    </MainWrapper>

  </Layout>
)

export default FluidityTechPage
