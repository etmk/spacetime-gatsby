import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'
import MainWrapper from '../layouts/MainWrapper/MainWrapper'
import PageHero from '../components/PageHero'
import TeamMembers from '../components/TeamMembers'
import TeamMantra from '../components/TeamMantra'

const TeamPage = ({ transition }) => (
  <div>
    <Helmet>
      <title>{`Team | ${config.siteTitle}`}</title>
      <body class="dark-theme" />
    </Helmet>

    <section id="PageHero" className="page-hero pb7-l" style={transition && transition.style}>

      <div className="page-hero__content row">
        <div className="fl-l w-60-l">
          <h1 className="page-hero__headline">An all hands on deck attitude</h1>
          <p className="page-hero__text">
            Spacetime operates as a collaborative of specialized makers and entrepreneurs. When a client approached us with a project, we build a specialized team for the task at hand so you get only the best. Hey, we're kind of like Ocean's Eleven, in that way!
          </p>
          <Link to="/contact/" className="f6 link dim ba ph3 pv2 dib black">Contact us</Link>
        </div>
      </div>

      <div className="dn dib-l w-50-l absolute-l" style={{ top: "0", left: "60%"}}>
        <img src="/photos/spacetime-workspace.jpg" className="absolute-l top-0-l left-0-l mv5" alt="" />
        <img src="/photos/spacetime-conference.jpg" className="deep-shadow absolute" alt="" style={{ left: "4rem", top: "20rem" }} />
      </div>

    </section>

    <MainWrapper>

      <section className="pv5 bg-fog-white">
        <div className="row relative z-1">
          <h3 className="black-80 f3 f2-m f1-l fw4 lh-title">At Spacetime, we partner with clients to strategize &amp; execute their vision. We approach problems with a business-centric focus with a goal of sustainability and&nbsp;ROI.</h3>
        </div>
      </section>

      <section className="pv5 bg-white">
        <div className="row">
          <TeamMembers />
        </div>
      </section>

      <section className="pv5 bg-fog-white">
        <div className="row">
          <TeamMantra />
        </div>
      </section>

    </MainWrapper>

  </div>
)

export default TeamPage
