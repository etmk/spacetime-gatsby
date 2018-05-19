import React from 'react'

/**
 * PricingTable.Column react component
 *
 * This component uses the compact style which is preferable for
 * stateless components - i.e. those whose rendered output is entirely
 * dictated by props and not state.
 */

export default ({
  icon,
  title,
  columnWidth,
  items,
  price,
  children
}) =>
  <div className={columnWidth || 'w-30'}>
    <div className="bg-fog-white ph2 pv5 br1 ba b--black-10">
      <span className="f2 tc db">{icon}</span>
      <h2 className="tc">{title}</h2>
      {children}
      <ul className="system-sans o-70 lh-copy dark-purple f6 fw5 mv4 mh0 ph5">
        {items && items.map((item, i) =>
          <li className="mv1" key={i}>
            {item}
          </li>
        )}
      </ul>
      <span className="db tc ttu fw7 f6 tracked">{price}</span>
    </div>
  </div>
