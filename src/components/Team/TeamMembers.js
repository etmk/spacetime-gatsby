import React from 'react'
import Link from 'gatsby-link'

import team from '../../../data/team-data.json'

class TeamMembers extends React.Component {

  render() {
    return (

      <div>

        <h3 className="f1 black-80 mb2-m">Spacefriends</h3>
        <div className="cf">
          <p className="f4 fl-l w-50-l">"Find a group of people who challenge and inspire you, spend a lot of time with them, and it will change your life forever."<br /><span className="green">&mdash;Amy Poehler</span></p>

          <ul className="fr-l w-40-l custom-unordered-list mv4 mv3-l pa0 pl2-ns  black-80 f6 lh-copy">
            <li>Industry specialists</li>
            <li>Diverse experiences and thinking</li>
            <li>Numerous awards &amp; nominations</li>
            <li>Infinite potential</li>
          </ul>
        </div>

        <ul className="list pa0 flex flex-wrap justify-evenly justify-start-l mv5 mw8">
          {team.people.map(member => (
            <li className="tc w-50 w-auto-ns mr4-ns mr5-l mb4" key={member.name}>
              <img src={member.avatar} className="br-100 mw4 ma2" alt={member.name} />
              <h3 className="f5 fw7 mv1">{member.name}</h3>
              <p className="f7 black-50 mt0">{member.role}</p>
            </li>
          ))}
        </ul>

        <ul className="list pa0 flex flex-wrap justify-between justify-start-l mv5 mw8">
          {team.studios.map(studio => (
            <li className="tc w-50 w-auto-ns mr4-ns mr5-l mb4" key={studio.name}>
              <img src={studio.avatar} className="br-100 mw4 ma2" alt={studio.name} />
              <h3 className="f5 fw7 mv1">{studio.name}</h3>
              <p className="f7 black-50 mt0">{studio.role}</p>
            </li>
          ))}
        </ul>

        <hr className="mw2 mh0 mv0 black-80 bw1" />

        <div className="mt4 mb5">
          <p className="measure-narrow black-50">We're always looking for cool people to join our team. Think you have what it takes?</p>
          <Link to="/contact/" className="f6 link dim ba ph3 pv2 dib black">Become a Spacefriend →</Link>
        </div>

      </div>

    );
  }
}

export default TeamMembers
