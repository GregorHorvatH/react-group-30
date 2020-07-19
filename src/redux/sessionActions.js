import { createAction } from '@reduxjs/toolkit';

export const logInRequest = createAction('LOG_IN_REQUEST');
export const logInSuccess = createAction('LOG_IN_SUCCESS');
export const logInFailure = createAction('LOG_IN_FAILURE');

export const signIn = createAction('SIGN_IN');

export const logOut = createAction('LOG_OUT');
