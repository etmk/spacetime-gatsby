import React from 'react'
import Link from 'gatsby-link'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import config from '../../../data/site-config'
import logo from '../../assets/images/logos/spacetime-icon.svg'

const Footer = () => (
  <footer className="site-footer bg-black white-70">
    <div className="row pv5">
      <Link
        to="/"
        title={config.siteTitle}
        className="dib">
        <img src={logo} alt={config.siteTitle} className="h2 dim" />
        <span className="clip">{config.siteTitle}</span>
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
            <li>
              <Link
                to="/talks/"
                title="Talks"
                className="f3 fw7 white hover-red mb3 dib">
                Talks
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mb5 w-25-ns">
        <h2 className="f3 fw7 white mt0 mb4">Get in touch</h2>

        <div className="mb4">
          <h5 className="f4 fw4 white-50 mt0 mb2">Give us a call</h5>
          <a href={`tel:${config.contactPhone}`} className="white hover-red fw5 f3">{config.contactPhone}</a>
        </div>

        <div className="mb4">
          <h5 className="f4 fw4 white-50 mt0 mb2">By electronic mail</h5>
          <a href={`mailto:${config.contactEmail}`} className="white hover-red fw5 f3">{config.contactEmail}</a>
        </div>

        <div className="mb4">
          <h5 className="f4 fw4 white-50 mt0 mb2">Socialize</h5>

          {config.socialLinks.map(e => (
            <OutboundLink
              key={e.label}
              href={e.url}
              target="_blank"
              rel="noopener"
              className={`white fw5 f3 mr2 mb2 dib hover-red`}>
              {e.label}
            </OutboundLink>
          ))}

        </div>
      </div>

      <div className="mb5 w-25-ns">
        <h2 className="f3 fw7 white mt0 mb4">Stop by the office</h2>
        <OutboundLink
          href={config.contactAddressMap}
          target="_blank"
          rel="noopener"
          className="f4 fw4 white-50 hover-red lh-title"
          dangerouslySetInnerHTML={{ __html: config.contactAddress }}
        />
      </div>

    </div>
    <div className="row pv3">
      <small className="f6 db lh-solid white-50">Copyright &copy; {new Date().getFullYear()}. {config.copyright}</small>
    </div>
  </footer>
)

export default Footer
