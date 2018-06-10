import React, { Component } from 'react'
import { connect } from 'react-redux'

export const componentViewStyles = {
    outputHeader:{
      color:'green'
    },
    outputImage:{

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
    },
    inputContainer: {
      border: '1px solid black',
      float:'left',
      position:'relative',
      top:'400px',
      width:'40%',
      padding:'10px',
      flex:'1'
    },
    webspeechContainer:{
      border: '1px solid black',
      float:'right',
      position:'relative',
      color:'blue',
      height:'100%',
      width:'40%',
      padding:'10px',
      flex:'1'
    },
    inputHeader:{

    },

    inputButton:{
      border: '1px solid black',
      float: 'right',
      position:'relative'
    },

    webspeechTitle: {
      position:'inherit'
    },
    webspeechOutput:{
      position:'inherit'
    }
};
