import React, { Component } from 'react';
import { recognize, changeRecordingState } from '../actions/VoiceAction'
import SpeechRecognitionService from '../utils/SpeechRecognitionService';
import { connect } from 'react-redux';

const styles = {
  voiceButton:{
    border: '1px solid black',
    borderRadius: 5,
    fontSize: 16,
    width: 200,
    height: 55,
    marginLeft: '30%',
    marginRight: '30%',
  }
}

class VoiceButton extends Component {

  componentDidMount() {
    this.recognition = new SpeechRecognitionService();
    this.recognition.onEnd(() => {
      this.props.changeRecordingState(false)
    });
    this.recognition.onResult((result, isFinal) => {
      if (isFinal) {
        this.props.recognize(result)
        // window.speechSynthesis.speak(new SpeechSynthesisUtterance(result))
      }
    });
  }

  toggleRecording = () => {
    this.props.isRecording ? this.stopRecording() : this.startRecording();
  }

  startRecording = () => {
    this.recognition.start();
    this.props.changeRecordingState(true)
  }

  stopRecording = () => {
    this.recognition.stop();
    this.props.changeRecordingState(false)
  }

  render() {
    return (
      <button style={styles.voiceButton} onClick={this.toggleRecording}>{this.props.isRecording ? 'Stop' : 'Start'} recording</button>
    );
  }
}


const mapStateToProps = state => ({
  ...state.voiceReducer
})

const mapDispatchToProps = dispatch => ({
  recognize: (text) => dispatch(recognize(text)),
  changeRecordingState: (isRecording) => dispatch(changeRecordingState(isRecording))
})

export default connect(mapStateToProps, mapDispatchToProps)(VoiceButton)
