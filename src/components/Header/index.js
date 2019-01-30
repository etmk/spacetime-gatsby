import React from 'react'
import Headroom from 'react-headroom'
import { Link } from "gatsby"

import config from '../../../data/site-config'
import black_logo from '../../assets/images/logos/spacetime-icon-black.svg'
import white_logo from '../../assets/images/logos/spacetime-icon-white.svg'

const Header = () => (
  <Headroom
    className="site-header"
    disableInlineStyles={true}>
    <header className="site-header__content">
        <nav className="site-nav">

          <div className="site-header__logo">
            <Link
              to="/"
              title="Home"
              className="">
              <img src={black_logo} alt={config.siteTitle} className="black-logo" />
              <img src={white_logo} alt={config.siteTitle} className="white-logo" />
              <span className="">Spacetime</span>
            </Link>
          </div>

          <div className="nav-group nav-group__center">
            <Link
              to="/portfolio/"
              title="Portfolio"
              className="nav-group__link"
              activeClassName="active">
              Portfolio
            </Link>

            <Link
              to="/services/"
              title="Services"
              className="nav-group__link"
              activeClassName="active">
              Services
            </Link>

            <Link
              to="/team/"
              title="Team"
              className="nav-group__link"
              activeClassName="active">
              Team
            </Link>
          </div>

          <div className="nav-group nav-group__right">
            <Link
              to="/contact/"
              title="Contact"
              className="nav-group__link"
              activeClassName="active">
              Contact
            </Link>
          </div>

        </nav>
    </header>
  </Headroom>
)

export default Header
