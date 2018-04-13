import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import config from '../../data/site-config'
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
          description={"Whether you’re building a marketing website, a mobile app or the next Facebook, we’re experienced in the right tool for the xxx."} />

        <section className="bg-red pv5 white relative overflow-hidden">
          <div className="row mw8 relative z-1">
            <h2>Contact</h2>
            <hr className="mw2 mh0 mv4" />
            <h3 className="f2 fw5 lh-title measure-narrow">xxx</h3>
          </div>
          <img src="/bgs/saturn-bg.jpg" className="w-100 absolute top-0 right-0 z-0" alt="Spacetime background image" />
        </section>

        <h1>Contact</h1>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label>
              Your name:<br />
            <input type="text" name="name" onChange={this.handleChange}/>
            </label>
          </p>
          <p>
            <label>
              Your email:<br />
              <input type="email" name="email" onChange={this.handleChange}/>
            </label>
          </p>
          <p>
            <label>
              Message:<br />
              <textarea name="message" onChange={this.handleChange}/>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}

export default ContactPage




{/* <div>
  <Helmet title={`Contact | ${config.siteTitle}`} />

  <PageHero
    title={"Contact"}
    description={"Whether you’re building a marketing website, a mobile app or the next Facebook, we’re experienced in the right tool for the xxx."} />

  <section className="bg-red pv5 white relative overflow-hidden" style={transition && transition.style}>
    <div className="row mw8 relative z-1">
      <h2>Contact</h2>
      <hr className="mw2 mh0 mv4" />
      <h3 className="f2 fw5 lh-title measure-narrow">xxx</h3>
    </div>
    <img src="/bgs/saturn-bg.jpg" className="w-100 absolute top-0 right-0 z-0" alt="Spacetime background image" />
  </section>

  <section>

    <form
      name="contact-form"
      method="post"
      data-netlify="true"
      className="pa4 black-80">

      <div className="mv4">
        <label className="f6 b db mb2">Name
          <input id="name" name="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" placeholder="Your name" />
        </label>
      </div>
      <div className="mv4">
        <button type="submit">Send</button>
      </div>
    </form>

  </section>
</div>
) */}
