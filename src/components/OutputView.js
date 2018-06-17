import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const currentDirectory = '/home' // Needs to updated

class OutputView extends Component {
  render () {
    return (
      <Card style={styles.outputStyles}>
        <Typography variant='display2' gutterBottom align='center'>Currently at: {currentDirectory}</Typography>
        <CardMedia
          style={{ height: 400 }}
          image={this.props.imageUrl}
        />
      </Card>
    )
  }
}

const styles = {
  outputStyles: {
    float: 'left',
    position: 'absolute',
    padding: '10px',
    width: '50%',
    flex: '1'
  }
}

export default OutputView
