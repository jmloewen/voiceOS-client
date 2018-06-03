export const socketReducer = (state = {}, action) => {
  switch (action.type) {
    case 'listening':
      // state = Object.assign({}, state, { data: action.data, loading: false })
      return state
    default:
      return state
  }
}
