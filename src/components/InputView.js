import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import ServerStatus from './ServerStatus'
import VoiceButton from './VoiceButton'

class InputView extends Component {
  render() {
    return (
      <Card style={styles.inputContainer}>
        <ServerStatus />
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
