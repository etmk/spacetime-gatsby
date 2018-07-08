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
    <Helmet title={`Team | ${config.siteTitle}`} />

    <section id="PageHero" className="page-hero" style={transition && transition.style}>

      <div className="page-hero__content row">
        <h1 className="page-hero__headline">An all hands on deck attitude</h1>
        <p className="page-hero__text">
          At Spacetime, we partner with clients to strategize & execute their vision. We approach problems with a business-centric focus with a goal of sustainability and ROI.
        </p>
        <Link to="/contact" className="f6 link dim ba ph3 pv2 dib black">Contact us</Link>

        <div className="w-50-l">
          <img src="/photos/spacetime-workspace.jpg" className="mv3 absolute-l top-2-l right--2-l z-0" alt="" />
          <img src="/photos/spacetime-conference.jpg" className="mv3 absolute-l right-2-l bottom-2-l z-1" alt="" />
        </div>
      </div>

    </section>

    <MainWrapper>

      <section className="pv5 bg-fog-white">
        <div className="row mw8 relative z-1">
          <h3 className="black-80 f3 f2-m f1-l fw4 lh-title">At Spacetime, we partner with clients to strategize &amp; execute their vision. We approach problems with a business-centric focus with a goal of sustainability and ROI.</h3>
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
