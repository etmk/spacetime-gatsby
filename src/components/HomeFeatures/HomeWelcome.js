import React    from 'react'
import Emoji    from 'a11y-react-emoji'
import AniLink  from 'gatsby-plugin-transition-link/AniLink'

class HomeWelcome extends React.Component {

  render() {
    return (
      <section className="bg-steel-blue flex-l flex-row-reverse">

        <div className="w-30-l">
          <AniLink cover bg="#f03f47" to="/contact/" className="white w-100 h-100 flex justify-center items-center hover-bg-blue pv4">
            <Emoji symbol="👋" label="wave" className="mr1s" /> Available for hire
          </AniLink>
        </div>

        <div
          className="w-70-l white ph4 pv5 ph5-l"
          style={{backgroundImage: `url(/portfolio/dude-perfect/dude-perfect-bg.jpg)`, backgroundSize: `cover`}}
        >
          <span className="f8 fw7 ttu dude-perfect bg-dude-perfect-20 pv2 ph3 br-pill dib">
            <Emoji symbol="🎉" label="celebrate" /> New case study
          </span>
          <h3 className="t-subheadline">Dude Perfect needed a web experience to rival their impossible&nbsp;enthusiasm</h3>
          <AniLink cover bg="#00ffde"
            to="/portfolio/dude-perfect/"
            className="f6 white dim">
              <span className="bb b--white-40 pv1">Read the case study</span> &rarr;
          </AniLink>
        </div>

      </section>
    );
  }
}

export default HomeWelcome
