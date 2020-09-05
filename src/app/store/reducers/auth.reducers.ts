import {State} from '../../models/state'
import { AuthActionTypes, All } from '../actions/auth.actions';
export const initialState: State = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
  };
  
  export function reducer(state = initialState, action: All): State {
    switch (action.type) {
      case AuthActionTypes.LOGIN_SUCCESS: {
        return {
          ...state,
          isAuthenticated: true,
          user: {
            accessToken: action.payload.token,
            email: action.payload.email
          },
          errorMessage: null
        };
      }
      case AuthActionTypes.LOGIN_FAILURE: {
        return {
          ...state,
          errorMessage: 'Incorrect email and/or password.'
        };
      }
      case AuthActionTypes.SIGNUP_SUCCESS: {
        return {
          ...state,
          isAuthenticated: true,
          user: {
            accessToken: action.payload.token,
            email: action.payload.email
          },
          errorMessage: null
        };
      }
      case AuthActionTypes.SIGNUP_FAILURE: {
        return {
          ...state,
          errorMessage: 'That email is already in use.'
        };
      }
      case AuthActionTypes.LOGOUT: {
        return initialState;
      }
      default: {
        return state;
      }
    }
  }