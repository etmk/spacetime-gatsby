import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import '../assets/stylesheets/styles.scss'

class TemplateWrapper extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title="Spacetime"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
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
