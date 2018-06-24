import React, { Component, createElement} from 'react'
import { socketResponse, showImage } from '../actions/SocketAction'
import { textToSpeech, resetVoiceRecognition } from '../actions/VoiceAction'
import createSocket from "sockette-component"
import { connect } from 'react-redux'

const Socket = createSocket({
  Component,
  createElement
});

class SocketContainer extends Component {
    state = {
        socket: null
    }

    componentDidUpdate() {
        if (this.props.recognitionText && this.props.isRecording === false) {
            this.sendMessage();
            this.props.resetVoice();
        }
    }

    onOpen = ev => {
        console.log("> Connected!", ev);
    };

    onMessage = ev => {

        let parsedData = JSON.parse(ev.data)
        this.props.socketResponse(parsedData)

        if(!parsedData){return}

        let aType = parsedData.actionType
        let aDetail = parsedData.actionDetail
        //debugging mock:////////////////////
        //aType = 'showImage'
        //aDetail = 'http://www.youtwitface.com/wp-content/uploads/2012/05/kitten-650x488-600x450.jpg'
        ////////////////////////
        switch(String(aType)){
          case 'speak':
            this.props.textToSpeech(aDetail)
            break
          case "show_image":
            this.props.showImage(aDetail)
            break
          default:
            console.log(parsedData)
            console.log(aType)
            console.log(aDetail)
            throw new Error("OH NO! UNRECOGNIZED ACTION!!!!")
        }

    };

    onReconnect = ev => {
        console.log("> Reconnecting...", ev);
    };

    sendMessage = _ => {
        // WebSocket available in state!
        let directory = "home"
        if (this.props.response) {
            directory = this.props.response.state.directory
        }
        const request = {
            "speech": this.props.recognitionText,
            "endpoint": "https://hap2a5df4m.execute-api.us-east-1.amazonaws.com/dev/ping",
            "state": { "directory": directory }
        }
        this.state.socket.send(JSON.stringify(request))
    };

    setSocket = socket => {
        if (this.state.socket == null) {
            this.setState({socket: socket});
        }
    }

    render() {
        return(
            <div>
                {
                    this.props.response != null &&
                    <div>
                    <p>Websocket result: </p> <strong>{JSON.stringify(this.props.response)}</strong>
                    </div>
                }
                <Socket
                url='ws://secure-lowlands-10237.herokuapp.com/websocket/'
                // url="ws://localhost:8080/websocket/"
                getSocket={socket => { this.setSocket(socket) }}
                maxAttempts={2}
                onopen={this.onOpen}
                onmessage={this.onMessage}
                onreconnect={this.onReconnect}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state.voiceReducer,
    response: state.socketReducer.response,
})

const mapDispatchToProps = dispatch => ({
    socketResponse: (response) => dispatch(socketResponse(response)),
    textToSpeech: (detail) => dispatch(textToSpeech(detail)),
    showImage: (detail) => dispatch(showImage(detail)),
    resetVoice: () => dispatch(resetVoiceRecognition())
})

export default connect(mapStateToProps, mapDispatchToProps)(SocketContainer)
