import React  from 'react'
import Helmet from 'react-helmet'
import Emoji from 'a11y-react-emoji'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import config from '../../data/site-config'
import team   from '../../data/team-data.json'

import Layout from '../components/layout'
import MainWrapper from '../components/MainWrapper/MainWrapper'
import PageHero from '../components/PageHero'
import HomeTestimonials from '../components/HomeFeatures/HomeTestimonials'
import ServiceCard from '../components/Services/ServiceCard'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>

        <Helmet
          title={`Home 🏡 ${config.siteTitle}`}
          meta={[
            { name: 'description', content: 'Spacetime is a Dallas, Texas based Design Experience Agency providing web-based services to local, national, and international brands.' },
            { name: 'keywords', content: 'hey spacetime, spacetime, business, agency, ux, ui, early stage startups, website, design, Dude Perfect, Samsung, Bell Helicopter' },
          ]}
          link={[
            { rel: 'canonical', href: `${config.siteUrl}/` }
          ]}
        />

        <PageHero>
          <h1 className="t-headline">We&rsquo;re in the business of design&mdash;<span className="o-40">and the design of extraordinary business</span></h1>
        </PageHero>

        <MainWrapper>

          <section className="bg-dark-purple pv5 relative">
            <div className="row">
              <h2 className="f1 fw4 white lh-title">We&rsquo;ve worked with cool clients like <span className="bb b--white-20">Dude&nbsp;Perfect</span>, <span className="bb b--white-20">Bell&nbsp;Helicopter</span>, <span className="bb b--white-20">Samsung</span>, <span className="bb b--white-20">Watermark</span>, & <AniLink cover bg="#f03f47" to="/portfolio/" className="blue dim">more→</AniLink></h2>
            </div>
          </section>

          <section className="pv6 bg-white">
            <div className="row mb5">
              <h4 className="ttu f7 fw7 tracked shock-blue mt0">&mdash;Services</h4>
              <h3 className="t-headline">Tell us what you want to achieve,<br />we&rsquo;ll help you get there</h3>
              <p className="measure">We provide a broad range of services&mdash;focusing on smart efforts that act as value multipliers. So, whether you are starting a brand new business or growing to new heights, Spacetime is ready to step-in as a strategic partner for&nbsp;the&nbsp;journey.</p>
              <p>What do you need help with? Pick your poison <Emoji symbol="☠️" label="skull and cross bones"/></p>
            </div>
            <div className="row flex flex-wrap">

              <ServiceCard
                containerClass={`pb3 w-50-m w-33-l pr2-ns`}
                name={`technical-seo`}
                title={`Technical SEO`}
                description={`for a lean mean search engine optimization machine`}
                icon={`🔍`}
                iconPath={``}
                bgColor={`#86fc9e`}
                cta={`Crush the competition with unparalleled Technical SEO`} />

              <ServiceCard
                containerClass={`pb3 w-50-m pl2-ns w-33-l pr2-l`}
                name={`startups`}
                title={`Startups`}
                description={`go from a back-of-the-napkin idea to scalable startup MVP`}
                icon={`🚀`}
                iconPath={``}
                bgColor={`#F03F47`}
                cta={`How to grow your startup`} />

              <ServiceCard
                containerClass={`pb3 w-100-m w-33-l pl2-l`}
                name={`wordpress-hosting`}
                title={`WordPress Hosting`}
                description={`for people serious about their online business`}
                icon={``}
                iconPath={`/icons/wordpress-logo.svg`}
                bgColor={`#21759b`}
                cta={`The ultimate managed WordPress plans`} />

            </div>
            <div className="row pt5">
              <AniLink cover bg="#f03f47" to="/services/" className="black dim">All Spacetime Services <Emoji symbol="👉" label="pointing hand"/></AniLink>
            </div>
          </section>

          <hr className="b--fog-white" />

          <section className="pv6 bg-white">
            <div className="row mb5 cf">

              <div className="w-30-l fl-l">
                <h4 className="ttu f7 fw7 tracked shock-blue mt0">&mdash;Team</h4>
                <h3 className="t-headline">Meet the team that makes the magic happen&nbsp;<Emoji symbol="🔮" label="crystal ball"/></h3>
                <p className="measure">No, we&rsquo;re not superheroes and we&rsquo;re not magicians. We are simply humble purveyors of business and builders of&nbsp;technology.</p>
                <AniLink cover bg="#f03f47" to="/team/" className="black dim">Meet the whole team <Emoji symbol="👉" label="pointing hand"/></AniLink>
              </div>

              <div className="w-60-l fr-l">
                <ul className="list pa0 flex flex-wrap justify-evenly justify-start-l mv4 mw8">
                  {team.people.slice(0, 5).map(member => (
                    <li className="tc w-50 w-auto-ns mr4-ns mr5-l mb4" key={member.name}>
                      <img src={member.avatar} className="br-100 mw4 ma2" alt={member.name} />
                      <h4 className="f5 fw7 mv1">{member.name}</h4>
                      <p className="f7 black-60 mt0">{member.role}</p>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </section>

          <HomeTestimonials />

        </MainWrapper>
      </Layout>
    );
  }
}

export default IndexPage
