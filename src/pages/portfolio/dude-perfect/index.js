import React        from 'react'
import Helmet       from 'react-helmet'

import config       from '../../../../data/site-config'

import Layout       from '../../../components/layout'
import MainWrapper  from '../../../components/MainWrapper/MainWrapper'
import PageHero     from '../../../components/PageHero'
import Blockquote   from '../../../components/Blockquote'

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
        <h2 className="t-mega measure-tight center">Dude Perfect needed a web experience to rival their impossible enthusiasm.</h2>
      </section>

      <div className="pv5 pv6-ns row narrow">
        <h3>The subtitle for the project</h3>
        <p>Back in the office after his vacation on a 154-foot rented yacht named Mister Terrible, he feels that relaxation slipping away. He feels pulled inward, toward his own most valuable and destructive traits. Slights roll through his mind, eating at him: worst record ever, can't build a team, absentee landlord. Jordan reads the things written about him, the fuel arriving in a packet of clips his staff prepares. He knows what people say. He needs to know, a needle for a hungry vein. There's a palpable simmering whenever you're around Jordan, as if Air Jordan is still in there, churning, trying to escape. It must be strange to be locked in combat with the ghost of your former self.</p>
        <p>The memories came to him, how he felt then. "It was very pure, if I can say it right," he'd explain later. "It was pure in 1984 … I was still dreaming." During the Olympics, he was deep in negotiations with Nike for his first shoe contract. He traded pins with other athletes. Eight years later, when he was the most famous person in the world and the Dream Team was forced to stay outside the Olympic Village, he'd be disappointed when that separation kept him from swapping pins again.</p>
      </div>

      <Blockquote>
        <blockquote>
          <p className="t-subheadline">Spacetime took our vision and ran with it full steam ahead. They were easy to work with, and most importantly, created a killer end-product that we are proud to share&nbsp;with&nbsp;anyone.</p>
          <cite className="t-small-caps green">&mdash;Coby Cotton, Co-Founder</cite>
        </blockquote>
        <img src="/avatars/coby-cotton-dude-perfect.jpg" className="br-100 w3 mt3" alt="Coby Cotton of Dude Perfect" />
      </Blockquote>

      <img src="/portfolio/dude-perfect/dude-perfect-website-wireframes.jpg" className="center db" alt="" />

      <div className="pv5 pv6-ns row narrow">
        <h3>The subtitle for the project</h3>
        <p>Back in the office after his vacation on a 154-foot rented yacht named Mister Terrible, he feels that relaxation slipping away. He feels pulled inward, toward his own most valuable and destructive traits. Slights roll through his mind, eating at him: worst record ever, can't build a team, absentee landlord. Jordan reads the things written about him, the fuel arriving in a packet of clips his staff prepares. He knows what people say. He needs to know, a needle for a hungry vein. There's a palpable simmering whenever you're around Jordan, as if Air Jordan is still in there, churning, trying to escape. It must be strange to be locked in combat with the ghost of your former self.</p>
        <p>The memories came to him, how he felt then. "It was very pure, if I can say it right," he'd explain later. "It was pure in 1984 … I was still dreaming." During the Olympics, he was deep in negotiations with Nike for his first shoe contract. He traded pins with other athletes. Eight years later, when he was the most famous person in the world and the Dream Team was forced to stay outside the Olympic Village, he'd be disappointed when that separation kept him from swapping pins again.</p>
      </div>

      <img src="/portfolio/dude-perfect/dude-perfect-mobile-website-optimization.jpg" className="center db" alt="" />

      <div className="pv5 pv6-ns row narrow">
        <h3>The subtitle for the project</h3>
        <p>Back in the office after his vacation on a 154-foot rented yacht named Mister Terrible, he feels that relaxation slipping away. He feels pulled inward, toward his own most valuable and destructive traits. Slights roll through his mind, eating at him: worst record ever, can't build a team, absentee landlord. Jordan reads the things written about him, the fuel arriving in a packet of clips his staff prepares. He knows what people say. He needs to know, a needle for a hungry vein. There's a palpable simmering whenever you're around Jordan, as if Air Jordan is still in there, churning, trying to escape. It must be strange to be locked in combat with the ghost of your former self.</p>
        <p>The memories came to him, how he felt then. "It was very pure, if I can say it right," he'd explain later. "It was pure in 1984 … I was still dreaming." During the Olympics, he was deep in negotiations with Nike for his first shoe contract. He traded pins with other athletes. Eight years later, when he was the most famous person in the world and the Dream Team was forced to stay outside the Olympic Village, he'd be disappointed when that separation kept him from swapping pins again.</p>
      </div>

      <div className="bg-athens-gray mv6 pv5 pv7-ns relative overflow-hidden">
        <div className="row flex flex-column flex-row-reverse-l">
          <div className="w-40">
            <h3>Pushing the limits</h3>
            <p>In building an example travel booking engine, we allowed users to search by destination, filter by activities, and find things dynamically; all while maintaining the speed and performance AMP is known for. By sweating the details on this one with micro-animations and moments of delight.</p>
          </div>
          <div className="flex-grow">
            <img src="/portfolio/dude-perfect/dude-perfect-mobile-games.png" className="" alt="" />
          </div>
        </div>
      </div>

      <img src="/portfolio/dude-perfect/dude-perfect-website-components.jpg" className="w-100 db" alt="" />

      <img src="/portfolio/dude-perfect/dude-perfect-sizzle-reel.jpg" className="center db" alt="" />

      <div className="pv5 pv6-ns row narrow">
        <h3>The subtitle for the project</h3>
        <p>Back in the office after his vacation on a 154-foot rented yacht named Mister Terrible, he feels that relaxation slipping away. He feels pulled inward, toward his own most valuable and destructive traits. Slights roll through his mind, eating at him: worst record ever, can't build a team, absentee landlord. Jordan reads the things written about him, the fuel arriving in a packet of clips his staff prepares. He knows what people say. He needs to know, a needle for a hungry vein. There's a palpable simmering whenever you're around Jordan, as if Air Jordan is still in there, churning, trying to escape. It must be strange to be locked in combat with the ghost of your former self.</p>
        <p>The memories came to him, how he felt then. "It was very pure, if I can say it right," he'd explain later. "It was pure in 1984 … I was still dreaming." During the Olympics, he was deep in negotiations with Nike for his first shoe contract. He traded pins with other athletes. Eight years later, when he was the most famous person in the world and the Dream Team was forced to stay outside the Olympic Village, he'd be disappointed when that separation kept him from swapping pins again.</p>
      </div>

    </MainWrapper>

  </Layout>
)

export default DudePerfectPage
