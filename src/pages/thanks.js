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
      description={`We've received your message and will get back to you in one hot minute!`} />

    <section className="pv5 cf bg-fog-white" style={transition && transition.style}>
      <div className="row">
        <div className="fl-l w-60-l">
          <h2 className="f2 f1-ns serif red mt0">Until then&hellip;</h2>
          <p className="sans-serif black-50 fw5 measure">Check out the rest of our site. Sure, it's not as exciting as talking to a real live human being, but apparently the humans are away and only the robots are tending the station.</p>

          <ul className="lh-copy mv4">
            <li>
              <Link
              to="/"
              title="Home"
              className="dib fw6 blue">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio/"
                title="Portfolio"
                className="dib fw6 blue">
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/services/"
                title="Services"
                className="dib fw6 blue">
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/team/"
                title="Team"
                className="dib fw6 blue">
                Team
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </section>


  </div>
)

export default ThanksPage
