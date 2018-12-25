import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'
import MainWrapper from '../layouts/MainWrapper/MainWrapper'

export default function Template({data}) {
  const {markdownRemark: post} = data;

  return (
    <div>
      <Helmet
        title={`${post.frontmatter.title} | ${config.siteTitle}`}
        meta={[
          { name: 'description', content: `${post.frontmatter.subtitle}`},
          { name: 'keywords', content: 'hey spacetime, spacetime, contact, business, projects, call, email, office, message' },
        ]}
        bodyAttributes={{
          class: `${post.frontmatter.themeStyle}`
        }}
      />

      <section
        className="pt7 pb5"
        style={{backgroundColor: `${post.frontmatter.bgColor}`, color: `${post.frontmatter.textColor}` }}>

        <div className="row">
          <h1
            className="page-hero__headline"
            style={{color: `${post.frontmatter.titleColor}`}}>
              {post.frontmatter.title}
          </h1>
          <h2 className="page-hero__headline o-40">
            {post.frontmatter.subtitle}
          </h2>
        </div>

      </section>

      <MainWrapper>
        <div className="row">
          <h5>Posted on {post.frontmatter.date} | Post type {post.frontmatter.type}</h5>
          <div className="blog-content" dangerouslySetInnerHTML={{__html: post.html}} />
        </div>
      </MainWrapper>

    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path} }) {
      html
      frontmatter {
        type
        path
        title
        subtitle
        author
        date(formatString: "MMMM DD, YYYY")
        published
        bgColor
        textColor
        titleColor
        themeStyle
      }
    }
  }
`
