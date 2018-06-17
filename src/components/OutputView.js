import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const catUrl = "https://lh3.googleusercontent.com/pN9lVcK6P0PB6XwkUyqEGxx-8dll2aE3In_YwqCOHtmQvAJIv_Rb4iNMMlW4j33sNcXCBsB5qFWZbo2FecHLc-2R9b0"
const currentDirectory = '/home'

class OutputView extends Component {
  render() {
    return (
      <Card style={styles.outputContainer}>
        <Typography variant='display2' gutterBottom align='center'>Currently at: {currentDirectory}</Typography>
        <CardMedia
          style={{ height: 400 }}
          image={catUrl}
        />
      </Card>
    )
  }
}

const mapStateToProps = (state) => ({
  // TODO
})

const styles = {
  outputContainer: {
    float: 'left',
    position: 'absolute',
    padding: '10px',
    width: '50%',
    flex: '1'
  }
}

export default connect(mapStateToProps)(OutputView)
