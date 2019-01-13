import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../../data/site-config'
import MainWrapper from '../../layouts/MainWrapper/MainWrapper'
import ContactForm from '../../components/ContactForm'
import ServicePageHero from '../../components/Services/ServicePageHero'
import PricingTable from '../../components/PricingTable'
import ServicePagePagination from '../../components/Services/ServicePagePagination'

const WordPressHostingPage = ({ transition }) => (
  <div className="service-page content-page" style={{backgroundColor: '#21759B'}}>

    <Helmet
      title={`WordPress Hosting ⚡️| blazing fast, incredibly secure - Spacetime`}
      meta={[
        { name: 'description', content: 'Make your investment count with blazing fast, incredibly secure WordPress hosting' },
        { name: 'keywords', content: 'wordpress hosting, wordpress' },
      ]}
      link={[
        { rel: 'canonical', href: `${config.siteUrl}/services/wordpress-hosting/` }
      ]}
      bodyAttributes={{
        class: 'light-theme'
      }}
    />

    <div style={transition && transition.style}>
      <ServicePageHero
        name={`wordpress-hosting`}
        title={`WordPress Hosting`}
        description={`for people serious about their online&nbsp;business`}
        icon={``}
        iconPath={`/icons/wordpress-logo.svg`}
        bgColor={`#21759B`}
        textColor={`white`} />

      <MainWrapper>
        <section className="pv4">
          <div className="row narrow">
            <p>We offer premium WordPress hosting without the excessive expense.</p>

            <p>Let's be real, <em>you</em> are a business owner. Not a technology guru or website developer. You should use your valuable time in the most beneficial way to grow your business with skill and expertise.</p>

            <p>Don't waste your time with hosting plans, cloud platforms, security, plugins, updates, thingy-doodads, and what-nots.</p>

            <p>Let us handle the boring stuff so you can focus on what matters most.</p>

            <p>The only decision you need to make is how involved you want <em>us</em> to be. We offer three plan tiers to choose from based on your need and desired involvement by our team.</p>

            <p>Get in touch and let's discuss!</p>
          </div>
        </section>

        <section className="pv5 gradient-light-blue">
          <div className="row flex justify-around">

            <PricingTable
              icon={'📦'}
              title={'Basic Hosting'}
              columnWidth={'w-30'}
              price={'$50/month'}
              items={[
                'Website hosting',
                'WordPress Optimized Servers'
              ]}
            />

            <PricingTable
              featured={true}
              icon={'🏆⚔️'}
              title={'Premium Hosting'}
              columnWidth={'w-30'}
              price={'$100/month'}
              items={[
                'Website hosting',
                'WordPress Optimized Servers',
                'Daily Snapshot Backup',
                'Weekly Full Backup',
                '<abbr title="Content Delivery Network">CDN</abbr> Assets',
                'WordPress Core Updates',
                'WordPress Theme & Plugin Updates',
                'Security Updates'
              ]}
            />

            <PricingTable
              icon={'👑'}
              title={'White Glove Hosting'}
              columnWidth={'w-30'}
              price={'$250/month'}
              items={[
                'Website hosting',
                'WordPress Optimized Servers',
                'Daily Snapshot Backup',
                'Weekly Full Backup',
                '<abbr title="Content Delivery Network">CDN</abbr> Assets',
                'WordPress Core Updates',
                'WordPress Theme & Plugin Updates',
                'Security Updates',
                '<u>Uptime Monitoring</u>',
                '<u>Breach Monitoring</u>',
                '<u>Support from Our Team</u>'
              ]}
            />

          </div>
        </section>

        <section className="pv5 pv6-ns bg-washed-yellow">
          <div className="row">
            <h2 className="t-headline mt0 mb4 mw7">Because you deserve best-in-class <span style={{color: '#21759B'}}>WordPress&nbsp;hosting</span>.</h2>
            <p>Get in touch to schedule a friendly chat.</p>
            <div className="mw6 mt5">
              <ContactForm />
            </div>
          </div>
        </section>

        <ServicePagePagination
          name={`design`}
          title={`Design Services`}
          description={`design is the communication of the business, brand, identity, and&nbsp;product`}
          icon={`🎨`}
          iconPath={``}
          bgColor={`#cd96e5`}
          cta={`Stand out from the crowd`} />

      </MainWrapper>
    </div>
  </div>
)

export default WordPressHostingPage
