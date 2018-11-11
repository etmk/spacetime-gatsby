const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators;

  const blogPostTemplate = path.resolve('src/templates/blog-post.js');
  const portfolioPageTemplate = path.resolve('src/templates/portfolio-page.js')
  // const servicePostTemplate = path.resolve('src/templates/service-post.js');

  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            hasPage
            type
            path
            name
            title
            date
            published
          }
        }
      }
    }
  }`)
  .then(result => {
    if(result.errors) {
      return Promise.reject(result.errors);
    }

    //create empty arrays for our post types
    // const blogSet = new Set();
    // const serviceSet = new Set();

    //find all markdown data
    result.data.allMarkdownRemark.edges.forEach(({node}) => {

      //if blog type, add to blog set
      // if (node.frontmatter.type === 'blog') {
      //   blogSet.add(node);
      // }
      //
      // const blogList = Array.from(blogSet);
      // blogList.forEach(blog => {
      //   createPage({
      //     path: node.frontmatter.path,
      //     component: blogPostTemplate,
      //     context: {}
      //   });
      // });

      if (node.frontmatter.type == 'blog') {
        createPage({
          path: node.frontmatter.path,
          component: blogPostTemplate,
          context: {}
        });
      } else if (node.frontmatter.type == 'portfolio' && node.frontmatter.hasPage) {
        createPage({
          path: `/portfolio/${node.frontmatter.name}`,
          component: portfolioPageTemplate,
          // this lets you use frontmatter fields in the query, like `name: { eq: $name }`
          context: stripReservedFields(Object.assign({}, node.frontmatter))
        })
      }
    });

  });
}

function stripReservedFields(frontmatter) {
  delete frontmatter.path
  delete frontmatter.matchPath
  delete frontmatter.component
  delete frontmatter.componentChunkName
  delete frontmatter.pluginCreator___NODE
  delete frontmatter.pluginCreatorName
  return frontmatter
}