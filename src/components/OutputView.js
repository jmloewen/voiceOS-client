import React, { Component } from 'react'
import { connect } from 'react-redux'
import {componentViewStyles} from '../constants';

const mapStateToProps = (state) => ({
  //TODO
})

class OutputView extends Component {
  render() {

    const {
      outputContainer,
      outputHeader,
      outputImageContainer,
      outputImage
    } = componentViewStyles;

    return (
      <div style={outputContainer}>
        <h2 style={outputHeader}>Current Directory</h2>
        <div style={outputImageContainer}>
          <img style={outputImage} src="#"/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(OutputView)
