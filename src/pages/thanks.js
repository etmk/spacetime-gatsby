import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Emoji from 'a11y-react-emoji'

import config from '../../data/site-config'

import Layout from '../components/layout'

const ThanksPage = () => (
  <Layout className="bg-light-blue">
    <Helmet
      title={`Thanks 📬 ${config.siteTitle}`}
      meta={[
        { name: 'description', content: 'Spacetime provides professional web based services such as design, ux, ui, WordPress development and hosting, seo, ecommerce, Shopify, Kickstarter' },
        { name: 'keywords', content: 'hey spacetime, spacetime, dallas, plano, texas, wordpress, shopify, kickstarter, youtube, ux, ui, web design, ecommerce, startups, seo, websites' },
        { name: 'robots', content: 'noindex'},
      ]}
    />

    <section id="PageHero" className="page-hero bg-light-blue">

      <div className="page-hero__content row">
        <h1 className="page-hero__headline">Thank You!</h1>

        <div className="">
          <div className="w-70-ns">
            <h2 className="f2 mt0 fw7">We&rsquo;ve received your message and will get back to you in one hot minute! Until then&hellip;</h2>
            <p className="page-hero__text">
              Check out the rest of our site.
            </p>
            <p className="page-hero__text">
              Sure, it&rsquo;s not as exciting as talking to a real live human being, but apparently the humans are away and only the robots are tending the station.
            </p>

            <div className="lh-copy f2 mv4">
                <Link
                to="/"
                title="Home"
                className="dib fw6 black dim">
                  <Emoji symbol="🏡" label="home"/> Home
                </Link>
                <br />
                <Link
                  to="/portfolio/"
                  title="Portfolio"
                  className="dib fw6 black dim">
                  <Emoji symbol="💼" label="briefcase"/> Portfolio
                </Link>
                <br />
                <Link
                  to="/services/"
                  title="Services"
                  className="dib fw6 black dim">
                  <Emoji symbol="🛠" label="tool"/> Services
                </Link>
                <br />
                <Link
                  to="/team/"
                  title="Team"
                  className="dib fw6 black dim">
                  <Emoji symbol="💪" label="strong arm"/> Team
                </Link>
                <br />
                <Link
                  to="/contact/"
                  title="Contact"
                  className="dib fw6 black dim">
                  <Emoji symbol="📪" label="mailbox"/> Contact
                </Link>
            </div>

          </div>

        </div>
      </div>

    </section>

  </Layout>
)

export default ThanksPage
