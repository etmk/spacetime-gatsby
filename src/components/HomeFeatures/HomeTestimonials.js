import React    from 'react'
import AniLink  from 'gatsby-plugin-transition-link/AniLink'

const testimonials = [
  {
    logo: '/client-logos/dude-perfect-logo.png',
    quote: 'Spacetime took our vision and ran with it full steam ahead. They were easy to work with, and most importantly, created a killer end-product that we are proud to share with anyone.',
    name: 'Coby Cotton',
    role: 'Co-Founder',
    business: 'Dude Perfect',
    path: '/portfolio/dude-perfect/',
    avatar: '/avatars/coby-cotton-avatar.jpg',
    color: '#00FFDE'
  }, {
    logo: '/client-logos/steadkey-logo.png',
    quote: 'After a couple years of little traction with my app, the Spacetime team helped rethink the product and build my business like a startup; focusing on a solid MVP that my target audience loves.',
    name: 'Jerry Williams',
    role: 'CEO & Founder',
    business: 'Steadkey',
    path: '/portfolio/steadkey/',
    avatar: '/avatars/jerry-williams-avatar.jpg',
    color: '#f64a53'
  }
];

class HomeTestimonials extends React.Component {

  render() {
    return (

      <section className="pv6 bg-deep-purple">
        <div className="row">
          <h3 className="ttu f7 fw7 tracked pink">&mdash;Testimonials</h3>
          <h3 className="f3 white mb5">Happy <del className="o-30">wife</del> <ins>client</ins>, happy life</h3>
          <ul className="list pa0 ma0 flex-ns justify-between">
            {testimonials.map(e => (
              <li className="white mb4 dib" key={e.name}>
                <blockquote className="pa0 ma0">

                  <p className="f5 white-90 measure-narrow">
                    <span style={{marginLeft: "-.4em"}}>"</span>{e.quote}&rdquo;
                  </p>

                  <div className="flex items-center">
                    <img src={e.avatar} className="br-100 h3 w3 dib" alt={e.name} />
                    <h5 className="lh-copy mv0 ml3">
                      <span className="sans-serif ttu tracked">{e.name}</span>
                      <span className="f7 fw1 db">
                        {e.role},&nbsp;
                        <AniLink cover direction="up" bg={e.color} to={e.path}
                          className="color-inherit bb b--white-20">
                          {e.business}
                        </AniLink>
                      </span>
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
