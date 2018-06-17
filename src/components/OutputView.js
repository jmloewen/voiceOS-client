import React, { Component } from 'react'
import { connect } from 'react-redux'


import CurrentDirectory from './CurrentDirectory'
import ImageBox from './ImageBox'

const mapStateToProps = (state) => ({
  // TODO
})

//migrate css styles back to individual pages

const styles = {
  outputHeader:{
    color:'green'
  },
  outputImageContainer:{
    border:'1px solid black'
  },
  outputContainer: {
    border: '1px solid black',
    color: 'red',
    float: 'left',
    position:'absolute',
    padding:'10px',
    width:'40%',
    flex:'1'
  }
}

class OutputView extends Component {
  render() {

    return (
      <div style={styles.outputContainer}>
        <CurrentDirectory style={styles.outputHeader} />
        <div style={styles.outputImageContainer}>
          <ImageBox imageUrl={this.props.imageUrl}/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(OutputView)
