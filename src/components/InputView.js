import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  //TODO
})

class InputView extends Component {
  render() {
    return (
      <h1>I am InputView</h1>
    )
  }
}

export default connect(mapStateToProps)(InputView)
