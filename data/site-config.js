module.exports = {
  blogPostDir: "blog", // The name of directory that contains your posts.
  siteTitle: "Spacetime", // Site title.
  siteTitleAlt: "Spacetime Design Agency", // Alternative site title for SEO.
  siteLogo: "./src/assets/images/favicon/favicon.png", // Logo used for SEO and manifest.
  siteUrl: "https://heyspacetime.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A Design Experience Agency", // Website description used for RSS feeds/meta description tag.
  // siteRss: "/rss.xml", // Path to the RSS file.
  // siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-118963683-1", // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  // postDefaultCategoryID: "Product", // Default category for posts.
  userName: "Caleb Sylvest", // Username to display in the author segment.
  userTwitter: "calebsylvest", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Dallas, TX", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Husband, father, human", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/calebsylvest",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/calebsylvest",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:caleb@heyspacetime.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018. Spacetime, LLC", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#f15541", // Used for setting manifest and progress theme colors.
  backgroundColor: "#ffffff" // Used for setting manifest background color.
};
