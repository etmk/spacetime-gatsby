import React from 'react'

const ClientData = [
  {
    name: "Verizon",
    url: "https://www.verizonwireless.com/",
    logo: "/client-logos/verizon-logo.png"
  }, {
  //   name: "MadMen",
  //   url: "http://www.amc.com/shows/mad-men",
  //   logo: "/client-logos/madmen-logo.png"
  // }, {
  //   name: "Frito Lay",
  //   url: "https://www.fritolay.com/",
  //   logo: "/client-logos/frito-lay-logo.png"
  // }, {
  //   name: "Allergan",
  //   url: "https://www.allergan.com/home",
  //   logo: "/client-logos/allergan-logo.png"
  // }, {
    name: "Aryaka",
    url: "https://www.aryaka.com/",
    logo: "/client-logos/aryaka-logo.png"
  }, {
  //   name: "Garth Brooks",
  //   url: "https://www.garthbrooks.com/",
  //   logo: "/client-logos/garth-brooks-logo.png"
  // }, {
  //   name: "AMCtv",
  //   url: "http://www.amc.com/",
  //   logo: "/client-logos/amc-logo.png"
  // }, {
  //   name: "Casting Crowns",
  //   url: "https://castingcrowns.com/",
  //   logo: "/client-logos/casting-crowns-logo.png"
  // }, {
    name: "GKPN Connect",
    url: "http://gkpnconnect.com/",
    logo: "/client-logos/gkpn-connect-logo.png"
  }, {
  //   name: "AMC Networks",
  //   url: "http://www.amcnetworks.com/",
  //   logo: "/client-logos/amc-networks-logo.png"
  // }, {
    name: "Christian Vision",
    url: "https://www.cvglobal.co/",
    logo: "/client-logos/cv-logo.png"
  }, {
  //   name: "IFC",
  //   url: "https://www.ifc.com/",
  //   logo: "/client-logos/ifc-logo.png"
  // }, {
  //   name: "SundanceTV",
  //   url: "https://www.sundancetv.com/",
  //   logo: "/client-logos/sundance-tv-logo.png"
  // }, {
    name: "Dude Perfect",
    url: "http://dudeperfect.com/",
    logo: "/client-logos/dude-perfect-logo.png"
  }, {
  //   name: "Jeremy Camp",
  //   url: "http://www.jeremycamp.com/",
  //   logo: "/client-logos/jeremy-camp-logo.png"
  // }, {
    name: "She Works His Way",
    url: "https://sheworkshisway.com/",
    logo: "/client-logos/swhw-logo.png"
  }, {
  //   name: "WEtv",
  //   url: "http://www.wetv.com/",
  //   logo: "/client-logos/we-tv-logo.png"
  // }, {
    name: "Keyzie",
    url: "https://www.keyzie.com/",
    logo: "/client-logos/keyzie-logo.png"
  }, {
  //   name: "The Band Perry",
  //   url: "https://www.thebandperry.com/",
  //   logo: "/client-logos/the-band-perry-logo.png"
  // }, {
  //   name: "Third Day",
  //   url: "http://www.thirdday.com/",
  //   logo: "/client-logos/third-day-logo.png"
  // }, {
  //   name: "Kip Moore",
  //   url: "http://www.kipmoore.net/",
  //   logo: "/client-logos/kip-moore-logo.png"
  // }, {
    name: "The Heights Church",
    url: "http://www.theheights.org/",
    logo: "/client-logos/the-heights-logo.png"
  }, {
    name: "My Utilities",
    url: "https://myutilities.com/",
    logo: "/client-logos/my-utilities-logo.png"
  }, {
    name: "Lead 5",
    url: "https://lead5.com/",
    logo: "/client-logos/lead-5-logo.png"
  }, {
    name: "T Mobile",
    url: "https://www.t-mobile.com/",
    logo: "/client-logos/tmobile-logo.png"
  }, {
    name: "Steadkey",
    url: "https://www.steadkey.com/",
    logo: "/client-logos/steadkey-logo.png"
  }, {
    name: "LeadChange",
    url: "http://leadchange.net/",
    logo: "/client-logos/lead-change-logo.png"
  }, {
    name: "Watermark Community Church",
    url: "http://www.watermark.org/",
    logo: "/client-logos/watermark-logo.png"
  }, {
  //   name: "Steven Curtis Chapman",
  //   url: "http://stevencurtischapman.com/",
  //   logo: "/client-logos/steven-curtis-chapman-logo.png"
  // }, {
    name: "Lync Cycling",
    url: "http://lynccycling.com/",
    logo: "/client-logos/lync-cycling-logo.png"
  }, {
    name: "Wefunder",
    url: "https://wefunder.com/",
    logo: "/client-logos/wefunder-logo.png"
  }, {
    name: "StudioHop",
    url: "https://www.studiohopfitness.com/",
    logo: "/client-logos/studiohop-logo.png"
  }, {
  //   name: "Alice Cooper",
  //   url: "http://www.alicecooper.com/",
  //   logo: "/client-logos/alice-cooper-logo.png"
  // }, {
    name: "Armor Hosting",
    url: "https://www.armor.com/",
    logo: "/client-logos/armor-hosting-logo.png"
  }
]

const ClientList = () => (
  <ul className="list ma0 pa0 tc">
    {ClientData.map(client => (
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
