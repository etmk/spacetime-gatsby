import React from 'react'
import { Link } from "gatsby"

class ServiceCard extends React.Component {

  render() {
    return (
      <div className={`${this.props.containerClass}`}>
        <Link
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

        </Link>
      </div>
    );
  }
}

export default ServiceCard
