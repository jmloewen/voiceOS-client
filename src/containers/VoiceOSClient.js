import React, { Component } from 'react'
import { connect } from 'react-redux'
import OutputViewContainer from './OutputViewContainer'
import InputViewContainer from './InputViewContainer'
import WebspeechLogContainer from './WebspeechLogContainer'

const getStyles = () => ({
  temp:{
    float:'left'
  }
})

const VoiceOSClient = () => {
  const styles = getStyles()


    return (
      <div className='ClientLayout'>
        <OutputViewContainer style={styles.temp}/>
        <InputViewContainer/>
        <WebspeechLogContainer/>
      </div>
    )
}

export default VoiceOSClient
