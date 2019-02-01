import React from 'react'
import Headroom from 'react-headroom'
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
            <AniLink
              cover
              bg="#f03f47"
              to="/"
              title="Home"
              className="">
              <img src={black_logo} alt={config.siteTitle} className="black-logo" />
              <img src={white_logo} alt={config.siteTitle} className="white-logo" />
              <span className="">Spacetime</span>
            </AniLink>
          </div>

          <div className="nav-group nav-group__center">
            <AniLink
              cover
              bg="#f03f47"
              to="/portfolio/"
              title="Portfolio"
              className="nav-group__link"
              activeClassName="active">
              Portfolio
            </AniLink>

            <AniLink
              cover
              bg="#f03f47"
              to="/services/"
              title="Services"
              className="nav-group__link"
              activeClassName="active">
              Services
            </AniLink>

            <AniLink
              cover
              bg="#f03f47"
              to="/team/"
              title="Team"
              className="nav-group__link"
              activeClassName="active">
              Team
            </AniLink>
          </div>

          <div className="nav-group nav-group__right">
            <AniLink
              cover
              bg="#f03f47"
              to="/contact/"
              title="Contact"
              className="nav-group__link"
              activeClassName="active">
              Contact
            </AniLink>
          </div>

        </nav>
    </header>
  </Headroom>
)

export default Header
