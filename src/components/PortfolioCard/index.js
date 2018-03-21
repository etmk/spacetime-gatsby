import React from 'react';
import Link from 'gatsby-link';

import logoPath from '../../assets/images/clients/client-logos/dude-perfect-logo.png'

class PortfolioCard extends React.Component {

  render() {
    return (
      <div style={{backgroundColor: `${this.props.bgColor}`}} className="pa5 bw3 b--solid b--white">
        <img src={logoPath} alt="boohoo" className="bw3 b--solid b--purple"/>
        <h3 className="f1 mv3">{this.props.title}</h3>
        <p className="sans-serif fw6 black-60 measure-narrow">{this.props.description}</p>
        <Link to="/portfolio/dude-perfect"
          className="f5 fw5 link br2 ph4 pv3 mb2 dib white bg-dark-purple hover-bg-mid-gray">
          Read the case study →
        </Link>
      </div>
    );
  }
}

export default PortfolioCard;
