import axios from 'utils/http';
import { handleError } from './error';

export async function addAppReviewApi(data) {
  return axios.post(`/restricted/reviews`, data).catch(handleError);
}

export async function fetchAppReviewsApi(type, id, userId) {
  return axios
    .get(`/${type}/${id}/reviews/?user_id=${userId}`)
    .catch(handleError);
}
