import React, { Component } from 'react'
import OutputViewContainer from './OutputViewContainer'
import InputViewContainer from './InputViewContainer'
import WebspeechLogContainer from './WebspeechLogContainer'
import SocketContainer from './SocketContainer'

class VoiceOSClient extends Component {
  render () {
    return (
      <div className='ClientLayout'>
        <OutputViewContainer />
        <SocketContainer />
        <InputViewContainer />
        <WebspeechLogContainer />
      </div>
    )
  }
}

export default VoiceOSClient
