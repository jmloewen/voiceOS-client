import React, { Component } from 'react'
import { connect } from 'react-redux'
import {componentViewStyles} from '../constants';

const mapStateToProps = (state) => ({
  // TODO
})

const catUrl = 'https://lh3.googleusercontent.com/pN9lVcK6P0PB6XwkUyqEGxx-8dll2aE3In_YwqCOHtmQvAJIv_Rb4iNMMlW4j33sNcXCBsB5qFWZbo2FecHLc-2R9b0'

class ImageBox extends Component {
  render () {

    const {
      outputImage
    } = componentViewStyles;

    return (
      <div className='ImageBox'>
        <div style={outputImage} alt='Test image box' />
      </div>
    )
  }
}

export default connect(mapStateToProps)(ImageBox)
