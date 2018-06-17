import React, { Component } from 'react'
import { connect } from 'react-redux'
import AutoFitImage from 'react-image-autofit-frame'

const mapStateToProps = (state) => ({
  // TODO
})

const catUrl = 'https://lh3.googleusercontent.com/pN9lVcK6P0PB6XwkUyqEGxx-8dll2aE3In_YwqCOHtmQvAJIv_Rb4iNMMlW4j33sNcXCBsB5qFWZbo2FecHLc-2R9b0'

const styles = {
  outputImage: {
    backgroundImage: `url(${catUrl})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '0px',
    paddingTop: '66.64%'
  }
}

class ImageBox extends Component {

  render () {
    return (
      <div className='ImageBox'>
        <AutoFitImage frameWidth="400px" frameHeight="300px" imgSrc={catUrl} style={{/*..your style here..*/ }} />
      </div>
    )
  }
}

export default connect(mapStateToProps)(ImageBox)
