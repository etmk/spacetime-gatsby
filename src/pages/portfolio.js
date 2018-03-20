import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'
import PageHero from '../components/PageHero'


const PortfolioPage = () => (
  <div>
    <Helmet title={`Portfolio | ${config.siteTitle}`} />
    <PageHero
      title={`Portfolio`}
      description={`Whether you’re building a marketing website, a mobile app or the next Facebook, we’re experienced in the right tool for the xxx.`} />
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
