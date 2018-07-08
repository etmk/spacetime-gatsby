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
    const { transition } = this.props;
    return (
      <div className="bg-fog-white">

        <Helmet title={`Contact | ${config.siteTitle}`} />

        <div style={transition && transition.style}>

          <section id="PageHero" className="page-hero bg-fog-white">
            <div className="page-hero__content row">
              <h1 className="page-hero__headline">Howdy!</h1>
              <p className="page-hero__text">
                At Spacetime, we partner with clients to strategize & execute their vision. We approach problems with a business-centric focus with a goal of sustainability and ROI.
              </p>
            </div>
          </section>

          <MainWrapper>

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
                        <a href={`tel:${config.contactPhone}`} className="red dim fw6 f3">{config.contactPhone}</a>
                      </div>
                    </li>
                    <li className="pv4 flex bb b--black-10">
                      <span className="f3 mr3">📬</span>
                      <div>
                        <h4 className="ttu black f7 fw7 tracked mt0">By electronic mail</h4>
                        <a href={`mailto:${config.contactEmail}`} className="red dim fw6 f3">{config.contactEmail}</a>
                      </div>
                    </li>
                    <li className="pv4 flex">
                      <span className="f3 mr3">🗺</span>
                      <div>
                        <h4 className="ttu black f7 fw7 tracked mt0">Stop by the office</h4>
                        <a
                          href={config.contactAddressMap}
                          target="_blank"
                          className="red dim fw6 f3"
                          dangerouslySetInnerHTML={{ __html: config.contactAddress }}
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <HeadquartersMap />

          </MainWrapper>
        </div>
      </div>
    );
  }
}

export default ContactPage
