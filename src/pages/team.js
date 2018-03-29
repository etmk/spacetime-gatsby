import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'
import PageHero from '../components/PageHero'

const TeamPage = ({ transition }) => (
  <div style={transition && transition.style}>
    <Helmet title={`Team | ${config.siteTitle}`} />

    <PageHero
      title={"Team"}
      description={"Two heads are better than one. Three heads are better than two. n<sup>x</sup> heads, well that's best."} />

    <section className="bg-red pv5 white relative overflow-hidden">
      <div className="row mw8 relative z-1">
        <h2>Teamwork with Purpose</h2>
        <hr className="mw2 mh0 mv4" />
        <h3 className="f2 fw5 lh-title measure-narrow">At Spacetime, we partner with clients to strategize & execute their vision. We approach problems with a business-centric focus with a goal of sustainability and ROI.</h3>
      </div>
      <img src="/bgs/saturn-bg.jpg" className="w-100 absolute top-0 right-0 z-0" alt="Spacetime background image" />
    </section>

    <section className="bg-fog-white pv5">
      <div className="row">
        <h2 className="tc">Founders</h2>
        <div className="flex justify-around">
          <div className="tc">
            <img src="/avatars/chase-hilbert-avatar.jpg" className="br-100 mw4 mb3" alt="Chase Hilbert" />
            <h3 className="f5 fw7 mv1">Chase Hilbert</h3>
            <p className="f7 black-70 ma0">Partner &amp; Business Development</p>
          </div>
          <div className="tc">
            <img src="/avatars/caleb-sylvest-avatar.jpg" className="br-100 mw4 mb3" alt="Caleb Sylvest" />
            <h3 className="f5 fw7 mv1">Caleb Sylvest</h3>
            <p className="f7 black-70 ma0">Partner &amp; Experience Designer</p>
          </div>
        </div>
      </div>
    </section>

    <section className="pv5">
      <div className="row">
        <h2 className="tc red f3">Spacefriends</h2>
        <hr className="mw2 mt4 mb5 black-10 bw2" />
        <div className="flex flex-wrap justify-center mw7 center">
          <div className="tc mh3 mb4">
            <img src="/avatars/john-tornow-avatar.jpg" className="br-100 mw4 ma2" alt="John Tornow" />
            <h3 className="f5 fw7 mv1">John Tornow</h3>
            <p className="f7 black-70 ma0">Software Developer</p>
          </div>
          <div className="tc mh3 mb4">
            <img src="/avatars/travis-petticrew-avatar.jpg" className="br-100 mw4 ma2" alt="Travis Petticrew" />
            <h3 className="f5 fw7 mv1">Travis Petticrew</h3>
            <p className="f7 black-70 ma0">Developer</p>
          </div>
          <div className="tc mh3 mb4">
            <img src="/avatars/travis-petticrew-avatar.jpg" className="br-100 mw4 ma2" alt="Daniel Dixon" />
            <h3 className="f5 fw7 mv1">Daniel Dixon</h3>
            <p className="f7 black-70 ma0">Developer</p>
          </div>
          <div className="tc mh3 mb4">
            <img src="/avatars/meg-seegmiller-avatar.jpg" className="br-100 mw4 ma2" alt="Meg Seegmiller" />
            <h3 className="f5 fw7 mv1">Meg Seegmiller</h3>
            <p className="f7 black-70 ma0">Developer</p>
          </div>
          <div className="tc mh3 mb4">
            <img src="/avatars/ronnie-johnson-avatar.jpg" className="br-100 mw4 ma2" alt="Ronnie Johnson" />
            <h3 className="f5 fw7 mv1">Ronnie Johnson</h3>
            <p className="f7 black-70 ma0">Design Director</p>
          </div>
          <div className="tc mh3 mb4">
            <img src="/avatars/steve-hanson-avatar.jpg" className="br-100 mw4 ma2" alt="Steve Hanson" />
            <h3 className="f5 fw7 mv1">Steve Hanson</h3>
            <p className="f7 black-70 ma0">Full-stack Developer</p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white pv5">
      <ul className="list f1 fw6 lh-title">
        <li className="mv4">Love what you do, do what you love</li>
        <li className="mv4">Prototypes are practical</li>
        <li className="mv4">Something is better than nothing</li>
        <li className="mv4">Software is never finished</li>
        <li className="mv4">Design is essential</li>
        <li className="mv4">Process makes perfect</li>
      </ul>
    </section>

  </div>
)

export default TeamPage
