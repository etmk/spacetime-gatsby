import React from 'react'
import Link from 'gatsby-link'

import logo from '../../assets/images/logos/logo-06.svg'

const Footer = () => (
  <footer className="pv6 white-70 bg-black">
    <div className="row">
      <a href="mailto:hey@heyspacetime.com" className="link b f3 f2-ns dim white lh-solid">hey@heyspacetime.com</a>
      <p className="f6 db lh-solid white-50">&copy; {new Date().getFullYear()} Spacetime, LLC</p>
      <div className="mt5">
        <a
          href="/language/"
          title="Language"
          className="f6 dib pr2 white dim">
            Language</a>

        <a
          href="/terms/"
          title="Terms"
          className="f6 dib ph2 white dim">
            Terms of Use</a>

        <a
          href="/privacy/"
          title="Privacy"
          className="f6 dib pl2 white dim">
            Privacy</a>

      </div>
    </div>
  </footer>
)

export default Footer
