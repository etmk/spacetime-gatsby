import React from 'react'

const ClientData = [
  {
    name: "Verizon",
    url: "https://www.verizonwireless.com/",
    logo: "client-logos/verizon-logo.png"
  }, {
    name: "MadMen",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/madmen-logo.png"
  }, {
    name: "Frito Lay",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/frito-lay-logo.png"
  }, {
    name: "Allergan",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/allergan-logo.png"
  }, {
    name: "Aryaka",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/aryaka-logo.png"
  }, {
    name: "Garth Brooks",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/garth-brooks-logo.png"
  }, {
    name: "AMCtv",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/amc-logo.png"
  }, {
    name: "Casting Crowns",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/casting-crowns-logo.png"
  }, {
    name: "GKPN Connect",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/gkpn-connect-logo.png"
  }, {
    name: "AMC Networks",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/amc-networks-logo.png"
  }, {
    name: "Christian Vision",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/cv-logo.png"
  }, {
    name: "IFC",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/ifc-logo.png"
  }, {
    name: "SundanceTV",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/sundance-tv-logo.png"
  }, {
    name: "Dude Perfect",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/dude-perfect-logo.png"
  }, {
    name: "Jeremy Camp",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/jeremy-camp-logo.png"
  }, {
    name: "She Works His Way",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/swhw-logo.png"
  }, {
    name: "WEtv",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/we-tv-logo.png"
  }, {
    name: "Keyzie",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/keyzie-logo.png"
  }, {
    name: "The Band Perry",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/the-band-perry-logo.png"
  }, {
    name: "Third Day",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/third-day-logo.png"
  }, {
    name: "Kip Moore",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/kip-moore-logo.png"
  }, {
    name: "The Heights Church",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/the-heights-logo.png"
  }, {
    name: "My Utilities",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/my-utilities-logo.png"
  }, {
    name: "Lead 5",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/lead-5-logo.png"
  }, {
    name: "T Mobile",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/tmobile-logo.png"
  }, {
    name: "Steadkey",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/steadkey-logo.png"
  }, {
    name: "LeadChange",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/lead-change-logo.png"
  }, {
    name: "Watermark Community Church",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/watermark-logo.png"
  }, {
    name: "Steven Curtis Chapman",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/steven-curtis-chapman-logo.png"
  }, {
    name: "Lync Cycling",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/lync-cycling-logo.png"
  }, {
    name: "Wefunder",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/wefunder-logo.png"
  }, {
    name: "StudioHop",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/studiohop-logo.png"
  }, {
    name: "Alice Cooper",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/alice-cooper-logo.png"
  }, {
    name: "Armor Hosting",
    url: "http://www.amc.com/shows/mad-men",
    logo: "client-logos/armor-hosting-logo.png"
  }
]

const ClientList = () => (
  <ul>
    {ClientData.map(client => (
      <li key={client.name}>
        <span className="clip">{client.name}</span>
        <img src={`${client.logo}`} alt="" className="" />
      </li>
    ))}
  </ul>
)

export default ClientList
