import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  // TODO
})

const styles = {
  outputImage:{
    width:'inherit',
    height:'inherit'
  }
}

const catUrl = 'https://lh3.googleusercontent.com/pN9lVcK6P0PB6XwkUyqEGxx-8dll2aE3In_YwqCOHtmQvAJIv_Rb4iNMMlW4j33sNcXCBsB5qFWZbo2FecHLc-2R9b0'

class ImageBox extends Component {
  render () {

    //https://github.com/kriasoft/react-starter-kit/issues/979
    function getBGImage(props) {
      //wrong.  need to fix, but need help on this.
      const imageUrl = require({props} + ".jpg")
      return <div style={{backgroundImage:`url(${imageUrl})`}}/>
    }

    return (
      <div className='ImageBox'>
        <div style={styles.outputImage} alt='Test image box' />
      </div>
    )
  }
}

export default connect(mapStateToProps)(ImageBox)
