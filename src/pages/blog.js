import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'
import MainWrapper from '../layouts/MainWrapper/MainWrapper'
import PostListing from '../components/PostListing/'

class BlogPage extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div>
        <Helmet title={`Blog | ${config.siteTitle}`} />

        <MainWrapper>

          <PostListing postEdges={postEdges} />

        </MainWrapper>
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
            subtitle
            author
            date(formatString: "MMMM DD, YYYY")
            bgColor
            textColor
            titleColor
          }
        }
      }
    }
  }
`;
