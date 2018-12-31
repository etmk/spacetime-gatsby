import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../../data/site-config'
import MainWrapper from '../../layouts/MainWrapper/MainWrapper'
import ContactForm from '../../components/ContactForm'
import ServicePageHero from '../../components/Services/ServicePageHero'

const StartupServicesPage = ({ transition }) => (
  <div className="service-page content-page" style={{backgroundColor: '#c0b282'}}>

    <Helmet
      title={`🔍 Technical SEO | ${config.siteTitle}`}
      meta={[
        { name: 'description', content: 'Website and server optimization for unparalleled search engine optimization and user&nbsp;experience.' },
        { name: 'keywords', content: 'hey spacetime, spacetime, business, seo, technical seo, location seo, wordpress seo, mobile' },
      ]}
      link={[
        { rel: 'canonical', href: `${config.siteUrl}${location.pathname}` }
      ]}
    />

    <div style={transition && transition.style}>

      <ServicePageHero
        name={`technical-seo`}
        title={`Technical SEO`}
        description={`SEO services for a lean mean search engine optimization machine`}
        icon={`🔍`}
        iconPath={``}
        bgColor={`#86fc9e`}
        textColor={``} />

      <MainWrapper>

        <section className="pv6 bg-near-white">
          <div className="row">
            <span className="dark-purple f6 fw8 o-60">TL;DR</span>
            <h2 className="f3 f1-ns fw4 system-sans lh-title">People need to find your website. Search engines recommend your website if they like you. We make search engines like you 😉</h2>
          </div>
        </section>

        <section className="pv4">
          <div className="row narrow">

            <p>Technical Search Engine Optimization (SEO) involves optimizing web servers, code, and content so that your website will rank better in search results.</p>

            <p>Technical SEO provides the longterm technical investment to grow your website and secure your ranking and foot hold in the eyes of your customers and search engines (Google, Bing, Baidu, DuckDuckGo, etc).</p>

            <p>For example at Spacetime, when someone searches on Google for <strong>"web design agency in dallas"</strong> we want our website to show up as close to the top as possible because the top slots on the search results page are more likely to be clicked.</p>

            <p>Now, there are many factors at play to determine search result rankings&mdash;content, domain authority, user experience, site speed, engagement, etc&mdash;and all play a valuable part in the health and perceived value of a website.</p>

            <p>Technical SEO optimizes everything that computers (aka robots, aka search engines!) understand and find value in. That includes indicators like keywords in text (so the robots know what a page or article is about) to speed and usability of a website on mobile.</p>

            <p>As an added benefit when optimizing for robots, human users receive a better experience as well.</p>

            <p>Take site load speed for example&hellip;</p>

            <p>Both robots and humans like fast websites, so if your website is optimized for performance and changes from a 6 second load time to less than 2 seconds&mdash;well, you just made the robots and humans happier.</p>

            <p>Search engine robots will compare your 2 second website load speed to your competitor's website with a 5 second load speed when determining which to show a customer.</p>

            <p>Which do you think the search engine considers "better" based solely on website load speed?</p>

            <div className="mv4">
              <div className="mb3">
                <label htmlFor="two_second_website" className="f6 fw5">
                  <input type="radio" id="two_second_website" name="website_quiz" value="two_second_website" /> The 2 second website
                </label>
              </div>

              <div className="mb3">
                <label htmlFor="five_second_website" className="f6 fw5">
                  <input type="radio" id="five_second_website" name="website_quiz" value="five_second_website" /> The 5 second website
                </label>
              </div>

              <div className="mb3">
                <label htmlFor="idk_website" className="f6 fw5">
                  <input type="radio" id="idk_website" name="website_quiz" value="idk_website" /> IDK
                </label>
              </div>
            </div>

            <h2>What to expect from Technical SEO</h2>

            <p>SEO of any kind is a long term investment, and one that only grows in power over time when maintained well.</p>

            <p>Technical SEO focuses on presenting your website and content in <em>the best</em> possible form for search engines (like Google) and customers. Basically, SEO makes the job of the search engine robots easier and better understand your website.</p>

            <p>SEO involvement can be broken down into three types of tasks:</p>

            <ol className="lh-copy mv4">
              <li>One time tune-ups or upgrades; like fixing mobile user experience issues.</li>
              <li>Repeat tune-ups; like continually checking HTTP response codes.</li>
              <li>Future tune-ups; we stay engaged and up-to-date with how the future of SEO is changing and if that will affect your website</li>
            </ol>

            <h3>SEO is not a magic bullet</h3>

            <p>There's not a SEO button to flip on. SEO will not magically make your business explode or multiply your web traffic. SEO will not guarantee your website appears on the first page of Google.</p>

            <p>But if you produce good content and provide a good product/service, over time SEO will act as a force multiplier in your favor.</p>

            <h3>How we implement Technical SEO</h3>

            <p>There are 200+ optimizations involved in a well rounded Technical SEO strategy. Not to bore you with the nerd stuff, here are a few segments of Technical SEO we use:</p>

            <ul className="lh-copy mv4">
              <li>Internal linking</li>
              <li>Crawling and indexation</li>
              <li>HTTP response codes</li>
              <li>Server side auditing</li>
              <li>International SEO</li>
              <li>Web performance</li>
              <li>Advanced technology for SEO</li>
              <li>
                Google suite of tools
                <ul>
                  <li>Google Analytics</li>
                  <li>Google Search Console</li>
                  <li>Google Tag Manager</li>
                </ul>
              </li>
            </ul>

          </div>
        </section>

        <section className="pv5 gradient-light-blue">
          <div className="row narrow">
            <blockquote className="bw1 b--green b--solid br2 mv5 mw7 center tc">
              <img src="/avatars/phil-frost-main-street-roi.jpg" className="br-100 h3 w3 dib nt4" alt="Headshot of Phil Frost of Main Street ROI" />
              <p className="f4 ma0 mv3 measure center lh-title">
                &ldquo;Successful SEO is not about tricking Google. It’s about PARTNERING with Google to provide the best search results for Google’s users.&rdquo;
              </p>
              <p className="f7 fw6 tracked green ttu sans-serif mb4">
                &mdash;Phil Frost, Main Street ROI
              </p>
            </blockquote>
          </div>
        </section>

        <section className="pv5 gradient-light-blue">
          <div className="row narrow">

            <h2>Does my website need Technical SEO?</h2>

            <p>The short answer is&hellip;</p>

            <p><em>Yes!</em></p>

            <p>Any and all websites can benefit from a thorough and consistent investment in Technical SEO. The question to consider is whether <em>now</em> is the right time to invest in Technical SEO optimization.</p>

            <p>Technical SEO is always useful, for new websites and old alike.</p>

            <p>So, ask yourself&mdash;am I ready to invest in SEO?</p>

            <div className="mv4">
              <div className="mb3">
                <label htmlFor="purpose" className="f6 fw5">
                  <input type="checkbox" id="purpose" name="seo_checklist" value="purpose" /> Can you clearly articulate the purpose of your website?
                </label>
              </div>

              <div className="mb3">
                <label htmlFor="selling" className="f6 fw5">
                  <input type="checkbox" id="selling" name="seo_checklist" value="selling" /> Do you know what you are selling?
                </label>
              </div>

              <div className="mb3">
                <label htmlFor="customer" className="f6 fw5">
                  <input type="checkbox" id="customer" name="seo_checklist" value="customer" /> Do you know who your customer is?
                </label>
              </div>

              <div className="mb3">
                <label htmlFor="market" className="f6 fw5">
                  <input type="checkbox" id="market" name="seo_checklist" value="market" /> Have you found product + market fit?
                </label>
              </div>

              <div className="mb3">
                <label htmlFor="results" className="f6 fw5">
                  <input type="checkbox" id="results" name="seo_checklist" value="results" /> Is your website producing positive results?
                </label>
              </div>
            </div>

          </div>
        </section>

        <section className="pv5 pv6-ns bg-washed-yellow">
          <div className="row">
            <h2 className="t-headline mt0 mb4 mw7">Crush the competition with unparalleled <span style={{color: '#86fc9e'}}>Technical&nbsp;SEO</span>.</h2>
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

export default StartupServicesPage
