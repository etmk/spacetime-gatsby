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
      title={`Dude Perfect`}
      meta={[
        { name: 'description', content: 'Before committing thousands of dollars toward a project, sit down for a cup of coffee and strong business strategy' },
        { name: 'keywords', content: 'dude perfect' },
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
        <p></p>
      </div>

      <Blockquote>
        <blockquote>
          <p className="t-subheadline">Spacetime took our vision and ran with it full steam ahead. They were easy to work with, and most importantly, created a killer end-product that we are proud to share&nbsp;with&nbsp;anyone.</p>
          <cite className="t-small-caps green">&mdash;Coby Cotton, Co-Founder</cite>
        </blockquote>
        <img src="/avatars/coby-cotton-dude-perfect.jpg" className="br-100 w3 mt3" alt="Coby Cotton of Dude Perfect" />
      </Blockquote>

      <div className="bg-banded flex items-start justify-center mv5 mv6-l">
        <img src="/portfolio/dude-perfect/dude-perfect-youtube-web-design.jpg" className="w-40 w-30-l mh2 mh4-l br2 box-shadow relative" alt="" />
        <img src="/portfolio/dude-perfect/dude-perfect-website-design.jpg" className="w-40 w-30-l mh2 mh4-l br2 box-shadow relative" alt="" />
      </div>

      <div className="pv5 pv6-ns row narrow">
        <h3>A focus on audience</h3>
        <p>Dude Pefect has <em>a lot of fans</em>. When building for the web and taking into account a wide variety of customer types and situations, you really need to plan ahead for a variety of needs and restrictions. The biggest being web accessibility, data speeds, interaction on mobile devices, and brand support.</p>
        <p>To ensure a solid experience across mobile and desktop devices, we developed a custom website using the Foundation by Zurb framework for responsive components. Dude Perfect is built on WordPress and <AniLink cover bg="#21759b" to="/services/wordpress-hosting/">served via our superior WordPress hosting service</AniLink>. Further, we employ heavy asset caching and CDN efforts. This ensures that, despite a media rich web experience, our visitors experience a snappy, fast to load experience every visit.</p>
        <div className="mv5">
          <span className="tc db fw7" style={{color: `#00ffde`, fontSize: `10vw`}}>39M+</span>
          <span className="t-small-caps tc db mv3">Subscribers</span>
        </div>
        <p>The memories came to him, how he felt then. "It was very pure, if I can say it right," he'd explain later. "It was pure in 1984 … I was still dreaming." During the Olympics, he was deep in negotiations with Nike for his first shoe contract. He traded pins with other athletes. Eight years later, when he was the most famous person in the world and the Dream Team was forced to stay outside the Olympic Village, he'd be disappointed when that separation kept him from swapping pins again.</p>
      </div>

      <div className="bg-banded band-centered flex items-start justify-center mv4 mv6-l">
        <img src="/portfolio/dude-perfect/dude-perfect-mobile-web-design.jpg" className="w-25 mh2 mh4-l relative" alt="" />
        <img src="/portfolio/dude-perfect/dude-perfect-mobile-website.jpg" className="w-25 mh2 mh4-l relative" alt="" />
        <img src="/portfolio/dude-perfect/dude-perfect-mobile-web-graphics.jpg" className="w-25 mh2 mh4-l relative" alt="" />
      </div>

      <div className="pv5 pv6-ns row narrow">
        <h3>The subtitle for the project</h3>
        <p>Back in the office after his vacation on a 154-foot rented yacht named Mister Terrible, he feels that relaxation slipping away. He feels pulled inward, toward his own most valuable and destructive traits. Slights roll through his mind, eating at him: worst record ever, can't build a team, absentee landlord. Jordan reads the things written about him, the fuel arriving in a packet of clips his staff prepares. He knows what people say. He needs to know, a needle for a hungry vein. There's a palpable simmering whenever you're around Jordan, as if Air Jordan is still in there, churning, trying to escape. It must be strange to be locked in combat with the ghost of your former self.</p>
        <p>The memories came to him, how he felt then. "It was very pure, if I can say it right," he'd explain later. "It was pure in 1984 … I was still dreaming." During the Olympics, he was deep in negotiations with Nike for his first shoe contract. He traded pins with other athletes. Eight years later, when he was the most famous person in the world and the Dream Team was forced to stay outside the Olympic Village, he'd be disappointed when that separation kept him from swapping pins again.</p>
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

      <div className="pv5 pv6-ns row narrow">
        <h3>The subtitle for the project</h3>
        <p>The memories came to him, how he felt then. "It was very pure, if I can say it right," he'd explain later. "It was pure in 1984 … I was still dreaming." During the Olympics, he was deep in negotiations with Nike for his first shoe contract. He traded pins with other athletes. Eight years later, when he was the most famous person in the world and the Dream Team was forced to stay outside the Olympic Village, he'd be disappointed when that separation kept him from swapping pins again.</p>
      </div>

      <div className="dp-sizzle-reel relative">
        <div style={{padding: '56.25% 0 0 0', position: 'relative', margin: '0 auto', width: '95%', maxWidth: '55rem', zIndex: '1' }}>
          <iframe src="https://player.vimeo.com/video/268852916?color=00fda6&title=0&byline=0&portrait=0" title="Dude Perfect Sizzle Reel" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}} frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>

      <div className="pv5 pv6-ns row narrow">
        <h3>Spacetime loves YouTube influencers</h3>
        <p>We love working with YouTube influencers </p>
        <p>The memories came to him, how he felt then. "It was very pure, if I can say it right," he'd explain later. "It was pure in 1984 … I was still dreaming." During the Olympics, he was deep in negotiations with Nike for his first shoe contract. He traded pins with other athletes. Eight years later, when he was the most famous person in the world and the Dream Team was forced to stay outside the Olympic Village, he'd be disappointed when that separation kept him from swapping pins again.</p>
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
