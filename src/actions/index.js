import axios from 'axios';

import { browserHistory } from 'react-router';

import {
  AUTH_USER, 
  UNAUTH_USER, 
  AUTH_ERROR
} from './types';

const API_URL = 'http://localhost:1337';


export function signinUser({ email, password }) {

  return function(dispatch){
  // submit email/password to the server
  axios.post(`${API_URL}/signin`, {email, password})
  .then(response => {
    console.log(response);
  //if request is good...
  // - update state to indicate user is authenticated
  dispatch({ type: AUTH_USER });
  // - save the jwt token
  localStorage.setItem('token', response.data.token);
  // - redirect to the rout /feautre
    //browserHistory.push('/feature');
  })
  .catch(() => {
    console.log('wat');
  dispatch(authError('Bad login info'));

  });

  }
}

export function signoutUser(){
  localStorage.removeItem('token');

  return { type: UNAUTH_USER }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}