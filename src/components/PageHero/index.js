import React from 'react'

class PageHero extends React.Component {
  render() {
    return (
      <section className="page-hero" style={{backgroundColor: `${this.props.bgColor}`}} >
        <div className="page-hero__content">

          {this.props.children}

        </div>
      </section>
    );
  }
}

export default PageHero
