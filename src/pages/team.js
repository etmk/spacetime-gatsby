import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'
import PageHero from '../components/PageHero'

const TeamPage = ({ transition }) => (
  <div>
    <Helmet title={`Team | ${config.siteTitle}`} />

    <PageHero
      title={"Team"}
      description={"Two heads are better than one. Three heads are better than two. n<sup>x</sup> heads, well that's best of all."} />

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

    <section className="pv5">
      <div className="row">
        <h2 className="tc red f3">Spacefriends</h2>
        <p>Spacetime is a bit different than other agencies. Instead of </p>
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
      <ul className="list pl0">
        <li className="pa3 pa4-ns bb b--black-10">
        <b className="db f3 mb1">
        alignment
        </b>
        <span className="f5 db lh-copy measure">
        The positioning of text within the page margins. Alignment can be flush left, flush right, justified, or centered. Flush left and flush right are sometimes referred to as left justified and right justified.
        </span>
        </li>
        <li className="pa3 pa4-ns bb b--black-10">
        <b className="db f3 mb1">
        ascender
        </b>
        <span className="f5 db lh-copy measure">
        The part of lowercase letters (such as k, b, and d) that ascends above the x-height of the other lowercase letters in a face.
        </span>
        </li>
        <li className="pa3 pa4-ns bb b--black-10">
        <b className="db f3 mb1">
        baseline
        </b>
        <span className="f5 db lh-copy measure">
        The imaginary line on which the majority of the characters in a typeface rest.
        </span>
        </li>
        <li className="pa3 pa4-ns bb b--black-10">
        <b className="db f3 mb1">
        body text
        </b>
        <span className="f5 db lh-copy measure">
        The paragraphs in a document that make up the bulk of its content. The body text should be set in an appropriate and easy-to-read face, typically at 10- or 12-point size.
        </span>
        </li>
        <li className="pa3 pa4-ns bb b--black-10">
        <b className="db f3 mb1">
        boldface
        </b>
        <span className="f5 db lh-copy measure">
        A typeface that has been enhanced by rendering it in darker, thicker strokes so that it will stand out on the page. Headlines that need emphasis should be boldface. Italics are preferable for emphasis in body text.
        </span>
        </li>
        <li className="pa3 pa4-ns bb b--black-10">
        <b className="db f3 mb1">
        bullet
        </b>
        <span className="f5 db lh-copy measure">
        A dot or other special character placed at the left of items in a list to show that they are individual, but related, points.
        </span>
        </li>
        <li className="pa3 pa4-ns bb b--black-10">
        <b className="db f3 mb1">
        cap height
        </b>
        <span className="f5 db lh-copy measure">
        The height from the baseline to the top of the uppercase letters in a font. This may or may not be the same as the height of ascenders. Cap height is used in some systems to measure the type size.
        </span>
        </li>
        <li className="pa3 pa4-ns">
        <b className="db f3 mb1">
        centered
        </b>
        <span className="f5 db lh-copy measure">
        Text placed at an equal distance from the left and right margins. Headlines are often centered. It is generally not good to mix centered text with flush left or flush right text.
        </span>
        </li>
        </ul>
    </section>

  </div>
)

export default TeamPage
