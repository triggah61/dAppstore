import axios from 'utils/http';

import { handleError } from './error';

export async function loginUserApi(data) {
  return axios.post('/users/login/', data).catch(handleError);
}

export async function forgotPasswordApi(data) {
  return axios.post('/users/forgot-password', data).catch(handleError);
}

export async function resetPasswordApi(data) {
  return axios.post('/users/reset-password', data).catch(handleError);
}

export async function signupUserApi(data) {
  return axios.post('/users/', data).catch(handleError);
}

export async function confirmEmailApi(token) {
  return axios.get(`/users/confirm/${token}`).catch(handleError);
}

export async function updateUserAccountApi(id, data) {
  return axios.put(`/restricted/users/${id}`, data).catch(handleError);
}

export async function fetchUserAccountApi(id) {
  return axios.get(`/restricted/users/${id}`).catch(handleError);
}

export async function reloginApi() {
  return axios.get('/restricted/tokens').catch(handleError);
}
