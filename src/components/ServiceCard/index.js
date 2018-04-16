import React from 'react'
import Link from 'gatsby-link'

class ServiceCard extends React.Component {

  render() {
    return (
      <div className="fl w-100 w-50-m w-25-l pa2">
        <Link
          to={"services/" + this.props.name}
          title={this.props.title}
          className="tc bg-black br2 db no-underline aspect-ratio aspect-ratio--5x7 grow overflow-hidden"
          style={{backgroundColor: `${this.props.bgColor}`}}
        >
          <div className="aspect-ratio--object ph4 pv5">

            {this.props.icon.length > 0 ? (
              <span className="dib f1">{this.props.icon}</span>
            ) :
              <img src={this.props.iconPath} alt="" className="" />
            }

            <h2 className="f3 black-80">{this.props.title}</h2>
            <p className="sans-serif f6 black-60 ml-auto mr-auto mb0 measure lh-title">{this.props.description}</p>
            <span className="black-60 ttu f7 fw6 tracked mt5 dib">Read more →</span>
          </div>

        </Link>
      </div>
    );
  }
}

export default ServiceCard
