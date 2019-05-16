import React            from 'react'
import Helmet           from 'react-helmet'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import config           from '../../../../data/site-config'

import Layout           from '../../../components/layout'
import MainWrapper      from '../../../components/MainWrapper/MainWrapper'
import PageHero         from '../../../components/PageHero'

const KeyziePage = () => (
  <Layout>
    <Helmet
      title={`🏘Keyzie • the future of real estate is personal`}
      meta={[
        { name: 'description', content: 'Keyzie buy and sell homes online' },
        { name: 'keywords', content: 'real estate startup' },
      ]}
      link={[
        { rel: 'canonical', href: `${config.siteUrl}/portfolio/keyzie/` }
      ]}
      bodyAttributes={{
        class: 'dark-theme'
      }}
    />

    <PageHero
      bgColor="#000"
      bgImage="/portfolio/keyzie/keyzie-bg.jpg">
        <img src="/client-logos/keyzie-logo.svg" className="" alt="Keyzie logo" />
        <h1 className="t-headline black">Keyzie&mdash;<span className="o-60">the future of real estate is&nbsp;personal</span></h1>
    </PageHero>

    <MainWrapper>

      <section className="pv5 pv6-ns bg-near-white tc">
        <span className="t-small-caps keyzie">TL;DR</span>
        <h2 className="t-mega measure center">A family enters the real estate startup market</h2>
      </section>

      <div className="pv5 pv6-ns row narrow">
        <h3 className="f2">Born as an adult</h3>
        <p>The startup world can be ruthless. Speed, experience, and traction are all necessary for success.</p>
        <p>Time is the enemey for startups. Startup companies need to squeeze years of work into a compressed timeline. They don't have the time or leverage to move slowly or make mistakes. Keyzie faced this same challenge, particularly because of the high brand association in the real estate industry.</p>

        <hr className="mv5 b--keyzie" />

        <h3>Our approach to startup technology</h3>
        <p>Technology can make or break a startup. Startup apps need to be stable, easy to maintain, capable of growth, and be clearly documented. At Spacetime, we always use common, well-known technologies. We avoid any type of "proprietary" code or platforms and opt for open source code.</p>
        <p>Tools and services we used for Keyzie:</p>
        <ul className="lh-copy">
          <li>Naming</li>
          <li>Logo &amp; Branding</li>
          <li>User Experience Design - UX</li>
          <li>User Interface Design - UI</li>
          <li>Zillow API</li>
          <li>Ruby on Rails</li>
          <li>React</li>
          <li>Heroku</li>
          <li>Postgres</li>
          <li>Amazon S3</li>
          <li>Stripe</li>
          <li>Frontend development</li>
          <li>Mobile first development</li>
          <li>Responsive web design (RWD)</li>
          <li>Google Analytics</li>
          <li>MailChimp integration</li>
        </ul>

      </div>

      <div className="row narrow">

        <h3>Concepting a juggernaut</h3>
        <p>Keyzie would need to go head-to-head with absolute startup giants. The big three real estate startups are Zillow, Redfin, and Trulia.</p>

      </div>

      <img src="/portfolio/keyzie/keyzie-register-account.jpg" className="mv6 w-90 mw8 center db deep-shadow" alt="Bell Helicopter website design concept exploration by Spacetime" />

      <div className="row narrow">

        <hr className="mv5 b--keyzie" />

      </div>

      <img src="/portfolio/keyzie/keyzie-martketing-pages.jpg" className="center db" alt="Bell Helicopter website menu designs by Spacetime" />

      <img src="/portfolio/keyzie/keyzie-buy-house.jpg" className="center db" alt="Bell Helicopter website menu designs by Spacetime" />

      <div className="pv5 pv6-ns row narrow">
        <h3>Simplify and collate similar tasks</h3>
        <p>Each app page should focus on a single task. Keep task load light and clear so customers know what is expected of them.</p>
      </div>

      <img src="/portfolio/keyzie/keyzie-sell-a-house.jpg" className="center db" alt="Bell Helicopter website menu designs by Spacetime" />

      <div className="pv5 pv6-ns row narrow">
        <h3>Planning out User Flow</h3>
        <p>Complicated problems call for simple solutions. When we deal with a complex workflow, we find breaking the workflow down into individual steps can help clarify the tasks and needs for the full workflow.</p>
      </div>

      <img src="/portfolio/keyzie/keyzie-flow-make-an-offer.jpg" className="center db" alt="Bell Helicopter website menu designs by Spacetime" />

      <div className="pv5 pv6-ns row narrow">
        <h3>Online home buying and selling</h3>
        <p>Keyzie offers buyers and sellers the ability to be the decision maker during the real estate&nbsp;process.</p>
      </div>

      <OutboundLink
        href="https://www.keyzie.com/"
        target="_blank"
        className="big-circle-button hover-bg-keyzie hover-b--keyzie center mb7">
        Visit Keyzie ↗
      </OutboundLink>

    </MainWrapper>

  </Layout>
)

export default KeyziePage
