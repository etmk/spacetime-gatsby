import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import config from '../../data/site-config'
import bg from '../assets/images/backgrounds/spacetime-background.jpg'
import MainWrapper from '../layouts/MainWrapper/MainWrapper'
import StartupDream from '../components/HomeFeatures/StartupDream'
import HomeWelcome from '../components/HomeFeatures/HomeWelcome'
import HomeTestimonials from '../components/HomeFeatures/HomeTestimonials'

class IndexPage extends React.Component {
  render() {
    const { transition } = this.props;
    return (
      <div className="bg-dark-purple">

        <section id="PageHero" className="page-hero bg-deep-purple">

          <div className="page-hero__content row" style={transition && transition.style}>
            <h1 className="page-hero__headline white">We're in the business of design</h1>
            <p className="page-hero__text white-80">&hellip;and the design of business. We help clients build effective brands and businesses through design, technology, and customer experience.</p>
          </div>
          <img src={bg} className="page-hero__image scaleIn" alt="Spacetime background image" />

        </section>

        <MainWrapper>

          <HomeWelcome />

          <StartupDream />

          <HomeTestimonials />

        </MainWrapper>
      </div>
    );
  }
}

export default IndexPage
