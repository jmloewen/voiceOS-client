import React, { Component } from 'react'
import PropTypes from 'prop-types'

const styles = {
  webspeechContainer: {
    border: '2px solid black',
    borderRadius: 10,
    float: 'right',
    position: 'relative',
    color: 'blue',
    height: '100%',
    width: '42%',
    padding: 5,
    flex: 1
  }
}

class WebspeechLog extends Component {
  state = {
    logList: []
  }
  render() {
    return (
      <div style={styles.webspeechContainer}>
        <ul>
        <h2 style={styles.webspeechTitle}>{JSON.stringify(this.props)}</h2>
        </ul>
      </div>
    )
  }
}

WebspeechLog.propTypes = {
  recognizedText: PropTypes.string
}
export default WebspeechLog
