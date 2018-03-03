import React from 'react';
import Helmet from 'react-helmet';

export default function Template({data}) {
  const {markdownRemark: post} = data;

  return (
    <div>
      <Helmet title={`SpaceLog - ${post.frontmatter.title}`} />
      <h1>{post.frontmatter.title}</h1>
      <h5>Posted on {post.frontmatter.date}</h5>
      <div dangerouslySetInnerHTML={{__html: post.html}} />
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path} }) {
      html
      frontmatter {
        path
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
