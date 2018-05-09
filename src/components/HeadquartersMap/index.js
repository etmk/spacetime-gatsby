import React from 'react'

class HeadquartersMap extends React.Component {

  render() {
    return (
      <section>

        <iframe id="map" className="map_canvas w-100 bn h6" src="https://snazzymaps.com/embed/70104" allowFullScreen></iframe>

      </section>
    );
  }
}

export default HeadquartersMap
