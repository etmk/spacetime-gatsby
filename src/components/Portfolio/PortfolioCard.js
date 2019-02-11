import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

class PortfolioCard extends React.Component {

  render() {
    return (
      <OutboundLink
        href={`${this.props.urlLink}`}
        style={{
          backgroundColor: `${this.props.bgColor}`
        }}
        className="PortfolioCard grow"
        target="_blank"
      >
        {this.props.children}
      </OutboundLink>
    );
  }
}

export default PortfolioCard;
