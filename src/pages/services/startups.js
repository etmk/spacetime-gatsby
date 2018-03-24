import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../../data/site-config'

const StartupServicesPage = ({ transition }) => (
  <div style={transition && transition.style} className="service-page content-page">
    <Helmet title={`Services | ${config.siteTitle}`} />

    <section className="ph5-l pt6 pb5 bg-dark-red tc">
      <span className="f1 dib">🚀</span>
      <h1 className="f2-ns white tc mt0">Startups</h1>
      <p className="f4 tc white-80 ml-auto mr-auto mb0 measure-narrow">Startups need special attention and a healthy dose of ingenuity to grow toward success.</p>
    </section>

    <section className="ph3 ph5-m ph7-l pv4">

      <p>Roadmapping is paid discovery (which is a fancy way of saying it’s a way to get you and your soon-to-be client on the same wavelength about their project, goals, risks, and so on.)</p>

      <div className="flex nl5-ns nr5-ns">
        <a href="#" className="w-50 w-25-ns mr2 bg-washed-yellow ba b--black-10 black-80 fw6 dib pa3 tc no-underline br1">Concept Exploration</a>
        <a href="#" className="w-50 w-25-ns mr2 bg-washed-yellow ba b--black-10 black-80 fw6 dib pa3 tc no-underline br1">Minimum Viable Product</a>
        <a href="#" className="w-50 w-25-ns mr2 bg-washed-yellow ba b--black-10 black-80 fw6 dib pa3 tc no-underline br1">Resusitation</a>
        <a href="#" className="w-50 w-25-ns bg-washed-yellow ba b--black-10 black-80 fw6 dib pa3 tc no-underline br1">Choose Your Own Adventure</a>
      </div>

      <p>Our focus at Double Your Freelancing is to help freelancers master the business behind their business.</p>
      <p>We’re not biased toward any technology or industry. We know that you’re looking for actionable information that you can use and immediately apply to your business. And we know that you’re here because you love what you do and want to set yourself up for success.</p>

      <blockquote className="ba b--green tc mh0 mv4 ph2 pv4 br2 nl5 nr5">
        <p className="black f3 mt0 mb3">“Where there is no vision, there is no hope”</p>
        <footer>
          <cite>
            <a className="green ttu no-underline fs-normal fw6 f6 tracked"
               href="https://www.brainyquote.com/quotes/george_washington_carver_158551"
               target="_blank"
               rel="noopener">—George Washington Carver</a>
          </cite>
        </footer>
      </blockquote>

      <p>To get early access to all of our content, along with exclusive information and announcements that we only share with subscribers, you’ll want to join our free newsletter.</p>

    </section>

    <section className="ph3 ph5-m ph7-l pt4 pb5 gradient-light-blue">
      <h3 className="f1 dark-red tracked-tight">Proof of Concept</h3>
      <p>Usually this question is asked within a rapid fire Q&A round, so I don’t get a lot of time to really flesh out an answer. Most of the podcasters are looking for sound bytes, and not necessarily comprehensive guides.</p>
      <p>In this comprehensive guide I’m going to dedicate a few days of research and reflection instead of a few seconds, and   to give you a thorough framework for helping you building business that won’t fail.</p>
      <p>Who this guide is for: Full-time freelancers who want to shore up their business, those who have just begun (or are about to begin) running their freelancing business full-time, or anyone who’s thinking about it or wants to at least start doing side gigs.</p>
      <div className="flex justify-between">
        <div>
          <h5 className="ttu f5">⭐️ Best for</h5>
          <ul className="black-70 lh-copy">
            <li>Exploring a business problem</li>
            <li>Raising venture capital</li>
            <li>Full-time freelancers</li>
            <li>Full-time freelancers</li>
          </ul>
        </div>
        <div>
          <h5 className="ttu f5">🚫 Not for</h5>
          <ul className="black-70 lh-copy">
            <li>Exploring a business problem</li>
            <li>Raising venture capital</li>
            <li>Full-time freelancers</li>
            <li>Full-time freelancers</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="ph3 ph5-m ph7-l pt4 pb5 gradient-light-blue">
      <h3 className="f1 dark-red tracked-tight">Minimum Viable Product</h3>
      <p>Usually this question is asked within a rapid fire Q&A round, so I don’t get a lot of time to really flesh out an answer. Most of the podcasters are looking for sound bytes, and not necessarily comprehensive guides.</p>
      <p>In this comprehensive guide I’m going to dedicate a few days of research and reflection instead of a few seconds, and   to give you a thorough framework for helping you building business that won’t fail.</p>
      <p>Who this guide is for: Full-time freelancers who want to shore up their business, those who have just begun (or are about to begin) running their freelancing business full-time, or anyone who’s thinking about it or wants to at least start doing side gigs.</p>
      <div className="flex justify-between">
        <div>
          <h5 className="ttu f5">⭐️ Best for</h5>
          <ul className="black-70 lh-copy">
            <li>Exploring a business problem</li>
            <li>Raising venture capital</li>
            <li>Full-time freelancers</li>
            <li>Full-time freelancers</li>
          </ul>
        </div>
        <div>
          <h5 className="ttu f5">🚫 Not for</h5>
          <ul className="black-70 lh-copy">
            <li>Exploring a business problem</li>
            <li>Raising venture capital</li>
            <li>Full-time freelancers</li>
            <li>Full-time freelancers</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
)

export default StartupServicesPage
