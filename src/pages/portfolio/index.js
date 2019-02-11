import React            from 'react'
import Helmet           from 'react-helmet'
import AniLink          from 'gatsby-plugin-transition-link/AniLink'
import Emoji            from 'a11y-react-emoji'

import config           from '../../../data/site-config'

import Layout           from '../../components/layout'
import MainWrapper      from '../../components/MainWrapper/MainWrapper'
import PageHero         from '../../components/PageHero'
import PortfolioCard    from '../../components/Portfolio/PortfolioCard'
import ClientList       from '../../components/ClientList'

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

      <div className="row w-75-l pv5 pv6-l flex-l">
        <div className="w-50-l">

          <AniLink
            cover direction="up" bg="#00FFDE"
            to="/portfolio/dude-perfect/"
            style={{backgroundColor: `#00FFDE`}}
            className="PortfolioCard grow"
          >
            <img src="/client-logos/dude-perfect-icon.svg" alt="Dude Perfect logo" />
            <h3 className="t-subheadline">
              Dude Perfect&mdash;<span className="o-40">YouTube influencers specializing in the trick&nbsp;shot</span>
            </h3>
            <span>
              Read the case study<br />
              <span className="arrow-decorator" />
            </span>
          </AniLink>

          <PortfolioCard bgColor={`#F78657`} urlLink={`https://www.keyzie.com/`}>
            <img src="/client-logos/keyzie-logo.svg" alt="Keyzie logo" />
            <h3 className="t-subheadline">
              Keyzie&mdash;<span className="o-40">the future of real estate is&nbsp;personal</span>
            </h3>
            <span>
              Visit Keyzie.com<br />
              <span className="arrow-decorator" />
            </span>
          </PortfolioCard>
        </div>

        <div className="w-50-l mt5-l">
          <PortfolioCard bgColor={`#00C2F2`} urlLink={`https://www.studiohopfitness.com/`}>
            <img src="/client-logos/studiohop-icon.svg" alt="StudioHop logo" />
            <h3 className="t-subheadline">
              StudioHop&mdash;<span className="o-40">fitness classess whenever and wherever you&nbsp;like</span>
            </h3>
            <span>
              Visit StudioHopFitness.com<br />
              <span className="arrow-decorator" />
            </span>
          </PortfolioCard>

          <PortfolioCard bgColor={`#f64a53`} urlLink={`https://www.steadkey.com/`}>
            <img src="/client-logos/steadkey-logo.svg" alt="Steadkey logo" />
            <h3 className="t-subheadline">
              Steadkey&mdash;<span className="o-40">deliver sanity and clarity to the mortgage&nbsp;process</span>
            </h3>
            <span>
              Visit Steadkey.com<br />
              <span className="arrow-decorator" />
            </span>
          </PortfolioCard>
        </div>
      </div>

      <h5 className="tc f2 silver">For your eyes only <Emoji symbol="👁" label="eyes" className="f3 ml2"/></h5>

      <div className="row w-75-l pv5 pv6-l flex-l">
        <div className="w-50-l">

          <PortfolioCard bgColor={`#000`} urlLink={`http://www.bellflight.com/`}>
            <img src="/client-logos/bell-logo.svg" alt="Bell Helicopter logo" />
            <h3 className="t-subheadline white">
              Bell&mdash;<span className="o-40">the new and future&nbsp;Bell</span>
            </h3>
            <span className="white">
              Visit BellFlight.com<br />
              <span className="arrow-decorator white-arrow" />
            </span>
          </PortfolioCard>

          <PortfolioCard bgColor={`#00BAFE`} urlLink={`https://neuebuild.com/`}>
            <img src="/client-logos/neue-build-logo.svg" alt="Neue Build logo" />
            <h3 className="t-subheadline">
              Neue Build&mdash;<span className="o-40">new build, new home, move in&nbsp;ready</span>
            </h3>
            <span>
              Visit NeueBuild.com<br />
              <span className="arrow-decorator" />
            </span>
          </PortfolioCard>

        </div>
        <div className="w-50-l mt5-l">

          <PortfolioCard bgColor={`#232825`} urlLink={`https://vaultjet.com/`}>
            <img src="/client-logos/vault-aviation-logo.svg" alt="Vault Aviation logo" />
            <h3 className="t-subheadline white">
              Vault Aviation&mdash;<span className="o-40">private charter jets for any&nbsp;occasion</span>
            </h3>
            <span className="white">
              Visit VaultAviation.com<br />
              <span className="arrow-decorator white-arrow" />
            </span>
          </PortfolioCard>

        </div>
      </div>

      <section className="pv1 cf bg-deep-purple white">
        <div className="row">
          <div className="mv5">
            <ClientList />
          </div>
          <hr className="bt-1 bb-0 br-0 bl-0 b--white-10" />
          <div className="mv6 tc">
            <h2 className="f2 fw5 dark-red">Can we work with you?</h2>
            <p className="white-80 w-60-l center">We’ve worked with some really cool clients and solved big and small problems. We continually improve how we work to ensure we are top-notch and ready for any challenge.</p>
            <p className="white-80 sans-serif measure center">What can we work on together?</p>
            <AniLink
              cover
              bg="#f03f47"
              to="/contact/"
              className="f6 fw5 link br1 ph3 pv3 mt4 dib white bg-dark-red dim">
                Let&rsquo;s talk about your project →
            </AniLink>
          </div>
        </div>
      </section>

    </MainWrapper>
  </Layout>
)

export default PortfolioPage
