import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'
import MainWrapper from '../layouts/MainWrapper/MainWrapper'
import PageHero from '../components/PageHero'
import TeamPrinciples from '../components/TeamPrinciples'
import TeamMembers from '../components/TeamMembers'
import TeamMantra from '../components/TeamMantra'

const TeamPage = ({ transition }) => (
  <div>
    <Helmet title={`Team | ${config.siteTitle}`} />

    <PageHero
      title={"Team"}
      description={"Two heads are better than one. Three heads are better than two. n<sup>x</sup> heads, well that's best of all."} />

    <MainWrapper>

      <section className="bg-red pv5 white relative overflow-hidden" style={transition && transition.style}>
        <div className="row mw8 relative z-1">
          <h3 className="f2 fw7 lh-title measure-narrow">At Spacetime, we partner with clients to strategize & execute their vision. We approach problems with a business-centric focus with a goal of sustainability and ROI.</h3>
        </div>
        <img src="/bgs/saturn-bg.jpg" className="w-100 absolute top-0 right-0 z-0" alt="Spacetime background image" />
      </section>

      <section className="pt5 pb5">
        <div className="row">
          <TeamMembers />
        </div>
      </section>

      <section>
        <div className="row">
          <TeamMantra />
        </div>
      </section>

    </MainWrapper>
  </div>
)

export default TeamPage
