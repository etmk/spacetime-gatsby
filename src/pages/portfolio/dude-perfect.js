import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../../data/site-config'
import MainWrapper from '../../layouts/MainWrapper/MainWrapper'
import PortfolioHero from '../../components/PortfolioHero'
import PortfolioMeta from '../../components/PortfolioMeta'
import PortfolioPagination from '../../components/PortfolioPagination'

import bg from '../../assets/images/backgrounds/spacetime-background.jpg'

const DudePerfectPage = () => (
  <div>
    <Helmet title={`Services | ${config.siteTitle}`} />

    <PortfolioHero
      title={`Dude Perfect`}
      tagline={`Big. Loud. And Full of Energy. Dude Perfect Needed a Web Experience To Rival Their Impossible Enthusiasm`}
      bgColor={`#202625`}
      logoPath={`/client-logos/dude-perfect-icon.svg`}
      />

    <PortfolioMeta
      bgColor={`#202625`}
      buttonText={`Go to Dude Perfect →`}
      buttonColor={`#00FFDE`}
      label1={`Expertises`}
      text1={`Design, UX, Code`}
      label2={`Platform`}
      text2={`WordPress`}
      label3={`Easter Egg`}
      text3={`404 Page →`}/>

    <MainWrapper>
      <article className="bg-white">

        <div className="ph4 ph5-m ph6-l">
          <div className="pv5 f4 f2-ns measure center">
            <p className="tc sans-serif lh-solid fw5 mv0 f4 f3-m f2-l measure black-90">
              A short description of your project. Maybe a few notes concerning your constraints and process. Standard lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etc. al dolore magna aliqua. Ut enim ad.
            </p>
          </div>
          <div className="measure f4 center mv5">
            <h1 className="fw6 f3 avenir">
              The subtitle for the project
            </h1>
            <p className="">
              Back in the office after his vacation on a 154-foot rented yacht named Mister Terrible, he feels that relaxation slipping away. He feels pulled inward, toward his own most valuable and destructive traits. Slights roll through his mind, eating at him: worst record ever, can't build a team, absentee landlord. Jordan reads the things written about him, the fuel arriving in a packet of clips his staff prepares. He knows what people say. He needs to know, a needle for a hungry vein. There's a palpable simmering whenever you're around Jordan, as if Air Jordan is still in there, churning, trying to escape. It must be strange to be locked in combat with the ghost of your former self.
            </p>
            <p className="">
              The memories came to him, how he felt then. "It was very pure, if I can say it right," he'd explain later. "It was pure in 1984 … I was still dreaming." During the Olympics, he was deep in negotiations with Nike for his first shoe contract. He traded pins with other athletes. Eight years later, when he was the most famous person in the world and the Dream Team was forced to stay outside the Olympic Village, he'd be disappointed when that separation kept him from swapping pins again.
            </p>
          </div>
          <blockquote className="bw1 b--green b--solid br2 mv5 mw7 center tc">
            <img src="/avatars/coby-cotton-avatar.jpg" className="br-100 h3 w3 dib nt4" alt="Coby Cotton" />
            <p className="f4 fw1 ma0 mv3 measure-narrow center lh-title">
              &ldquo;Spacetime took our vision and ran with it full steam ahead. They were easy to work with, and most importantly, created a killer end-product that we are proud to share with anyone.&rdquo;
            </p>
            <p className="f7 fw6 tracked green ttu sans-serif mb4">
              —Coby Cotton, Co-Founder
            </p>
          </blockquote>
          <div className="measure f4 center mv5">
            <h3 className="red">TL;DR</h3>
            <p className="">
              We made a really cool website that looks baller and fits the Dude Perfect brand like a glove. People really like it.
            </p>
          </div>
        </div>
      </article>
    </MainWrapper>

    <PortfolioPagination />
  </div>
)

export default DudePerfectPage
