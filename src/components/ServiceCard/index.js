import React from 'react'
import Link from 'gatsby-link'

class ServiceCard extends React.Component {

  render() {
    return (
      <div className="fl w-100 w-50-m w-25-l pa2">
        <Link
          to={"services/" + this.props.name}
          title={this.props.title}
          className={`${this.props.textColor} tc bg-black br2 db no-underline aspect-ratio-ns aspect-ratio--5x7-ns grow overflow-hidden-ns`}
          style={{backgroundColor: `${this.props.bgColor}`}}
        >
          <div className="pa4 aspect-ratio--object-ns flex-ns flex-column-ns justify-around-ns">

            {this.props.icon.length > 0 ? (
              <span className="dib f1">{this.props.icon}</span>
            ) :
              <img src={this.props.iconPath} alt="" className="" />
            }

            <h2 className="f3 o-90">{this.props.title}</h2>
            <p className="sans-serif f6 fw5 o-70 color-inherit ml-auto mr-auto mb0 measure lh-title">{this.props.description}</p>
            <span className="o-60 ttu f7 fw6 tracked mt4 dib">Read more →</span>
          </div>

        </Link>
      </div>
    );
  }
}

export default ServiceCard
