import React, { Component } from 'react';

export default class DelayedButton extends Component {

  handelClick = e => {
    e.persist()
    let cb = (event) => this.props.onDelayedClick(event)
    setTimeout(() => {cb(e)}, this.props.delay);
  }

  render(){
    return(
      <button
        onClick = {this.handelClick}
      >
        Delay Button
      </button>
    )
  }
}
