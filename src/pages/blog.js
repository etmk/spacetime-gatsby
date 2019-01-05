import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'
import MainWrapper from '../layouts/MainWrapper/MainWrapper'
import PageHero from '../components/PageHero'
import PostListing from '../components/PostListing/'

class BlogPage extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div>
        <Helmet
          title={`Blog | ${config.siteTitle}`}
          meta={[
            { name: 'description', content: 'The Spacetime blog' },
            { name: 'keywords', content: 'hey spacetime, spacetime, dallas, plano, texas, blog, learn, education, tips' },
          ]}
          link={[
            { rel: 'canonical', href: `${config.siteUrl}/blog/` }
          ]}
        />

        <PageHero
          title={`Blog`}
          description={`Whether you’re building a marketing website, a mobile app or the next`} />

        <MainWrapper>

          <section className="bg-red pv5 white relative overflow-hidden" style={{opacity: '1', transition: 'opacity 250ms ease-in-out'}}>
            <div className="row mw8 relative z-1">
              <h2>Blog</h2>
              <hr className="mw2 mh0 mv4" />
              <h3 className="f2 fw5 lh-title measure-narrow">xxx</h3>
            </div>
            <img src="/bgs/saturn-bg.jpg" className="w-100 absolute top-0 right-0 z-0" alt="Spacetime background image" />
          </section>

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
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
