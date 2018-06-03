import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  //TODO
})

class VoiceButton extends Component {
  render() {
    return (
      <div className='VoiceButton'>
        <button>Voice!</button>
      </div>
    )
  }
}

export default connect(mapStateToProps)(VoiceButton)
