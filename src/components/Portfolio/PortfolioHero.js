import React from 'react'

class PortfolioHero extends React.Component {
  render() {
    return (
      <section className="pt7 pb5 bg-black-90 relative overflow-hidden"
        style={{backgroundColor: `${this.props.bgColor}`}}>
        <div className="row mw8 relative z-1">
          <img src={this.props.logoPath} alt={this.props.title} className="" />
          <h1 className="f2-ns white">{this.props.title}</h1>
          <hr className="bw2 b--white mw2 mh0 mv4" />
          <p className="white f1 fw4 sans-serif lh-title mv0 measure">{this.props.tagline}</p>
        </div>
        <img src="/client-bgs/dude-perfect-bg.jpg" className="w-100 absolute top-0 left-0 z-0" alt="Spacetime background image" />
      </section>
    );
  }
}

export default PortfolioHero
