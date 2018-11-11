import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'
import MainWrapper from '../layouts/MainWrapper/MainWrapper'
import PortfolioHero from '../components/PortfolioHero'
import PortfolioMeta from '../components/PortfolioMeta'
import PortfolioPagination from '../components/PortfolioPagination'

export default function Template({ data }) {
  const { frontmatter: fm } = data.client

  return <div>
    <Helmet title={`${fm.title} | ${config.siteTitle}`} />

    <PortfolioHero
      title={fm.title}
      tagline={fm.tagline}
      bgColor={fm.bgColor}
      logoPath={fm.logoPath}
      />

    <PortfolioMeta
      bgColor={`#202625`}
      buttonText={`Go to ${fm.title} →`}
      buttonColor={fm.buttonColor}

      // TODO: move to markdown
      label1={`Expertises`}
      text1={`Design, UX, Code`}
      label2={`Platform`}
      text2={`WordPress`}
      label3={`Easter Egg`}
      text3={`404 Page →`}/>

    <MainWrapper>
      <article className="bg-white">

        <div className="ph4 ph5-m ph6-l">
          <div className="pv5 f4 f2-ns measure center">
            <p className="tc sans-serif lh-solid fw5 mv0 f4 f3-m f2-l measure black-90">
              A short description of your project. Maybe a few notes concerning your constraints and process. Standard lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etc. al dolore magna aliqua. Ut enim ad.
            </p>
          </div>
          <div className="measure f4 center mv5" dangerouslySetInnerHTML={{ __html: data.client.html }} />
          { fm.tldr &&
            <div className="measure f4 center mv5">
              <h3 className="red">TL;DR</h3>
              <p className="">
                {fm.tldr}
              </p>
            </div>
          }
        </div>
      </article>
    </MainWrapper>

    <PortfolioPagination />
  </div>
}

export const postQuery = graphql`
  query PortfolioByName($name: String!) {
    client: markdownRemark(
      frontmatter: { type: { eq: "portfolio" }, name: { eq: $name } }
    ) {
      id
      html
      frontmatter {
        name
        title
        description
        tagline
        urlLink
        bgColor
        buttonColor
        textColor
        logoPath
        bgPath
        bgYAxis
        tldr
      }
    }
  }
`
