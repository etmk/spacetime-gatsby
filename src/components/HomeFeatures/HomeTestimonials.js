import React from 'react'

const testimonials = [
  {
    logo: '/client-logos/dude-perfect-logo.png',
    quote: 'Spacetime took our vision and ran with it full steam ahead. They were easy to work with, and most importantly, created a killer end-product that we are proud to share with anyone.',
    name: 'Coby Cotton',
    role: 'Co-Founder',
    avatar: '/avatars/coby-cotton-avatar.jpg'
  }, {
    logo: '/client-logos/steadkey-logo.png',
    quote: 'After a couple years of little traction with my app, the Spacetime team helped rethink the product and build my business like a startup; focusing on a solid MVP that my target audience loves.',
    name: 'Jerry Williams',
    role: 'CEO & Founder',
    avatar: '/avatars/jerry-williams-avatar.jpg'
  }
];

class HomeTestimonials extends React.Component {

  render() {
    return (

      <section className="pv5 bg-deep-purple">
        <div className="row">
          <ul className="list pa0 ma0 flex-ns justify-between">
            {testimonials.map(e => (
              <li className="white mb4 dib" key={e.name}>
                <blockquote className="pa0 ma0">

                  <img src={e.logo} className="h3 dib" alt={e.name} />

                  <p className="f5 white-90 measure-narrow">
                    {e.quote}&rdquo;
                  </p>

                  <div className="flex items-center">
                    <img src={e.avatar} className="ba b--white bw3 br-100 h3 w3 dib" alt={e.name} />
                    <h5 className="lh-copy mv0 ml3">
                      <span className="sans-serif ttu tracked">{e.name}</span>
                      <span className="f7 fw1 db">{e.role}</span>
                    </h5>
                  </div>

                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      </section>

    );
  }
}

export default HomeTestimonials
