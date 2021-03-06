import React from 'react'
import Helmet from 'react-helmet'

import config from '../../../data/site-config'

import Layout from '../../components/layout'
import MainWrapper from '../../components/MainWrapper/MainWrapper'
import ContactForm from '../../components/ContactForm'
import ServicePageHero from '../../components/Services/ServicePageHero'
import ServicePagePagination from '../../components/Services/ServicePagePagination'

const DesignServicesPage = () => (
  <Layout className="service-page content-page" style={{backgroundColor: '#cd96e5'}}>

    <Helmet
      title={`Design Services 🎨 ${config.siteTitle}`}
      meta={[
        { name: 'description', content: 'Spacetime provides web design services that exceed the ordinary and lead to success' },
        { name: 'keywords', content: 'design services, web design services, app design, responsive web design' },
      ]}
      link={[
        { rel: 'canonical', href: `${config.siteUrl}/services/design/` }
      ]}
      bodyAttributes={{
        class: 'dark-theme'
      }}
    />

    <div>

      <ServicePageHero
        name={`design`}
        title={`Design Services`}
        description={`design is the communication of the business, brand, identity, and&nbsp;product`}
        icon={`🎨`}
        iconPath={``}
        bgColor={`#cd96e5`}
        textColor={`black`} />

      <MainWrapper>

        <section className="pv6">
          <div className="row narrow">
            <p>Design embodies the core spirit of your brand's personality. It's often the first thing someone will notice about your brand, and yes, people do judge a book by its cover.</p>
            <p>We specialize in thoughtful and evocative design backed by practical business goals. We don't "make pretty pictures" or "push pixels", so if that's what you are looking for then we are probably not the right fit.</p>
            <p>What we do offer, and guarantee, is unique and thoughtful experience design that will transform your brand from <em>meh</em> to <em>WOW!</em> in no time flat.</p>
            <h5 className="">What do you need?</h5>
            <ul className="system-sans o-70 lh-copy dark-purple f6 fw5 mv4">
              <li className="mv1">Branding &amp; logo</li>
              <li className="mv1">Wireframing</li>
              <li className="mv1">Interactive Prototypes</li>
              <li className="mv1">User Experience Design (UX)</li>
              <li className="mv1">User Interface Design (UI)</li>
              <li className="mv1">Web design</li>
              <li className="mv1">App design</li>
              <li className="mv1">Native mobile design</li>
              <li className="mv1">Responsive web design</li>
              <li className="mv1">Design System</li>
              <li className="mv1">Pattern Library</li>
              <li className="mv1">Design Concepts</li>
              <li className="mv1">Train your internal design team</li>
            </ul>
          </div>
        </section>

        <section className="pv5 pv6-ns bg-washed-yellow">
          <div className="row">
            <h2 className="t-headline mt0 mb4 mw7">Stand out from the crowd through exceptional <span style={{color: '#cd96e5'}}>Design</span>.</h2>
            <p>Get in touch to schedule a friendly chat.</p>
            <div className="mw6 mt5">
              <ContactForm />
            </div>
          </div>
        </section>

        <ServicePagePagination
          name={`websites`}
          title={`Websites`}
          description={`websites provide a first touch opportunity and prolonged relationship with your customer`}
          icon={`🕸`}
          iconPath={``}
          bgColor={`#1DE9B6`}
          cta={`How to build a website that works for you`} />

      </MainWrapper>
    </div>
  </Layout>
)

export default DesignServicesPage
