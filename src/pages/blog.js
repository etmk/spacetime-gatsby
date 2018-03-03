import React from 'react'
import Link from 'gatsby-link'

import PostListing from '../components/PostListing/'

class BlogPage extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div>
        <h1>Blog</h1>
        <PostListing postEdges={postEdges} />
      </div>
    );
  }
}

export default BlogPage;

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      limit: 10
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
