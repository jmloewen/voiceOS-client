import React, { Component } from 'react'
import { connect } from 'react-redux'

const styles = {
  webspeechContainer:{
    border: '2px solid black',
    borderRadius: 10,
    float: 'right',
    position: 'relative',
    color: 'blue',
    height: '100%',
    width: '42%',
    padding: 5,
    flex: 1
  },

  webspeechOutput:{
    position:'inherit'
  }
}

class WebspeechLog extends Component {
  render() {
    return (
      <div style={styles.webspeechContainer}>
        <h2 style={styles.webspeechTitle}>{JSON.stringify(this.props)}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.voiceReducer
})

export default connect(mapStateToProps)(WebspeechLog)
