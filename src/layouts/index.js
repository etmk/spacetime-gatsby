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
