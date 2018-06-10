import { Component } from 'react'
import { connect } from 'react-redux'

import CurrentDirectory from './CurrentDirectory'
import ImageBox from './ImageBox'

const mapStateToProps = (state) => ({
  //TODO
})

class OutputView extends Component {
  render() {
    return (
      <div className='Output'>
        <h1>I am OutputView</h1>
        <CurrentDirectory/>
        <ImageBox/>
      </div>
    )
  }
}

export default connect(mapStateToProps)(OutputView)
