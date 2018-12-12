import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../../data/site-config'
import MainWrapper from '../../layouts/MainWrapper/MainWrapper'
import ContactForm from '../../components/ContactForm'
import ServicePageHero from '../../components/Services/ServicePageHero'

const WebsitesPage = ({ transition }) => (
  <div className="service-page content-page" style={{backgroundColor: '#1DE9B6'}}>

    <Helmet
      title={`🕸 Websites | ${config.siteTitle}`}
      meta={[
        { name: 'description', content: 'Spacetime makes the best websites for the coolest clients that have really big problems and need solutions that grow the bottom line.' },
        { name: 'keywords', content: 'hey spacetime, spacetime, business, agency, ux, ui, website, responsive design, conversions' },
      ]}
    />

    <div style={transition && transition.style}>
      <ServicePageHero
        name={`websites`}
        title={`Websites`}
        description={`Websites provide a first touch opportunity and prolonged relationship with your&nbsp;customer`}
        icon={`🕸`}
        iconPath={``}
        bgColor={`#1DE9B6`}
        textColor={`black`} />

      <MainWrapper style={transition && transition.style}>
        <section id="table-of-content" className="pv4">
          <div className="row narrow">
            <p>Everyone needs a website. Whether you are a solo entrepreneur or run a billion dollar business, you need a proper website that promotes your business and brand. Websites are often the first encounter many of your customers will see of you business and determine whether you are capable of handling their task at&nbsp;hand.</p>

            <h5 className="">What do you need?</h5>
            <ul className="system-sans o-70 lh-copy dark-purple f6 fw5 mv4">
              <li className="mv1">Increase sales and conversions</li>
              <li className="mv1">Responsive design for all device sizes (mobile, tablet, desktop)</li>
              <li className="mv1">Accessibility for impaired visitors</li>
              <li className="mv1">Search Engine Optimization (SEO)</li>
              <li className="mv1">Design worthy of your business</li>
              <li className="mv1">Editable content for clients</li>
              <li className="mv1">Guaranteed ROI (Return on Investment)</li>
              <li className="mv1">Social integration</li>
              <li className="mv1">Bank level security</li>
              <li className="mv1">Blogging</li>
              <li className="mv1">Online payments</li>
              <li className="mv1">eCommerce capabilities</li>
              <li className="mv1">Strategy for your online presence</li>
              <li className="mv1">Site analytics</li>
              <li className="mv1">Build email contact lists</li>
              <li className="mv1">Acquire domain name &amp; hosting</li>
            </ul>
          </div>
        </section>

        <section className="pv5 pv6-ns bg-washed-yellow">
          <div className="row">
            <h2 className="f2 f-subheadline-ns sans-serif mt0 mb4 lh-solid mw7">Make your <span className="green">Website</span> work for you.</h2>
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

export default WebsitesPage
