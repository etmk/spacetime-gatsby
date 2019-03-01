import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Emoji from 'a11y-react-emoji'

import config from '../../../data/site-config'
import logo from '../../assets/images/logos/spacetime-icon.svg'

const Footer = () => (
  <footer className="site-footer bg-black">
    <div className="row pt6 pb5 tc">
      <AniLink
        cover
        bg="#f03f47"
        to="/"
        title={config.siteTitle}
        className="transition">
          <img src={logo} alt={config.siteTitle} className="" /><br />
          <span className="white mt2 dib f3 fw6">Spacetime</span>
      </AniLink>
    </div>

    <div className="row pv5 flex-l justify-between-l bt bb b--white-20">

      <div className="w-33-l tc mb4 mb0-l">
        <h5 className="f4 fw4 gray mt0 mb2">Give us a call <Emoji symbol="☎️" label="phone" className="ml2"/></h5>
        <a href={`tel:${config.contactPhone}`} className="white hover-red fw5 f3">{config.contactPhone}</a>
      </div>

      <div className="w-33-l tc mb4 mb0-l">
        <h5 className="f4 fw4 gray mt0 mb2">By electronic mail <Emoji symbol="📬" label="mail" className="ml2"/></h5>
        <a href={`mailto:${config.contactEmail}`} className="white hover-red fw5 f3">{config.contactEmail}</a>
      </div>

      <div className="w-33-l tc mb4 mb0-l">
        <h5 className="f4 fw4 gray mt0 mb2">Stop by the office <Emoji symbol="🗺" label="location" className="ml2"/></h5>
        <OutboundLink
          href={config.contactAddressMap}
          target="_blank"
          rel="noopener"
          className="white hover-red fw5 f3"
          dangerouslySetInnerHTML={{ __html: config.contactAddress }}
        />
      </div>

    </div>

    <div className="pv5 tc">
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

    <div className="row pv4">
      <small className="f6 db lh-solid white-50 tc">Copyright &copy; {new Date().getFullYear()}. {config.copyright}</small>
    </div>

  </footer>
)

export default Footer
