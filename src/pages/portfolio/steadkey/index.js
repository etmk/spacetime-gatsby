import React            from 'react'
import Helmet           from 'react-helmet'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import config           from '../../../../data/site-config'

import Layout           from '../../../components/layout'
import MainWrapper      from '../../../components/MainWrapper/MainWrapper'
import PageHero         from '../../../components/PageHero'

const SteadkeyPage = () => (
  <Layout>
    <Helmet
      title={`🏡Steadkey • Delivery sanity and clarity to the mortgage process`}
      meta={[
        { name: 'description', content: 'Steadkey struggled through several unsuccessful iterations. Spacetime helped focus the product and get to market.' },
        { name: 'keywords', content: 'startup mvp' },
      ]}
      link={[
        { rel: 'canonical', href: `${config.siteUrl}/portfolio/steadkey/` }
      ]}
      bodyAttributes={{
        class: 'dark-theme'
      }}
    />

    <PageHero
      bgColor="#f64a53"
      bgImage="/portfolio/steadkey/steadkey-bg.jpg">
        <img src="/client-logos/steadkey-logo.svg" className="" alt="Steadkey logo" />
        <h1 className="t-headline black">Steadkey&mdash;<span className="o-50">delivery sanity and clarity to the mortgage process</span></h1>
    </PageHero>

    <MainWrapper>

      <section className="pv5 pv6-ns bg-near-white tc">
        <span className="t-small-caps steadkey">TL;DR</span>
        <h2 className="t-mega measure-tight center">The right way to build a startup MVP</h2>
      </section>

      <div className="pv5 pv6-ns row narrow">
        <h3 className="f2">If at first you don't succeed&hellip;</h3>
        <p>Before working with Spacetime, the Steadkey founder Jerry had worked on several iterations of the product.</p>
        <p>Spacetime assisted with a gamut of needs to take Jerry's vision from a dream to market.</p>
        <ol className="lh-copy mb5">
          <li>Naming</li>
          <li>Logo Design</li>
          <li>Branding</li>
          <li>User Flows</li>
          <li>Wireframes</li>
          <li>User Interface Design - UI</li>
          <li>Clickable Prototype</li>
          <li>User Testing</li>
          <li>SaaS Architecture</li>
          <li>Backend Development</li>
          <li>Frontend Development</li>
        </ol>

        <h3>Our approach to startup technology</h3>
        <p>Technology can make or break a startup. Startup apps need to be stable, easy to maintain, capable of growth, and be clearly documented. At Spacetime, we always use common, well-known technologies. We avoid any type of "proprietary" code or platforms and opt for open source code.</p>
        <p>Here are some of the tools and services we used for Steadkey:</p>
        <ul className="lh-copy">
          <li>Ruby on Rails</li>
          <li>Angular</li>
          <li>Material Design</li>
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

        <h3>Startup Naming &amp; Branding</h3>
        <p>We ideated dozens of name options and logo concepts before landing of the final Steadkey name and logo.</p>

      </div>

      <img src="/portfolio/steadkey/steadkey-logo-sketches.png" className="center db mw7 mv4" alt="Pen on paper sketch concepts for the Steadkey logo" />
      <small className="tc db i o-50">Sketches: beginning sketch for the Steadkey logo concept</small>

      <img src="/portfolio/steadkey/steadkey-logo-concepts.png" className="center db mw8 mv4" alt="Medium fidelity logo design concepts for Steadkey" />
      <small className="tc db i o-50">Medium fidelity logo concepts</small>

      <img src="/portfolio/steadkey/steadkey-logo-design.png" className="center db mw5 mv4" alt="Final logo design for Steadkey" />

      <div className="row narrow">
        <hr className="mv5 mv6-ns bw4 b--steadkey o-10" />
        <h3>User Flow</h3>
        <p>User flow sketch help us quickly gain insight on the new user flow and layout for the Steadkey website.</p>
        <p>Wireframes allow our team and clients to delve into the functionality and business logic of the startup, without muddying the waters with color, logos, photos, etc.</p>
      </div>

      <img src="/portfolio/steadkey/steadkey-user-flow.jpg" className="center db mw7 mv6" alt="Pen on paper sketch concepts for the Steadkey logo" />

      <img src="/portfolio/steadkey/steadkey-register-page.jpg" className="center db mw8 mv6" alt="Web design for Steadkey startup registration page" />

      <img src="/portfolio/steadkey/steadkey-app-design.jpg" className="center db mw8 mv6" alt="Various app design views for Steadkey" />

      <img src="/portfolio/steadkey/steadkey-overlay.jpg" className="center db mw6 mv6 deep-shadow" alt="Steadkey app ui design" />

      <img src="/portfolio/steadkey/steadkey-pre-approval-letter.jpg" className="center db mw7 mv6 deep-shadow" alt="Approval letter for Steadkey mortgage startup" />

      <img src="/portfolio/steadkey/steadkey-house-approval.jpg" className="center db mw7 mv6 deep-shadow" alt="Steadkey dashboard user interface" />


      <div className="pv5 pv6-ns row narrow">
        <h3>Startup growth for Steadkey</h3>
        <p>Steadkey has continued to grow and expand their offering. The work we performed accomplished the early goals for the startup. Steadkey continues to grow and expand to this day.</p>
        <small className="i o-50">Note: the Steadkey website design has changed since working with Spacetime</small>
      </div>

      <OutboundLink
        href="https://www.steadkey.com/"
        target="_blank"
        className="big-circle-button hover-bg-steadkey hover-b--steadkey center mb7">
        Visit Steadkey ↗
      </OutboundLink>

    </MainWrapper>

  </Layout>
)

export default SteadkeyPage
