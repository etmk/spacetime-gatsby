import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../../data/site-config'
import MainWrapper from '../../layouts/MainWrapper/MainWrapper'

const StartupServicesPage = ({ transition }) => (
  <div className="service-page content-page">
    <Helmet title={`Coffee Time | ${config.siteTitle}`} />

    <section className="ph5-l pt6 pb5 bg-black tc" style={{backgroundColor: '#3D3B33'}}>
      <span className="f1 dib">☕️</span>
      <h1 className="f2-ns white tc mt0">Coffee Time</h1>
      <p className="f4 tc white-80 ml-auto mr-auto mb0 measure-narrow">Startups require a special, diverse set of skills to progress from idea to marketable business</p>
    </section>

    <MainWrapper>

      <section className="pv4">
        <div className="row narrow">

          <p>STOP! Before you hire a developer or agency or contractor or designer or whatever, STOP!</p>

          <p>We need to talk.</p>

          <p>Why?</p>

          <p>Because you have an idea. A <em>big</em> idea. A <em>valuable</em> idea. And you know you can turn that idea into a real business.</p>

          <p>And so you should. But you're also working within real constraints. Time, money, effort, and a thousand other things seeking your time and attention. So you need to allocate your time, energy, money, and effort into the right path and be wary <em>who</em> you give your money to and <em>how</em> you use your time in the coming months.</p>

          <p>You only have one shot. Do you really want to blow the cash you've worked so hard for and saved so you could start a business? Probably&nbsp;not.</p>

          <p>At this point you may be scratching your head a bit and questioning what I'm saying. What's the worry? Why should I slow down? I need to move fast and have someone build this idea before someone else beats me to it.</p>

          <p className="relative"><span className="absolute top-0 left--3 f2">👇</span>Here are a few real scenarios to learn from, names have been changed to protect the innocent:</p>

          <div className="mv4 mv3-l pa0 f5">
            <p className="blue system-sans mv4 ph3 pb4 bb b--black-10">Mickey has a great app idea. He hires a big name agency to help take his app to market. Mickey has complete trust the agency has the best of intentions (and they probably do). Mickey works with the agency for the next 10 months and pays $150,000 before the agency lands on rough times and regretfully discontinues working with Mickey. Mickey walks away with good ideas and good intentions scribbled on papers and pretty designs. But he is out $150k and has nothing of value to show for it. Ouch!</p>

            <p className="dark-blue o-70 system-sans mv4 ph3 pb4 bb b--black-10">Suzanna hires a young development agency to build her startup because they were more than half the cost of other agencies. Comparatively, Suzanna doesn't spend near as much money as Mickey did, only $30,000. But the project drags on... and on... and on... One year later, the project is almost done. Then, out of the blue, Suzanna's contact at the agency stops answering her phone, stops responding to emails, and just disappears.</p>

            <p className="blue system-sans mv3 ph3">Last one, and there is an upside to this one. Bryan has already been burned with his project and he's wary. He tried the overseas labor route. Yuck! He tried working with a local agency. And got... something! But dadgum if it isn't a hairball of a mess and full of bugs. Bryan continues on with his duct taped together startup, but hits a wall when he can't reliably grow the business anymore. The software can't handle the limited success of the business and comes to a screeching halt.</p>
          </div>
        </div>
      </section>

      <section className="pv5 gradient-light-blue">
        <div className="row narrow">
          <h3 className="f3 mb1">What To Expect</h3>

          <p>A Coffee Time session typically will last up to 2 hours. Our highly caffienated team will meet with you in-person (or by video online if you live outside of Dallas) to discuss your dream, idea, business, or concept. You have questions on your mind that we can answer. And we have questions for you to consider that you never thought of. We will discuss your immediate, short-term, and long-term goals and talk about the best path for you to follow.</p>

          <p>Sometimes that results in conceptual business advice, sometimes we help you determine the technology to use behind your business, sometimes we help you determine the best agency or freelancer to work with, sometimes we convince you *not* to do anything at all.</p>

          <p>Wait, what?</p>

          <p>Think of Coffee Time as a Risk Aversion strategy. You can hire an agency to work on your project, but the Risk is High and the Cost is High. Because you don't know what you don't know.</p>

          <p>Or, you can spend 2 hours drinking coffee and talking about your business and receive extremely valuable early business advice basically for free.</p>

          <div className="">
            <div className="overflow-auto">
              <table className="f6 w-100" cellSpacing="1">
                <thead>
                  <tr className="stripe-dark">
                    <th className="fw6 tl pa3 bg-white"></th>
                    <th className="fw6 tl pa3 bg-white">Coffee Time</th>
                    <th className="fw6 tl pa3 bg-white">Starting on Your Own</th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr className="stripe-dark">
                    <td className="pa3">Risk</td>
                    <td className="pa3">🐶</td>
                    <td className="pa3">🦂 🕷 🦖 🦇</td>
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
        </div>
      </section>

      <section className="pv5 gradient-light-blue">
        <div className="row narrow">
          <h3 className="f3 mb1">What People Are Saying</h3>

          <blockquote className="bw1 b--green b--solid br2 mv5 mw7 center tc">
            <img src="/avatars/bart-breunig-avatar.jpg" className="br-100 h3 w3 dib nt4" alt="Coby Cotton" />
            <p className="f4 fw1 ma0 mv3 measure center lh-title">
              &ldquo;I found our meeting very useful. I was impressed with how quickly Caleb assessed my situation and was able to offer quick feedback and sound advice. He even convinced me not to spend thousands of dollars yet on the project because I needed to spend more time evaluating my desired outcome and needs for&nbsp;the&nbsp;project.&rdquo;
            </p>
            <p className="f7 fw6 tracked green ttu sans-serif mb4">
              —Bart B.
            </p>
          </blockquote>
        </div>
      </section>

      <section className="pv5 gradient-light-blue">
        <div className="row narrow">
          <h3 className="f3 mb1">Guaranteed, or Your Money Back</h3>

          <p>We guarantee you will walk away from Coffee Time with answers to your questions and new questions to answer. In fact, we're so certain you will find Coffee Time incredibly insightful and valuable we offer a money back guarantee. If after our time together, you decide the conversation provided zero value we will refund you&nbsp;in&nbsp;full.</p>
        </div>
      </section>

      <section className="pv4 bg-washed-yellow">
        <div className="row narrow">
          <h2 className="f2 mb1">Schedule a Coffee Time</h2>

          <p>Ready to sit down to talk?</p>

          <p>$500</p>
        </div>
      </section>
    </MainWrapper>
  </div>
)

export default StartupServicesPage
