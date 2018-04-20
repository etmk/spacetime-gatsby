import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import config from '../../data/site-config'
import MainWrapper from '../layouts/MainWrapper/MainWrapper'
import PageHero from '../components/PageHero'

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={`Welcome | ${config.siteTitle}`} />

        <PageHero
          title={"Home"}
          description={"Whether you’re building a marketing website, a mobile app or the next Facebook"} />

        <MainWrapper>

          <section className="bg-white pv5 black relative overflow-hidden" >
            <div className="row mw8 relative z-1">
              <h1>The home page</h1>
              <hr className="mw2 mh0 mv4" />
              <h3 className="f2 fw5 lh-title measure-narrow">At Spacetime, we partner with clients to strategize & execute their vision. We approach problems with a business-centric focus with a goal of sustainability and ROI.</h3>
            </div>
          </section>

        </MainWrapper>
      </div>
    );
  }
}

export default IndexPage
