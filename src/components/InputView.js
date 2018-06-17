import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

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

const mapStateToProps = (state) => ({
  // TODO
})

export default connect(mapStateToProps)(InputView)
