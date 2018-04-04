import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import config from '../../data/site-config'
import PageHero from '../components/PageHero'

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={`Welcome | ${config.siteTitle}`} />

        <PageHero
          title={"Home"}
          description={"Whether you’re building a marketing website, a mobile app or the next Facebook, we’re experienced in the right tool for the xxx."} />

        <section className="bg-white pv5 black relative overflow-hidden" style={{opacity: '1', transition: 'opacity 250ms ease-in-out'}}>
          <div className="row mw8 relative z-1">
            <h1>The home page</h1>
            <hr className="mw2 mh0 mv4" />
            <h3 className="f2 fw5 lh-title measure-narrow">At Spacetime, we partner with clients to strategize & execute their vision. We approach problems with a business-centric focus with a goal of sustainability and ROI.</h3>
          </div>
        </section>

        <section>
          <article className="cf ph3 ph5-ns pv5">
            <header className="fn fl-ns w-50-ns pr4-ns">
            <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
            On Typography
            </h1>
            <h2 className="f3 mid-gray lh-title">
            An excerpt from the Form of the Book by Jan Tschichold
            </h2>
            <time className="f6 ttu tracked gray">
            Sometime before 1967
            </time>
            </header>
            <div className="fn fl-ns w-50-ns">
            <p className="f5 lh-copy measure mt0-ns">
            TYPOGRAPHY, even when poorly executed, can never be taken for granted; nor is it ever accidental. Indeed, beauti- fully typeset pages are always the result of long experience. Now and then they even attain the rank of great artistic achievement. But the art of typesetting stands apart from ex- pressive artwork, because the appeal is not limited to a small circle. It is open to everyone's critical judgment, and nowhere does this judgment carry more weight. Typography that can- not be read by everybody is useless. Even for someone who constantly ponders matters of readability and legibility, it is difficult to determine whether something can be read with ease, but the average reader will rebel at once when the type is too small or otherwise irritates the eye; both are signs of a certain illegibility already.
            </p>
            <p className="f5 lh-copy measure">
            All typography consists of letters. These appear either in the form of a smoothly running sentence or as an assembly of lines, which may even have contrasting shapes. Good typog- raphy begins, and this is no minor matter, with the typeset- ting of a single line of text in a book or a newspaper. Using exactly the same typeface, it is possible to create either a pleasant line, easily read, or an onerous one. Spacing, if it is too wide or too compressed, will spoil almost any typeface.
            </p>
            </div>
          </article>
        </section>

        <section>
          <article className="pa3 pa5-ns">
            <h3 className="f6 ttu tracked">
            Today
            </h3>
            <div className="cf">
            <dl className="db dib-l w-auto-l lh-title mr6-l">
            <dd className="f6 fw4 ml0">
            Closed Issues
            </dd>
            <dd className="f2 f-subheadline-l fw6 ml0">
            1,024
            </dd>
            </dl>
            <dl className="db dib-l w-auto-l lh-title mr6-l">
            <dd className="f6 fw4 ml0">
            Open Issues
            </dd>
            <dd className="f2 f-subheadline-l fw6 ml0">
            993
            </dd>
            </dl>
            <dl className="db dib-l w-auto-l lh-title mr6-l">
            <dd className="f6 fw4 ml0">
            Next Release
            </dd>
            <dd className="f2 f-subheadline-l fw6 ml0">
            10-22
            </dd>
            </dl>
            <dl className="db dib-l w-auto-l lh-title mr6-l">
            <dd className="f6 fw4 ml0">
            Days Left
            </dd>
            <dd className="f2 f-subheadline-l fw6 ml0">
            4
            </dd>
            </dl>
            <dl className="db dib-l w-auto-l lh-title mr6-l">
            <dd className="f6 fw4 ml0">
            Favorite Cat
            </dd>
            <dd className="f2 f-subheadline-l fw6 ml0">
            All of Them
            </dd>
            </dl>
            <dl className="db dib-l w-auto-l lh-title">
            <dd className="f6 fw4 ml0">
            App Downloads
            </dd>
            <dd className="f2 f-subheadline-l fw6 ml0">
            1,200
            </dd>
            </dl>
            </div>
          </article>
        </section>

        <section>
          <div className="w-100 w-50-l pr2-l pl2-ns mb4 mb0-l mb4 outline">
            <div className="pa4">
            <h1 className="f4 f2-l fw7 mt0 pv3-l bb-l bb--black">
            #004
            </h1>
            <p className="lh-copy mt2 mt3-m mt5-l f6">
            <span className="db-ns f6 fw7 lh-solid mb3 mb0-m mb4-l">
            Mies, my great mentor said:
            </span>
            <span className="fw9 f6 f1-l db lh-title mb3 mb4-l">
            “God is in the details.”
            </span>
            <span className="db-l measure-wide">
            That is the essence of syntax: the discipline that controls the proper use of grammar in the construction of phrases and the articulation of a language, Design. The syntax of design is provided by many components in the nature of the project.
            </span>
            </p>
            </div>
          </div>
        </section>

        <section className="cf ph3 ph5-ns pb5 bg-yellow black-70" id="features">
            <div className="mw9 center">
              <h1 className="fl w-100 mt5 f5 ttu tracked fw6">Features</h1>
              <article className="pv2 fl w-100 ">
                <h2 className="f4 f1-ns fw6 mb2">Open source component library</h2>
                <p className="f5 f4-ns measure lh-copy mt0">
                  There is a <a href="/components/" className="black dim" title="Tachyons components">growing library of open source components</a> written in static html that are easy
                  to use as is, customize with your own theme, or port to a templating language.
                </p>
              </article>
              <div className="cf">
                <article className="pv2 fl w-100 w-50-l pr0 pr2-l">
                  <h2 className="f4 f2-ns fw6 mb2">Lightweight</h2>
                  <p className="f5 measure lh-copy mt0">
                    The entire library is fewer than 14kb when minified and
                    gzipped. If you want to get even smaller, it’s easy to strip out what you don’t
                    need.
                  </p>
                </article>
                <article className="pv2 fl w-100 w-50-l pl0 pl2-l">
                  <h2 className="f4 f2-ns fw6 mb2">Documentation</h2>
                  <p className="f5 measure lh-copy mt0">
                    Each module is carefully documented. From stats about the size of the module,
                    to how each css class will render to the screen.
                  </p>
                </article>
              </div>
              <div className="cf">
                <article className="pv2 fl w-100 w-50-l pr0 pr2-l">
                  <h2 className="f4 f2-ns fw6 mb2">Functional</h2>
                  <p className="f5 measure lh-copy mt0">
                    It’s easy to build components with Tachyons so
