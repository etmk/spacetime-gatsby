import React from 'react'
import Link from 'gatsby-link'

const team = [
  {
    avatar: '/avatars/caleb-sylvest-avatar.jpg',
    name: 'Caleb Sylvest',
    role: 'Experience Designer'
  }, {
    avatar: '/avatars/chase-hilbert-avatar.jpg',
    name: 'Chase Hilbert',
    role: 'Business Development'
  }, {
    avatar: '/avatars/john-tornow-avatar.jpg',
    name: 'John Tornow',
    role: 'Software Developer'
  }, {
    avatar: '/avatars/travis-petticrew-avatar.jpg',
    name: 'Travis Petticrew',
    role: 'Product Developer'
  }, {
    avatar: '/avatars/daniel-dixon-avatar.jpg',
    name: 'Daniel Dixon',
    role: 'Product Developer'
  }, {
    avatar: '/avatars/chris-kim-avatar.jpg',
    name: 'Chris Kim',
    role: 'Project Manager'
  }, {
    avatar: '/avatars/ronnie-johnson-avatar.jpg',
    name: 'Ronnie Johnson',
    role: 'Design Director'
  }, {
    avatar: '/avatars/haley-frautschi-avatar.jpg',
    name: 'Haley Sylvest',
    role: 'Designer'
  }, {
    avatar: '/avatars/jeff-smith-avatar.jpg',
    name: 'Jeff Smith',
    role: 'Brand Designer'
  }, {
    avatar: '/avatars/jesse-hahm-avatar.jpg',
    name: 'Jesse Hahm',
    role: 'Marteking, PMP'
  }
];

const studios = [
  {
    avatar: '/avatars/full-swing-studio-avatar.jpg',
    name: 'Full Swing Studio',
    role: 'Brand Identity'
  }, {
    avatar: '/avatars/ellym-avatar.jpg',
    name: 'Ellym',
    role: 'Application Development'
  }, {
    avatar: '/avatars/belief-studio-avatar.jpg',
    name: 'Belief Studio',
    role: 'Strategic Design'
  }, {
    avatar: '/avatars/t-co-avatar.jpg',
    name: 'T&Co',
    role: 'Software Consulting'
  }
];

class TeamMembers extends React.Component {

  render() {
    return (

      <div>

        <h2 className="f1 black-80 mb2-m">Spacefriends</h2>
        <div className="cf">
          <p className="fl-l w-50-l">At Spacetime, we partner with clients to strategize & execute their vision. We approach problems with a business-centric focus with a goal of sustainability and ROI. At Spacetime, we partner with clients to strategize & execute their&nbsp;vision.</p>

          <ul className="fr-l w-40-l custom-unordered-list mv4 mv3-l pa0 pl2-ns  black-80 f6 lh-copy">
            <li>Industry specialists</li>
            <li>Diverse experiences and thinking</li>
            <li>Numerous awards &amp; nominations</li>
            <li>Infinite potential</li>
          </ul>
        </div>


        <ul className="list pa0 flex flex-wrap justify-evenly justify-start-l mv5 mw8">
          {team.map(member => (
            <li className="tc w-50 w-auto-ns mr4-ns mr5-l mb4" key={member.name}>
              <img src={member.avatar} className="br-100 mw4 ma2" alt={member.name} />
              <h3 className="f5 fw7 mv1">{member.name}</h3>
              <p className="f7 black-50 mt0">{member.role}</p>
            </li>
          ))}
        </ul>

        <ul className="list pa0 flex flex-wrap justify-between justify-start-l mv5 mw8">
          {studios.map(studio => (
            <li className="tc w-50 w-auto-ns mr4-ns mr5-l mb4" key={studio.name}>
              <img src={studio.avatar} className="br-100 mw4 ma2" alt={studio.name} />
              <h3 className="f5 fw7 mv1">{studio.name}</h3>
              <p className="f7 black-50 mt0">{studio.role}</p>
            </li>
          ))}
        </ul>

        <hr className="mw2 mh0 mv0 black-80 bw1" />

        <div className="mt4 mb5">
          <p className="measure-narrow black-50">We're always looking for cool people to work with. Want to work with us?</p>
          <Link to="/contact/" className="f6 link dim ba ph3 pv2 dib black">Become a Spacefriend →</Link>
        </div>

      </div>

    );
  }
}

export default TeamMembers
