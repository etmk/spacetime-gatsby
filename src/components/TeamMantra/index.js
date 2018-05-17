import React from 'react'

const mantras = [
  {
    title: 'Love What You Do, Do What You Love',
    text: 'What other reason is there?'
  }, {
    title: 'Prototypes are Practical',
    text: 'Websites and apps are not pretty pictures made in Photoshop. They are living, fluid interactive experiences. Static design is needed for direction but is not the end goal. Prototypes provide a more accurate view into how a product should feel and function.'
  }, {
    title: 'Something is Better Than Nothing',
    text: 'Something can be used. Something can be tested. Something can provide value. Waiting for the "right" moment, or for your product to be "perfect" is never going to happen. Get something in front of your customers, then start iterating.'
  }, {
    title: 'Software is Never Finished',
    text: 'Software development never ends, there is never a ship date with a launch where you never have to touch it again, just watch the machine print money. That\'s not going to happen. Software requires constand input, updates, testing, and refinement to succeed.'
  }, {
    title: 'Design is Essential',
    text: 'Everything has been designed. The question is whether it is designed well or by lack of implicite focus designed poorly. Good design goes beyond the visual, into the functional and emotional response.'
  }, {
    title: 'Process Makes Perfect',
    text: 'Good products don\'t happen by accident. Discipline and planning are necessary for success. Products are not made by magic, but by thoughtful, time-tested processes.'
  }
];

class TeamMantra extends React.Component {

  render() {
    return (

      <div>
        <h1 className="f1 f-headline-l lh-tight tracked-tight">Mantras &amp; <br />Maxims</h1>

        <ol className="list pl0 flex-ns flex-wrap-ns">
          {mantras.map(mantra => (
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
