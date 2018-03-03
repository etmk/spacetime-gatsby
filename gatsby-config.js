const config = require("./data/site-config");

module.exports = {
  siteMetadata: {
    title: `Gatsby LUT`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'pages',
      }
    },
    'gatsby-transformer-remark'
  ],
}
