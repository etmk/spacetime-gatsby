import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div>
    <nav className="db dt-l w-100 border-box pa3 ph5-l bg-black-90">

      <Link
        to="/"
        title="Home"
        className="db dtc-l v-mid mid-gray dim link w-100 w-25-l tc tl-l mb2 mb0-l">
        <img
          src="http://tachyons.io/img/logo.jpg"
          className="dib w2 h2 br-100 mr3"
          alt="Spacetime"/>
        <span className="link white dib mr3">Spacetime</span>
      </Link>

      <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">

        <Link
          to="/"
          title="Home"
          className="link dim white dib mr3">
          Home
        </Link>

        <Link
          to="portfolio"
          title="Work"
          className="link dim white dib mr3">
          Work
        </Link>

        <Link
          to="services"
          title="Services"
          className="link dim white dib mr3">
          Services
        </Link>

        <Link
          to="team"
          title="Team"
          className="link dim white dib mr3">
          Team
        </Link>

        <Link
          to="blog"
          title="Blog"
          className="link dim white dib mr3">
          Blog
        </Link>

        <Link
          to="contact"
          title="Contact"
          className="link dim white dib mr3">
          Contact
        </Link>

      </div>
    </nav>
  </div>
)

export default Header
