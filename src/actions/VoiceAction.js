export const recognize = (text) => dispatch => {
  dispatch({
    type: 'VOICE_RECOGNITION',
    recognitionText: text
  })
}

export const resetVoiceRecognition = () => {
  return {
    type: 'RESET_VOICE_RECOGNITION'
  }
}

export const changeRecordingState = (recording) => dispatch => {
  dispatch({
    type: 'RECORDING_STATE',
    isRecording: recording
  })
}

export const textToSpeech = (detail) => dispatch => {
  dispatch({
    type: 'SPEAK',
    detail: detail
  })
}
