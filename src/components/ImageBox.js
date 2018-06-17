import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  // TODO
})

const catUrl = 'https://lh3.googleusercontent.com/pN9lVcK6P0PB6XwkUyqEGxx-8dll2aE3In_YwqCOHtmQvAJIv_Rb4iNMMlW4j33sNcXCBsB5qFWZbo2FecHLc-2R9b0'


const styles = {
  outputImage:{
    backgroundImage:`url(${catUrl})`,
    backgroundSize:'contain',
    backgroundRepeat:'no-repeat',
    height:'0px',
    paddingTop:'66.64%'
  }
}
//paddingtop: imgHeight / imgwidth * container width


class ImageBox extends Component {
  constructor(props){
    super(props)
    this.state = {dimensions: {}}
    this.onImgLoad = this.onImgLoad.bind(this)
  }

  onImgLoad({target:img}){
    this.setState({dimensions:{height:img.offsetHeight,
                              width:img.offsetWidth}})
  }

  render () {
    const {src}=this.props
    const {width, height} = this.state.dimensions

    return (
      <div className='ImageBox'>
        dimensions {width} {height}
        <div onLoad={this.onImgLoad} src={src} style={styles.outputImage} alt='Test image box' />
      </div>
    )
  }
}

export default connect(mapStateToProps)(ImageBox)
