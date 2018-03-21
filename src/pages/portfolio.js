import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'
import PageHero from '../components/PageHero'
import PortfolioCard from '../components/PortfolioCard'


const PortfolioPage = ({ transition }) => (
  <div style={transition && transition.style}>
    <Helmet title={`Portfolio | ${config.siteTitle}`} />

    <PageHero
      title={`Portfolio`}
      description={`Whether you’re building a marketing website, a mobile app or the next Facebook, we’re experienced in the right tool for the xxx.`} />

    <section className="bg-fog-white pa4">
      <div className="row">
        <h2>This is our portfolio. Nice.</h2>
      </div>
    </section>
    <section>
      <PortfolioCard
        title={`Dude Perfect`}
        description={`We took Dude Perfect's GO BIG dream from a vision to reality with design, development, and social and video integration.`}
        bgColor={`#00FFDE`}/>
      <PortfolioCard
        title={`Keyzie`}
        description={`We took Dude Perfect's GO BIG dream from a vision to reality with design, development, and social and video integration.`}
        bgColor={`#F78657`}/>
      <PortfolioCard
        title={`StudioHop`}
        description={`We took Dude Perfect's GO BIG dream from a vision to reality with design, development, and social and video integration.`}
        bgColor={`#00C2F2`}/>
      <PortfolioCard
        title={`Bell`}
        description={`We took Dude Perfect's GO BIG dream from a vision to reality with design, development, and social and video integration.`}
        bgColor={`#000`}/>
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
