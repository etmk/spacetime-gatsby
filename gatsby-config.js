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
        path: `${__dirname}/content/blog`,
        name: 'posts',
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
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-remove-trailing-slashes`
  ],
}
