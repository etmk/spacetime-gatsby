import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'
import PageHero from '../components/PageHero'
import PortfolioCard from '../components/PortfolioCard'
import ClientList from '../components/ClientList'



const PortfolioPage = ({ transition }) => (
  <div>
    <Helmet title={`Portfolio | ${config.siteTitle}`} />

    <PageHero
      title={`Portfolio`}
      description={`Good looking work isn’t good enough. Good work delivers great results beyond the imagination`} />

    <section className="pv5 cf bg-fog-white" style={transition && transition.style}>
      <div className="row">
        <div className="fl w-50-ns">
          <h2 className="f1 serif red">Our team provides the expertise and skill you need to drive your project forward to success.</h2>
          <p className="sans-serif black-50 fw5 measure">Unlike our competitors who push a one-size-fits-all solution, we opt for specialized project plans on a per client basis, because your problem is unique and deserves a strategy to drive results and lead to success.</p>
          <div className="flex">
            <ul className="lh-copy f6 mv4">
              <li>UI & UX Design</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>Front-end Development</li>
            </ul>
            <ul className="lh-copy f6 mv4">
              <li>Product Strategy</li>
              <li>Technology Consultation</li>
              <li>Startup Incubation</li>
              <li>Specially Tailored Retainers</li>
            </ul>
          </div>
        </div>
        <div>
          <img src="illustrations/services-illustration.png" alt="" className="fr" />
        </div>
      </div>
    </section>

    <section>
      <PortfolioCard
        name={`dude-perfect`}
        title={`Dude Perfect`}
        description={`We took Dude Perfect's GO BIG dream from a vision to reality with design, development, and social and video integration.`}
        urlLink={`http://dudeperfect.com/`}
        bgColor={`#00FFDE`}
        textColor={`black`}
        logoPath={`client-logos/dude-perfect-icon.svg`}
        bgYAxis={`top`} />

      <div className="flex-ns">
        <PortfolioCard
          name={`keyzie`}
          title={`Keyzie`}
          description={`The future of real estate is personal. Keyzie changes the nature of buying and selling property by cutting out the expensive fees; keeping cash in your pocket.`}
          urlLink={`https://www.keyzie.com/`}
          bgColor={`#F78657`}
          textColor={`black`}
          logoPath={`client-logos/keyzie-logo.svg`}
          bgYAxis={`top`} />

        <PortfolioCard
          name={`studiohop`}
          title={`StudioHop`}
          description={`We rebuilt StudioHop's platform and website in a way to prepare for continued growth and scale in the years to come.`}
          urlLink={`https://www.studiohopfitness.com/`}
          bgColor={`#00C2F2`}
          textColor={`black`}
          logoPath={`client-logos/studiohop-icon.svg`}
          bgYAxis={`top`} />
      </div>

      <PortfolioCard
        name={`bell`}
        title={`Bell`}
        description={`New brand. New logo. New vision. New mission. We partnered with Bell to tackle the future of the Bell web experience.`}
        urlLink={`http://www.bellflight.com/`}
        bgColor={`#000`}
        textColor={`white`}
        logoPath={`client-logos/bell-logo.svg`}
        bgYAxis={`top`} />

      <div className="flex-ns">
        <PortfolioCard
          name={`steadkey`}
          title={`Steadkey`}
          description={`We took Steadkey from zero to MVP, building the app, website, and onboarding the first round of users.`}
          urlLink={`https://www.steadkey.com/`}
          bgColor={`#F64A53`}
          textColor={`black`}
          logoPath={`client-logos/steadkey-logo.svg`}
          bgYAxis={`bottom`} />

        <PortfolioCard
          name={`vault-aviation`}
          title={`Vault Aviation`}
          description={`We leveled up the Vault Aviation web design and experience to reflect the elite status the brand deserves.`}
          urlLink={`https://vaultjet.com/`}
          bgColor={`#232825`}
          textColor={`white`}
          logoPath={`client-logos/vault-aviation-logo.svg`}
          bgYAxis={`top`} />
      </div>

      <PortfolioCard
        name={`neue-build`}
        title={`Neue Build`}
        description={`New build. New home. Move in ready. We launched the Neue Build startup to focus on the Texas new construction home market.`}
        urlLink={`https://neuebuild.com/`}
        bgColor={`#00BAFE`}
        textColor={`black`}
        logoPath={`client-logos/neue-build-logo.svg`}
        bgYAxis={`top`} />

    </section>

    <section className="pv5 cf bg-deep-purple white">
      <div className="row">
        <div className="fl w-50-ns">
          <ClientList />
        </div>
      </div>
    </section>
  </div>
)

export default PortfolioPage
