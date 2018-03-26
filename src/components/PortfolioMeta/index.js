import React from 'react'

class PortfolioMeta extends React.Component {
  render() {
    return (
      <div
        style={{backgroundColor: `${this.props.bgColor}`}}>
        <div className="row mw8 pv4 flex justify-between white">
          <div>
            <span className="ttu f7 fw6 white-80 tracked mb3 dib">{this.props.label1}</span>
            <h5 className="f5 ma0">{this.props.text1}</h5>
          </div>
          <div>
            <span className="ttu f7 fw6 white-80 tracked mb3 dib">{this.props.label2}</span>
            <h5 className="f5 ma0">{this.props.text2}</h5>
          </div>
          <div>
            <span className="ttu f7 fw6 white-80 tracked mb3 dib">{this.props.label3}</span>
            <h5 className="f5 ma0">{this.props.text3}</h5>
          </div>
          <div>
            <a href=""
               className="f7 fw6 link dim ph3 pv3 dib bg-white black-80"
               style={{backgroundColor: `${this.props.buttonColor}`}}>
               {this.props.buttonText}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioMeta
