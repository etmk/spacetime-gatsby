import React from 'react'

import clients from '../../../data/clients-data.json'

const ClientList = () => (
  <ul className="list ma0 pa0 tc">
    {clients.clients.map(client => (
      <li key={client.name} className="dib w-25-m w-33 pa2">
        <a href={client.url} target="_blank" className="dim">
          <span className="clip">{client.name}</span>
          <img src={`${client.logo}`} alt="" className="" />
        </a>
      </li>
    ))}
  </ul>
)

export default ClientList
