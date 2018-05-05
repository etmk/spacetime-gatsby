import React from 'react'
import Link from 'gatsby-link'

import logo from '../../assets/images/logos/spacetime-icon.svg'

const Footer = () => (
  <footer className="site-footer bg-black white-70">
    <div className="row pv5">
      <Link
        to="/"
        title="Spacetime"
        className="dib">
        <img src={logo} alt="Spacetime" className="h2 dim" />
        <span className="clip">Spacetime</span>
      </Link>
    </div>
    <div className="row pv3 flex-ns justify-between-ns">
      <div className="mb5 w-50-ns">
        <nav className="">
          <ul className="list pa0 ma0 white">
            <li>
              <Link
                to="/"
                title="Home"
                className="f3 fw7 white hover-red mb3 dib">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio/"
                title="Portfolio"
                className="f3 fw7 white hover-red mb3 dib">
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/services/"
                title="Services"
                className="f3 fw7 white hover-red mb3 dib">
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/team/"
                title="Team"
                className="f3 fw7 white hover-red mb3 dib">
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/contact/"
                title="Contact"
                className="f3 fw7 white hover-red mb3 dib">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mb5 w-25-ns">
        <h2 className="f3 fw7 white mt0 mb4">Get in touch</h2>
        <div className="mb4">
          <h5 className="f4 fw4 white-50 mt0 mb2">Give us a call</h5>
          <a href="tel:469-270-1500" className="white hover-red fw5 f3">(469) 270-1500</a>
        </div>
        <div className="mb4">
          <h5 className="f4 fw4 white-50 mt0 mb2">By electronic mail</h5>
          <a href="mailto:hey@heyspacetime.com" className="white hover-red fw5 f3">hey@heyspacetime.com</a>
        </div>
        <div className="mb4">
          <h5 className="f4 fw4 white-50 mt0 mb2">Socialize</h5>
          <a href="" target="_blank" className="white hover-dark-blue fw5 f3 mr2 mb2 dib">Facebook</a>
          <a href="" target="_blank" className="white hover-blue fw5 f3 mr2 mb2 dib">Twitter</a>
          <a href="" target="_blank" className="white hover-green fw5 f3 mr2 mb2 dib">Github</a><br />
          <a href="" target="_blank" className="white hover-light-blue fw5 f3 mr2 mb2 dib">LinkedIn</a>
          <a href="" target="_blank" className="white hover-pink fw5 f3 mr2 mb2 dib">Dribbble</a>
        </div>
      </div>
      <div className="mb5 w-25-ns">
        <h2 className="f3 fw7 white mt0 mb4">Stop by the office</h2>
        <a href="https://goo.gl/maps/mLQwMaQhnao" target="_blank" className="f4 fw4 white-50 hover-red lh-title">5830 Granite Parkway<br />#100-243<br />Plano, Texas 75024</a>
      </div>

    </div>
    <div className="row pv3">
      <small className="f6 db lh-solid white-50">&copy; {new Date().getFullYear()} Spacetime, LLC</small>
    </div>
  </footer>
)

export default Footer
