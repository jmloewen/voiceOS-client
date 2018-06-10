import React, { Component } from 'react'
import { connect } from 'react-redux'
import {componentViewStyles} from '../constants';

const mapStateToProps = (state) => ({
  //TODO
})

class WebspeechLog extends Component {
  render() {
    const {
      webspeechContainer,
      webspeechTitle,
      webspeechOutput
    } = componentViewStyles;
    return (
      <div style={webspeechContainer}>
        <h2 style={webspeechTitle}>I am WebspeechLog</h2>
        <p style={webspeechOutput}>This is Output</p>
      </div>
    )
  }
}

export default connect(mapStateToProps)(WebspeechLog)
