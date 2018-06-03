import React, { Component } from 'react'
import { connect } from 'react-redux'
import {componentViewStyles} from '../constants';

const mapStateToProps = (state) => ({
  //TODO
})

class WebspeechLog extends Component {
  render() {

    const {
      webspeechStyle
    } = componentViewStyles;
    return (
      <h1 style={webspeechStyle}>I am WebspeechLog</h1>
    )
  }
}

export default connect(mapStateToProps)(WebspeechLog)
