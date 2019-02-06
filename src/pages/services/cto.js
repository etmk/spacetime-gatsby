import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Emoji from 'a11y-react-emoji'

import config from '../../../data/site-config'

import Layout from '../../components/layout'
import MainWrapper from '../../components/MainWrapper/MainWrapper'
import ContactForm from '../../components/ContactForm'
import ServicePageHero from '../../components/Services/ServicePageHero'
import ServicePagePagination from '../../components/Services/ServicePagePagination'

const CtoPage = () => (
  <Layout className="service-page content-page" style={{backgroundColor: '#EA5500'}}>

    <Helmet
      title={`CTO as a Service 💎 hire an interim Chief Technology Officer`}
      meta={[
        { name: 'description', content: 'Grow your business and make smart technical decisions by hiring a temporary Chief Technology Officer to lead the way' },
        { name: 'keywords', content: 'cto, cto service, chief technology officer, cto as a service' },
      ]}
      link={[
        { rel: 'canonical', href: `${config.siteUrl}/services/cto/` }
      ]}
      bodyAttributes={{
        class: 'dark-theme'
      }}
    />

    <div>

      <ServicePageHero
        name={`cto`}
        title={`CTO As A Service`}
        description={`hire technical leadership to grow your business`}
        icon={`💎`}
        iconPath={``}
        bgColor={`#EA5500`}
        textColor={`black`} />

      <MainWrapper>

        <section className="pv6">
          <div className="row narrow">

            <p>You run a technology based business.</p>

            <p>You have the vision. You have the goal. You have the focus. Now all you have to do is build the tech, launch it, monetize it, scale it, avoid business killing mistakes, hire the right people, and responsibly spend your money and time.</p>

            <p>Simple right? Unfortunately, no&hellip;</p>

            <p>How will you tread the technological waters ahead, choose the right tech stack, hire the best employees and contractors, protect your business data and intellectual property, and in the end, win?</p>

            <p>You need a <abbr title="Chief Technology Officer">CTO</abbr> to lead the way.</p>
          </div>
        </section>

        <section className="pv5 gradient-light-blue">
          <div className="row narrow">
            <h3 className="f1 fw6 dark-red tracked-light lh-title">Why You Need A Chief Technology Officer, Sort of&hellip;</h3>

            <p>Making the right technology choices won&rsquo;t necessarily lead to success, but making the wrong choices <em>will kill you</em>. That&rsquo;s why you need an expert on your team to lead the way and help inform the technological decisions in your business.</p>

            <p>If you are technical or have a technical co-founder, perfect, you&rsquo;re probably good to go. But if you don&rsquo;t, you should hire a CTO, well, sort&nbsp;of&hellip;</p>

            <p>You could hire a C-level executive to your team. But that brings a whole new set of challenges to your business, including a hefty salary. The median <a href="https://www1.salary.com/Chief-Technology-Officer-Salary.html" target="_blank" rel="noopener noreferrer">CTO salary in the United States is $233,705</a>. Whew, that&rsquo;s a lot of dough to shell out for an early stage business. Money that you probably should spend elsewhere, like on programmers, services, and infrastructure.</p>

            <p>Let&rsquo;s do a simple math comparison:</p>

            <div className="bb bt b--black-10 mh0 mv4 ph2 pv4 nl5 nr5">
              <div className="overflow-auto flex items-center">
                <div className="w-40 tc">
                  <span className="f2 pa2 dib mb2"><Emoji symbol="🧔" label="human"/></span>
                  <h5 className="f3 pa0 ma0">1 CTO</h5>
                  <p className="system-sans mv2 fw6 deep-purple o-70">$233,705</p>
                </div>
                <div className="w-10 ttu fw7 tracked dark-purple o-50">or</div>
                <div className="w-40">
                  <ul className="list system-sans lh-copy dark-purple f5 fw5 ma0">
                    <li className="mv2"><Emoji symbol="🧑" label="human"/> 4 Employees</li>
                    <li className="mv2"><Emoji symbol="⏳" label="hourglass"/> 7,776 Overseas Dev Hours</li>
                    <li className="mv2"><Emoji symbol="📦" label="box"/> 1 Marketable MVP</li>
                    <li className="mv2"><Emoji symbol="🍔" label="hamburger"/> 43,962 Big Macs</li>
                  </ul>
                </div>
              </div>
            </div>

            <p>You need help. You need someone who knows what to look for, the questions to ask, and the gotchas to avoid. But you also need to be fiscally responsible considering the stage of you business.</p>

            <p>That&rsquo;s where we come in.</p>

            <p>We provide CTO as a Service, for as long or short a time period as you need. We&rsquo;re right in-between a fellow co-founder and your best friend. And maybe a little bit of your momma.</p>

            <h3 className="ttu f6 fw7 tracked mt4">We want you to:</h3>
            <ol className="system-sans o-70 lh-copy dark-purple f5 fw5 mv3">
              <li className="mv2">Be responsible (your momma)</li>
              <li className="mv2">Build a successful business (your co-founder)</li>
              <li className="mv2">Be profitable (so you can buy your best friend lunch, occasionally)</li>
            </ol>

            <p><em>Eventually</em>, our interim CTO service will need to be replaced by a full-time CTO, because you will keep growing and win, right? But for now, what you need is a dedicated and experienced partner to help make wise choices, cultivate your team, and build your product.</p>

            <p><Link to="/team/" rel="noopener noreferrer">We&rsquo;ve got your back.</Link></p>

          </div>
        </section>

        <section className="pv5 pv6-ns bg-washed-yellow">
          <div className="row">
            <h2 className="t-headline mt0 mb4 mw7">Make smart decisions with our <span style={{color: '#EA5500'}}>CTO&nbsp;as&nbsp;a&nbsp;Service</span> offering.</h2>
            <p>Get in touch to schedule a friendly chat about your business and technical needs.</p>
            <div className="mw6 mt5">
              <ContactForm />
            </div>
          </div>
        </section>

        <ServicePagePagination
          name={`strategy-retainer`}
          title={`Strategy Retainer`}
          description={`we provide the strategic and tactical expertise you need to catalyze your&nbsp;business`}
          icon={`🎯`}
          iconPath={``}
          bgColor={`#5A62FF`}
          cta={`Tap into the brain trust with our strategy department`} />

      </MainWrapper>
    </div>
  </Layout>
)

export default CtoPage
