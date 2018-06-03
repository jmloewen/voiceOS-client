import React, { Component } from 'react'
import { connect } from 'react-redux'

import OutputViewContainer from './OutputViewContainer'
import InputViewContainer from './InputViewContainer'
import WebspeechLogContainer from './WebspeechLogContainer'

class VoiceOSClient extends Component {
  render() {
    return (
      <div className='ClientLayout'>
        <OutputViewContainer/>
        <InputViewContainer/>
        <WebspeechLogContainer/>
      </div>
    )
  }
}

export default VoiceOSClient
