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
    return (
      <div>

        <section id="PageHero" className="page-hero">

          <div className="page-hero__content mt6-ns row">
            <h1 className="sans-serif f1-ns white mt0 mw7 pr6-l">Simple things should be simple, complex things should be possible.</h1>
            <p className="f5 green mb0">—Alan Kay</p>
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
