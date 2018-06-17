export const socketResponse = (response) => dispatch => {
  dispatch({
    type: 'RECEIVE_SOCKET_RESPONSE',
    response
  })
}
