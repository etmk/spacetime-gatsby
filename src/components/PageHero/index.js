import React from 'react'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import bg from '../../assets/images/backgrounds/spacetime-background.jpg'

class PageHero extends React.Component {
  render() {
    return (
      <section id="PageHero" className="page-hero">

        <div className="page-hero__content">
          <h1 className="f1-ns white tc mt0">{this.props.title}</h1>
          <p
            className="f5 white-70 tc ml-auto mr-auto mb0 measure-narrow"
            dangerouslySetInnerHTML={{__html: this.props.description}}
          />
        </div>
        <img src={bg} className="page-hero__image scaleIn" alt="Spacetime background image" />

      </section>
    );
  }
}

export default PageHero
