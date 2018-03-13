import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'

const projects = [
  {
    title: 'Atya',
    link: 'http://getatya.com/',
    desc: 'Designed & Developed booking and artistic inspiration app:<br />Built With: Meteor, React, Stylus',
  }, {
    title: 'Ford.com Global UX',
    link: 'http://www.ford.com/',
    desc: 'Design Prototypes and Interactive Digital Styleguide for the Ford.com Global Redesign:<br />Built With: Angular.js, Sass',
  }, {
    title: 'Level Up Tutorials',
    link: 'https://www.leveluptutorials.com/',
    desc: '1000+ Web Dev Tutorials on: <a target="_blank" href="https://www.youtube.com/channel/UCyU5wkjgQYGRB0hIHMwm2Sg">Youtube</a><br />Built With: Meteor, React, Stylus',
  }, {
    title: 'Q LTD',
    link: 'http://qltd.com/',
    desc: 'Built for: <a target="_blank" href="http://qltd.com">Q LTD</a><br />Built With: Node.js, Express, MongoDB, Sass/Compass/Susy',
  }, {
    title: 'ACM SIGGRAPH',
    link: 'http://www.siggraph.org/',
    desc: 'Built for: <a target="_blank" href="http://qltd.com">Q LTD</a><br />Built With: Drupal 7, Omega 3, Sass/Compass',
  }, {
    title: 'Concrete.org',
    link: 'http://www.concrete.org/',
    desc: 'Built for: <a target="_blank" href="http://qltd.com">Q LTD</a><br />Built Templates With: HTML5, CSS3, JavaScript',
  },
];

const PortfolioPage = () => (
  <div>
    <Helmet title={`Portfolio | ${config.siteTitle}`} />
    <section className="ph5-l pt6 pb5 bg-dark-purple">
      <h1 className="f1-ns white tc mt0">Portfolio</h1>
      <p className="f4 white-70 tc ml-auto mr-auto mb0 measure-narrow">Whether you’re building a marketing website, a mobile app or the next Facebook, we’re experienced in the right tool for the xxx.</p>
    </section>
  </div>
)

export default PortfolioPage




// export default class Projects extends React.Component {
//   render() {
//     return (
//       <MainWrapper color="#e74c3c">
//         <Title>Projects</Title>
//         <p>I've worked on many types of projects both personal and professional. Here are some projects I've developed/created.</p>
//         <ProjectsList>
//           {projects.map(project => (
//             <li>
//               <h3 className="project-title">
//                 <a target="_blank" href={project.link}>{project.title}</a>
//               </h3>
//               <p dangerouslySetInnerHTML={{ __html: project.desc }} />
//             </li>
//           ))}
//         </ProjectsList>
//       </MainWrapper>
//     );
//   }
// }
