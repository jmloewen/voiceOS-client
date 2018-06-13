import React, { Component } from 'react'
import { connect } from 'react-redux'
import ServerStatus from './ServerStatus'
import VoiceButton from './VoiceButton'

const mapStateToProps = (state) => ({
  // TODO
})

const styles={
  inputContainer: {
    border: '1px solid black',
    float:'left',
    position:'relative',
    top:'400px',
    width:'40%',
    padding:'10px',
    flex:'1'
  }
}

class InputView extends Component {
  render() {

    return (
      <div style={styles.inputContainer} className='inputContainer'>
        <h2>I am InputView</h2>
        <ServerStatus />
        <VoiceButton />
      </div>
    )
  }
}

export default connect(mapStateToProps)(InputView)
