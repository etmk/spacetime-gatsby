import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const ClientList = ({clients}) => (
  <ul className="list ma0 pa0 tc">
    {clients.map(client => (
      <li key={client.name} className="dib w-25-m w-33 pa2">
        <OutboundLink href={client.url} target="_blank" className="dim">
          <span className="clip">{client.name}</span>
          <img src={`${client.logo}`} alt="" className="" />
        </OutboundLink>
      </li>
    ))}
  </ul>
)

export default ClientList
