import axios from 'utils/http';
import { handleError } from './error';
import { getAppTypeId } from '~/utils';

export async function recordStatApi(appType, appId, userId) {
  return axios
    .post('/restricted/stats', {
      user_id: userId,
      app_id: appId,
      type: getAppTypeId(appType),
    })
    .catch(handleError);
}

export async function fetchStatsApi(type, id) {
  return axios.get(`/${type}/${id}/stats/?months=6`).catch(handleError);
}
