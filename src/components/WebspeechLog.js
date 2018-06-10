import React, { Component } from 'react'
import { connect } from 'react-redux'
import {componentViewStyles} from '../constants';

const mapStateToProps = (state) => ({
  // TODO
  ...state.voiceReducer
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
        <h2 style={webspeechTitle}>{JSON.stringify(this.props)}</h2>
        <p style={webspeechOutput}>This is Output</p>
      </div>
    )
  }
}

export default connect(mapStateToProps)(WebspeechLog)