it works well with Rails, React, Ember, Elm, Angular, Static html,
and more.
                  </p>
                </article>
                <article className="pv2 fl w-100 w-50-l pl0 pl2-l">
                  <h2 className="f4 f2-ns fw6 mb2">Multiple Flavors</h2>
                  <p className="f5 measure lh-copy mt0">
                    Don’t like the class names? We’ve got <a className="black dim" href="https://github.com/tachyons-css/tachyons-verbose">a more verbose version you might like</a>.
                    Want to use Sass instead of Postcss? <a className="black dim" href="http://github.com/tachyons-css/tachyons-sass">We‘ve got a repo for that too :)</a> Tachyons isn’t just a css toolkit. It’s a design system. Utilized here in a <a className="black dim" href="https://github.com/tachyons-css/react-native-style-tachyons">react native boilerplate.</a>
                  </p>
                </article>
              </div>
              <div className="cf">
                <article className="pv2 fl w-100 w-50-l pr0 pr2-l">
                  <h2 className="f4 f2-ns fw6 mb2">Shallow Cascade</h2>
                  <p className="f5 measure lh-copy mt0">
                    Don’t let the cascade slow you down. When you apply a class
                    to an element, there is nothing in the cascade to override
                    its effects. You get rapid feedback on how your css is
                    affecting your markup without wasting time debugging why your
                    styles are being overridden.
                  </p>
                </article>
                <article className="pv2 fl w-100 w-50-l pl0 pl2-l">
                  <h2 className="f4 f2-ns fw6 mb2">Low Specificity</h2>
                  <p className="f5 measure lh-copy mt0">
                    The majority of Tachyons selectors have a specificity of
                    10. Tachyons won’t override your existing styles. So feel
                    free to lay it on top of your existing css.
                  </p>
                </article>
              </div>
              <div className="cf">
                <article className="pv2 fl w-100 w-50-l pr0 pr2-l">
                  <h2 className="f4 f2-ns fw6 mb2">Accessible Color Palette</h2>
                  <p className="f5 measure lh-copy mt0">
                    Over 480 accessible color combinations.
                  </p>
                </article>
                <article className="pv2 fl w-100 w-50-l pl0 pl2-l">
                  <h2 className="f4 f2-ns fw6 mb2">Mobile-first architecture </h2>
                  <p className="f5 measure lh-copy mt0">
                    Base classes are mobile by default. Can be overridden by
                    namespaced classes targeting larger breakpoints.
                  </p>
                </article>
              </div>
              <div className="cf">
                <article className="pv2 fl w-100 w-50-l pr0 prl-ns">
                  <h2 className="f4 f2-ns fw6 mb2">
                    Layout debugging
                  </h2>
                  <p className="f5 measure lh-copy mt0">
                    Small css modules for debugging stacking and layout issues.
                    Can easily be turned on or off during development.
                  </p>
                </article>
                <article className="pv2 fl w-100 w-50-l pl0 pl2-l">
                  <h2 className="f4 f2-ns fw6 mb2">
                    Composable classes
                  </h2>
                  <p className="f5 measure lh-copy mt0">
                    Construct anything from complex layouts to responsive components with a series of
                    single purpose classes.
                  </p>
                </article>
              </div>
              <div className="cf">
                <article className="pv2 fl w-100 w-50-l pr0 pr2-l">
                  <h2 className="f4 f2-ns fw6 mb2">Cohesive design system</h2>
                  <p className="f5 measure lh-copy mt0">
                    Scale based on the powers of two. Starting at .25
                  </p>
                </article>
                <article className="pv2 fl w-100 w-50-l pl0 pl2-l">
                  <h2 className="f4 f2-ns fw6 mb2">Responsive Grid</h2>
                  <p className="f5 measure lh-copy mt0">
                    Infinitely nestable. Fully fluid. Extremely light-weight.
                  </p>
                </article>
              </div>
              <div className="cf">
                <article className="pv2 fl w-100 w-50-l pr0 pr2-l">
                  <h2 className="f4 f2-ns fw6 mb2">
                    Runs on <a href="https://github.com/postcss/postcss" className="link dim near-black">Postcss</a>
                  </h2>
                  <p className="mv0 f5 lh-copy measure">
                    A flexible plugin framework for post-processing css.
                    <a href="https://github.com/postcss/postcss" className="
                      dim f6 db black">View on GitHub</a>
                  </p>
                </article>
                <article className="pv2 fl w-100 w-50-l pl0 pl2-l">
                  <h2 className="f4 f2-ns fw6 mb2">
                    Easy to Customize and extend
                  </h2>
                  <p className="f5 measure lh-copy mt0">
                    Tachyons is meant to be edited and customized to meet the
                    needs of your project. It’s just css. It isn’t precious.
                    Don’t be afraid to change: class names, media queries,
                    breakpoints, or values.
                  </p>
                </article>
              </div>
            </div>
          </section>

      </div>
    );
  }
}

export default IndexPage
