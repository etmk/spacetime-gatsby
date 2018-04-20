import React from 'react'

class ServiceRecommendation extends React.Component {

  render() {
    return (

      <div className="flex justify-between bt b--black-20 pv3 mv5">
        <div className="w-50">
          <h5 className="ttu f6 fw7 tracked">Best for ⭐️</h5>
          <ul className="system-sans o-70 lh-copy dark-purple f6 fw5 mv4">
            <li className="mv1">Exploring a business problem</li>
            <li className="mv1">Raising venture capital</li>
            <li className="mv1">Validating a target market</li>
            <li className="mv1">Getting started without building an MVP</li>
          </ul>
        </div>
        <div className="w-50">
          <h5 className="ttu f6 fw7 tracked">Not for 🚫</h5>
          <ul className="system-sans o-70 lh-copy dark-purple f6 fw5 mv4">
            <li className="mv1">Accelerated growth</li>
            <li className="mv1">Calculatable ROI scenarios</li>
            <li className="mv1">Long-term engagements</li>
          </ul>
        </div>
      </div>

    );
  }
}

export default ServiceRecommendation
