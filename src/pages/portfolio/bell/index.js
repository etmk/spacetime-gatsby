import React            from 'react'
import Helmet           from 'react-helmet'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import config           from '../../../../data/site-config'

import Layout           from '../../../components/layout'
import MainWrapper      from '../../../components/MainWrapper/MainWrapper'
import PageHero         from '../../../components/PageHero'

const BellPage = () => (
  <Layout>
    <Helmet
      title={`🚁Bell Helicopter • Rebranding a legacy`}
      meta={[
        { name: 'description', content: 'Bell Helicopter' },
        { name: 'keywords', content: 'bell helicopter' },
      ]}
      link={[
        { rel: 'canonical', href: `${config.siteUrl}/portfolio/bell/` }
      ]}
      bodyAttributes={{
        class: 'light-theme'
      }}
    />

    <PageHero
      bgColor="#000"
      bgImage="/portfolio/bell/bell-helicopter-bg.jpg">
        <img src="/client-logos/bell-logo.svg" className="" alt="Bell Helicopter logo" />
        <h1 className="t-headline">Bell&mdash;<span className="o-40">the new and future Bell</span></h1>
    </PageHero>

    <MainWrapper>

      <section className="pv5 pv6-ns bg-near-white tc">
        <span className="t-small-caps red">TL;DR</span>
        <h2 className="t-mega measure-tight center">Bell needed a website design update</h2>
      </section>

      <div className="row narrow pv6">

        <h3>Diverge</h3>
        <p>We concepted a variety of design directions for Bell.</p>

      </div>

      <img src="/portfolio/bell/bell-helicopter-website-design-concept-exploration.jpg" className="center db" alt="Bell Helicopter website design concept exploration by Spacetime" />

      <div className="row narrow">

        <hr className="mv5 mv6-ns bw4 b--bell o-10" />
        <h3>Expressive Navigation</h3>
      </div>

      <img src="/portfolio/bell/bell-helicopter-website-menu-design.jpg" className="center db" alt="Bell Helicopter website menu designs by Spacetime" />

      <img src="/portfolio/bell/bell-helicopter-website-navigation-exploration.jpg" className="center db" alt="Bell Helicopter website menu designs by Spacetime" />

      <div className="bg-banded flex items-start justify-center mv5 mv6-l">
        <img src="/portfolio/bell/bell-helicopter-home-web-design.jpg" className="w-40 w-30-l mh2 mh4-l br2 box-shadow relative" alt="StudioHop website home page screenshot" />
        <img src="/portfolio/bell/bell-helicopter-home-rebrand-web-design.jpg" className="w-40 w-30-l mh2 mh4-l br2 box-shadow relative" alt="StudioHop website membership page screenshot" />
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

export default BellPage
