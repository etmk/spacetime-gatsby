import React from 'react'

import Column from './column'

class ServiceRecommendation extends React.Component {

  render() {
    const { forColumn, notForColumn } = this.props

    return (

      <div className="flex justify-between bt b--black-20 pv3 mv5">
        <Column 
          header={'Best for ⭐️'}
          items={forColumn}
          />
        <Column
          header={'Not for 🚫'}
          items={notForColumn}
          />
      </div>

    );
  }
}

export default ServiceRecommendation
