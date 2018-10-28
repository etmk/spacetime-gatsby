import React from 'react'
import Link  from 'gatsby-link'

class HomeWelcome extends React.Component {

  render() {
    return (
      <section className="relative overflow-hidden">
            <div className="bg-near-white pv6">
              <div className="row flex-ns flex-wrap">
                <div className="ph3-l mb4 w-50-l">
                  <Link to="/services/startups/">
                    <h3 className="f3 f2-l sans-serif ma0 dib black hover-red">Early Stage Startups &#8667;</h3>
                  </Link>
                  <p className="measure-narrow black-60">We Help Founders Develop Their Startup From Back-of-the-Napkin Idea&nbsp;to $1&nbsp;Million.</p>
                </div>
                <div className="ph3-l mb4 w-50-l">
                <Link to="/services/websites/">
                  <h3 className="f3 f2-l sans-serif ma0 dib black hover-green">Websites &#8667;</h3>
                </Link>
                  <p className="measure-narrow black-60">Websites provide a first touch opportunity and prolonged relationship with your customer.</p>
                </div>
                <div className="ph3-l mb4 w-50-l">
                  <Link to="/services/strategy-retainer/">
                    <h3 className="f3 f2-l sans-serif ma0 dib black hover-light-purple">Strategy Retainer &#8667;</h3>
                  </Link>
                  <p className="measure-narrow black-60">We provide the strategic and tactical expertise you need to catalyze your&nbsp;business.</p>
                </div>
                <div className="ph3-l mb4 w-50-l">
                  <Link to="/services/design/">
                    <h3 className="f3 f2-l sans-serif ma0 dib black hover-dark-purple">Design Services &#8667;</h3>
                  </Link>
                  <p className="measure-narrow black-60">Design is the communication of the business, brand, identity, and&nbsp;product.</p>
                </div>
              </div>
            </div>

          </section>
    );
  }
}

export default HomeWelcome
