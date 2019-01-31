import React from 'react'
import Helmet from 'react-helmet'

import Header from './Header'
import Footer from './Footer'
import '../assets/stylesheets/styles.scss'
import config from '../../data/site-config'

class TemplateWrapper extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Helmet
          title={config.siteTitleAlt}
          meta={[
            { name: 'description', content: `${config.siteDescription}` },
            { name: 'keywords', content: `${config.siteKeywords}` },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@heyspacetime' },
            { name: 'twitter:creator', content: '@heyspacetime' },
            { name: 'twitter:url', content: `${config.siteUrl}` },
            { name: 'twitter:title', content: `${config.siteTitle}` },
            { name: 'twitter:description', content: `${config.siteDescription}` },
            { name: 'twitter:image', content: `${config.siteUrl}/social/twitter-card.png` },
          ]}
        />
        <Header />

        <div>
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default TemplateWrapper
