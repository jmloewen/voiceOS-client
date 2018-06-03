export const recognize = (text) => dispatch => {
  dispatch({
    type: 'VOICE_RECOGNITION',
   text: text
  })
}

export const changeRecordingState = (recording) => dispatch => {
  dispatch({
    type: 'RECORDING_STATE',
    isRecording: recording
  })
}
