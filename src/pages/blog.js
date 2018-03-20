import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'
import PageHero from '../components/PageHero'
import PostListing from '../components/PostListing/'

class BlogPage extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div style={{opacity: '1', transition: 'opacity 250ms ease-in-out'}}>
        <Helmet title={`Blog | ${config.siteTitle}`} />

        <PageHero
          title={`Blog`}
          description={`Whether you’re building a marketing website, a mobile app or the next Facebook, we’re experienced in the right tool for the xxx.`} />

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
