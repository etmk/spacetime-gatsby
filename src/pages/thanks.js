import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'
import PageHero from '../components/PageHero'



const ThanksPage = ({ transition }) => (
  <div>
    <Helmet
      title={`Thanks | ${config.siteTitle}`}
    />

    <section id="PageHero" className="page-hero bg-light-blue" style={transition && transition.style}>

      <div className="page-hero__content row">
        <h1 className="page-hero__headline">Thank You!</h1>

        <div className="">
          <div className="w-70-ns">
            <h2 className="f2 mt0 fw7">We've received your message and will get back to you in one hot minute! Until then&hellip;</h2>
            <p className="page-hero__text">
              Check out the rest of our site.
            </p>
            <p className="page-hero__text">
              Sure, it's not as exciting as talking to a real live human being, but apparently the humans are away and only the robots are tending the station.
            </p>

            <div className="lh-copy f2 mv4">
                <Link
                to="/"
                title="Home"
                className="dib fw6 black dim">
                  🏡 Home
                </Link><br />
                <Link
                  to="/portfolio/"
                  title="Portfolio"
                  className="dib fw6 black dim">
                  💼 Portfolio
                </Link><br />
                <Link
                  to="/services/"
                  title="Services"
                  className="dib fw6 black dim">
                  🛠 Services
                </Link><br />
                <Link
                  to="/team/"
                  title="Team"
                  className="dib fw6 black dim">
                  👩‍🎤 Team
                </Link>
                <br />
                <Link
                  to="/contact/"
                  title="Contact"
                  className="dib fw6 black dim">
                  💌 Contact
                </Link>
            </div>

          </div>

        </div>
      </div>

    </section>

  </div>
)

export default ThanksPage
