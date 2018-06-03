import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  //TODO
})

class WebspeechLog extends Component {
  render() {
    return (
      <h1>I am WebspeechLog</h1>
    )
  }
}

export default connect(mapStateToProps)(WebspeechLog)
