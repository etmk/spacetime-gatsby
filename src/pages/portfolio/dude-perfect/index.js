import React            from 'react'
import Helmet           from 'react-helmet'
import AniLink          from "gatsby-plugin-transition-link/AniLink"
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import config           from '../../../../data/site-config'

import Layout           from '../../../components/layout'
import MainWrapper      from '../../../components/MainWrapper/MainWrapper'
import PageHero         from '../../../components/PageHero'
import Blockquote       from '../../../components/Blockquote'

const DudePerfectPage = () => (
  <Layout>
    <Helmet
      title={`🏀Dude Perfect • Web Design for YouTube Influencers • Spacetime`}
      meta={[
        { name: 'description', content: 'The Dude Perfect website design focused on the YouTube influencers unique brand. Spacetime helped automate and grow content, traffic, and site stability.' },
        { name: 'keywords', content: 'dude perfect website, dude perfect, youtube influencers' },
      ]}
      link={[
        { rel: 'canonical', href: `${config.siteUrl}/portfolio/dude-perfect/` }
      ]}
    />

    <PageHero
      bgColor="#202625"
      bgImage="/portfolio/dude-perfect/dude-perfect-bg.jpg">
        <img src="/client-logos/dude-perfect-icon-white.svg" className="" alt="Dude Perfect logo" />
        <h1 className="t-headline">Dude Perfect&mdash;<span className="o-40">YouTube influencers specializing in the trick shot</span></h1>
    </PageHero>

    <MainWrapper>

      <section className="pv5 pv6-ns bg-near-white tc">
        <span className="t-small-caps red">TL;DR</span>
        <h2 className="t-mega measure-tight center">The Dude Perfect website needed to rival their impossible enthusiasm</h2>
      </section>

      <div className="pv5 pv6-ns row narrow">
        <h3 className="f2">Go Big!</h3>
        <p>We worked with Dude Perfect to design and develop a web experience to show off their unique brand, both for fans and partners.</p>
        <p>Visual and brand design pulled from the existing group legacy, taking into account the years of video content and assets already created. The goal in any project with existing history is to develop a future-forward path, while not forsaking the history and brand equity of the past.</p>
        <p>Together, the Spacetime and Dude Perfect teams developed a fantastic extension of the YouTube influencer marketing ecosystem.</p>
      </div>

      <Blockquote>
        <blockquote>
          <p className="f2 center">Spacetime took our vision and ran with it full steam ahead. They were easy to work with, and most importantly, created a killer end-product that we are proud to share&nbsp;with&nbsp;anyone.</p>
          <cite className="t-small-caps green">&mdash;Coby Cotton, Co-Founder</cite>
        </blockquote>
        <img src="/avatars/coby-cotton-dude-perfect.jpg" className="br-100 w3 mt3" alt="Coby Cotton of Dude Perfect" />
      </Blockquote>

      <div className="bg-banded flex items-start justify-center mv5 mv6-l">
        <img src="/portfolio/dude-perfect/dude-perfect-youtube-web-design.jpg" className="w-40 w-30-l mh2 mh4-l br2 box-shadow relative" alt="Dude Perfect website homepage screenshot" />
        <img src="/portfolio/dude-perfect/dude-perfect-website-design.jpg" className="w-40 w-30-l mh2 mh4-l br2 box-shadow relative" alt="Dude Perfect website case studies screenshot" />
      </div>

      <div className="pv5 pv6-ns row narrow">
        <h3>Audience driven technology</h3>
        <p>Dude Perfect has <em>a lot of fans</em>. When building for the web and taking into account a wide variety of customer types and situations, you really need to plan ahead for a variety of needs and restrictions. The top being web accessibility, data speeds, interaction on mobile devices, and brand support.</p>
        <p>To ensure a solid experience across mobile and desktop devices, we developed a custom website using the Foundation by Zurb responsive front end frameworks. Zurb foundation integrated as a starter theme, called <OutboundLink href="https://foundationpress.olefredrik.com/" target="_blank">FoundationPress</OutboundLink>, allowed us to develop quickly, cleanly, while using a child theme so we are able to easily perform framework updates. WordPress Dude Perfect is built on WordPress and <AniLink cover bg="#21759b" to="/services/wordpress-hosting/">served via our superior WordPress hosting service</AniLink>. Further, we employ heavy asset caching and CDN efforts. This ensures that, despite a media rich web experience, our visitors experience a snappy, fast to load experience every visit.</p>
        <div className="mv5">
          <span className="tc db fw7" style={{color: `#00ffde`, fontSize: `10vw`}}>42M&#43;</span>
          <span className="t-small-caps tc db mv3">Subscribers</span>
        </div>
        <p>To keep content current and up-to-date, the website hooks into several social APIs to populate current stats and content. Social fans and subscribers are an important metric for YouTube influencers and for sponsorship partners that wish to work with the team. So, we use APIs and chron jobs to update follower and mobile game download counts daily&mdash;and we built a custom WordPress plugin to sync video and data from YouTube directly into the website.</p>
        <p>There are only a few dozen YouTube channels with more than 20 million subscribers. Dude Perfect has learned to build engaged audiences while partnering with influencers brands. With a strong target audience, Dude Perfect videos garner more than a million views within the first hours.</p>
      </div>

      <div className="bg-banded band-centered flex items-start justify-center mv4 mv6-l">
        <img src="/portfolio/dude-perfect/dude-perfect-mobile-web-design.jpg" className="w-25 mh2 mh4-l relative" alt="Mobile view of the Dude Perfect about page" />
        <img src="/portfolio/dude-perfect/dude-perfect-mobile-website.jpg" className="w-25 mh2 mh4-l relative" alt="Mobile view of the Dude Perfect press page" />
        <img src="/portfolio/dude-perfect/dude-perfect-mobile-web-graphics.jpg" className="w-25 mh2 mh4-l relative" alt="Mobile view of the Dude Perfect videos page" />
      </div>

      <div className="row narrow pv5 pv6-ns">
        <h3>Tools of the trade</h3>
        <p>Building a website is easy. Building a system that runs and grows on auto-pilot, updates and optimizes data and code, and serves tens of thousands of monthly visitors at blazing fast speeds&mdash;well, that ain&rsquo;t nothing to sneeze at.</p>
        <p>Here are some of the tools in our toolbox of tricks:</p>
        <ul className="lh-copy">
          <li>Web design</li>
          <li>Wireframing</li>
          <li>User experience design (UX)</li>
          <li>WordPress theme development</li>
          <li>WordPress hosting</li>
          <li>Frontend development</li>
          <li>YouTube integration</li>
          <li>Technical SEO</li>
          <li>SEO Audit</li>
          <li>Mobile first development</li>
          <li>Responsive design (RWD)</li>
          <li>Zurb Foundation</li>
          <li>Shopify merch</li>
          <li>Google Analytics</li>
          <li>Google Search Console</li>
          <li>MailChimp integration</li>
        </ul>
      </div>

      <div className="bg-athens-gray mv5 pt5 pt6-l pb5-l relative overflow-hidden">
        <div className="row flex flex-column flex-row-reverse-l justify-end-l">
          <div className="w-30-l">
            <h3>YouTube and beyond</h3>
            <p>Over the years, Dude Perfect has expanded beyond YouTube&mdash;with merch, mobile games, books, and even a tv show. The incredible talent and creativity from the team seems inexhaustible with each new idea and venture they undertake.</p>
          </div>
          <div className="w-60-l mt4 mt0-l">
            <img src="/portfolio/dude-perfect/dude-perfect-mobile-games.jpg" className="nb6 nb3-m nb5-l" alt="" />
          </div>
        </div>
      </div>

      <img src="/portfolio/dude-perfect/dude-perfect-website-components@2x.jpg" className="w-100 db" alt="" />

      <div className="row narrow">

        <hr className="mv5 mv6-ns bw4 b--dude-perfect o-10" />
        <h3>Delightfully lost</h3>
        <p>Have you ever landed on a webpage that didn&rsquo;t exist? You may have seen an error message or code called a 404 error. 404 are not something a web master wants to see on their site, but they do happen. Good brands take a bad happenstance, like a 404 error, to creatively delight their visitors.</p>
        <p>We did the same for Dude Perfect.</p>
        <OutboundLink
          href="https://dribbble.com/shots/2886901-Dude-Perfect-404-Page"
          target="_blank"
          className="button pa2 br1 bg-dude-perfect black dib grow mt3">
            Check out the 404 page design &rarr;
        </OutboundLink>

        <hr className="mv5 mv6-ns bw4 b--dude-perfect o-10" />
      </div>

      <div className="dp-sizzle-reel relative">
        <div style={{padding: '56.25% 0 0 0', position: 'relative', margin: '0 auto', width: '95%', maxWidth: '55rem', zIndex: '1' }}>
          <iframe src="https://player.vimeo.com/video/268852916?color=00fda6&title=0&byline=0&portrait=0" title="Dude Perfect Sizzle Reel" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}} frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>

      <div className="pv5 pv6-ns row narrow">
        <h3>To infinity and beyond</h3>
        <p>The end result is a well-branded hub for Dude Perfect fans and partners to find the latest and greatest video, content, and merchandise. We love how the site turned out and continues to grow, and hope you do as well.</p>
      </div>

      <OutboundLink
        href="https://dudeperfect.com/"
        target="_blank"
        className="big-circle-button hover-bg-dude-perfect hover-b--dude-perfect center mb7">
        Visit DudePerfect.com ↗
      </OutboundLink>

    </MainWrapper>

  </Layout>
)

export default DudePerfectPage
