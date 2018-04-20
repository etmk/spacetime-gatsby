import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../../data/site-config'
import MainWrapper from '../../layouts/MainWrapper/MainWrapper'

const StartupServicesPage = ({ transition }) => (
  <div className="service-page content-page">
    <Helmet title={`Services | ${config.siteTitle}`} />

    <section className="ph5-l pt6 pb5 bg-black tc">
      <span className="f1 dib">☕️</span>
      <h1 className="f2-ns white tc mt0">Coffee Time</h1>
      <p className="f4 tc white-80 ml-auto mr-auto mb0 measure-narrow">Startups require a special, diverse set of skills to progress from idea to marketable business</p>
    </section>

    <MainWrapper>
      <p>this is the content</p>
    </MainWrapper>
  </div>
)

export default StartupServicesPage
