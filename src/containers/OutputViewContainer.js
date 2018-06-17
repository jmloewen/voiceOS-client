import React, { Component } from 'react'
import { connect } from 'react-redux'
import OutputView from '../components/OutputView'

// want to render showimagedetail here.
const mapStateToProps = (state) => ({
  imageUrl: state.socketReducer.imageUrl,
  speechText: state.voiceReducer.speechText,
  response: state.socketReducer.response
})

class OutputViewContainer extends Component {
  componentDidUpdate () {
    if (this.props.speechText) {
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(this.props.speechText))
    }
  }

  render () {
    console.log('ImageUrl:', this.props.imageUrl)
    let directory = this.props.response &&
    this.props.response.state &&
    this.props.response.state.directory
    return (
      <OutputView
        imageUrl={this.props.imageUrl}
        currentDirectory={directory} />
    )
  }
}

export default connect(mapStateToProps)(OutputViewContainer)
