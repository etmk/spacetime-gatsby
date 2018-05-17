import React from 'react'

class ServiceRecommendation extends React.Component {

  render() {
    return (

      <div className="flex justify-between bt b--black-20 pv3 mv5">
        <div className="w-50">
          <h5 className="ttu f6 fw7 tracked">Best for ⭐️</h5>
          <ul className="system-sans o-70 lh-copy dark-purple f6 fw5 mv4">
            <li className="mv1">The idea and audience are already validated</li>
            <li className="mv1">Creating a product based on your own experience</li>
            <li className="mv1">
              Solving old problems in new ways
              <ul>
                <li>Like building software to replace spreadsheet tasks; or applying on-demand services with consumer needs</li>
              </ul>
            </li>
            <li className="mv1">Tackling a problem within a budget</li>
          </ul>
        </div>
        <div className="w-50">
          <h5 className="ttu f6 fw7 tracked">Not for 🚫</h5>
          <ul className="system-sans o-70 lh-copy dark-purple f6 fw5 mv4">
            <li className="mv1">Projects that take longer than 3 months and millions of dollars</li>
            <li className="mv1">Businesses producing physical consumer goods (clothing, food products, etc)</li>
            <li className="mv1">Persnickety founders that are unwilling to compromise</li>
          </ul>
        </div>
      </div>

    );
  }
}

export default ServiceRecommendation
