import React from 'react'

class ServicePageHero extends React.Component {
  render() {
    return (

      <section className={`${this.props.textColor} pt7 pb5`} style={{backgroundColor: `${this.props.bgColor}`}}>

        <div className="row">

          <h2 className="f2 dib mv0">
            {this.props.title}
            {this.props.icon.length > 0 ? (
              <span className="dib f2 ml3">{this.props.icon}</span>
            ) :
              <img src={this.props.iconPath} alt="" className="ml3" />
            }
          </h2>

          <h1
            className="f4 fw4 mv4 lh-copy color-inherit o-80 measure-narrow"
            dangerouslySetInnerHTML={{__html: this.props.description}}
          />

        </div>
      </section>

    );
  }
}

export default ServicePageHero