import React    from 'react'
import Emoji    from 'a11y-react-emoji'
import AniLink  from 'gatsby-plugin-transition-link/AniLink'

class HomeWelcome extends React.Component {

  render() {
    return (
      <section className="bg-steel-blue flex-m flex-l flex-row-reverse">

        <div className="w-40-m w-30-l">
          <AniLink cover bg="#f03f47" to="/contact/" className="white w-100 h-100 flex justify-center items-center hover-bg-blue pv4">
            <Emoji symbol="👋" label="wave" className="mr1" /> Available for hire
          </AniLink>
        </div>

        <div
          className="w-60-m w-70-l white pv5 flex justify-center"
          style={{backgroundImage: `url(/portfolio/dude-perfect/dude-perfect-bg.jpg)`, backgroundSize: `cover`}}
        >
          <div className="ph4 tc tl-ns">
            <span className="f8 fw7 ttu dude-perfect bg-dude-perfect-20 pv2 ph3 br-pill dib">
              <Emoji symbol="🎉" label="celebrate" /> New case study
            </span>
            <h3 className="t-subheadline">Dude Perfect needed a web experience to rival their impossible enthusiasm</h3>
            <AniLink cover bg="#00ffde"
              to="/portfolio/dude-perfect/"
              className="f6 white dim">
                <span className="bb b--white-40 pv1">Read the case study</span> &rarr;
            </AniLink>
          </div>
        </div>

      </section>
    );
  }
}

export default HomeWelcome
