import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  //TODO
})

class OutputView extends Component {
  render() {
    return (
      <h1>I am OutputView</h1>
    )
  }
}

export default connect(mapStateToProps)(OutputView)
