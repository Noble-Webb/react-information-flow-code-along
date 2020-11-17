import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

// Now, we could put some state in our Child component to keep track of its color. However, React components cannot pass data between 'sibling' components. Data can only flow up and down between parent/child. So if we update the color of one Child component, we have no way to pass that data to the other Child component. The solution is to store the color of the Child in the state of the Parent component. Then, we let the Parent component handle the passing of that data to each of it's children components.

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childrenColor: '#FFF'
    }
  }
  // set the state in an instance method
  // change not just the color state, but also the childrenColor. To practice sending data back to the parent, let's change our changeColor to take in an argument of newChildColor.

  changeColor = (newChildColor) => {
    this.setState({
      color: getRandomColor(),
      childrenColor: newChildColor
    })
  }

  // To run this changeColor() method when either Child component is clicked pass this state changing function as a prop to both Child components.

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child color={this.state.childrenColor} handleColorChange={this.changeColor}/>

        <Child color={this.state.childrenColor} handleColorChange={this.changeColor}/>
      </div>
    )
  }
}

export default Parent
