import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  //TODO
  ...state.voiceReducer
})

class WebspeechLog extends Component {
  render() {

    return (
      <h1>{JSON.stringify(this.props)}</h1>
    )
  }
}

export default connect(mapStateToProps)(WebspeechLog)
