export const socketReducer = (state = {}, action) => {
  switch (action.type) {
  case 'SOCKET_RESPONSE_RECEIVE':
    // state = Object.assign({}, state, { data: action.data, loading: false })
    return {
      ...state,
      response: action.response,
    }
  default:
    return state
  }
}
