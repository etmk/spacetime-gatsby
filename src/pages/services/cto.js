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

          <p>You run a technology based business.</p>

          <p>You have the vision. You have the goal. You have the focus. Now all you have to do is build the software product, launch it, monetize it, scale it, avoid business killing mistakes, hire the right people, and responsibly spend your money and time.</p>

          <p>Simple right? Unfortunately, no&hellip;</p>

          <p>How will you tread the technological waters ahead, choose the right tech stack, hire the best employees and contractors, protect your business data and intellectual property, and in the end, win?</p>

          <p>You need a <abbr title="Chief Technology Officer">CTO</abbr> to lead the way.</p>
        </div>
      </section>

      <section className="pv5 gradient-light-blue">
        <div className="row narrow">
          <h2 className="f1 fw7 dark-red tracked-light tc lh-title">Why You Need A CTO,<br />Sort of&hellip;</h2>

          <p>Making the right technology choices won't necessarily lead to success, but making the wrong choices <em>will kill you</em>. That's why you need an expert on your team to lead the way and help inform the technological decision of your business.</p>

          <p>If you are technical or have a technical co-founder, perfect, you're probably good to go. But if you don't, you should hire a CTO, well, sort&nbsp;of&hellip;</p>

          <p>You could hire a C-level executive to your team. But that brings a whole new set of challenges to your business, including a hefty salary. The median <a href="https://www1.salary.com/Chief-Technology-Officer-Salary.html" target="_blank" rel="nofollow">CTO salary in the United States is $233,705</a>. Whew, that's a lot of dough to shell out for an early stage business. Money that you probably should spend elsewhere, like on programmers, services, and infrastructure.</p>

          <p>Let's do some simple math comparisons:</p>

          <div className="">
            <div className="overflow-auto">
              <table className="f6 fw6 w-100" cellSpacing="1">
                <thead>
                  <tr className="stripe-dark">
                    <th className="tl pa3 bg-white"></th>
                    <th className="tl pa3 bg-white">1 CTO</th>
                    <th className="tl pa3 bg-white">Starting on Your Own</th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr className="stripe-dark">
                    <td className="pa3">Risk</td>
                    <td className="pa3">🐶</td>
                    <td className="pa3">🧔 </td>
                  </tr>
                  <tr className="stripe-dark">
                    <td className="pa3">Cost</td>
                    <td className="pa3">💵</td>
                    <td className="pa3">💰 💰 💰 💰 💰</td>
                  </tr>
                  <tr className="stripe-dark">
                    <td className="pa3">Time</td>
                    <td className="pa3">⏳</td>
                    <td className="pa3">⏰ ⏰ ⏰ ⏰</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="no-underline db bg-washed-blue pa3 ph4-l br1 ba b--black-05 relative mv4 nl4-l nr4-l flex items-center">
            <span className="mr3 mr4-l">🤔</span>
            <small className="f6 lh-copy black-90">When does it make sense to hire a full-time CTO? Good question&hellip; and one that probably can only be answered on a case-by-case basis.</small>
          </div>

          <p>You need help. You need someone who knows what to look for, the questions to ask, and the gotchas to avoid. But you also need to be fiscally responsible considering the stage of you business.</p>

          <p>That's where we come in.</p>

          <p>We're right in-between a fellow co-founder and your best friend. And maybe a little bit of your momma.</p>

          <h3 className="ttu f6 fw7 tracked mt4">We want you to:</h3>
          <ol className="system-sans o-70 lh-copy dark-purple f5 fw5 mv3">
            <li className="mv2">Be responsible (your momma)</li>
            <li className="mv2">Build a successful business (your co-founder)</li>
            <li className="mv2">Be profitable (so you can buy your best friend lunch, occasionally)</li>
          </ol>

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
            pitfalls
          </ul>







        </div>
      </section>

      <section className="pv5 gradient-light-blue">
        <div className="row narrow">
          <span className="f1 tc db ml-auto mr-auto">👇</span>
          <h2 className="f1 fw7 dark-red tracked-light tc lh-title">What We Offer As<br />Your CTO</h2>

          <div className="ba b--blue br1 mw6 center">
            <ul className="list tc system-sans o-70 lh-copy dark-purple f5 fw5 mv4">
              <li className="mv2">Reduce risk!</li>
              <li className="mv2">Save time and headaches</li>
              <li className="mv2">Stay on target</li>
              <li className="mv2">We shoot straight and tell the truth, we work for <em>you</em></li>
              <li className="mv2">Bring us to important meetings</li>
              <li className="mv2">Add us to technical phone calls</li>
              <li className="mv2">We help interview agencies and talent</li>
              <li className="mv2">We help determine the best technology for the job</li>
              <li className="mv2">We help roadmap your product</li>
              <li className="mv2">We think of the gotchas and edge-cases</li>
              <li className="mv2">We help setup technical workflows for your team</li>
              <li className="mv2">We are your technical thesaurus and dictionary</li>
              <li className="mv2">save tons of money!!!</li>
            </ul>
            <div className="f6 fw7 tracked ttu tc pv4">
              Starting at $4,500/month
            </div>
          </div>
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
