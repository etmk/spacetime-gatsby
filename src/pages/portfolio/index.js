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
            <img className="PortfolioCard__logo" src="/client-logos/dude-perfect-icon.svg" alt="Dude Perfect logo" />
            <h3 className="t-subheadline">
              Dude Perfect&mdash;<span className="o-40">YouTube influencers specializing in the trick&nbsp;shot</span>
            </h3>
            <span>
              Read the Dude Perfect case study<br />
              <span className="arrow-decorator" />
            </span>

            <img className="PortfolioCard__bg" src="/portfolio/dude-perfect/dude-perfect-card-bg.jpg" alt="Dude Perfect guys jumping in the air" />
          </AniLink>

          <PortfolioCard bgColor={`#F78657`} urlLink={`https://www.keyzie.com/`}>
            <img className="PortfolioCard__logo" src="/client-logos/keyzie-logo.svg" alt="Keyzie logo" />
            <h3 className="t-subheadline">
              Keyzie&mdash;<span className="o-40">the future of real estate is&nbsp;personal</span>
            </h3>
            <span>
              Visit Keyzie.com<br />
              <span className="arrow-decorator" />
            </span>

            <img className="PortfolioCard__bg" src="/portfolio/keyzie/keyzie-card-bg.jpg" alt="Front door to an apartment video" />
          </PortfolioCard>
        </div>

        <div className="w-50-l mt5-l">

          <AniLink
            cover direction="up" bg="#00C2F2"
            to="/portfolio/studiohop/"
            style={{backgroundColor: `#00C2F2`}}
            className="PortfolioCard grow"
          >
            <img className="PortfolioCard__logo" src="/client-logos/studiohop-icon.svg" alt="Dude Perfect logo" />
            <h3 className="t-subheadline">
              StudioHop&mdash;<span className="o-40">fitness classess whenever and wherever you&nbsp;like</span>
            </h3>
            <span>
              Read the StudioHop case study<br />
              <span className="arrow-decorator" />
            </span>

            <img className="PortfolioCard__bg" src="/portfolio/studiohop/studiohop-card-bg.jpg" alt="StudioHop woman in a boxing class" />
          </AniLink>

          <PortfolioCard bgColor={`#f64a53`} urlLink={`https://www.steadkey.com/`}>
            <img className="PortfolioCard__logo" src="/client-logos/steadkey-logo.svg" alt="Steadkey logo" />
            <h3 className="t-subheadline">
              Steadkey&mdash;<span className="o-40">deliver sanity and clarity to the mortgage&nbsp;process</span>
            </h3>
            <span>
              Visit Steadkey.com<br />
              <span className="arrow-decorator" />
            </span>

            <img className="PortfolioCard__bg" src="/portfolio/steadkey/steadkey-card-bg.jpg" alt="A modern style home" />
          </PortfolioCard>
        </div>
      </div>

      <h5 className="tc f2 silver">For your eyes only <Emoji symbol="👁" label="eyes" className="f3 ml2"/></h5>

      <div className="row w-75-l pv5 pv6-l flex-l">
        <div className="w-50-l">

          <PortfolioCard bgColor={`#000`} urlLink={`http://bellflight.com/`}>
            <img className="PortfolioCard__logo" src="/client-logos/bell-logo.svg" alt="Bell Helicopter logo" />
            <h3 className="t-subheadline white">
              Bell&mdash;<span className="o-40">the new and future Bell</span>
            </h3>
            <span className="white">
              Visit BellFlight.com<br />
              <span className="arrow-decorator white-arrow" />
            </span>

            <img className="PortfolioCard__bg" src="/portfolio/bell/bell-helicopter-card-bg.jpg" alt="Bell Helicopter Huey" />
          </PortfolioCard>

          <PortfolioCard bgColor={`#00BAFE`} urlLink={`https://neuebuild.com/`}>
            <img className="PortfolioCard__logo" src="/client-logos/neue-build-logo.svg" alt="Neue Build logo" />
            <h3 className="t-subheadline">
              NeueBuild&mdash;<span className="o-40">new build, new home, move in&nbsp;ready</span>
            </h3>
            <span>
              Visit NeueBuild.com<br />
              <span className="arrow-decorator" />
            </span>

            <img className="PortfolioCard__bg" src="/portfolio/neue-build/neue-build-card-bg.jpg" alt="Google map with various home indicators" />
          </PortfolioCard>

        </div>
        <div className="w-50-l mt5-l">

          <PortfolioCard bgColor={`#0761C1`} urlLink={`https://fluidity.tech/`}>
            <img className="PortfolioCard__logo" src="/client-logos/fluidity-tech-icon.svg" alt="Fluidity Tech logo" />
            <h3 className="t-subheadline white">
              Fluidity Tech&mdash;<span className="o-40">revolutionizing drone control</span>
            </h3>
            <span className="white">
              Visit Fluidity.Tech<br />
              <span className="arrow-decorator white-arrow" />
            </span>

            <img className="PortfolioCard__bg" src="/portfolio/fluidity-tech/fluidity-tech-card-bg.jpg" alt="Public safetly worker with a drone" />
          </PortfolioCard>

          <PortfolioCard bgColor={`#232825`} urlLink={`http://www.watermark.org/`}>
            <img className="PortfolioCard__logo" src="/client-logos/watermark-community-church-icon.svg" alt="Watermark Community Church logo" />
            <h3 className="t-subheadline white">
              Watermark&mdash;<span className="o-40">one church, four campuses, thousands of&nbsp;locations</span>
            </h3>
            <span className="white">
              Visit Watermark.org<br />
              <span className="arrow-decorator white-arrow" />
            </span>

            <img className="PortfolioCard__bg" src="/portfolio/watermark/watermark-card-bg.jpg" alt="Musicians on stage at Watermark" />
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
            <p className="white-80 measure center">We&rsquo;ve worked with some really cool clients and solved big and small problems. We continually improve how we work to ensure we are top-notch and ready for any&nbsp;challenge.</p>
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
