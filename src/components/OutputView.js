import React, { Component } from 'react'
import { connect } from 'react-redux'
import {componentViewStyles} from '../constants';


import CurrentDirectory from './CurrentDirectory'
import ImageBox from './ImageBox'

const mapStateToProps = (state) => ({
  // TODO
})

class OutputView extends Component {
  render() {

    const {
      outputContainer,
      outputHeader,
      outputImageContainer
    } = componentViewStyles;

    return (
      <div style={outputContainer}>
        <CurrentDirectory style={outputHeader} />
        <div style={outputImageContainer}>
          <ImageBox/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(OutputView)
