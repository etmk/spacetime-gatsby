import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'
import PageHero from '../components/PageHero'



const ThanksPage = ({ transition }) => (
  <div>
    <Helmet title={`Thanks | ${config.siteTitle}`} />

    <PageHero
      title={`Thanks`}
      description={`Good looking work isn’t good enough. Good work delivers great results beyond the imagination`} />

    <section className="pv5 cf bg-fog-white" style={transition && transition.style}>
      <div className="row">
        <div className="fl-l w-60-l">
          <h2 className="f2 f1-ns serif red mt0">Thnaks</h2>
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
        <div className="fr-l w-30-l">
          <img src="illustrations/services-illustration.png" alt="" className="fr-l dn db-l" />
        </div>
      </div>
    </section>


  </div>
)

export default ThanksPage
