import React from 'react'
import Headroom from 'react-headroom'
import Link from 'gatsby-link'

import logo from '../../assets/images/logos/spacetime-icon.svg'

const Header = () => (
  <Headroom
    className="site-header"
    disableInlineStyles={true}>
    <header className="site-header__content">
    <div className="row">
      <nav className="site-nav">

        <Link
          to="/"
          title="Home"
          className="site-header__logo">
          <img src={logo} alt="Spacetime" />
          <span className="">Spacetime</span>
        </Link>

        <div className="nav-group">
          <Link
            to="/portfolio/"
            title="Portfolio"
            className="nav-group__link">
            Portfolio
          </Link>

          <Link
            to="/services/"
            title="Services"
            className="nav-group__link">
            Services
          </Link>

          <Link
            to="/team/"
            title="Team"
            className="nav-group__link">
            Team
          </Link>
        </div>

        <div className="nav-group">
          {/* <Link
            to="blog"
            title="Blog"
            className="nav-group__link">
            Blog
          </Link> */}

          <Link
            to="/contact/"
            title="Contact"
            className="nav-group__link">
            Contact
          </Link>
        </div>

      </nav>
    </div>
    </header>
  </Headroom>
)

export default Header
