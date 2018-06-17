export const socketReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_SOCKET_RESPONSE':
    // state = Object.assign({}, state, { data: action.data, loading: false })
      return {
        ...state,
        response: action.response
      }
    default:
      return state
  }
}
