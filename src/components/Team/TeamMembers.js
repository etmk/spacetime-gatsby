import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import team from '../../../data/team-data.json'

class TeamMembers extends React.Component {

  render() {
    return (

      <div className="mv6">

        <h3 className="f3 black-80 mb2-m">Spacefriends</h3>
        <div className="cf">
          <p className="f4 o-50 fl-l w-50-l mv3">We&rsquo;re not like other agencies. We focus on building the right team on a per-project basis. So, when you work with us you get a team of experts qualified for your project, instead of a retrofitted team lacking the expertise you need.</p>

          <div className="fr-l w-40-l custom-unordered-list mv3 pa0 pl2-ns  black-80 f6 lh-copy">
            <p className="mt0"><span style={{marginLeft: "-.4em"}}>"</span>Find a group of people who challenge and inspire you, spend a lot of time with them, and it will change your life forever."<br /><span className="ttu fw6 f7 mt3 dib">&mdash;Amy Poehler</span></p>
          </div>
        </div>

        <ul className="list pa0 flex flex-wrap justify-evenly justify-start-l mv6">
          {team.people.map(member => (
            <li className="tc w-50 w-auto-ns mr4-ns mr5-l mb4" key={member.name}>
              <img src={member.avatar} className="br-100 mw4 ma2" alt={member.name} />
              <h4 className="f5 fw7 mv1">{member.name}</h4>
              <p className="f7 black-60 mt0">{member.role}</p>
            </li>
          ))}
        </ul>

        <ul className="list pa0 flex flex-wrap justify-between justify-start-l mv6">
          {team.studios.map(studio => (
            <li className="tc w-50 w-auto-ns mr4-ns mr5-l mb4" key={studio.name}>
            <OutboundLink href={studio.url}
              target="_blank"
              className="dib black-80 hover-red">
              <img src={studio.avatar} className="br-100 mw4 ma2" alt={studio.name} />

                  <h4 className="f5 fw7 mv1">{studio.name}</h4>

              <p className="f7 black-50 mt0">{studio.role}</p>
              </OutboundLink>
            </li>
          ))}
        </ul>

        <hr className="mw2 mh0 mv0 black-80 bw1" />

        <div className="mt4 mb5">
          <h2 className="f3 fw5 lh-copy measure black-80">We love the Dallas web design industry&hellip;</h2>
          <p className="measure black-50">But you don't have to be local to work with us. We're always looking for new talent to join the team or consult. Think you have what it takes?</p>
          <AniLink cover bg="#f03f47" to="/contact/" className="f6 link dim ba ph3 pv2 dib black">Become a Spacefriend →</AniLink>
        </div>

      </div>

    );
  }
}

export default TeamMembers
