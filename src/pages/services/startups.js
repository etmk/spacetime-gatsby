import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../../data/site-config'
import MainWrapper from '../../layouts/MainWrapper/MainWrapper'
import ServiceRecommendation from '../../components/ServiceRecommendation'
import ContactForm from '../../components/ContactForm'
import ServicePageHero from '../../components/ServicePageHero'

const StartupServicesPage = ({ transition }) => (
  <div className="service-page content-page">
    <Helmet title={`🚀 Startups | ${config.siteTitle}`} />

    <ServicePageHero
      name={`startups`}
      title={`Startups`}
      description={`Startups require a special, diverse set of skills to progress from idea to marketable business`}
      icon={`🚀`}
      iconPath={``}
      bgColor={`#F03F47`}
      textColor={`white`} />

    <MainWrapper>

      <section id="table-of-content" className="pv4">
        <div className="row narrow">

          <p>Whether you are bootstraping or raising venture capital, building a startup is a challenge unlike other business types. At Spacetime, we've worked with a variety of startups and developed select service categories for startups that speak to the stage of your business and goal direction.</p>

          <p>We see 4 primary types of startup needs:</p>

          <ol className="list pa0 mv4 nl4-ns nr4-ns">
            <li>
              <a href="#concept-exploration" className="no-underline db bg-washed-yellow hover-bg-washed-blue pv4 ph4 ph5-l br1 ba b--black-05 relative mv2 shadow-hover hover-up">
                <span className="numeral cool">1</span>
                <h2 className="red no-underline f3 fw7 mt0 mb2">Concept Exploration ⇛</h2>
                <p className="f6 fw5 sans-serif black-50 measure-wide ma0">You have a brand new idea or existing problem and need conceptual exploration and validation.</p>
              </a>
            </li>
            <li>
              <a href="#minimum-viable-product" className="no-underline db bg-washed-yellow hover-bg-washed-blue pv4 ph4 ph5-l br1 ba b--black-05 relative mv2 shadow-hover hover-up">
                <span className="numeral cool">2</span>
                <h2 className="red no-underline f3 fw7 mt0 mb2">Minimum Viable Product ⇛</h2>
                <p className="f6 fw5 sans-serif black-50 measure-wide ma0">You are ready to build your startup and want to get to market quickly.</p>
              </a>
            </li>
            <li>
              <a href="#startup-resuscitation" className="no-underline db bg-washed-yellow hover-bg-washed-blue pv4 ph4 ph5-l br1 ba b--black-05 relative mv2 shadow-hover hover-up">
                <span className="numeral cool">3</span>
                <h2 className="red no-underline f3 fw7 mt0 mb2">Startup Resuscitation ⇛</h2>
                <p className="f6 fw5 sans-serif black-50 measure-wide ma0">You've worked on a startup for months or years but have made little progress. It's a good idea, but needs a healthy shock to get going again.</p>
              </a>
            </li>
            <li>
              <a href="#choose-your-own-adventure" className="no-underline db bg-washed-yellow hover-bg-washed-blue pv4 ph4 ph5-l br1 ba b--black-05 relative mv2 shadow-hover hover-up">
                <span className="numeral cool">4</span>
                <h2 className="red no-underline f3 fw7 mt0 mb2">Choose Your Own Adventure ⇛</h2>
                <p className="f6 fw5 sans-serif black-50 measure-wide ma0">You have a specific challenge in mind you need help with.</p>
              </a>
            </li>
          </ol>

          <p>Whatever your need, we always treat your project like our own. We only succeed when you succeed.</p>
          <p>Our specialized team will take you through our battle-hardened process. Provide strategy and insight into business building, customer acquisition, product development, pricing, and much more.</p>

          <blockquote className="ba b--green tc mh0 mv4 ph2 pv4 br1">
            <p className="black f3 mt0 mb3">“Where there is no vision, there is no hope”</p>
            <footer>
              <cite>
                <a className="green ttu no-underline fs-normal fw6 f6 tracked"
                   href="https://www.brainyquote.com/quotes/george_washington_carver_158551"
                   target="_blank"
                   rel="noopener">—George Washington Carver</a>
              </cite>
            </footer>
          </blockquote>
        </div>
      </section>

      <section id="concept-exploration" className="pv5 gradient-light-blue">
        <div className="row narrow">

          <span className="numeral db ml-auto mr-auto">1</span>
          <h3 className="f1 fw7 dark-red tracked-light tc lh-title">Concept Exploration</h3>

          <p>Our concept exploration startup tier is perfect for exploring and validating ideas. We find clients typically need concept exploration for two types of challenges.</p>

          <h3 className="f3 mb1"><small className="mr2 f5 serif">I.</small>A Brand New Startup Idea</h3>

          <p className="mt1">If you have a brand new startup idea but have not validated the idea or audience this could be what you need. We use a series of research, design, prototyping, and user testing to explore a concept with a goal in mind. Sometimes that goal is to create a visual concept, or build a prototype to test on potential customers, or even in preparation to raise venture capital.</p>

          <div className="ba b--blue mh0 mt4 mb5 pa4 br1">
            <h5 className="ttu tracked f7 fw7 blue mt0">Client Spotlight 🔦</h5>
            <p className="f6 sans-serif blue mb0">We worked with <strong>DropIn</strong> to design a concept the team could use to seek venture capital. We created visual branding and app interface flows to demonstrate the user experience and value proposition. We also developed a live app scaffold reflecting our findings in the design. The app wasn't full functioning, but provided real data and an MVP experience.</p>
          </div>

          <h3 className="f3"><small className="mr2 f5 serif">II.</small>A Big Problem Existing in Your Current Startup</h3>
          <p>If you have an existing startup but and want to explore a problem we can do that too. Maybe you want to explore a visual redesign of your app. Or, you need to explore why customers are dropping out of your eCommerce checkout cycle. Or, you want to pitch a skunk-works type idea to your internal leadership.</p>

          <ServiceRecommendation
            forColumn={[
              'Exploring a business problem',
              'Raising venture capital',
              'Validating a target market',
              'Getting started without building an MVP'
            ]}

            notForColumn={[
              'Accelerated growth',
              'Calculatable ROI scenarios',
              'Long-term engagements'
            ]}
          />

        </div>
      </section>

      <section id="minimum-viable-product" className="pv5 gradient-light-blue">
        <div className="row narrow">
          <span className="numeral db ml-auto mr-auto">2</span>
          <h3 className="f1 fw7 dark-red tracked-light tc lh-title">Minimum Viable Product</h3>

          <p>The <abbr title="Minimum Viable Product">MVP</abbr> is a common concept in the startup world. The term comes from Eric Reis' book <em>The Lean Startup</em> where Eric writes about his personal startup experience and subsequent consulting and advisory positions with startups.</p>

          <div className="bb bt  b--black-10 flex-ns justify-around tc mh0 mv4 ph2 pv2 nl5 nr5">
            <div>
              <h5 className="ttu tracked f7 fw7 blue">Minimum</h5>
              <p className="black-70">The smallest version of&hellip;</p>
            </div>
            <div>
              <h5 className="ttu tracked f7 fw7 blue">Viable</h5>
              <p className="black-70">&hellip;something incredibly useful&hellip;</p>
            </div>
            <div>
              <h5 className="ttu tracked f7 fw7 blue">Product</h5>
              <p className="black-70">&hellip;that a customer really wants</p>
            </div>
          </div>

          <p>The purpose of an MVP is to take your concept or idea, whittle it down to the most essential and useful aspects, build it, and put it in front of customers as quickly as possible. So, to find our MVP we need to answer a few questions:</p>

          <ol className="system-sans o-70 lh-copy dark-purple f6 fw5 mv4">
            <li className="mv2">What is the most important core concept of the product?</li>
            <li className="mv2">Is there a prospective audience that wants your product? And will they pay for it?</li>
            <li className="mv2">How can we test our product hypothesis on our audience as quickly and cheaply as possible?</li>
          </ol>

          <div className="ba b--blue mh0 mt4 mb5 pa4 br1">
            <h5 className="ttu tracked f7 fw7 blue mt0">Client Spotlight</h5>
            <p className="f6 sans-serif blue mb0">We began work with <a className="blue hover-dark-blue b" href="https://www.steadkey.com/" target="_blank" rel="nofollow">Steadkey</a> in January 2016. Steadkey's founder, Jerry Williams, had begun Steadkey several years earlier, based on his extensive experience in the mortgage industry, but had little success. He'd worked with 3 independent developers and 2 professional agencies, yet 4 years later still did not have the solution promissed. The first thing we did with Jerry in January 2016 was strip away all the cruft and excess features and ideas muddying up the success of Steadkey. Starting from scratch, we executed on the key value propositions customers sought. We rebuilt the application from nothing, and in less than 3 months launched the new and improved Steadkey app and gained immediate traction with new customers. Consider that for a moment, 3 months versus the previous 4 years… yeah, that's awesome.</p>
          </div>

          <ServiceRecommendation
            forColumn={[
              'The idea and audience are already validated',
              'Creating a product based on your own experience',
              // this next item actually turns into a react component before it
              // is handed to the properties of ServiceRecommendation
              <div>
                Solving old problems in new ways
                <ul>
                  <li>Like building software to replace spreadsheet tasks; or applying on-demand services with consumer needs</li>
                </ul>
              </div>,
              'Tackling a problem within a budget'
            ]}
            notForColumn={[
              'Projects that take longer than 3 months and millions of dollars',
              'Businesses producing physical consumer goods (clothing, food products, etc)',
              'Persnickety founders that are unwilling to compromise'
            ]}
            />
        </div>
      </section>

      <section id="startup-resuscitation" className="pv5 gradient-light-blue">
        <div className="row narrow">
          <span className="numeral db ml-auto mr-auto">3</span>
          <h3 className="f1 fw7 dark-red tracked-light tc lh-title">Startup Resuscitation</h3>

          <p>Startup resuscitation refers to revitalizing products that have lingered for months or years without traction. Sometimes that's because the startup began as a founder's side project, or product-market fit was never acheived, or maybe the technology behind the product is inherintly broken.</p>
          <p>Whatever the reason, if the concept is solid and an audience exists you can succeed.</p>
          <p>At Spacetime, we seem to attract distressed startups suffering from years of neglect, poor implementation, or lamentable previous agencies. We are different than other agencies in that we do not want to drag out your project as long as possible and squeeze as much money from you as we can. In fact, we will probably try to convince you to reduce the full scope of your project if possible.</p>
          <p>We will work with you to build a project plan and find traction:</p>

          <ol className="system-sans o-70 lh-copy dark-purple f6 fw5 mv3">
            <li className="mv2">Determine the startups value proposition</li>
            <li className="mv2">Determine the target audience</li>
            <li className="mv2">What are low effort, big wins to focus on</li>
            <li className="mv2">How can we gain initial traction</li>
            <li className="mv2">What needs to happen to turn the startup into a sustainable, scaleable business traction</li>
          </ol>

          <p>The purpose of an MVP is to take your concept or idea, whittle it down to the most essential and useful aspects, build it, and put it in front of customers as quickly as possible. So, to find our MVP we need to answer a few questions:</p>

          <ol className="system-sans o-70 lh-copy dark-purple f6 fw5 mv3">
            <li className="mv2">What is the most important core concept of the product?</li>
            <li className="mv2">Is there a prospective audience that wants your product? And will they pay for it?</li>
            <li className="mv2">How can we test our product hypothesis on our audience as quickly and cheaply as possible?</li>
          </ol>

          <div className="ba b--blue mh0 mt4 mb5 pa4 br1">
            <h5 className="ttu tracked f7 fw7 blue mt0">Client Spotlight</h5>
            <p className="f6 sans-serif blue mb0"><a className="blue hover-dark-blue b" href="https://www.studiohopfitness.com/" target="_blank" rel="nofollow">StudioHop Fitness</a> is one of our best examples of Startup Resuscitation. When we partnered with StudioHop in December 2015, the company was doing okay, but being crushed by previously poor vendor directions and a crumbling technology stack. At that time StudioHop had around 150 monthly customers generating $15k MRR. Sounds like good numbers, right? Sort of. The mild success StudioHop had acheived was also killing them. The business was operating at a loss, customers were leaving, and the web application barely functioned and required a lot of manual intervention. There was no way the business could grow or handle more customers even if they could attract new customers.</p>
            <p className="f6 sans-serif blue mb0">The first thing Spacetime did was replatform the StudioHop application from a previous vendors "proprietary" PHP framework to Ruby on Rails (Note: ask a lot of questions if an agency recommends using their own "propriety" anything; usually they are trying to lock you into only working with them). Ruby on Rails offers great features and abilities to get a product up and running fast, for less cost than other tech options, and in this case StudioHop would be able to easily find and hire developers or vendors that know and love Ruby on Rails.</p>
          </div>

          <ServiceRecommendation
            forColumn={[
              'Startups with little traction',
              'Startups with a single crushing weakness (like technology)',
              'Startups going through a dramatic pivot'
            ]}
            notForColumn={[
              'Startups in the Growth phase',
              'Validating ideas'
            ]}
            />

        </div>
      </section>

      <section id="choose-your-own-adventure" className="pv5 gradient-light-blue">
        <div className="row narrow">
          <span className="numeral db ml-auto mr-auto">4</span>
          <h3 className="f1 fw7 dark-red tracked-light tc lh-title">Choose Your Own Adventure</h3>

          <p>Maybe you have a startup that doesn't clearly fit into the categories above. That's okay, we can still help! You probably have a challenge to tackle or business aspect to take on. Let's chat and figure out how we can partner together!</p>

          <ServiceRecommendation
            forColumn={[
              'You have a specific problem to solve',
              'Established startups',
              "You don't know what to do next and need help"
            ]}
            notForColumn={[
              'Brand new ideas'
            ]}
            />
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

export default StartupServicesPage
