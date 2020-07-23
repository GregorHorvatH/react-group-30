import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './sessionActions';

const initialState = {
  isAuthorized: false,
  error: null,
  token: null,
  user: null,
};

// ===== isAuthorized =====
const isAuthorized = createReducer(initialState.isAuthorized, {
  [actions.logInSuccess.type]: () => true,
  [actions.signUpSuccess.type]: () => true,
  [actions.getCurrentUserSuccess.type]: () => true,

  [actions.logInRequest.type]: () => false,
  [actions.logOutSuccess.type]: () => false,
  [actions.logOutFailure.type]: () => false,
});

// ===== error =====
const setError = (_, { payload: message }) => message;

const error = createReducer(initialState.error, {
  [actions.signUpFailure.type]: setError,
  [actions.getCurrentUserFailure.type]: setError,

  [actions.logInRequest.type]: () => null,
  [actions.signUpRequest.type]: () => null,
  [actions.logOutRequest.type]: () => null,

  [actions.logInSuccess.type]: () => null,
  [actions.signUpSuccess.type]: () => null,
  [actions.logOutSuccess.type]: () => null,
});

// ===== token =====
const setToken = (_, { payload: { token } }) => token;

const token = createReducer(initialState.token, {
  [actions.logInSuccess.type]: setToken,
  [actions.signUpSuccess.type]: setToken,

  [actions.logInRequest.type]: () => null,
  [actions.logOutSuccess.type]: () => null,
  [actions.logOutFailure.type]: () => null,
});

// ===== user =====
const setUser = (_, { payload: { user } }) => user;

const user = createReducer(initialState.user, {
  [actions.logInSuccess.type]: setUser,
  [actions.signUpSuccess.type]: setUser,
  [actions.getCurrentUserSuccess.type]: (_, { payload: user }) => user,

  [actions.logInRequest.type]: () => null,
  [actions.logOutSuccess.type]: () => null,
  [actions.logOutFailure.type]: () => null,
});

export default combineReducers({
  isAuthorized,
  error,
  token,
  user,
});
