import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import config from '../../../data/site-config'

import Layout from '../../components/layout'
import MainWrapper from '../../components/MainWrapper/MainWrapper'
import PageHero from '../../components/PageHero'
import PortfolioCard from '../../components/Portfolio/PortfolioCard'
import ClientList from '../../components/ClientList'

const PortfolioPage = () => (
  <Layout className="bg-near-white">

  <Helmet
    title={`Portfolio 💼 work in the Spacetime design portfolio`}
    meta={[
      { name: 'description', content: 'The incredible clients in our design portfolio include Dude Perfect, Bell Helicopter, Watermark Community Church, Highland Homes, and more' },
      { name: 'keywords', content: 'design portfolio' },
    ]}
    link={[
      { rel: 'canonical', href: `${config.siteUrl}/portfolio/` }
    ]}
  />

    <PageHero>
        <h3 className="t-headline">Good looking work isn&rsquo;t good enough&mdash;<span className="o-40">good work delivers great results beyond the imagination</span></h3>

        <h1 className="f5 fw4 lh-copy o-40">We believe a great design portfolio speaks for itself.</h1>

    </PageHero>

    <MainWrapper>

      <section className="">
        <PortfolioCard
          name={`dude-perfect`}
          title={`Dude Perfect`}
          description={`We took Dude Perfect's GO BIG dream from a vision to reality with design, development, and social and video integration.`}
          urlLink={`http://dudeperfect.com/`}
          bgColor={`#00FFDE`}
          textColor={`black`}
          logoPath={`/client-logos/dude-perfect-icon.svg`}
          bgYAxis={`top`} />

        <div className="flex-ns bt-ns bb-ns bw3-ns b--white">
          <PortfolioCard
            name={`keyzie`}
            title={`Keyzie`}
            description={`The future of real estate is personal. Keyzie changes the nature of buying and selling property by cutting out the expensive fees; keeping cash in your pocket.`}
            urlLink={`https://www.keyzie.com/`}
            bgColor={`#F78657`}
            textColor={`black`}
            logoPath={`/client-logos/keyzie-logo.svg`}
            bgYAxis={`top`}
            uniqueClass={`br-ns bw3 b--white`} />

          <PortfolioCard
            name={`studiohop`}
            title={`StudioHop`}
            description={`We rebuilt StudioHop's platform and website in a way to prepare for continued growth and scale in the years to come.`}
            urlLink={`https://www.studiohopfitness.com/`}
            bgColor={`#00C2F2`}
            textColor={`black`}
            logoPath={`/client-logos/studiohop-icon.svg`}
            bgYAxis={`top`} />
        </div>

        <PortfolioCard
          name={`bell`}
          title={`Bell`}
          description={`New brand. New logo. New vision. New mission. We partnered with Bell to tackle the future of the Bell web experience.`}
          urlLink={`http://www.bellflight.com/`}
          bgColor={`#000`}
          textColor={`white`}
          logoPath={`/client-logos/bell-logo.svg`}
          bgYAxis={`top`} />

        <div className="flex-ns bt-ns bb-ns bw3-ns b--white">
          <PortfolioCard
            name={`steadkey`}
            title={`Steadkey`}
            description={`We took Steadkey from zero to MVP, building the app, website, and onboarding the first round of users.`}
            urlLink={`https://www.steadkey.com/`}
            bgColor={`#F64A53`}
            textColor={`black`}
            logoPath={`/client-logos/steadkey-logo.svg`}
            bgYAxis={`bottom`}
            uniqueClass={`br-ns bw3 b--white`} />

          <PortfolioCard
            name={`vault-aviation`}
            title={`Vault Aviation`}
            description={`We leveled up the Vault Aviation web design and experience to reflect the elite status the brand deserves.`}
            urlLink={`https://vaultjet.com/`}
            bgColor={`#232825`}
            textColor={`white`}
            logoPath={`/client-logos/vault-aviation-logo.svg`}
            bgYAxis={`top`} />
        </div>

        <PortfolioCard
          name={`neue-build`}
          title={`Neue Build`}
          description={`New build. New home. Move in ready. We launched the Neue Build startup to focus on the Texas new construction home market.`}
          urlLink={`https://neuebuild.com/`}
          bgColor={`#00BAFE`}
          textColor={`black`}
          logoPath={`/client-logos/neue-build-logo.svg`}
          bgYAxis={`top`} />

      </section>

      <section className="pv5 cf bg-deep-purple white">
        <div className="row">
          <div className="fr-l w-40-l mb5">
            <h2 className="f2 sans-serif dark-red mt0 mt3-ns">Can we work with you?</h2>
            <p className="white-80 measure-narrow">We’ve worked with some really cool clients and solved big and small problems. We continually improve how we work to ensure we are top-notch and ready for any challenge.</p>
            <p className="white-80 sans-serif measure-narrow">What can we work on together?</p>
            <Link
              to="/contact/"
              className="f6 fw5 link br1 ph3 pv3 mt4 dib white bg-dark-red dim">
                Let&rsquo;s talk about your project →
            </Link>
          </div>
          <div className="fl-l w-50-l bt bw1 b--white-10 pt4 pa0-l bw0-l">
            <ClientList />
          </div>
        </div>
      </section>

    </MainWrapper>
  </Layout>
)

export default PortfolioPage
