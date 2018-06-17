import React, { Component } from 'react'
import { connect } from 'react-redux'
import AutoFitImage from 'react-image-autofit-frame'

const mapStateToProps = (state) => ({
  // TODO
})


const styles = {
  outputImage: {
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
        <AutoFitImage frameWidth="400px" frameHeight="300px" imgSrc={this.props.imageUrl} style={{/*..your style here..*/ }} />
      </div>
    )
  }
}

export default ImageBox
