import React from 'react'

class ServicePageHero extends React.Component {
  render() {
    return (

      <section className={`${this.props.textColor} pt7 pb5`} style={{backgroundColor: `${this.props.bgColor}`}}>

        <div className="row">

          <h1 className="f-headline dib mv0">
            {this.props.title}
            {this.props.icon.length > 0 ? (
              <span className="dib f1 ml3">{this.props.icon}</span>
            ) :
              <img src={this.props.iconPath} alt="" className="ml3" />
            }
          </h1>

          <p
            className="f3 color-inherit o-80 measure-narrow"
            dangerouslySetInnerHTML={{__html: this.props.description}}
          />

        </div>
      </section>

    );
  }
}

export default ServicePageHero
