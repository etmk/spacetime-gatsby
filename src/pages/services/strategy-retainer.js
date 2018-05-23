import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../../data/site-config'
import MainWrapper from '../../layouts/MainWrapper/MainWrapper'
import ContactForm from '../../components/ContactForm'
import ServicePageHero from '../../components/ServicePageHero'

const StrategyRetainerPage = () => (
  <div className="service-page content-page">
    <Helmet title={`🎯 Strategy Retainer | ${config.siteTitle}`} />

    <ServicePageHero
      name={`strategy-retainer`}
      title={`Strategy Retainer`}
      description={`Startups need special attention and a healthy dose of ingenuity to grow toward success.`}
      icon={`🎯`}
      iconPath={``}
      bgColor={`#5A62FF`}
      textColor={`white`} />

    <MainWrapper>
      <section id="table-of-content" className="pv4">
        <div className="row narrow">

          <p>Our consulting engagement will give you access to the strategic and tactical mobile expertise you need, when you need it.</p>

          <h3>How does it work?</h3>

          <p>Our agreement entitles you to unlimited 24/7 access to me via phone, email, and IM. I return all messages no later than the next business day, although in practice response time is much quicker (particularly between 9am to 5pm ET, but also nights and weekends).</p>

          <p>Meetings are scheduled in advance, typically take place over the phone, and are sometimes supplemented with online meeting and/or screen sharing software (e.g. GoToMeeting, Skype, Join.me).</p>

          <p>There are 6 possible areas of involvement:</p>

          <ol className="lh-copy">
            <li className="mv2">Participation in an initial in-depth, in-person meeting to define long-term business goals, existing legacy systems architecture, and organizational challenges.</li>
            <li className="mv2">Regular meetings with the primary project contact to discuss strategy, longer-term issues, and business goals.</li>
            <li className="mv2">Strategic and tactical advice based on a series of ongoing meetings with team leaders. These are individualized and mutually agreed upon. In addition, I'll serve as a sounding board as they work to achieve their business and technical goals.</li>
            <li className="mv2">Technical review of APIs, IDEs, source code, documentation, and the like. Where appropriate, I'll provide code samples, proof-of-concept examples, and design mockups. Please note that authoring shipping code, designs, or documentation is not included in this agreement.</li>
            <li className="mv2">Periodic competitive analysis and market insight based on interactions with the developer community, both in person (e.g. speaking engagements, meet-ups, user groups), and online (e.g. Twitter, RSS feeds, blog posts/comments, mailing lists).</li>
            <li className="mv2">Situational responsiveness to needs that arise that you deem require my assistance, which are not covered elsewhere.</li>
          </ol>

          <p>My fee is $15,000 USD per month, all inclusive (i.e., I arrange and pay for any necessary travel, administrative expenses, etc). Professional courtesy discounts are available for quarterly and annual arrangements. Participation is limited. You can elect to be added to the waiting list if spots are not available.</p>

          <p>Please contact me to sign up or for more information.</p>
        </div>
      </section>

      <section className="pv5 bg-washed-yellow">
        <div className="row narrow">
          <h2 className="f1 serif red mt0 mb4 lh-solid">Let's Talk Strategy</h2>

          <ContactForm />

        </div>
      </section>
    </MainWrapper>
  </div>
)

export default StrategyRetainerPage
