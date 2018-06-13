import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  // TODO
  ...state.voiceReducer
})

const styles = {
  webspeechContainer:{
    border: '1px solid black',
    float:'right',
    position:'relative',
    color:'blue',
    height:'100%',
    width:'40%',
    padding:'10px',
    flex:'1'
  },

  webspeechTitle: {
    position:'inherit'
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
        <p style={styles.webspeechOutput}>This is Output</p>
      </div>
    )
  }
}

export default connect(mapStateToProps)(WebspeechLog)
