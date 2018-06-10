export const voiceReducer = (state={text:'', isRecording:false}, action) => {
  switch (action.type) {
    case 'VOICE_RECOGNITION':
     return {
      text: action.text,
      isRecording: state.isRecording
     }
     case 'RECORDING_STATE':
     return {
      text: state.text,
      isRecording: action.isRecording
     }
    return state
  }
  return state
}
