import React, { Component } from 'react'
import { connect } from 'react-redux'
import {componentViewStyles} from '../constants'
import ServerStatus from './ServerStatus'
import VoiceButton from './VoiceButton'

const mapStateToProps = (state) => ({
  // TODO
})

class InputView extends Component {
  render() {

    const {
      inputContainer,
      inputHeader,
      inputButton
    } = componentViewStyles;


    return (
      <div className='inputContainer'>
        <h2>I am InputView</h2>
        <ServerStatus style={inputHeader} />
        <VoiceButton style={inputButton} />
      </div>
    )
  }
}

export default connect(mapStateToProps)(InputView)
