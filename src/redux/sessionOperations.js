import * as actions from '../redux/sessionActions';
import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const setToken = (token) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const logIn = (credentionals) => (dispatch) => {
  dispatch(actions.logInRequest());

  axios
    .post('/users/login', credentionals)
    .then(({ data }) => {
      dispatch(actions.logInSuccess(data));
      setToken(data.token);
    })
    .catch((error) => dispatch(actions.logInFailure(error.message)));
};

export const signUp = (credentionals) => (dispatch) => {
  dispatch(actions.signUpRequest());

  axios
    .post('/users/signup', credentionals)
    .then(({ data }) => {
      dispatch(actions.signUpSuccess(data));
      setToken(data.token);
    })
    .catch((error) => dispatch(actions.signUpFailure(error.message)));
};

export const logOut = () => (dispatch) => {
  axios
    .post('/users/logout')
    .then(({ data }) => dispatch(actions.logOutSuccess(data)))
    .catch((error) => dispatch(actions.logOutFailure(error.message)));
};

export const getContacts = () => () => {
  axios.get('/contacts').then(console.log).catch(console.log);
};

export const getCurrentUser = () => (dispatch, getState) => {
  const {
    session: { token },
  } = getState();

  if (!token) {
    return;
  }

  setToken(token);
  dispatch(actions.getCurrentUserRequest());

  axios
    .get('/users/current')
    .then(({ data }) => dispatch(actions.getCurrentUserSuccess(data)))
    .catch((error) => dispatch(actions.getCurrentUserFailure(error.message)));
};
