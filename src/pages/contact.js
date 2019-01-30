import React from 'react'
import Helmet from 'react-helmet'
import Emoji from 'a11y-react-emoji'

import config from '../../data/site-config'

import Layout from '../components/layout'
import MainWrapper from '../components/MainWrapper/MainWrapper'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'

class ContactPage extends React.Component {

  render() {
    return (
      <Layout className="bg-fog-white">

        <Helmet
          title={`Contact 📪 ${config.siteTitle}`}
          meta={[
            { name: 'description', content: 'Contact Spacetime to discuss business, or just shoot the breeze' },
            { name: 'keywords', content: 'hey spacetime, spacetime, contact, business, projects, call, email, office, message' },
          ]}
          link={[
            { rel: 'canonical', href: `${config.siteUrl}/contact/` }
          ]}
        />

        <div>

          <PageHero>
            <div className="t-headline i">Howdy!</div>
            <h1 className="t-headline">Get in touch, tell us what you want to talk about&mdash;<span className="t-headline__alt">business, projects, jobs, movies, kids, whatever</span></h1>
          </PageHero>

          <MainWrapper>

            <section>
              <div className="row cf">

                <div className="w-50-ns fl-ns mv4 mv6-l">
                  <ContactForm />
                </div>

                <div className="w-33-ns fr-ns mv4 mv6-l">
                  <ul className="list pa0 ma0">
                    <li className="pt2 pb4 flex bb b--black-10">
                      <Emoji symbol="☎️" label="phone" className="f3 mr3"/>
                      <div>
                        <h4 className="ttu black f7 fw7 tracked mt0">Give us a call</h4>
                        <a href={`tel:${config.contactPhone}`} className="red dim fw6 f3">{config.contactPhone}</a>
                      </div>
                    </li>
                    <li className="pv4 flex bb b--black-10">
                      <Emoji symbol="📬" label="email" className="f3 mr3"/>
                      <div>
                        <h4 className="ttu black f7 fw7 tracked mt0">By electronic mail</h4>
                        <a href={`mailto:${config.contactEmail}`} className="red dim fw6 f3">{config.contactEmail}</a>
                      </div>
                    </li>
                    <li className="pv4 flex">
                      <Emoji symbol="🗺" label="map" className="f3 mr3"/>
                      <div>
                        <h4 className="ttu black f7 fw7 tracked mt0">Stop by the office</h4>
                        <a
                          href={config.contactAddressMap}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="red dim fw6 f3"
                          dangerouslySetInnerHTML={{ __html: config.contactAddress }}
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

          </MainWrapper>
        </div>
      </Layout>
    );
  }
}

export default ContactPage
