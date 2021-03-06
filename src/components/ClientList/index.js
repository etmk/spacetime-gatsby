import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import clients from '../../../data/clients-data.json'

const ClientList = () => (
  <ul className="list ma0 pa0 tc">
    {clients.clients.map(client => (
      <li key={client.name} className="dib w-25-m w-33 w-20-l pa2 pa4-l tc">

        {client.url.length > 0 ? (
          <OutboundLink href={client.url} target="_blank" className="o-40 hover-o-100">
            <span className="clip">{client.name}</span>
            <img src={`${client.logo}`} alt={`${client.name} logo`} />
          </OutboundLink>
        ) :
          <div className="o-40 hover-o-100">
            <span className="clip">{client.name}</span>
            <img src={`${client.logo}`} alt={`${client.name} logo`} />
          </div>
        }

      </li>
    ))}
  </ul>
)

export default ClientList
