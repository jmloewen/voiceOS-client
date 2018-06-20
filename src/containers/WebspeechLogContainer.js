import React, { Component } from 'react'
import { connect } from 'react-redux'
import WebspeechLog from '../components/WebspeechLog'

class WebspeechLogContainer extends Component {
  render() {
    return (
      <WebspeechLog recognizedText={this.props.recognizedText}/>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.voiceReducer
})

export default connect(mapStateToProps)(WebspeechLogContainer)
