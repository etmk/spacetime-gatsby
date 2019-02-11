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
      title={`Dude Perfect • web design for the unique YouTube influencers`}
      meta={[
        { name: 'description', content: 'A unique web design experience for the all-star YouTube influencers group Dude Perfect' },
        { name: 'keywords', content: 'dude perfect, youtube influencers' },
      ]}
      link={[
        { rel: 'canonical', href: `${config.siteUrl}/portfolio/dude-perfect/` }
      ]}
    />

    <PageHero
      bgColor="#202625"
      bgImage="/portfolio/dude-perfect/dude-perfect-bg.jpg">
        <img src="/client-logos/dude-perfect-icon-white.svg" className="" alt="Coby Cotton of Dude Perfect" />
        <h1 className="t-headline">Dude Perfect&mdash;<span className="o-40">YouTube influencers specializing in the trick shot</span></h1>
    </PageHero>

    <MainWrapper>

      <section className="pv5 pv6-ns bg-near-white tc">
        <span className="t-small-caps red">TL;DR</span>
        <h2 className="t-mega measure-tight center">Dude Perfect needed a web experience to rival their impossible enthusiasm</h2>
      </section>

      <div className="pv5 pv6-ns row narrow">
        <h3 className="f2">Go Big!</h3>
        <p>We worked with Dude Perfect to design and develop a web experience to show off their unique brand, both for fans and partners.</p>
        <p>Visual and brand design pulled from the existing Dude Perfect legacy, taking into account the years of video content and assets already created. The goal in any project with existing history is to develop a future-forward path, while not forsaking the history and brand equity of the past.</p>
        <p>Together, the Spacetime and Dude Perfect teams developed a fantastic extension of the YouTube influencers ecosystem.</p>
      </div>

      <Blockquote>
        <blockquote>
          <p className="f2 center">Spacetime took our vision and ran with it full steam ahead. They were easy to work with, and most importantly, created a killer end-product that we are proud to share&nbsp;with&nbsp;anyone.</p>
          <cite className="t-small-caps green">&mdash;Coby Cotton, Co-Founder</cite>
        </blockquote>
        <img src="/avatars/coby-cotton-dude-perfect.jpg" className="br-100 w3 mt3" alt="Coby Cotton of Dude Perfect" />
      </Blockquote>

      <div className="bg-banded flex items-start justify-center mv5 mv6-l">
        <img src="/portfolio/dude-perfect/dude-perfect-youtube-web-design.jpg" className="w-40 w-30-l mh2 mh4-l br2 box-shadow relative" alt="" />
        <img src="/portfolio/dude-perfect/dude-perfect-website-design.jpg" className="w-40 w-30-l mh2 mh4-l br2 box-shadow relative" alt="" />
      </div>

      <div className="pv5 pv6-ns row narrow">
        <h3>Audience driven technology</h3>
        <p>Dude Pefect has <em>a lot of fans</em>. When building for the web and taking into account a wide variety of customer types and situations, you really need to plan ahead for a variety of needs and restrictions. The top being web accessibility, data speeds, interaction on mobile devices, and brand support.</p>
        <p>To ensure a solid experience across mobile and desktop devices, we developed a custom website using the Foundation by Zurb framework for responsive components. Dude Perfect is built on WordPress and <AniLink cover bg="#21759b" to="/services/wordpress-hosting/">served via our superior WordPress hosting service</AniLink>. Further, we employ heavy asset caching and CDN efforts. This ensures that, despite a media rich web experience, our visitors experience a snappy, fast to load experience every visit.</p>
        <div className="mv5">
          <span className="tc db fw7" style={{color: `#00ffde`, fontSize: `10vw`}}>39M+</span>
          <span className="t-small-caps tc db mv3">Subscribers</span>
        </div>
        <p>To keep content current and up-to-date, the website hooks into several social APIs to populate current stats and content. Social fans and subscribers are an important metric for a brand like Dude Perfect and for sponsorship partners that wish to work with the team. So, we use APIs and chron jobs to update follower and mobile game download counts daily&mdash;and we built a custom WordPress plugin to sync video and data from YouTube directly into the website.</p>
      </div>

      <div className="bg-banded band-centered flex items-start justify-center mv4 mv6-l">
        <img src="/portfolio/dude-perfect/dude-perfect-mobile-web-design.jpg" className="w-25 mh2 mh4-l relative" alt="" />
        <img src="/portfolio/dude-perfect/dude-perfect-mobile-website.jpg" className="w-25 mh2 mh4-l relative" alt="" />
        <img src="/portfolio/dude-perfect/dude-perfect-mobile-web-graphics.jpg" className="w-25 mh2 mh4-l relative" alt="" />
      </div>

      

      <div className="bg-athens-gray mv5 pt5 pt6-l pb5-l relative overflow-hidden">
        <div className="row flex flex-column flex-row-reverse-l justify-end-l">
          <div className="w-30-l">
            <h3>YouTube and beyond</h3>
            <p>Over the years, Dude Perfect has expanded beyond YouTube&mdash;with merch, mobile games, books, and even a tv show. The incredible talent and creativity from the Dude Perfect team seems inexhaustible with each new idea and venture they undertake.</p>
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
        <p>Have you ever landed on a webpage that didn't exist? You may have seen an error message or code called a 404 error. 404 are not something a web master wants to see on their site, but they do happen. Good brands take a bad happenstance, like a 404 error, to creatively delight their visitors.</p>
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
        className="big-circle-button center mb7">
        Visit DudePerfect.com ↗
      </OutboundLink>

    </MainWrapper>

  </Layout>
)

export default DudePerfectPage
