import React, { Component } from 'react'
import { connect } from 'react-redux'
import ServerStatus from './ServerStatus'
import VoiceButton from './VoiceButton'

const mapStateToProps = (state) => ({
  // TODO
})

class InputView extends Component {
  render () {
    return (
      <div className='InputView'>
        <h1>I am InputView</h1>
        <ServerStatus />
        <VoiceButton />
      </div>
    )
  }
}

export default connect(mapStateToProps)(InputView)
