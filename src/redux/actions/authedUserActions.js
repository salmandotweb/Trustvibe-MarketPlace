import * as ActionTypes from '../ActionTypes';

export const loginUser = (u) => ({
  type: ActionTypes.LOGGED_IN,
  payload: u
});

export const updateUser = (u) => ({
  type: ActionTypes.UPDATE_USER,
  payload: u
});

export const logoutUser = (u) => ({
  type: ActionTypes.LOGGED_OUT,
});

export const loginUserReq = (address) => dispatch => {
  return fetch(`${process.env.REACT_APP_BASE_URL}/login-2`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({address: address})
  })
    .then(res => res.json())
    .then(r => {
      if (r.status){
        return dispatch(loginUser(r.data[0]));
      }
      else{
        return r.message;
      }
    });
};

export const editUsernameReq = (username, token) => dispatch => {
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', `Bearer ${token}`);

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({username: username})
  }

  return fetch(`${process.env.REACT_APP_BASE_URL}/selectUsername`, requestOptions)
          .then(res => res.json())
          .then(r => {
            if (r.status){
              return dispatch(updateUser, )
            }
            else{
              return r.message;
            }
          })
}