import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"

class ServicePagePagination extends React.Component {

  render() {
    return (
      <section className="pv5 pv6-ns">
        <div className="row flex">

            <div className="w-50 pr2">
              <AniLink
                cover
                direction="left"
                bg="#efefed"
                to={`/services/`}
                title="Services"
                className={`ServiceCard grow`}
                style={{backgroundColor: `#efefed`}}
              >

                <div>
                  <span className="ServiceCard__icon">
                    ←
                  </span>
                  <h2 className="ServiceCard__title">
                    Back to all Spacetime Services
                  </h2>
                </div>

              </AniLink>
            </div>

            <div className="w-50 pl2">
              <AniLink
                cover
                direction="up"
                bg={this.props.bgColor}
                to={`/services/${this.props.name}/`}
                title={this.props.title}
                className={`ServiceCard grow`}
                style={{backgroundColor: `${this.props.bgColor}`}}
              >

                <div>
                  {this.props.icon.length > 0 ? (
                    <span className="ServiceCard__icon">
                      {this.props.icon}
                    </span>
                  ) :
                    <img
                      src={this.props.iconPath}
                      alt={`${this.props.title} logo`}
                      style={{maxWidth: `2rem`}} />
                  }

                  <h2 className="ServiceCard__title">
                    {this.props.title}&mdash;
                    <span
                      className="o-40"
                      dangerouslySetInnerHTML={{__html: this.props.description}}
                    />
                  </h2>
                </div>

                <span className="ServiceCard__cta">
                  {this.props.cta}<br />
                  <span className="arrow-decorator" />
                </span>

              </AniLink>
            </div>

          </div>
        </section>
    );
  }
}

export default ServicePagePagination
