import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../../data/site-config'
import MainWrapper from '../../layouts/MainWrapper/MainWrapper'
import ContactForm from '../../components/ContactForm'
import ServicePageHero from '../../components/Services/ServicePageHero'

const DesignServicesPage = ({ transition }) => (
  <div className="service-page content-page" style={{backgroundColor: '#cd96e5'}}>

    <Helmet
      title={`🎨 Design Services | ${config.siteTitle}`}
      meta={[
        { name: 'description', content: 'Spacetime is a design driven technology agency with a brand inclusive view for web and app design that wows and produces incredible business results.' },
        { name: 'keywords', content: 'hey spacetime, spacetime, business, agency, ux, ui, website, graphic design, website design, web design, brand design, identity design, app design, responsive web design' },
      ]}
      link={[
        { rel: 'canonical', href: `${config.siteUrl}${location.pathname}` }
      ]}
    />

    <div style={transition && transition.style}>

      <ServicePageHero
        name={`design`}
        title={`Design Services`}
        description={`design is the communication of the business, brand, identity, and&nbsp;product`}
        icon={`🎨`}
        iconPath={``}
        bgColor={`#cd96e5`}
        textColor={``} />

      <MainWrapper>
        <section id="table-of-content" className="pv4">
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
            <h2 className="t-headline mt0 mb4 mw7">Stand out from the crowd through exceptional <span className="orange">Design</span>.</h2>
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

export default DesignServicesPage
