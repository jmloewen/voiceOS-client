import { combineReducers } from 'redux'
import { socketReducer } from './SocketReducer'
import { voiceReducer } from './VoiceReducer'

const rootReducer = combineReducers({
  socketReducer,
  voiceReducer
})

export default rootReducer
