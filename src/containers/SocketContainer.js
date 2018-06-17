import React, { Component, createElement} from 'react';
import { socketResponse, textToSpeech, showImage } from '../actions/SocketAction'
import createSocket from "sockette-component";
import { connect } from 'react-redux';

const Socket = createSocket({
  Component,
  createElement
});

class SocketContainer extends Component {
    // Socket internal state
    state = {
        socket: null
    }

    componentDidUpdate() {
        console.log('SocketContainer componentDidUpdate() props: ', this.props);
        if (this.props.text != "" && this.props.isRecording == false) {
            this.sendMessage();
        }
    }

    onOpen = ev => {
        console.log("> Connected!", ev);
    };

    onMessage = ev => {

        //this.props.socketResponse(ev.data)
        let parsedData = JSON.parse(ev.data)

        if(!parsedData){return}

        let aType = parsedData.actionType
        let aDetail = parsedData.actionDetail

        switch(String(aType)){
          case 'speak':
            this.props.textToSpeech(aDetail)
            break
          case "showImage":
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
        const request = { "speech": this.props.text, "endpoint": "https://hap2a5df4m.execute-api.us-east-1.amazonaws.com/dev/ping", "state": { "directory": "home" } }
        console.log("VoiceButton this.state: ", this.state)
        console.log("ws: ", this.state.socket.send(JSON.stringify(request)))
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
                    <p>Websocket result: </p> <strong>{this.props.response}</strong>
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
    showImage: (detail) => dispatch(showImage(detail))
})

export default connect(mapStateToProps, mapDispatchToProps)(SocketContainer)
