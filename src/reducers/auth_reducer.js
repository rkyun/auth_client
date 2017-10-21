import {AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSEGE} from '../actions/types';
export default function(state = {}, action) {
  switch(action.type){
    case AUTH_USER:
      return { ...state, authenticated: true, error: ''};
    case UNAUTH_USER:
      return { ...state, authenticated: false};
    case AUTH_ERROR:
      return { ...state, authenticated: false, error: action.payload};
    case FETCH_MESSEGE:
      return { ...state, messege: action.payload};
  }

  return state;
}

