import axios from 'axios';
import { configure } from 'axios-hooks';

import { SESSION_ID, API_BASE_URL } from 'constants/config';
import { loadSession } from 'session/localStorage';

const instance = axios.create({
  baseURL: API_BASE_URL,
});

const beforeSend = config => {
  const session = loadSession(SESSION_ID);
  if (session) {
    // eslint-disable-next-line no-param-reassign
    config.headers.common.Authorization = `Bearer ${session.token}`;
  }

  return config;
};
instance.interceptors.request.use(beforeSend);

configure({ axios: instance });

export default instance;
