import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../../data/site-config'
import MainWrapper from '../../layouts/MainWrapper/MainWrapper'
import ContactForm from '../../components/ContactForm'
import ServicePageHero from '../../components/Services/ServicePageHero'

const StrategyRetainerPage = ({ transition }) => (
  <div className="service-page content-page" style={{backgroundColor: '#5A62FF'}}>

    <Helmet
      title={`🎯 Strategy Retainer | ${config.siteTitle}`}
      meta={[
        { name: 'description', content: 'Spacetime offers Strategy Retainer to clients; we act as an extension of your team, providing direction, insight, and creativity to your business.' },
        { name: 'keywords', content: 'hey spacetime, spacetime, business, agency, ux, ui, website, strategy, retainer, consulting, business goals, design systems, technical review' },
      ]}
      bodyAttributes={{
        class: 'light-theme'
      }}
    />

    <div style={transition && transition.style}>

      <ServicePageHero
        name={`strategy-retainer`}
        title={`Strategy Retainer`}
        description={`We provide the strategic and tactical expertise you need to catalyze your&nbsp;business`}
        icon={`🎯`}
        iconPath={``}
        bgColor={`#5A62FF`}
        textColor={`white`} />

      <MainWrapper>
        <section id="table-of-content" className="pv4">
          <div className="row narrow">

            <p>Our consulting engagement will give you access to the strategic and tactical expertise you need, when you need it.</p>

            <h3>How does it work?</h3>

            <p>Our agreement entitles you to unlimited 24/7 access to our team via phone, email, and IM. All messages will be returned no later than the next business day, although in practice response time is much quicker.</p>

            <p>Meetings are scheduled in advance, typically take place over the phone, and are sometimes supplemented with online meeting and/or screen sharing software (e.g. Hangouts, Skype, Slack).</p>

            <p>There are 7 possible areas of involvement:</p>

            <ol className="lh-copy">
              <li className="mv2">Participation in an initial in-depth, in-person meeting to define long-term business goals, existing legacy system architecture, design systems, product definition, and organizational challenges.</li>
              <li className="mv2">Regular meetings with the primary contact to discuss strategy, longer-term issues, and business goals.</li>
              <li className="mv2">Strategic and tactical liason between you and contract workers and agencies. We can also act as a sounding board to ensure proper technical and strategic execution.</li>
              <li className="mv2">Technical review of APIs, IDEs, source code, documentation, interviews, and the like. Note: authoring production code, designs, or documentation is not included in this agreement.</li>
              <li className="mv2">Creative review of design concepts, user flows, wireframes, prototypes, design systems, interviews and the like.</li>
              <li className="mv2">Periodic competitive analysis and market insight and strategic response.</li>
              <li className="mv2">Situational responsiveness to needs that arise that you deem require our expertise and intervention.</li>
            </ol>

            <p>The fee is $8,500 USD per month, all inclusive (i.e. we pay for any necessary travel, administrative expenses, etc). Professional courtesy discounts are available for quarterly and annual arrangements. Participation is limited. You can elect to be added to the waiting list if spots are not available.</p>

            <p>Please contact for more information.</p>
          </div>
        </section>

        <section className="pv5 pv6-ns bg-washed-yellow">
          <div className="row">
            <h2 className="t-headline mt0 mb4 mw7">Strategic expertise&mdash;guaranteed <span style={{color: '#5A62FF'}}>Confidence</span>.</h2>
            <p>Get in touch to schedule a friendly chat.</p>
            <div className="mw6 mt5">
              <ContactForm />
            </div>
          </div>
        </section>
      </MainWrapper>
    </div>
  </div>
)

export default StrategyRetainerPage
