import React, { Component } from 'react'
import { connect } from 'react-redux'
import {componentViewStyles} from '../constants';

const mapStateToProps = (state) => ({
  //TODO
})

class InputView extends Component {
  render() {

    const {
      inputContainer,
      inputHeader,
      inputButton
    } = componentViewStyles;


    return (
      <div style={inputContainer}>
        <h2 style={inputHeader}>Tap & Speak</h2>
        <button style={inputButton}>Voice Button</button>
      </div>
    )
  }
}

export default connect(mapStateToProps)(InputView)
