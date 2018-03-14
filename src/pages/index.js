import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={`Welcome | ${config.siteTitle}`} />
        <section className="ph5-l pt6 pb5 bg-dark-purple">
          <h1 className="f1-ns white tc mt0">Homepage</h1>
          <p className="f4 white-70 tc ml-auto mr-auto mb0 measure-narrow">Whether you’re building a marketing website, a mobile app or the next Facebook, we’re experienced in the right tool for the xxx.</p>
        </section>
      </div>
    );
  }
}

export default IndexPage;
