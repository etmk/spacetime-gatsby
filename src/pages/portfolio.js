import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'
import PageHero from '../components/PageHero'
import PortfolioCard from '../components/PortfolioCard'


const PortfolioPage = ({ transition }) => (
  <div style={transition && transition.style}>
    <Helmet title={`Portfolio | ${config.siteTitle}`} />

    <PageHero
      title={`Portfolio`}
      description={`Good looking work isn’t good enough. Good work delivers great results beyond the imagination`} />

    <section className="bg-fog-white pa4">
      <div className="row">
        <h2>This is our portfolio. Nice.</h2>
      </div>
    </section>
    <section>
      <PortfolioCard
        name={`dude-perfect`}
        title={`Dude Perfect`}
        description={`We took Dude Perfect's GO BIG dream from a vision to reality with design, development, and social and video integration.`}
        bgColor={`#00FFDE`}/>
      <PortfolioCard
        name={`keyzie`}
        title={`Keyzie`}
        description={`We took Dude Perfect's GO BIG dream from a vision to reality with design, development, and social and video integration.`}
        bgColor={`#F78657`}/>
      <PortfolioCard
        name={`studiohop`}
        title={`StudioHop`}
        description={`We took Dude Perfect's GO BIG dream from a vision to reality with design, development, and social and video integration.`}
        bgColor={`#00C2F2`}/>
      <PortfolioCard
        name={`bell`}
        title={`Bell`}
        description={`We took Dude Perfect's GO BIG dream from a vision to reality with design, development, and social and video integration.`}
        bgColor={`#000`}/>
    </section>
  </div>
)

export default PortfolioPage
