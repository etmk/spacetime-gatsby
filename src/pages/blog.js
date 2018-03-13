import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'
import PostListing from '../components/PostListing/'

class BlogPage extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div>
        <Helmet title={`Blog | ${config.siteTitle}`} />
        <section className="ph5-l pt6 pb5 bg-dark-purple">
          <h1 className="f1-ns white tc mt0">Blog</h1>
          <p className="f4 white-70 tc ml-auto mr-auto mb0 measure-narrow">Whether you’re building a marketing website, a mobile app or the next Facebook, we’re experienced in the right tool for the xxx.</p>
        </section>
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
            type
            path
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
