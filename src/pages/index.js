import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'
import PageHero from '../components/PageHero'

class IndexPage extends React.Component {
  render() {
    return (
      <div style={{opacity: '1', transition: 'opacity 250ms ease-in-out'}}>
        <Helmet title={`Welcome | ${config.siteTitle}`} />

        <PageHero
          title={"Home"}
          description={"Whether you’re building a marketing website, a mobile app or the next Facebook, we’re experienced in the right tool for the xxx."} />
      </div>
    );
  }
}

export default IndexPage
