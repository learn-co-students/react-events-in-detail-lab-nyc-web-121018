// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  render() {
    console.log(this.props.onReceiveCoordinates('test'));
    return (
      <button
        onClick={e => this.props.onReceiveCoordinates([e.clientX, e.clientY])}
      >
        Coordinates
      </button>
    );
  }
}
