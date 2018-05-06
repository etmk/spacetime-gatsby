import React from 'react'

class HomeWelcome extends React.Component {

  render() {
    return (
      <section className="bg-red white relative overflow-hidden">
            <div className="row">
              <h2 className="f2 fw7 lh-title tc mw6 mr-auto ml-auto mv5">We help founders launch their digital product</h2>
            </div>
            <div className="bg-dark-red pv6">
              <div className="row flex-ns flex-wrap">
                <div className="ph3-l mb4 w-50-l">
                  <h3 className="f3 f2-l serif ma0">Early Stage Startups</h3>
                  <p className="sans-serif white">We specialize in helping founders get their idea off the ground and chugging full steam ahead. We do so through product strategy and development, but also by educating founders and providing guidance through the technology startup field.</p>
                </div>
                <div className="ph3-l mb4 w-50-l">
                  <h3 className="f3 f2-l serif ma0">Websites</h3>
                  <p className="sans-serif white">Every business and brand needs an online presence, and one that is distinct and sets them apart from competitors. We build mobile friendly websites that wow, focus on business goals and revenue, and guarantee a return in multiples.</p>
                </div>
                <div className="ph3-l mb4 w-50-l">
                  <h3 className="f3 f2-l serif ma0">Business-centric</h3>
                  <p className="sans-serif white">We take a business-centric approach to every project and client we work with. Building a sustainable, successful product ready to go-to-market, scale, and grow is our key focus.</p>
                </div>
                <div className="ph3-l mb4 w-50-l">
                  <h3 className="f3 f2-l serif ma0">Apps</h3>
                  <p className="sans-serif white">Building apps that customers love is our goal. We work closely with our clients to understand the central problem they want to tackle, and seek a solution</p>
                </div>
              </div>
            </div>

          </section>
    );
  }
}

export default HomeWelcome
