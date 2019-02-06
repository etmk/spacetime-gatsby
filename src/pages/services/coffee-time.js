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

const StartupServicesPage = () => (
  <Layout className="service-page content-page" style={{backgroundColor: '#c0b282'}}>

    <Helmet
      title={`Coffee Time ☕️  business strategy over coffee ${config.separator} Spacetime`}
      meta={[
        { name: 'description', content: 'Before committing thousands of dollars toward a project, sit down for a cup of coffee and strong business strategy' },
        { name: 'keywords', content: 'business strategy' },
      ]}
      link={[
        { rel: 'canonical', href: `${config.siteUrl}/services/coffee-time/` }
      ]}
      bodyAttributes={{
        class: 'dark-theme'
      }}
    />

    <div>

      <ServicePageHero
        name={`coffee-time`}
        title={`Coffee Time`}
        description={`business strategy and insight over a cup of coffee`}
        icon={`☕️`}
        iconPath={``}
        bgColor={`#c0b282`}
        textColor={`black`} />

      <MainWrapper>

        <section className="pv6">
          <div className="row narrow">

            <p>STOP! Before you hire a developer or agency or contractor or designer or whatever, STOP!</p>

            <p>We need to talk.</p>

            <p>Why?</p>

            <p>Because you have an idea. A <em>big</em> idea. A <em>valuable</em> idea. And you know you can turn that idea into a real business.</p>

            <p>And so you should. But you&rsquo;re also working within real constraints. Time, money, effort, and a thousand other things seeking your time and attention. So you need to allocate your time, energy, money, and effort into the right path and be wary <em>who</em> you give your money to and <em>how</em> you use your time in the coming months.</p>

            <p>You only have one shot. Do you really want to blow the cash you&rsquo;ve worked so hard for and saved so you could start a business? Probably&nbsp;not.</p>

            <p>At this point you may be scratching your head a bit and questioning what I&rsquo;m saying. What&rsquo;s the worry? Why should I slow down? I need to move fast and have someone build this idea before someone else beats me to it.</p>

            <p className="relative"><span className="absolute top-0 left--3 f2"><Emoji symbol="👇" label="hand pointing down"/></span>Here are a few real scenarios to learn from, names have been changed to protect the innocent:</p>

            <div className="mv4 mv3-l pa0 f5">
              <p className="blue system-sans mv4 ph3 pb4 bb b--black-10">Mickey has a great app idea. He hires a big name agency to help take his app to market. Mickey has complete trust the agency has the best of intentions (and they probably do). Mickey works with the agency for the next 10 months and pays $150,000 before the agency lands on rough times and regretfully discontinues working with Mickey. Mickey walks away with good ideas and good intentions scribbled on papers and pretty designs. But he is out $150k and does not have a product to take to market. Ouch!</p>

              <p className="dark-blue o-70 system-sans mv4 ph3 pb4 bb b--black-10">Suzanna hires a young development agency to build her startup because they were half the cost of another agency. Comparatively, Suzanna doesn&rsquo;t spend near as much money as Mickey did, only $30,000. But the project drags on... and on... and on... One year later, the project is almost done. Then, out of the blue, Suzanna&rsquo;s contact at the agency stops answering her phone, stops responding to emails, and just disappears.</p>

              <p className="blue system-sans mv3 ph3">Last one, and there is an upside to this one. Bryan has already been burned with his project and he&rsquo;s wary. He tried the overseas labor route. Yuck! He tried working with a local agency. And got... something! But dadgum if it isn&rsquo;t a hairball of a mess and full of bugs. Bryan continues on with his duct taped together startup, but hits a wall when he can&rsquo;t reliably grow the business anymore. The software can&rsquo;t handle the minimal success of the business and comes to a screeching halt.</p>
            </div>
          </div>
        </section>

        <section className="pv5 gradient-light-blue">
          <div className="row narrow">
            <h3 className="f3 mb1">What To Expect</h3>

            <p>A Coffee Time session typically will last up to 2 hours. <Link to="/team/">Our highly caffienated team</Link> will meet with you in-person (or by online video if you live outside of Dallas) to discuss your dream, idea, business, or concept. You have questions on your mind that we can answer. And we have questions for you to consider that you never thought of. We will discuss your immediate, short-term, and long-term goals and talk about the best path for you to follow.</p>

            <p>Sometimes that results in conceptual business advice, sometimes we help you determine the technology to use behind your business, sometimes we help you determine the best agency or freelancer to work with, sometimes we convince you <em>not</em> to do anything at all.</p>

            <p>Wait, what?</p>

            <p>Think of Coffee Time as a Risk Aversion strategy. You can hire an agency to work on your project, but the Risk is High and the Cost is High. Because you don&rsquo;t know what you don&rsquo;t know.</p>

            <p>Or, you can spend 2 hours drinking coffee and talking about your business and receive extremely valuable early business advice basically for free.</p>

            <div className="">
              <div className="overflow-auto">
                <table className="f6 fw6 w-100" cellSpacing="1">
                  <thead>
                    <tr className="stripe-dark">
                      <th className="tl pa3 bg-white"></th>
                      <th className="tl pa3 bg-white">Coffee Time</th>
                      <th className="tl pa3 bg-white">Starting on Your Own</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr className="stripe-dark">
                      <td className="pa3">Risk</td>
                      <td className="pa3"><Emoji symbol="🐶" label="cute puppy"/></td>
                      <td className="pa3"><Emoji symbol="🦂 🕷 🦖 🦇" label="scary creatures"/></td>
                    </tr>
                    <tr className="stripe-dark">
                      <td className="pa3">Cost</td>
                      <td className="pa3"><Emoji symbol="💵" label="small amount of money"/></td>
                      <td className="pa3"><Emoji symbol="💰 💰 💰 💰 💰" label="multiple bags of money"/></td>
                    </tr>
                    <tr className="stripe-dark">
                      <td className="pa3">Time</td>
                      <td className="pa3"><Emoji symbol="⏳" label="a single hour glass"/></td>
                      <td className="pa3"><Emoji symbol="⏰ ⏰ ⏰ ⏰" label="multiple clocks"/></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="pv5 gradient-light-blue">
          <div className="row narrow">
            <blockquote className="bw1 b--green b--solid br2 mv5 mw7 center tc">
              <img src="/avatars/bart-breunig-avatar.jpg" className="br-100 h3 w3 dib nt4" alt="Headshot of Bart Breunig" />
              <p className="f4 ma0 mv3 measure center lh-title">
                &ldquo;I found our meeting very useful. I was impressed with how quickly Caleb evaluated my situation and was able to offer quick feedback and sound advice. He even convinced me not to spend thousands of dollars yet on the project because I needed to spend more time evaluating my desired outcome and needs for&nbsp;the&nbsp;project.&rdquo;
              </p>
              <p className="f7 fw6 tracked green ttu sans-serif mb4">
                —Bart B.
              </p>
            </blockquote>
          </div>
        </section>

        <section className="pv5 gradient-light-blue">
          <div className="row narrow">
            <h3 className="f3 fw7 mb1">Guaranteed, or Your Money&nbsp;Back</h3>

            <p>We guarantee you will walk away from Coffee Time with answers to your questions and new questions to answer. In fact, we&rsquo;re so certain you will find Coffee Time incredibly insightful and valuable we offer a money back guarantee. If after our time together you decide the conversation provided zero value we will refund you&nbsp;in&nbsp;full.</p>

            <p>So, would you like a latte or cappuccino? Our treat <Emoji symbol="😉" label="winking face"/></p>

          </div>
        </section>

        <section className="pv5 pv6-ns bg-washed-yellow">
          <div className="row">
            <h2 className="t-headline mt0 mb4 mw7">A healthy cup of strong <span style={{color: '#c0b282'}}>business strategy</span>.</h2>
            <p>Get in touch to schedule a friendly sit-down.</p>
            <div className="mw6 mt5">
              <ContactForm />
            </div>
          </div>
        </section>

        <ServicePagePagination
          name={`technical-seo`}
          title={`Technical SEO`}
          description={`for a lean mean search engine optimization machine`}
          icon={`🔍`}
          iconPath={``}
          bgColor={`#86fc9e`}
          cta={`Crush the competition with unparalleled Technical SEO`} />

      </MainWrapper>
    </div>
  </Layout>
)

export default StartupServicesPage
