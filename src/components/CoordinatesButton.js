// Code CoordinatesButton Component Here
import React, { Component } from "react";

class CoordinatesButton extends Component {
  handleClick = e => {
    let coords = [e.clientY, e.clientX];
    return this.props.onReceiveCoordinates(coords);
  };

  render() {
    return <button onClick={this.handleClick}>Button</button>;
  }
}

export default CoordinatesButton;
