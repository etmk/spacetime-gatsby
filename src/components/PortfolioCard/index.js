import React from 'react'
import Link from 'gatsby-link'
import { withPrefix } from 'gatsby-link'

// import logoPath from 'dude-perfect'

class PortfolioCard extends React.Component {

  render() {
    return (
      <div style={{backgroundColor: `${this.props.bgColor}`}} className="pa5 bw3 b--solid b--white">
        <div className="row">
          <img src={'client-logos/' + this.props.name + '-logo.png'} alt={this.props.name} className="" />
          <h3 className="f1 mv3">{this.props.title}</h3>
          <p className="sans-serif fw6 black-60 measure-narrow">{this.props.description}</p>
          <Link to={"/portfolio/" + this.props.name}
            className="f5 fw5 link br2 ph4 pv3 mb2 dib white bg-dark-purple hover-bg-mid-gray">
            Read the case study →
          </Link>
        </div>
      </div>
    );
  }
}

export default PortfolioCard;
