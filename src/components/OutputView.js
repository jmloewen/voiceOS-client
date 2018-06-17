import React, { Component } from 'react'
import { connect } from 'react-redux'

import CurrentDirectory from './CurrentDirectory'
import ImageBox from './ImageBox'

class OutputView extends Component {
  render() {

    return (
      <div style={styles.outputContainer}>
        <CurrentDirectory style={styles.outputHeader} />
        <div style={styles.outputImageContainer}>
          <ImageBox/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // TODO
})

const styles = {
  outputHeader: {
    color: 'green'
  },
  outputImageContainer: {
    border: '1px solid black'
  },
  outputContainer: {
    border: '1px solid black',
    color: 'red',
    float: 'left',
    position: 'absolute',
    padding: '10px',
    width: '40%',
    flex: '1'
  }
}

export default connect(mapStateToProps)(OutputView)
