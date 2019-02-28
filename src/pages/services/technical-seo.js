import React from 'react'
import Helmet from 'react-helmet'
import Emoji from 'a11y-react-emoji'

import config from '../../../data/site-config'

import Layout from '../../components/layout'
import MainWrapper from '../../components/MainWrapper/MainWrapper'
import ContactForm from '../../components/ContactForm'
import ServicePageHero from '../../components/Services/ServicePageHero'
import ServicePagePagination from '../../components/Services/ServicePagePagination'

const StartupServicesPage = () => (
  <Layout className="service-page content-page" style={{backgroundColor: '#86fc9e'}}>

    <Helmet
      title={`🔍 Technical SEO • SEO consultant • Dallas, TX`}
      meta={[
        { name: 'description', content: 'Crush the competition and move up in the search engine rankings with unparalleled Technical SEO' },
        { name: 'keywords', content: 'technical seo, dallas seo' },
      ]}
      link={[
        { rel: 'canonical', href: `${config.siteUrl}/services/technical-seo/` }
      ]}
      bodyAttributes={{
        class: 'dark-theme'
      }}
    />

    <div>

      <ServicePageHero
        name={`technical-seo`}
        title={`Technical SEO`}
        description={`for a lean mean search engine optimization machine`}
        icon={`🔍`}
        iconPath={``}
        bgColor={`#86fc9e`}
        textColor={`black`} />

      <MainWrapper>

        <section className="pv6 bg-near-white">
          <div className="row tc">
            <span className="t-small-caps red">TL;DR</span>
            <h3 className="t-mega mw7 center">Search engines recommend your website if they like you. We make search engines like&nbsp;you</h3>
          </div>
        </section>

        <section className="pv6">
          <div className="row narrow">

            <p>Technical Search Engine Optimization focuses on fixing your website issues; it involves optimizing web servers, code, and content so that your website will rank better in search&nbsp;results.</p>

            <p>Technical SEO provides the longterm technical investment to grow your website and secure your ranking and foothold in the eyes of your customers and search engines (Google, Bing, Baidu, DuckDuckGo, etc).</p>

            <p>For example at Spacetime, when someone searches on Google for <strong>"web design agency in dallas"</strong> we want our website to show up as close to the top as possible because the top slots on the search results page are more likely to be clicked.</p>

            <p>Now, there are many factors at play to determine search result rankings&mdash;content, domain authority, user experience, site speed, engagement, etc&mdash;and all play a valuable part in the health and perceived value of a website.</p>

            <p>Technical SEO optimizes everything that computers (aka robots, aka search engines) understand and find value in. That includes indicators like keywords in the text (so the robots know what a page or article is about) to speed and usability of a website on mobile.</p>

            <p>As an added benefit when optimizing for robots, <em>human users</em> receive a better experience as well.</p>

            <p>Take site load speed for example&hellip;</p>

            <p>Both robots and humans like fast websites, so if your website is optimized for performance and changes from a 6-second load time to less than 2 seconds&mdash;well, you just made the robots and humans happier.</p>

            <p>Search engine robots will compare your 2-second website load speed to your competitor&rsquo;s website with a 5-second load speed when determining which to show a customer.</p>

            <p>Which do you think the search engine considers "better" based solely on website load speed?</p>

            <div className="bg-washed-green pa3 br2 mv4"><Emoji symbol="✅" label="checkmark"/> The 2 second website</div>

            <h3 className="f2 mt5 mb3 dib">What to expect from Technical SEO</h3>

            <p>SEO of any kind is a long term investment and one that only grows in power over time when maintained well.</p>

            <p>Technical SEO focuses on presenting your website and content in <em>the best</em> possible form for search engines (like Google) and customers. Basically, SEO makes the job of the search engine robots easier and better understand your website.</p>

            <h4 className="f3">SEO is not a magic bullet</h4>

            <p>There&rsquo;s not an SEO button to flip on. SEO will not magically make your business explode or multiply your web traffic. SEO will not guarantee your website appears on the first page of Google.</p>

            <p>But if you produce good content and provide a good product/service, over time SEO will act as a force multiplier in your favor.</p>

            <h4 className="f3">Honest SEO, honestly</h4>

            <p>We believe in honest, above-board action in everything we do&mdash;including SEO. We only perform proper, legal, trustworthy SEO techniques.</p>

            <h3 className="f2 mt5 mb3 dib">What you get, guaranteed</h3>

            <p>You <em>will</em> see positive results. </p>

            <ul className="lh-copy mv4 pl3 list">
              <li className="mb2"><Emoji symbol="✅" label="checkmark"/> Faster website load</li>
              <li className="mb2"><Emoji symbol="✅" label="checkmark"/> Better user experience</li>
              <li className="mb2"><Emoji symbol="✅" label="checkmark"/> Increased sales</li>
              <li className="mb2"><Emoji symbol="✅" label="checkmark"/> Clear technical direction</li>
              <li className="mb2"><Emoji symbol="✅" label="checkmark"/> Increased conversions</li>
              <li className="mb2"><Emoji symbol="✅" label="checkmark"/> Better search engine ranking</li>
            </ul>

            <h3 className="f2 mt5 mb3 dib">What we deliver</h3>

            <ul className="lh-copy">
              <li className="mb2">
                <strong>Monthly SEO report</strong> delivered to your inbox
                <ul>
                  <li>The monthly report is a high-level overview of SEO activity and change. We can also provide a deep report analysis on a number of subjects upon request.</li>
                </ul>
              </li>
              <li className="mb2"><strong>Keyword investigation</strong> and optimization</li>
              <li className="mb2">
                <strong>On-page optimization</strong>
                <ul>
                  <li><strong>Meta:</strong> Title, Description, Keywords, etc.</li>
                  <li><strong>Content:</strong> H1, H2, keywords, images, alt text, etc</li>
                </ul>
              </li>
              <li className="mb2">
                <strong>Link building &amp; cleanup</strong>
                <ul>
                  <li><strong>Backlink creation from existing coverage.</strong> Investigate already published articles where the author did not add a Backlink (a link to your website) in the&nbsp;article.</li>
                  <li><strong>Backlink cleanup.</strong> Routinely review, approve or disavow (force remove from spammer sites) links.</li>
                </ul>
              </li>
              <li className="mb2"><strong>Sitemaps</strong> indicate to the search engines the content of our site and what is important (like a Table of Contents). We review often and routinely add or remove missing and incorrect links.</li>
              <li className="mb2"><strong>Google Analytics</strong> review and assistance</li>
              <li className="mb2"><strong>Google Search Console</strong> review and monitoring</li>
              <li className="mb2">
                <strong>Fix technical issues</strong>
                <ul>
                  <li>CORS</li>
                  <li>Broken links</li>
                  <li>Uncompressed files</li>
                  <li>Site speed issues</li>
                  <li>Concatenate files</li>
                  <li>Hosting optimizations</li>
                  <li>Canonical URLs</li>
                  <li>Robots.txt</li>
                  <li>Log files</li>
                  <li>Structured data</li>
                  <li>Internal Linking</li>
                  <li>HTTP response codes</li>
                </ul>
              </li>
              <li className="mb2">
                <strong>Vendor assistance</strong>
                <ul>
                  <li>Help when other vendors need to add marketing code, etc.</li>
                </ul>
              </li>
              <li className="mb2">
                <strong>Security &amp; uptime monitoring</strong>
                <ul>
                  <li>Review-on site and backlink indicators to make sure nothing fishy is going on</li>
                  <li>Monitor website uptime to make sure everything is running smoothly and not crashing</li>
                </ul>
              </li>
              <li className="mb2">
                <strong>Competitor discovery &amp; monitoring</strong>
                <ul>
                  <li><strong>Direct competitor.</strong> Directly track competitors and investigate their SEO strategy.</li>
                  <li><strong>Cast a net.</strong> Setup wide-reaching keyword alerts so we know when/if a new competitor comes on the scene.</li>
                </ul>
              </li>
              <li className="mb2"><strong>Mobile optimization</strong> for the Google Mobile-first Index</li>
              <li className="mb2">Advise and recommend SEO incorporation</li>
            </ul>

          </div>
        </section>

        <section className="pv5 bg-washed-blue">
          <div className="row narrow">
            <blockquote className="bw1 b--green b--solid br2 mv5 mw7 center tc">
              <img src="/avatars/rand-fishkin-moz.jpg" className="br-100 h3 w3 dib nt4" alt="Headshot of Phil Frost of Main Street ROI" />
              <p className="f4 ma0 mv3 measure center lh-title">
                &ldquo;There&rsquo;s a ton that SEOs can do to optimize and nudge and create intelligent, non-manipulative ways of earning links&rdquo;
              </p>
              <p className="f7 fw6 tracked green ttu sans-serif mb4">
                &mdash;Rand Fishkin, Co-founder of Moz
              </p>
            </blockquote>
          </div>
        </section>

        <section className="pv6">
          <div className="row narrow">

            <h3>Does my website need Technical SEO?</h3>

            <p>The short answer is&hellip;</p>

            <p><em>Yes!</em></p>

            <p>Any and all websites can benefit from a thorough and consistent investment in Technical SEO. Technical SEO is always useful, for new websites and old alike.</p>

            <p>So, ask yourself&mdash;am I ready to invest in SEO?</p>

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

        <ServicePagePagination
          name={`startups`}
          title={`Startups`}
          description={`go from a back-of-the-napkin idea to scalable startup MVP`}
          icon={`🚀`}
          iconPath={``}
          bgColor={`#F03F47`}
          cta={`How to grow your startup`} />

      </MainWrapper>
    </div>
  </Layout>
)

export default StartupServicesPage
