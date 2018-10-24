import React from 'react'

const startups = [
  {
    title: 'The Skimm',
    text: 'Raised $16.5MM',
    color: '#2a323b',
    url: 'http://www.theskimm.com/'
  }, {
    title: 'Trulia',
    text: 'Acquired for $3.5 billion',
    color: '#62cc09',
    url: 'https://www.trulia.com/'
  }, {
    title: 'Buzzfeed',
    text: '$1.5 billion',
    color: '#f7251b',
    url: 'https://www.buzzfeed.com/'
  }, {
    title: 'AirBnB',
    text: '$30 billion',
    color: '#ff5360',
    url: 'https://www.airbnb.com/'
  }, {
    title: 'Gimlet',
    text: '$30MM valuation',
    color: '#001bff',
    url: 'https://gimletmedia.com/'
  }, {
    title: 'Uber',
    text: '$28+ billion',
    color: '#6b6a79',
    url: 'https://www.uber.com/'
  }
];

class StartupDream extends React.Component {

  render() {
    return (

      <section className="pv5">
        <div className="row">
          <h2 className="f3 f2-ns lh-tight tc mw6 center">What if you built<br />the&nbsp;next&hellip;</h2>
          <ul className="list pa0 mv5 cf mw8 center">
            {startups.map(e => (
              <li className="fl w-50 w-33-l tc mv3" key={e.title}>
                <a
                  href={e.url}
                  target="_blank"
                  rel="noopener"
                  className="dib dim"
                  style={{color: `${e.color}`}}>
                    <span className="sans-serif f3 f2-m f1-l fw7 ma0 color-inherit dib">{e.title}</span>
                    <span className="f7 tr-l db">{e.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

    );
  }
}

export default StartupDream
