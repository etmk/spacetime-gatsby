import React from 'react'

class ServicePageHero extends React.Component {
  render() {
    return (

      <section id="PageHero" className="page-hero" style={{backgroundColor: `${this.props.bgColor}`, color: `${this.props.textColor}`}}>

        <div className="page-hero__content row">
          {this.props.icon.length > 0 ? (
            <span className="dib f2">{this.props.icon}</span>
          ) :
            <img src={this.props.iconPath} alt="" className="" />
          }
          <h1 className="t-headline">
            {this.props.title}&mdash;
            <span className="t-headline__alt" dangerouslySetInnerHTML={{__html: this.props.description}} />
          </h1>
        </div>

      </section>

    );
  }
}

export default ServicePageHero
