import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'

export default function Template({data}) {
  const {markdownRemark: post} = data;

  return (
    <div>
      <Helmet title={`${post.frontmatter.title} | ${config.siteTitle}`} />

      <div style={{backgroundColor: `${post.frontmatter.bgColor}`, color: `${post.frontmatter.textColor}`}} className="pv6">
        <div className="row tc">
          <Link to={post.frontmatter.path} className="dim center">
            <h1
              className="f-headline fw7 dib mv0"
              style={{color: `${post.frontmatter.titleColor}`}}>
              {post.frontmatter.title}
            </h1>
          </Link>
          <p className="tc color-inherit ttu o-60 fw6 tracked sans-serif">by {post.frontmatter.author}</p>
          <h2 className="f2 fw4 o-80 ma0 system-sans">{post.frontmatter.subtitle}</h2>
        </div>
      </div>

      <div className="row narrow">
        <h5>Posted on {post.frontmatter.date} | Post type {post.frontmatter.type}</h5>
        <div dangerouslySetInnerHTML={{__html: post.html}} />
      </div>
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
        bgColor
        textColor
        titleColor
      }
    }
  }
`
