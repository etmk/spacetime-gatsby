require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});
const config = require("./data/site-config");

const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl + pathPrefix,
  },
  plugins: [
    /*
    * Gatsby's data processing layer begins with “source”
    * plugins. You can source data nodes from anywhere but
    * most sites will include data from the filesystem so
    * we start here with “gatsby-source-filesystem”.
    *
    * A site can have as many instances of
    * gatsby-source-filesystem as you need. Each plugin
    * instance is configured with a root path where it then
    * recursively reads in files and adds them to the data
    * tree.
    */
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog/`,
        name: 'posts',
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images/`,
        name: 'img',
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/assets/images/favicon/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    // make sure to put last in the array
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ],
}
