import React from 'react'

import mantra from '../../../data/mantra-data.json'

class TeamMantra extends React.Component {

  render() {
    return (

      <div>
        <h1
          className="f1 f-headline-l lh-tight tracked-tight"
          dangerouslySetInnerHTML={{ __html: mantra.title }}
        />

        <ol className="list pl0 flex-ns flex-wrap-ns">
          {mantra.list.map(mantra => (
            <li className="pr4-ns w-50-ns" key={mantra.title}>
              <div className="pv4 bt">
                <h3 className="measure-narrow db f2 mt0 mb4 pr3-l tracked-light">{mantra.title}</h3>
                <p className="black-90 system-sans f5 db">{mantra.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

    );
  }
}

export default TeamMantra
