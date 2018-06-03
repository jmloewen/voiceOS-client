import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import VoiceOSClient from './containers/VoiceOSClient'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <VoiceOSClient/>
      </Provider>
    )
  }
}

export default App
