import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  cb = (coords) => this.props.onReceiveCoordinates(coords)

  handelClick = e => {
    let xAndY = [e.clientX, e.clientY]
    this.cb(xAndY)
  }

  render(){
    return(
      <button
        onClick = {this.handelClick}
      >
        Coordinates Button
      </button>
    )
  }
}
