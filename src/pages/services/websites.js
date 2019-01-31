import React from 'react'
import Helmet from 'react-helmet'

import config from '../../../data/site-config'

import Layout from '../../components/layout'
import MainWrapper from '../../components/MainWrapper/MainWrapper'
import ContactForm from '../../components/ContactForm'
import ServicePageHero from '../../components/Services/ServicePageHero'
import ServicePagePagination from '../../components/Services/ServicePagePagination'

const WebsitesPage = () => (
  <Layout className="service-page content-page" style={{backgroundColor: '#1DE9B6'}}>

    <Helmet
      title={`Websites 🕸 responsive and mobile website design ${config.separator} Spacetime`}
      meta={[
        { name: 'description', content: 'Stand out from the crowd with unique, business-centric mobile and responsive website design' },
        { name: 'keywords', content: 'website design, website design dallas, responsive web design, mobile web design' },
      ]}
      link={[
        { rel: 'canonical', href: `${config.siteUrl}/services/websites/` }
      ]}
      bodyAttributes={{
        class: 'dark-theme'
      }}
    />

    <div>
      <ServicePageHero
        name={`websites`}
        title={`Websites`}
        description={`stand out from the crowd with stellar website design`}
        icon={`🕸`}
        iconPath={``}
        bgColor={`#1DE9B6`}
        textColor={`black`} />

      <MainWrapper>
        <section id="table-of-content" className="pv4">
          <div className="row narrow">
            <p>Everyone needs a website. Whether you are a solo entrepreneur or run a billion dollar business, you need a proper website that promotes your business and brand. Websites are often the first encounter many of your customers will see of you business and determine whether you are capable of handling their task at&nbsp;hand.</p>

            <h5 className="">What do you need?</h5>
            <ul className="system-sans o-70 lh-copy dark-purple f6 fw5 mv4">
              <li className="mv1">Increase sales and conversions</li>
              <li className="mv1">
                Responsive web design
                <ul>
                  <li className="mv1">Mobile web design</li>
                  <li className="mv1">Tablet web design</li>
                  <li className="mv1">Desktop web design</li>
                </ul>
              </li>
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
            <h2 className="t-headline mt0 mb4 mw7">Make your <span className="green">website design</span> work for you.</h2>
            <p>Get in touch to schedule a friendly chat.</p>
            <div className="mw6 mt5">
              <ContactForm />
            </div>
          </div>
        </section>

        <ServicePagePagination
          name={`cto`}
          title={`CTO As A Service`}
          description={`gain the technical leadership needed as your team and business&nbsp;grow`}
          icon={`💎`}
          iconPath={``}
          bgColor={`#EA5500`}
          cta={`Focus on what's important with an interim CTO`} />

      </MainWrapper>
    </div>
  </Layout>
)

export default WebsitesPage
