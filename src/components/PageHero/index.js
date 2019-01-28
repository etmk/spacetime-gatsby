import React from 'react'

class PageHero extends React.Component {
  render() {
    return (
      <section className="page-hero">
        <div className="page-hero__content">

          {this.props.children}

        </div>
      </section>
    );
  }
}

export default PageHero
