import React from 'react'
import Link from 'gatsby-link'

import logo from '../../assets/images/logos/logo-06.svg'

const Header = () => (
  <header>
    <nav className="flex justify-between-ns ph5-l fixed w-100 bg-black-10">

      <Link
        to="/"
        title="Home"
        className="self-center dim">
        <img src={logo} alt="Spacetime" />
        <span className="clip link white dib mr3">Spacetime</span>
      </Link>

      <div>
        <Link
          to="portfolio"
          title="Portfolio"
          className="link dim white dib b ttu f7 ph3 pv4 tracked">
          Portfolio
        </Link>

        <Link
          to="services"
          title="Services"
          className="link dim white dib b ttu f7 ph3 pv4 tracked">
          Services
        </Link>

        <Link
          to="team"
          title="Team"
          className="link dim white dib b ttu f7 ph3 pv4 tracked">
          Team
        </Link>
      </div>

      <div>
        <Link
          to="blog"
          title="Blog"
          className="link dim white dib b ttu f7 ph3 pv4 tracked">
          Blog
        </Link>

        <Link
          to="contact"
          title="Contact"
          className="link dim white dib b ttu f7 ph3 pv4 tracked">
          Contact
        </Link>
      </div>
    </nav>
  </header>
)

export default Header
