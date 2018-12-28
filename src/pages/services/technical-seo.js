import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../../data/site-config'
import MainWrapper from '../../layouts/MainWrapper/MainWrapper'
import ContactForm from '../../components/ContactForm'
import ServicePageHero from '../../components/Services/ServicePageHero'

const StartupServicesPage = ({ transition }) => (
  <div className="service-page content-page" style={{backgroundColor: '#c0b282'}}>

    <Helmet
      title={`🔍 Technical SEO | ${config.siteTitle}`}
      meta={[
        { name: 'description', content: 'Website and server optimization for unparalleled search engine optimization and user&nbsp;experience.' },
        { name: 'keywords', content: 'hey spacetime, spacetime, business, seo, technical seo, location seo, wordpress seo, mobile' },
      ]}
      bodyAttributes={{
        class: ''
      }}
    />

    <div style={transition && transition.style}>

      <ServicePageHero
        name={`technical-seo`}
        title={`Technical SEO`}
        description={`SEO services for a lean mean search engine optimization machine`}
        icon={`🔍`}
        iconPath={``}
        bgColor={`#86fc9e`}
        textColor={``} />

      <MainWrapper>

        <section className="pv6 bg-near-white">
          <div className="row">
            <h2 className="f3 f1-ns fw4 system-sans lh-title">Website and server optimization for unparalleled search engine optimization and user&nbsp;experience</h2>
          </div>
        </section>

        <section className="pv4">
          <div className="row narrow">

            <p>Technical SEO provides the longterm technical investment to grow your website and secure your ranking and foot hold in the eyes of your customers and search engines (Google, Bing, Baidu, DuckDuckGo, etc).</p>

            <h2>SEO is not a magic bullet</h2>

            <p>SEO implementation of any kind will not magically make your business explode.</p>

            <h2>SEO is nothing without a solid mobile user experience</h2>

            <p>Mobile is huge and only growing. Mobile optimization and experience now account for a considerable amount of website rankings.</p>

            <h2 className="f3 mb1">How to implement Technical SEO</h2>

            <ul className="o-70 lh-copy dark-purple f6 fw5 mv4">
              <li>Internal linking</li>
              <li>Crawling and indexation</li>
              <li>HTTP response codes</li>
              <li>Server side auditing</li>
              <li>International SEO</li>
              <li>Web performance</li>
              <li>Advanced technology for SEO</li>
              <li>
                Google suite of tools
                <ul>
                  <li>Google Analytics</li>
                  <li>Google Search Console</li>
                  <li>Google Tag Manager</li>
                </ul>
              </li>
            </ul>

          </div>
        </section>

        <section className="pv5 gradient-light-blue">
          <div className="row narrow">
            <blockquote className="bw1 b--green b--solid br2 mv5 mw7 center tc">
              <img src="/avatars/phil-frost-main-street-roi.jpg" className="br-100 h3 w3 dib nt4" alt="Headshot of Phil Frost of Main Street ROI" />
              <p className="f4 ma0 mv3 measure center lh-title">
                &ldquo;Successful SEO is not about tricking Google. It’s about PARTNERING with Google to provide the best search results for Google’s users.&rdquo;
              </p>
              <p className="f7 fw6 tracked green ttu sans-serif mb4">
                &mdash;Phil Frost, Main Street ROI
              </p>
            </blockquote>
          </div>
        </section>

        <section className="pv5 gradient-light-blue">
          <div className="row narrow">
            <h3 className="f3 fw7 mb1">Does my website need technical SEO?</h3>

            <p>The short answer is...</p>

            <p><em>Yes!</em></p>

            <p>Any and all websites can benefit from a thorough and consistent investment in Technical SEO. The question to consider is whether *now* is the right time to invest in Technical SEO optimization.</p>

            <p>Technical SEO is always useful, but may not be top priority for a brand new business or venture.</p>

          </div>
        </section>

        <section className="pv5 pv6-ns bg-washed-yellow">
          <div className="row">
            <h2 className="t-headline mt0 mb4 mw7">Crush the competition with unparalleled <span style={{color: '#86fc9e'}}>Technical&nbsp;SEO</span>.</h2>
            <p>Get in touch to schedule a friendly chat.</p>
            <div className="mw6 mt5">
              <ContactForm />
            </div>
          </div>
        </section>
      </MainWrapper>
    </div>
  </div>
)

export default StartupServicesPage
