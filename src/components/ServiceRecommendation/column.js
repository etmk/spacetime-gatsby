import React from 'react'

/**
 * ServiceRecommendation.Column react component
 * 
 * This component uses the compact style which is preferable for
 * stateless components - i.e. those whose rendered output is entirely
 * dictated by props and not state.
 */
export default ({
  header,
  columnWidth,
  // items can be a react component
  items,
  // <Column>/* The children go here */</Column>
  children
}) => 
  <div className={columnWidth || 'w-50'}>
    <h5 className="ttu f6 fw7 tracked">{ header || 'Best for ⭐️'}</h5>
    {children}
    <ul className="system-sans o-70 lh-copy dark-purple f6 fw5 mv4">
      {items && items.map((item, i) => 
        <li className="mv1" key={i}>
          {item}
        </li>
      )}
    </ul>
  </div>