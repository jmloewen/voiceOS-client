import React, { Component } from 'react'
import { connect } from 'react-redux'
import OutputView from '../components/OutputView'


//want to render showimagedetail here.
const mapStateToProps = (state) => ({
  imageUrl:state.socketReducer.imageUrl,
  speechText:state.voiceReducer.speechText
})

class OutputViewContainer extends Component {

  componentDidUpdate(){
    if (this.props.speechText){
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(this.props.speechText))
    }
  }

  render() {
    console.log("ImageUrl:", this.props.imageUrl)
    return (
      <OutputView />
    )
  }
}

export default connect(mapStateToProps)(OutputViewContainer)
