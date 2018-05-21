import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../../data/site-config'
import MainWrapper from '../../layouts/MainWrapper/MainWrapper'
import ContactForm from '../../components/ContactForm'
import ServicePageHero from '../../components/ServicePageHero'

const CtoPage = () => (
  <div className="service-page content-page">
    <Helmet title={`💎 CTO As A Service | ${config.siteTitle}`} />

    <ServicePageHero
      name={`cto`}
      title={`CTO As A Service`}
      description={`Startups need special attention and a healthy dose of ingenuity to grow toward success.`}
      icon={`💎`}
      iconPath={``}
      bgColor={`#EA5500`}
      textColor={`black`} />

    <MainWrapper>
      <section id="" className="pv4">
        <div className="row narrow">
          <p>You need a CTO.</p>

          <p>Simple right?</p>

          <p>Unfortunately, no&hellip;</p>

          <p>You have a vision. You have a goal. You have a focus. But transforming your vision into a tangible plan can be difficult.</p>

          <p>How will you tread the technological waters ahead?</p>

          <p>Our specialized team will take you through our battle-hardened process. Provide strategy and insight into business building, customer acquisition, product development, pricing, and much more.</p>
        </div>
      </section>

      <section id="" className="pv4">
        <div className="row narrow">
          <h2>What path is best for you?</h2>

          <ol>
            <li>You hire an overseas development team because they are cheap.</li>
            <li>You hire a domestic development team
              <ul>
                <li>they are cheap</li>
                <li>they are expensive!</li>
              </ul>
            </li>
            <li>You hire a solo developer on nights and weekends</li>
            <li>You hire internally...</li>
            <li>You build it yourself...</li>
          </ol>

        </div>
      </section>

      <section id="" className="pv4">
        <div className="row narrow">

          <h2>What could go wrong:</h2>
          <ul>
            <li>Giving the wrong people your money</li>
            <li>Not performing due diligence on agencies or new hires</li>
            <li>Using the wrong technology stack</li>
            <li>Mishandling data and security</li>
            <li>A knowledge gap in the startup and technology industry</li>
            <li>Not building a solid product roadmap</li>
            <li>Not focusing on ROI</li>
            <li>Blowing smoke</li>
            <li>Delays</li>
            <li>Unknowns</li>
          </ul>


          <p>You need help. You need someone who knows what to look for, the questions to ask, and the gotchas to avoid.</p>

          <p>That's where we come in.</p>

          <p>We're right in-between a fellow co-founder and your best friend. And maybe a little bit of your momma.</p>

          <h3>We want you to:</h3>
          <ol>
            <li>Be responsible (your momma)</li>
            <li>Build a successful business (your co-founder)</li>
            <li>Be profitable (so you can pay for your best friends lunch, occasionally)</li>
          </ol>

        </div>
      </section>

      <section className="pv5 gradient-light-blue">
        <div className="row narrow">
          <span className="f1 tc db ml-auto mr-auto">👇</span>
          <h2 className="f1 fw7 dark-red tracked-light tc">What We Offer As<br />Your CTO</h2>

          <ul className="list tc mv4 mv3-l pa0 pl2-ns black-80 f5 lh-copy">
            <li>Reduce risk!</li>
            <li>Save time and headaches</li>
            <li>Stay on target</li>
            <li>We shoot straight and tell the truth, we work for <em>you</em></li>
            <li>Bring us to important meetings</li>
            <li>Add us to technical phone calls</li>
            <li>We help interview agencies and talent</li>
            <li>We help determine the best technology for the job</li>
            <li>We help roadmap your product</li>
            <li>We think of the gotchas and edge-cases</li>
            <li>We help setup technical workflows for your team</li>
            <li>We are your technical thesaurus and dictionary</li>
          </ul>



        </div>
      </section>

      <section className="pv5 bg-washed-yellow">
        <div className="row narrow">
          <h2 className="f1 serif red mt0 mb4 lh-solid">Let's Talk About Your&nbsp;Startup</h2>

          <ContactForm />

        </div>
      </section>
    </MainWrapper>
  </div>
)

export default CtoPage
