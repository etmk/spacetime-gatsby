import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import config from '../../data/site-config'

export default function Template({data}) {
  const {markdownRemark: post} = data;

  return (
    <div>
      <Helmet title={`${post.frontmatter.title} | ${config.siteTitle}`} />

      <Link
        to="blog"
        title="Back to Blog">
        Back to Blog
      </Link>
      <p>this is the blog post template</p>
      <h1>{post.frontmatter.title}</h1>
      <h5>Posted on {post.frontmatter.date} | Post type {post.frontmatter.type}</h5>
      <div dangerouslySetInnerHTML={{__html: post.html}} />
    </div>
  )
}

// export const postQuery = graphql`
//   query BlogPostByPath($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path} }) {
//       html
//       frontmatter {
//         type
//         path
//         title
//         date(formatString: "MMMM DD, YYYY")
//       }
//     }
//   }
// `
