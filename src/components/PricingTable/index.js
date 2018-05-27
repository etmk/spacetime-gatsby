import React from 'react'

/**
 * PricingTable.Column react component
 *
 * This component uses the compact style which is preferable for
 * stateless components - i.e. those whose rendered output is entirely
 * dictated by props and not state.
 */

export default ({
  featured,
  icon,
  title,
  columnWidth,
  items,
  price,
  children
}) =>
  <div className={columnWidth || 'w-30'}>

    {featured ? (

      <div className="bg-washed-blue ph2 pv5 br1 ba b--blue relative">
        <div className="fw7 tc br-100 w3 h3 flex white bg-blue dib absolute top--1 right--1 v-mid">
          <p className="dib sans-serif white f8 ttu ma0 lh-title vh-center">Most Popular</p>
        </div>
        <span className="f2 tc db">{icon}</span>
        <h2 className="tc">{title}</h2>
        {children}
        <ul className="list tc system-sans o-70 lh-solid dark-purple f6 fw5 mv4 mh0 ph5">
          {items && items.map((item, i) =>
            <li
              key={i}
              className="mv2"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          )}
        </ul>
        <span className="db tc ttu fw7 f6 tracked">{price}</span>
      </div>

    ) :

      <div className="bg-white ph2 pv5 br1 ba b--black-10">
        <span className="f2 tc db">{icon}</span>
        <h2 className="tc">{title}</h2>
        {children}
        <ul className="list tc system-sans o-70 lh-solid dark-purple f6 fw5 mv4 mh0 ph5">
          {items && items.map((item, i) =>
            <li
              key={i}
              className="mv2"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          )}
        </ul>
        <span className="db tc ttu fw7 f6 tracked">{price}</span>
      </div>

    }

  </div>
