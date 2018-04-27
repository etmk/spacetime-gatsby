import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'
import MainWrapper from '../layouts/MainWrapper/MainWrapper'
import PageHero from '../components/PageHero'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (
      <div>

        <Helmet title={`Contact | ${config.siteTitle}`} />

        <PageHero
          title={"Contact"}
          description={"Go ahead, get in touch. We eagerly await to<br>hear from you, seriously."} />

        <MainWrapper>

          <section className="pv5 cf bg-fog-white">
            <div className="row">
              <div className="fl w-50-ns">
                <h2 className="f1 serif red">Not a fan of filling out forms?</h2>
                <p className="sans-serif black-50 fw5 measure">Not into filling out forms? Find us on the Twitter-net: <a href="https://twitter.com/heyspacetime" target="_blank" className="red dim">@heyspacetime</a></p>
              </div>
              <div className="fr-ns">
                <img src="demo/demo-bird.png" alt="" className="relative nt6-l nb6-l dn dib-ns" />
              </div>
            </div>
          </section>

          <section>
            <div className="row cf">
              <div className="w-50-ns fl-ns mv4 mv6-l">
                <form
                  name="contact"
                  method="post"
                  action="/thanks/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                >
                  <div hidden>
                    <label>
                      Don’t fill this out: <input name="bot-field" />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="name">Your name</label>
                    <input type="text" name="name" placeholder="Elon Musk" onChange={this.handleChange}/>
                  </div>
                  <div>
                    <label htmlFor="email">Your email</label>
                    <input type="email" name="email" placeholder="elon.musk@email.com" onChange={this.handleChange}/>
                  </div>
                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" placeholder="Say what you need to say..." onChange={this.handleChange}/>
                  </div>
                  <div>
                    <button type="submit" className="bn sans-serif fw6 ph3 pv3 input-reset bg-black-80 hover-bg-blue bg-animate white pointer f5">Send Your Message</button>
                  </div>
                </form>
              </div>
              <div className="w-33-ns fr-ns mv4 mv6-l">
                <ul className="list pa0 ma0">
                  <li className="pt2 pb4 flex bb b--black-10">
                    <span className="f3 mr3">☎️</span>
                    <div>
                      <h4 className="ttu black f7 fw7 tracked mt0">Give us a call</h4>
                      <a href="tel:469-270-1500" className="red dim fw6 f3">(469) 270-1500</a>
                    </div>
                  </li>
                  <li className="pv4 flex bb b--black-10">
                    <span className="f3 mr3">📬</span>
                    <div>
                      <h4 className="ttu black f7 fw7 tracked mt0">By electronic mail</h4>
                      <a href="mailto:hey@heyspacetime.com" className="red dim fw6 f3">hey@heyspacetime.com</a>
                    </div>
                  </li>
                  <li className="pv4 flex">
                    <span className="f3 mr3">🗺</span>
                    <div>
                      <h4 className="ttu black f7 fw7 tracked mt0">Stop by the office</h4>
                      <a href="https://goo.gl/maps/mLQwMaQhnao" target="_blank" className="red dim fw6 f3">5830 Granite Parkway<br />#100-243<br />Plano, Texas 75024</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <iframe className="map_canvas w-100 bn h5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.8166872128445!2d-96.82354404913771!3d33.087606980785644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x27686616db64c7e5!2sCommon+Desk+-+Granite+Park!5e0!3m2!1sen!2sus!4v1523849228706" allowFullScreen></iframe>
          </section>

        </MainWrapper>
      </div>
    );
  }
}

export default ContactPage
