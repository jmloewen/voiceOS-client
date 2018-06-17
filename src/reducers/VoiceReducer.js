export const voiceReducer = (state = {text: '', isRecording: false}, action) => {
  switch (action.type) {
    case 'VOICE_RECOGNITION':
      return {
        recognitionText: action.recognitionText,
        isRecording: state.isRecording
      }
    case 'RESET_VOICE_RECOGNITION':
      return {
        recognitionText: null,
        isRecording: false
      }
    case 'SPEAK': // TODO
      return {...state, speechText: action.detail}
    case 'RECORDING_STATE':
      return {
        text: state.text,
        isRecording: action.isRecording
      }
  }
  return state
}
