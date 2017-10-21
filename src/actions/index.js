import axios from 'axios';

import { browserHistory } from 'react-router';

import {
  AUTH_USER, 
  UNAUTH_USER, 
  AUTH_ERROR,
  FETCH_MESSEGE
} from './types';

const API_URL = 'http://localhost:1337';


export function signinUser({ email, password }) {

  return function(dispatch){

    axios.post(`${API_URL}/signin`, {email, password})
    .then(response => {
      console.log(response);

    dispatch({ type: AUTH_USER });

    localStorage.setItem('token', response.data.token);

    browserHistory.push('/feature');
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

export function signupUser({email, password}){
  return function(dispatch){
    axios.post(`${API_URL}/signup`, {email, password})
    .then(response =>{
      dispatch({ type: AUTH_USER });

      localStorage.setItem('token', response.data.token);

      browserHistory.push('/feature');
    })
    .catch((error) => {
      dispatch(authError(error.response.data.error))
    });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}


export function fetchMessage(){
  return function(dispatch){
    axios.get(`${API_URL}`,{
      headers: {Authorization: localStorage.getItem('token')}
    })
      .then(response => {
        console.log(response, 'dsa');
        dispatch({
          type: FETCH_MESSEGE, 
          payload: response.data.messege});
      });
  }
}