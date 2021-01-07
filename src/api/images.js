import axios from 'utils/http';
import { handleError } from './error';

export async function fetchScreenshotsApi(type, id, userId) {
  return axios
    .get(`/${type}/${id}/screenshots/?user_id=${userId}`)
    .catch(handleError);
}

export default {};
