import React, { Component } from 'react'
import { connect } from 'react-redux'
import {componentViewStyles} from '../constants';

const mapStateToProps = (state) => ({
  //TODO
})

class OutputView extends Component {
  render() {

    const {
      outputStyle,
    } = componentViewStyles;

    return (
      <h1 style={outputStyle}>I am OutputView</h1>
    );
  }
}

export default connect(mapStateToProps)(OutputView)
