const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators;

  const blogPostTemplate = path.resolve('src/templates/blog-post.js');
  // const servicePostTemplate = path.resolve('src/templates/service-post.js');

  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            type
            path
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
