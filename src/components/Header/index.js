import React from 'react'
import Link from 'gatsby-link'

import logo from '../../assets/images/logos/logo-06.svg'

const Header = () => (
  <header className="site-header">
    <div className="row">
      <nav className="site-nav">

        <Link
          to="/"
          title="Home"
          className="site-header__logo">
          <img src={logo} alt="Spacetime" />
          <span className="clip">Spacetime</span>
        </Link>

        <div className="nav-group">
          <Link
            to="portfolio"
            title="Portfolio"
            className="nav-group__item">
            Portfolio
          </Link>

          <Link
            to="services"
            title="Services"
            className="nav-group__item">
            Services
          </Link>

          <Link
            to="team"
            title="Team"
            className="nav-group__item">
            Team
          </Link>
        </div>

        <div className="nav-group">
          <Link
            to="blog"
            title="Blog"
            className="nav-group__item">
            Blog
          </Link>

          <Link
            to="contact"
            title="Contact"
            className="nav-group__item">
            Contact
          </Link>
        </div>

      </nav>
    </div>
  </header>
)

export default Header
