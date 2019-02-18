import React                  from 'react'
import Helmet                 from 'react-helmet'
import Emoji                  from 'a11y-react-emoji'

import config                 from '../../../data/site-config'

import Layout                 from '../../components/layout'
import MainWrapper            from '../../components/MainWrapper/MainWrapper'
import ContactForm            from '../../components/ContactForm'
import ServicePageHero        from '../../components/Services/ServicePageHero'
import PricingTable           from '../../components/PricingTable'
import ServicePagePagination  from '../../components/Services/ServicePagePagination'

const WordPressHostingPage = () => (
  <Layout className="service-page content-page" style={{backgroundColor: '#21759b'}}>

    <Helmet
      title={`⚡️WordPress Hosting • Blazing fast, incredibly secure • Spacetime`}
      meta={[
        { name: 'description', content: 'We offer premium WordPress hosting without excessive expense. Switch to our premium managed WordPress for blazing fast, incredibly secure results.' },
        { name: 'keywords', content: 'wordpress hosting, wordpress, managed wordpress' },
      ]}
      link={[
        { rel: 'canonical', href: `${config.siteUrl}/services/wordpress-hosting/` }
      ]}
      bodyAttributes={{
        class: 'dark-theme'
      }}
    />

    <div>
      <ServicePageHero
        name={`wordpress-hosting`}
        title={`WordPress Hosting`}
        description={`blazing fast, incredibly secure`}
        icon={``}
        iconPath={`/icons/wordpress-logo.svg`}
        bgColor={`#21759b`}
        textColor={`black`} />

      <MainWrapper>

        <section className="pv6 bg-near-white">
          <div className="row tc">
            <span className="t-small-caps red">TL;DR</span>
            <h2 className="t-mega mw7 center">We offer the best managed WordPress hosting plans,&nbsp;guaranteed</h2>
          </div>
        </section>

        <section className="pv6">
          <div className="row narrow">
            <p>I think you&rsquo;ll agree with me when I say:</p>

            <p>It&rsquo;s REALLY hard to run a business online without a PhD in interneting.</p>

            <p>And let&rsquo;s be real, <em>you</em> are a business owner. Not a technology guru or webmaster. You should use <em>your valuable time</em> in the most beneficial way to grow your business with <em>your skills and expertise</em>.</p>

            <p>Don&rsquo;t waste your time with hosting plans, cloud platforms, security, plugins, updates, thingy-doodads, and what-nots.</p>

            <h3 className="mt5">What you want from WordPress hosting:</h3>

            <ul className="list lh-tall mt3 mb5 ph3">
              <li><Emoji symbol="📝" label="edit content" className="mr1"/>Flexibility to manage and update your website when and how you like</li>
              <li><Emoji symbol="📈" label="grow" className="mr1"/>Ability to grow and scale your website and business</li>
              <li><Emoji symbol="🔐" label="secuirty" className="mr1"/>Bank-level security and protection from hackers</li>
              <li><Emoji symbol="⚡️" label="fast" className="mr1"/>Blazing fast webpage loading</li>
              <li><Emoji symbol="🎓" label="best practices" className="mr1"/>Best practices for all IT and technology in use</li>
              <li><Emoji symbol="🌪" label="disaster" className="mr1"/>Disaster prevention and recovery options</li>
              <li><Emoji symbol="👍" label="good experience" className="mr1"/>A stellar experience for your customers!</li>
            </ul>

            <p>Let us handle the boring stuff so you can focus on what matters most.</p>

            <p>Our specially constructed hosting infrastructure is built specifically for WordPress, so you get the absolute best results for your WordPress website.</p>

            <h3 className="mt5">How we provide amazing WordPress hosting (a bit nerdy):</h3>

            <ul className="lh-copy mt3 mb5">
              <li>Servers optimized for WordPress hosting</li>
              <li>Built-in WordPress security</li>
              <li>Built-in WordPress database optimizations</li>
              <li>Automatic WordPress Core updates & patches</li>
              <li>Data center redundancy</li>
              <li>Uptime monitoring and protection</li>
              <li>Threat detection and blocking</li>
              <li>Encryption with SSL</li>
              <li>Enhanced load speed through CDN and caching</li>
              <li>Scalable under heavy traffic spikes</li>
              <li>Automatic database backups</li>
              <li>Disaster recovery</li>
            </ul>

            <h3 className="f2 blue mv5">Why use a mediocre web host when you can choose extraordinary</h3>

            <p>Your web host is the engine to your website racecar. To win, you need a performant, fully optimized machine. That’s what Spacetime offers with our managed WordPress plans.</p>

            <p>Still need convincing? Here are the cold hard facts:</p>

            <ul className="lh-copy mt3 mb5">
              <li>40% of consumers will leave a page that takes longer than three seconds to load</li>
              <li>79% of shoppers who are dissatisfied with site performance say they're less likely to purchase from the same site again</li>
              <li>47% of people expect a web page to load in two seconds or less</li>
              <li>52% of online shoppers claim that quick page loads are important for their loyalty to a site</li>
              <li>14% will start shopping at a different site if page loads are slow, 23% will stop shopping or even walk away from their computer</li>
              <li>64% of shoppers who are dissatisfied with their site visit will go somewhere else to shop next time</li>
              <li>Slow loading websites cost retailers $2.23bn in lost sales each year</li>
            </ul>

            <h3 className="mt5">What you get</h3>

            <ul className="list lh-tall mt3 mb5 ph3">
              <li><Emoji symbol="🏆" label="top tier" className="mr1"/>A top-tier website</li>
              <li><Emoji symbol="🏢" label="business" className="mr1"/>Focus on your business</li>
              <li><Emoji symbol="💵" label="money" className="mr1"/>Grow your profits</li>
              <li><Emoji symbol="🔍" label="search" className="mr1"/>Better SEO ranking</li>
              <li><Emoji symbol="💪" label="strong" className="mr1"/>Our team to back you up</li>
            </ul>

            <p>The only decision you need to make is how involved you want us to be. We offer three plans to choose from based on your need and desired involvement by our team.</p>

            <p>Get in touch and let’s discuss!</p>
          </div>
        </section>

        <section className="pv6 gradient-light-blue">
          <div className="row flex justify-around">

            <PricingTable
              icon={'📦'}
              title={'Basic Hosting'}
              columnWidth={'w-30'}
              price={'$50/month'}
              items={[
                'Website hosting',
                'WordPress optimized servers',
                'WordPress optimized database',
                'Built in WordPress security',
                'Automatic WordPress core & plugin updates',
                'SSL encryption'
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
                'WordPress optimized servers',
                'WordPress optimized database',
                'Built in WordPress security',
                'Automatic WordPress core & plugin updates',
                'SSL encryption',
                'Data center redundancy',
                'Daily snapshot backup',
                'Weekly full backup',
                '<abbr title="Content Delivery Network">CDN</abbr> assets & caching',
                'Security updates',
                'Scalable under heavy traffic'
              ]}
            />

            <PricingTable
              icon={'👑'}
              title={'White Glove Hosting'}
              columnWidth={'w-30'}
              price={'$350/month'}
              items={[
                'Website hosting',
                'WordPress optimized servers',
                'WordPress optimized database',
                'Built in WordPress security',
                'Automatic WordPress core & plugin updates',
                'SSL encryption',
                'Data center redundancy',
                'Daily snapshot backup',
                'Weekly full backup',
                '<abbr title="Content Delivery Network">CDN</abbr> assets & caching',
                'Security updates',
                'Scalable under heavy traffic',
                'Uptime monitoring',
                'Breach monitoring',
                'Support from our team',
                '4 support hours per month'
              ]}
            />

          </div>
        </section>

        <section className="pv5 pv6-ns bg-washed-yellow">
          <div className="row">
            <h3 className="t-headline mt0 mb4 mw7">Because you deserve best-in-class <span style={{color: '#21759B'}}>WordPress&nbsp;hosting</span>.</h3>
            <p>Get in touch to discuss your WordPress hosting needs.</p>
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
  </Layout>
)

export default WordPressHostingPage
