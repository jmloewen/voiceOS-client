import React, { Component } from 'react'
import { connect } from 'react-redux'
import AutoFitImage from 'react-image-autofit-frame'

const catUrl = 'https://lh3.googleusercontent.com/pN9lVcK6P0PB6XwkUyqEGxx-8dll2aE3In_YwqCOHtmQvAJIv_Rb4iNMMlW4j33sNcXCBsB5qFWZbo2FecHLc-2R9b0'

class ImageBox extends Component {
  render () {
    return (
      <div className='ImageBox'>
        <AutoFitImage frameWidth="500px" frameHeight="400px" imgSrc={catUrl} style={styles.outputImage} />
      </div>
    )
  }
}

const styles = {
  outputImage: {
    // backgroundImage: `url(${catUrl})`,
    // backgroundSize: 'contain',
    // backgroundRepeat: 'no-repeat',
    // height: '0px',
    // paddingTop: '66.64%'
  }
}

const mapStateToProps = (state) => ({
  // TODO
})

export default connect(mapStateToProps)(ImageBox)
