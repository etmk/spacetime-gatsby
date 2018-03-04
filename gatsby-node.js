const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators;

  const blogPostTemplate = path.resolve('src/templates/blog-post.js');
  // const servicePostTemplate = path.resolve('src/templates/service-post.js');

  return graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 10
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }`)
  .then(result => {
    if(result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges
      .forEach(({node}) => {
        createPage({
          path: node.frontmatter.path,
          component: blogPostTemplate,
          context: {}
        });
    });

  });
}
