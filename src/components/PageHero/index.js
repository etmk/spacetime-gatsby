import React from 'react'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import bg from '../../assets/images/backgrounds/spacetime-background.jpg'

class PageHero extends React.Component {
  render() {
    return (
      <section className="ph5-l pt6 pb5 bg-dark-purple relative overflow-hidden">
        <div className="relative z-1">
          <h1 className="f1-ns white tc mt0">{this.props.title}</h1>
          <p className="f5 white-70 tc ml-auto mr-auto mb0 measure-narrow">{this.props.description}</p>
        </div>
        <img src={bg} className="w-100 absolute top-0 left-0 z-0" alt="Spacetime background image" />
      </section>
    );
  }
}

export default PageHero
