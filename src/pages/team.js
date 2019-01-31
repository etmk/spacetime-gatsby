import React from 'react'
import Helmet from 'react-helmet'

import config from '../../data/site-config'

import Layout from '../components/layout'
import MainWrapper from '../components/MainWrapper/MainWrapper'
import PageHero from '../components/PageHero'
import TeamMembers from '../components/Team/TeamMembers'
import TeamMantra from '../components/Team/TeamMantra'

const TeamPage = () => (
  <Layout>
    <Helmet>
      <title>{`Spacetime Team 💪 a Dallas web design agency`}</title>
      <meta name="description" content="Spacetime is a Dallas web design agency building meaningful digital experiences to delight and amaze customers" />
      <meta name="keywords" content="dallas web design, experience designer, us designer, business informatics, brand designer, software developer" />
      <link rel="canonical" href={`${config.siteUrl}/team/`} />
    </Helmet>

    <PageHero>
      <h3 className="t-headline">Mostly ordinary, occassionally extraordinary&mdash;<span className="o-40">always delightful</span></h3>
      <h1 className="f5 fw4 lh-copy o-40">A Dallas web design agency in love with the&nbsp;<em>fantastic</em>.</h1>
    </PageHero>

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

  </Layout>
)

export default TeamPage
