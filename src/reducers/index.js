import { combineReducers } from 'redux'
import { socketReducer } from './socketReducer'
import voiceReducer from './VoiceReducer'

const rootReducer = combineReducers({
  socketReducer,
  voiceReducer
})

export default rootReducer
