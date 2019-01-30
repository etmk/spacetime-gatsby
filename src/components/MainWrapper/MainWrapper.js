import React from 'react'

class MainWrapper extends React.Component {
  render() {
    return (
      <main className="site-main bg-white">
        {this.props.children}
      </main>
    );
  }
}

export default MainWrapper
