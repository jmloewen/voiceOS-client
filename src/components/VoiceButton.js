import React, { Component, createElement} from 'react';
import { recognize, changeRecordingState } from '../actions/VoiceAction'
import SpeechRecognitionService from '../utils/speechRecognitionService';
import { connect } from 'react-redux';
import createSocket, { Sockette } from "sockette-component";

const Socket = createSocket({
  Component,
  createElement
});

class VoiceButton extends Component {

  state = {
    speech: null,
    endpoint: null,
    state: null,
    socket: null
  }

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

  /*componentDidUpdate() {
    if (this.props.text != "" && this.props.isRecording == false) {
      this.sendMessage();
    }
  }*/

  toggleRecording = () => {
    this.props.isRecording ? this.stopRecording() : this.startRecording();
  }

  startRecording = () => {
    this.recognition.start();
    this.props.changeRecordingState(true);
  }

  stopRecording = () => {
    this.recognition.stop();
    this.props.changeRecordingState(false);
    this.sendMessage();
  }

  onOpen = ev => {
    console.log("> Connected!", ev);
  };

  onMessage = ev => {
    console.log("> Received:", ev.data);
    this.setState({
      speech: ev.data
    });
  };

  onReconnect = ev => {
    console.log("> Reconnecting...", ev);
  };

  sendMessage = _ => {
    // WebSocket available in state!
    const request = { "speech": this.props.text, "endpoint": "https://hap2a5df4m.execute-api.us-east-1.amazonaws.com/dev/ping", "state": { "directory": "home" } }
    console.log("this.state: ", this.state)
    console.log("ws: ", this.state.socket.send(JSON.stringify(request)))
  };

  render() {
    console.log("VoiceButton render() props: ", this.props)

    return (
      <div>
        <button onClick={this.toggleRecording}>{this.props.isRecording ? 'Stop' : 'Start'} recording</button>
        <Socket
            url='ws://secure-lowlands-10237.herokuapp.com/websocket/'
            // url="ws://localhost:8080/websocket/"
            getSocket={socket => {
              this.setState({socket: socket});
            }}
            maxAttempts={2}
            onopen={this.onOpen}
            onmessage={this.onMessage}
            onreconnect={this.onReconnect}
          />
        
        {
          this.state.speech != null && 
          <div>
            <p>Websocket result: </p> <strong>{this.state.speech}</strong>
          </div>
        }
        

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
