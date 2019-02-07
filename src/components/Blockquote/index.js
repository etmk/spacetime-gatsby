import React from 'react'

class Blockquote extends React.Component {
  render() {
    return (
      <div className="BlockquoteComponent">
        {this.props.children}
      </div>
    );
  }
}

export default Blockquote
