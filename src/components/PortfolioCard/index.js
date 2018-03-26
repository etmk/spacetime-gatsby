import React from 'react'
import Link from 'gatsby-link'
import { withPrefix } from 'gatsby-link'

class PortfolioCard extends React.Component {

  render() {
    return (
      <div style={{backgroundColor: `${this.props.bgColor}`}} className="pa5 bw3 b--solid b--white relative overflow-hidden">
        <div className="row relative z-1">
          <img src={'client-logos/' + this.props.name + '-logo.png'} alt={this.props.name} className="" />
          <h3 className="f1 mv3">{this.props.title}</h3>
          <p className="sans-serif fw6 black-60 measure-narrow">{this.props.description}</p>
          <Link to={"/portfolio/" + this.props.name}
            className="f5 fw5 link br2 ph4 pv3 mb2 dib white bg-dark-purple dim">
            Read the case study →
          </Link>
        </div>
        <img src={'client-bgs/' + this.props.name + '-card-bg.jpg'} alt="" className="absolute top-0 right-0 z-0" />
      </div>
    );
  }
}

export default PortfolioCard;
