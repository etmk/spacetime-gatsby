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
        <Helmet
          title={`Blog | ${config.siteTitle}`}
          meta={[
            { name: 'description', content: 'The writings and musings of the Spacetime team where we discuss technology, business, wordpress, strategy, design, branding, and more' },
            { name: 'keywords', content: 'hey spacetime, spacetime, dallas, plano, texas, wordpress, shopify, kickstarter, youtube, ux, ui, web design, ecommerce, startups, seo, websites' },
          ]}
          bodyAttributes={{
            class: 'light-theme'
          }}
        />

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
            published
            bgColor
            textColor
            titleColor
          }
        }
      }
    }
  }
`
