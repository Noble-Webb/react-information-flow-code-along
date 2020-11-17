// For information to propagate down the component tree, parents pass props to their children
// For information to propagate up the component tree, we typically invoke callbacks that were passed from parents to children as props
// Components of the same level (sibling components) cannot communicate directly! We can only communicate up and down the component tree. So if multiple components need to share the same information, that state should live in the parent (or a more general ancestor) component.

import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

// pass handleColorChange and childColor props into a React event handler.

class Child extends Component {
  render() {
    console.log(this.props)
    // function that invokes this.props.handleColorChange and passes in a random color as the argument
    return (
      <div onClick={this.props.handleColorChange(getRandomColor())}
        className="child"
        style={{backgroundColor: this.props.color}}
      ></div>
    )
  }
}

export default Child
