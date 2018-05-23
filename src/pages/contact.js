import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'
import MainWrapper from '../layouts/MainWrapper/MainWrapper'
import PageHero from '../components/PageHero'
import HeadquartersMap from '../components/HeadquartersMap'
import ContactForm from '../components/ContactForm'

class ContactPage extends React.Component {

  render() {
    return (
      <div>

        <Helmet title={`Contact | ${config.siteTitle}`} />

        <PageHero
          title={"Contact"}
          description={"Go ahead, get in touch. We eagerly await to<br>hear from you, seriously."} />

        <MainWrapper>

          <section className="pv5 cf bg-fog-white">
            <div className="row">
              <div className="fl w-50-ns">
                <h2 className="f1 serif red">Not a fan of filling out forms?</h2>
                <p className="sans-serif black-50 fw5 measure">Not into filling out forms? Find us on the Twitter-net: <a href="https://twitter.com/heyspacetime" target="_blank" className="red dim">@heyspacetime</a></p>
              </div>
              <div className="fr-ns">

              </div>
            </div>
          </section>

          <section>
            <div className="row cf">

              <div className="w-50-ns fl-ns mv4 mv6-l">

                <ContactForm />

              </div>

              <div className="w-33-ns fr-ns mv4 mv6-l">
                <ul className="list pa0 ma0">
                  <li className="pt2 pb4 flex bb b--black-10">
                    <span className="f3 mr3">☎️</span>
                    <div>
                      <h4 className="ttu black f7 fw7 tracked mt0">Give us a call</h4>
                      <a href="tel:469-270-1500" className="red dim fw6 f3">(469) 270-1500</a>
                    </div>
                  </li>
                  <li className="pv4 flex bb b--black-10">
                    <span className="f3 mr3">📬</span>
                    <div>
                      <h4 className="ttu black f7 fw7 tracked mt0">By electronic mail</h4>
                      <a href="mailto:hey@heyspacetime.com" className="red dim fw6 f3">hey@heyspacetime.com</a>
                    </div>
                  </li>
                  <li className="pv4 flex">
                    <span className="f3 mr3">🗺</span>
                    <div>
                      <h4 className="ttu black f7 fw7 tracked mt0">Stop by the office</h4>
                      <a href="https://goo.gl/maps/mLQwMaQhnao" target="_blank" className="red dim fw6 f3">5830 Granite Parkway<br />#100-243<br />Plano, Texas 75024</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <HeadquartersMap />

        </MainWrapper>
      </div>
    );
  }
}

export default ContactPage
