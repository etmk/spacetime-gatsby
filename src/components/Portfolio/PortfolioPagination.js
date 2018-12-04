import React from 'react'
import Link from 'gatsby-link'

class PortfolioPagination extends React.Component {
  render() {
    return (
      <section className="pv5 bg-washed-yellow bt b--light-gray">
        <div className="row mw8">
          <div className="flex justify-center">
            <h1 className="f3 black-80 dib ma0">Have a project for us?</h1>
            <Link
              to="/contact"
              className="f7 fw6 link dim ph3 pv3 dib white bg-black-80 mh3">
              Get started now
            </Link>
          </div>

          <hr className="bt b--black-10 mh0 mv4" />

          <div className="flex justify-between">
            <div className="flex">
              <div className="br-100 h3 w3 dib bg-black tc">
                <img src="/client-logos/dude-perfect-icon.svg" alt="" className="" />
              </div>
              <div>
                <h3 className="black-80">StudioHop</h3>
                <p className="sans-serif black-50 fw5 measure-narrow">We rebuilt StudioHop's platform and website in a way to prepare for continued growth and scale in the years to come.</p>
                <Link
                  to="/portfolio/studiohop"
                  className="f7 tracked ttu fw7 black-70 no-underline pv3 dim">Read the case study →</Link>
              </div>
            </div>
            <div className="flex">
              <div className="br-100 h3 w3 dib bg-black tc">
                <img src="/icons/wordpress-logo.svg" alt="" className="" />
              </div>
              <div>
                <h3>GKPN Connect</h3>
                <p className="sans-serif black-50 fw5 measure-narrow">We rebuilt StudioHop's platform and website in a way to prepare for continued growth and scale in the years to come.</p>
                <Link
                  to="/portfolio/studiohop"
                  className="f7 tracked ttu fw7 black-70 no-underline pv3 dim">Read the case study →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PortfolioPagination
