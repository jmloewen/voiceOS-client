import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import VoiceButton from './VoiceButton'

const serverStatus = 'Connected'

class InputView extends Component {
  render() {
    return (
      <Card style={styles.inputContainer}>
        <Typography variant='headline'>ServerStatus:</Typography>
        <Typography
          style={{ color: 'green' }}
          variant='headline'
          gutterBottom align='center'
        >
          {serverStatus}
        </Typography>
        <VoiceButton />
        <Button onClick={this.props.onRasaButtonPressed} variant='outlined' color='secondary' >
          Turn on RASA
        </Button>

      </Card>
    )
  }
}

const styles = {
  inputContainer: {
    float: 'left',
    position: 'absolute',
    top: '500px',
    width: '50%',
    padding: '10px',
    flex: '1'
  }
}

export default InputView
