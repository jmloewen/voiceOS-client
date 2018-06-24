import React, { Component } from 'react'
import { RASA_CONTROL } from '../api-config'

import InputView from '../components/InputView'

class InputViewContainer extends Component {
  render () {
    console.log('RASA Control is :', RASA_CONTROL)

    return (
      <InputView />
    )
  }
}

export default InputViewContainer
