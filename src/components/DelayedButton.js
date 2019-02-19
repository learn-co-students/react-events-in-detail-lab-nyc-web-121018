// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {

  constructor(props){
    super(props)
  }

  handleClick = (event) => {
    event.persist()
    setTimeout( () => this.props.onDelayedClick(event), this.props.delay)
  }

  render() {
    return (
      <button id="delayed" type="button" onClick={this.handleClick}>Delay Me!</button>
    )
  }
}


export default DelayedButton
