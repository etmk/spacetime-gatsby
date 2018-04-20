import React from 'react'
import config from '../../../data/site-config'

class MainWrapper extends React.Component {
  render() {
    return (
      <main className="site-main">
        {this.props.children}
      </main>
    );
  }
}

export default MainWrapper
