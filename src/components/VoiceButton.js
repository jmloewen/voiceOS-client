import React, { Component, createElement} from 'react';
import { recognize, changeRecordingState } from '../actions/VoiceAction'
import SpeechRecognitionService from '../utils/speechRecognitionService';
import { connect } from 'react-redux';

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
      <div>
        <button onClick={this.toggleRecording}>{this.props.isRecording ? 'Stop' : 'Start'} recording</button>
      </div>
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
