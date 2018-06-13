import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  // TODO
})

const headerStyle = {
  color:'green'
}

class ServerStatus extends Component {

  render () {
    return (
      <div className='ServerStatus'>
        <h3 style={headerStyle}>ServerStatus: </h3>
      </div>
    )
  }
}

export default connect(mapStateToProps)(ServerStatus)
