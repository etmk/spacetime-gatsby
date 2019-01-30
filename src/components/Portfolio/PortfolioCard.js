import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

class PortfolioCard extends React.Component {

  render() {
    return (
      <div
        style={{
          backgroundColor: `${this.props.bgColor}`,
          backgroundSize: `cover`,
          backgroundImage: `url('/client-bgs/${this.props.name}-card-bg.jpg')`,
          backgroundPosition: `top right`,
          backgroundRepeat: `no-repeat`
        }}
        className={`flex-auto-ns pa3 pa5-l relative overflow-hidden ${this.props.uniqueClass}`}
      >
        <div className="mw-row ml-auto mr-auto">
          <div className="relative z-1">
            <img src={this.props.logoPath} alt={this.props.title} className="" />

            {this.props.textColor === 'white' ? (
              <div>
                <h3 className="sans-serif f3 f2-ns mv3 white-90">{this.props.title}</h3>
                <p className="fw4 white-70 measure-narrow mb3 mb5-ns">{this.props.description}</p>
                <OutboundLink href={this.props.urlLink}
                  target="_blank"
                  className="f5 fw5 link ph4 pv3 mb2 dib black-80 bg-white dim">
                  Visit {this.props.title} →
                </OutboundLink>
              </div>
            ) :
              <div>
                <h3 className="sans-serif f3 f2-ns mv3 black-80">{this.props.title}</h3>
                <p className="fw4 black-60 measure-narrow mb3 mb5-ns">{this.props.description}</p>
                <OutboundLink href={this.props.urlLink}
                  target="_blank"
                  className="f5 fw5 link ph4 pv3 mb2 dib white bg-black-80 dim">
                  Visit {this.props.title} →
                </OutboundLink>
              </div>
            }

          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioCard;
