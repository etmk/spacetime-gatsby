const path = require('path');

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions;

  // const blogPostTemplate = path.resolve('src/templates/blog-post.js');
  // const servicePostTemplate = path.resolve('src/templates/service-post.js');

  // return graphql(`{
  //   allMarkdownRemark {
  //     edges {
  //       node {
  //         excerpt(pruneLength: 250)
  //         html
  //         id
  //         frontmatter {
  //           type
  //           path
  //           title
  //           date
  //           published
  //         }
  //       }
  //     }
  //   }
  // }`)
  // .then(result => {
  //   if(result.errors) {
  //     return Promise.reject(result.errors);
  //   }
  //
  //   //create empty arrays for our post types
  //   // const blogSet = new Set();
  //   // const serviceSet = new Set();
  //
  //   //find all markdown data
  //   result.data.allMarkdownRemark.edges.forEach(({node}) => {
  //
  //     //if blog type, add to blog set
  //     // if (node.frontmatter.type === 'blog') {
  //     //   blogSet.add(node);
  //     // }
  //     //
  //     // const blogList = Array.from(blogSet);
  //     // blogList.forEach(blog => {
  //     //   createPage({
  //     //     path: node.frontmatter.path,
  //     //     component: blogPostTemplate,
  //     //     context: {}
  //     //   });
  //     // });
  //
  //
  //       createPage({
  //         path: node.frontmatter.path,
  //         component: blogPostTemplate,
  //         context: {}
  //       });
  //   });
  //
  // });
}
