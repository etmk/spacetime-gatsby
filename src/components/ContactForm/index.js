import React from 'react'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class ContactForm extends React.Component {
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
      // .then(() => alert("Success!"))
      .catch(error => alert(error));

    // e.preventDefault();
  };

  render() {
    return (

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

    );
  }
}

export default ContactForm;
