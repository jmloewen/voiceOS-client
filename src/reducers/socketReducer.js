export const socketReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_SOCKET_RESPONSE':
    // state = Object.assign({}, state, { data: action.data, loading: false })
      return {
        ...state,
        response: action.response
      }
    case 'SHOW_IMAGE':
      return {...state, imageUrl:action.detail}
    default:
      return state
  }
}
