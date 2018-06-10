import { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  //TODO
})

class CurrentDirectory extends Component {
  render() {
    return (
      <div className='CurrentDirectory'>
        <h3>Static Directory: /home</h3>
      </div>
    )
  }
}

export default connect(mapStateToProps)(CurrentDirectory)
