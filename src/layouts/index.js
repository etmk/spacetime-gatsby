import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import '../assets/stylesheets/styles.scss'
import config from '../../data/site-config'

class TemplateWrapper extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title={config.siteTitleAlt}
          meta={[
            { name: 'description', content: `${config.siteDescription}` },
            { name: 'keywords', content: `${config.siteKeywords}` },
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: '@heyspacetime' },
            { name: 'twitter:creator', content: '@heyspacetime' },
            { name: 'twitter:url', content: `${config.siteUrl}` },
            { name: 'twitter:title', content: `${config.siteTitle}` },
            { name: 'twitter:description', content: `${config.siteDescription}` },
            { name: 'twitter:image', content: `${config.siteUrl}/social/twitter-card.png` },
            { name: 'twitter:image:alt', content: 'The image alt text' },
          ]}
        />
        <Header />
        <div>
          {this.props.children()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default TemplateWrapper;
