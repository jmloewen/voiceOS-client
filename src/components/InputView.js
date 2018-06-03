import React, { Component } from 'react'
import { connect } from 'react-redux'
import {componentViewStyles} from '../constants';

const mapStateToProps = (state) => ({
  //TODO
})

class InputView extends Component {
  render() {

    const {
      inputStyle
    } = componentViewStyles;


    return (
      <h1 style={inputStyle}>I am InputView</h1>
    )
  }
}

export default connect(mapStateToProps)(InputView)
