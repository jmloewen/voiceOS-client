export const socketResponse = (response) => dispatch => {
  dispatch({
    type: 'SOCKET_RESPONSE_RECEIVE',
    response
  })
}