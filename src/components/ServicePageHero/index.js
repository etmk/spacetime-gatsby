import React from 'react'

class ServicePageHero extends React.Component {
  render() {
    return (

      <section className={`${this.props.textColor} ph5-l pt6 pb5 tc`} style={{backgroundColor: `${this.props.bgColor}`}}>

        {this.props.icon.length > 0 ? (
          <span className="dib f1">{this.props.icon}</span>
        ) :
          <img src={this.props.iconPath} alt="" className="" />
        }

        <h1 className="f2-ns tc mt0">{this.props.title}</h1>
        <p className="f4 tc color-inherit o-80 ml-auto mr-auto mb0 measure-narrow">{this.props.description}</p>
      </section>

    );
  }
}

export default ServicePageHero
