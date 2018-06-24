import React, { Component } from 'react'
import { RASA_TOGGLE } from '../api-config'
import axios from 'axios'

import InputView from '../components/InputView'

class InputViewContainer extends Component {
  handleRasaButtonPressed = () => {
    console.log('rasa button pressed')
    axios.post(RASA_TOGGLE, {
      toggle: 'ON'
    })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    return (
      <InputView onRasaButtonPressed={this.handleRasaButtonPressed} />
    )
  }
}

export default InputViewContainer
