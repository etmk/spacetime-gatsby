import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'
import MainWrapper from '../layouts/MainWrapper/MainWrapper'
import PageHero from '../components/PageHero'
import TeamMembers from '../components/Team/TeamMembers'
import TeamMantra from '../components/Team/TeamMantra'

const TeamPage = ({ transition }) => (
  <div>
    <Helmet>
      <title>{`Team | ${config.siteTitle}`}</title>
      <body class="dark-theme" />
      <meta name="description" content="The incredible, multi-discipline team at Spacetime is based in Dallas, Texas and anywhere with an internet connection" />
      <meta name="keywords" content="hey spacetime, spacetime, dallas, plano, texas, team, design, agency, business, designer, developer, software, prototypes" />
    </Helmet>

    <section id="PageHero" className="page-hero pb7-l" style={transition && transition.style}>

      <div className="page-hero__content row">
        <div className="fl-l w-60-l">
          <h1 className="page-hero__headline">Mostly ordinary, occassionally extraordinary&mdash;<span>always delightful</span></h1>
        </div>
      </div>

      <div className="dn dib-l w-50-l absolute-l" style={{ top: "0", left: "60%"}}>
        <img src="/photos/spacetime-workspace.jpg" className="absolute-l top-0-l left-0-l" alt="An office space wall with painted text that says Punch Today in the Face." style={{ marginTop: "9.5rem" }} />
        <img src="/photos/spacetime-conference.jpg" className="deep-shadow absolute" alt="Spacetime co-founder Caleb Sylvest at a conference table with other entrepreneurs at Common Desk Granite Park" style={{ left: "4rem", top: "26rem", maxWidth: "12rem" }} />
      </div>

    </section>

    <MainWrapper>

      <section className="pv5 bg-fog-white">
        <div className="row relative z-1">
          <h2 className="black-80 f3 f2-m f1-l fw4 lh-title">At Spacetime, we partner with clients to strategize &amp; execute their vision. We approach problems with a business-centric focus with a goal of sustainability and&nbsp;ROI.</h2>
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
