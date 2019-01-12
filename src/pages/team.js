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
      <title>{`Spacetime Team | Dallas Web Design Agency`}</title>
      <meta name="description" content="Spacetime is a Dallas web design agency building meaningful digital experiences to delight and amaze customers" />
      <meta name="keywords" content="dallas web design, experience designer, us designer, business informatics, brand designer, software developer" />
      <link rel="canonical" href={`${config.siteUrl}/team/`} />
    </Helmet>

    <section id="PageHero" className="page-hero pb7-l" style={transition && transition.style}>

      <div className="page-hero__content row">
        <div className="fl-l w-60-l">
          <h3 className="t-headline">Mostly ordinary, occassionally extraordinary&mdash;<span className="t-headline__alt">always delightful</span></h3>
          <h1 className="f5 fw4 lh-copy black-80">A Dallas web design agency in love with the&nbsp;<em className="hover-green">fantastic</em>.</h1>
        </div>
      </div>

      <div className="dn dib-l w-50-l absolute-l" style={{ top: "0", left: "60%"}}>
        <img src="/photos/spacetime-workspace.jpg" className="absolute-l top-0-l left-0-l" alt="An office space wall with painted text that says Punch Today in the Face." style={{ marginTop: "9.5rem" }} />
        <img src="/photos/spacetime-conference.jpg" className="deep-shadow absolute" alt="Spacetime co-founder Caleb Sylvest with other entrepreneurs at Common Desk Granite Park" style={{ left: "4rem", top: "26rem", maxWidth: "12rem" }} />
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
