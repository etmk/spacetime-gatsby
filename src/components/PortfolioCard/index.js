import React from 'react'
import Link from 'gatsby-link'
import { withPrefix } from 'gatsby-link'

class PortfolioCard extends React.Component {

  render() {
    return (
      <div style={{backgroundColor: `${this.props.bgColor}`}} className="flex-auto-ns pa3 pa5-l bw3 b--solid b--white relative overflow-hidden">
        <div className="mw-row ml-auto mr-auto">
          <div className="relative z-1">
            <img src={this.props.logoPath} alt={this.props.title} className="" />

            {this.props.textColor === 'white' ? (
              <div>
                <h3 className="f3 f2-ns mv3 white-90">{this.props.title}</h3>
                <p className="sans-serif fw5 white-70 measure-narrow mb3 mb5-ns">{this.props.description}</p>
                <a href={this.props.urlLink}
                  target="_blank" rel="nofollow"
                  className="f5 fw5 link br2 ph4 pv3 mb2 dib black-80 bg-white dim">
                  Visit {this.props.title} →
                </a>
              </div>
            ) :
              <div>
                <h3 className="f3 f2-ns mv3 black-80">{this.props.title}</h3>
                <p className="sans-serif fw5 black-60 measure-narrow mb3 mb5-ns">{this.props.description}</p>
                <a href={this.props.urlLink}
                  target="_blank" rel="nofollow"
                  className="f5 fw5 link br2 ph4 pv3 mb2 dib white bg-dark-purple dim">
                  Visit {this.props.title} →
                </a>
              </div>
            }

          </div>
        </div>
        <img src={'/client-bgs/' + this.props.name + '-card-bg.jpg'} alt="" className="absolute top-0 right-0 w-100 z-0" />
      </div>
    );
  }
}

export default PortfolioCard;
