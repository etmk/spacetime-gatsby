import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'
import MainWrapper from '../layouts/MainWrapper/MainWrapper'
import PageHero from '../components/PageHero'

const mantras = [
  {
    title: 'Love what you do, do what you love.',
    text: 'What other reason is there?'
  }, {
    title: 'Prototypes are practical.',
    text: 'Websites and apps are not pretty pictures made in Photoshop. They are living, fluid interactive experiences. Static design is needed for direction but is not the end goal. Prototypes provide a more accurate view into how a product should feel and function.'
  }, {
    title: 'Something is better than nothing.',
    text: 'Something can be used. Something can be tested. Something can provide value. Waiting for the "right" moment, or for your product to be "perfect" is never going to happen. Get something in front of your customers, then start iterating.'
  }, {
    title: 'Software is never finished.',
    text: 'Software development never ends, there is never a ship date with a launch where you never have to touch it again, just watch the machine print money. That\'s not going to happen. Software requires constand input, updates, testing, and refinement to succeed.'
  }, {
    title: 'Design is essential.',
    text: 'Everything has been designed. The question is whether it is designed well or by lack of implicite focus designed poorly. Good design goes beyond the visual, into the functional and emotional response.'
  }, {
    title: 'Process makes perfect.',
    text: 'Good products don\'t happen by accident. Discipline and planning are necessary for success. Products are not made by magic, but by thoughtful, time-tested processes.'
  }
];

const TeamPage = ({ transition }) => (
  <div>
    <Helmet title={`Team | ${config.siteTitle}`} />

    <PageHero
      title={"Team"}
      description={"Two heads are better than one. Three heads are better than two. n<sup>x</sup> heads, well that's best of all."} />

    <MainWrapper>

      <section className="bg-red pv5 white relative overflow-hidden" style={transition && transition.style}>
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

      <section className="pt5 pb5">
        <div className="row">
          <h2 className="tc red f3">Spacefriends</h2>
          <p className="tc">Spacetime is a bit different than other agencies. Instead of </p>
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
              <img src="/avatars/daniel-dixon-avatar.jpg" className="br-100 mw4 ma2" alt="Daniel Dixon" />
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

          <div className="tc mv5">
            <Link to="/contact" className="f6 link dim ba ph3 pv2 dib black">Want to become a Spacefriend?</Link>
          </div>
        </div>
      </section>

      <section className="">
        <ul className="list pl0">

          {mantras.map(mantra => (
            <li className="pv5" key={mantra.title}>
              <div className="row">
                <h3 className="db f1 mt0 mb4 tracked-light">{mantra.title}</h3>
                <p className="black-90 system-sans f3 db">{mantra.text}</p>
              </div>
            </li>
          ))}

        </ul>
      </section>

    </MainWrapper>
  </div>
)

export default TeamPage
