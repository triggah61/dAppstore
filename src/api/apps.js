import axios from 'utils/http';
import { handleError } from './error';
import { fetchScreenshotsApi } from './images';

export async function getAppDetailsApi(type, id, userId) {
  return axios.get(`/${type}/${id}/?user_id=${userId}`).catch(handleError);
}

export async function fetchApps(type, tag, userId = 0) {
  if (tag) {
    return axios
      .get(`/tags/${tag}/${type}/?user_id=${userId}`)
      .catch(handleError);
  }
  return axios.get(`/${type}/?user_id=${userId}`).catch(handleError);
}

export function fetchAppDetailsApi(type, id, user_id = 0) {
  // Fetch app details and screenshots
  return Promise.all([
    getAppDetailsApi(type, id, user_id),
    fetchScreenshotsApi(type, id, user_id),
  ]).then(res => {
    const [details, screenshots] = res;
    if (screenshots.status === 200) {
      details.data.data.screenshots = screenshots.data.data;
    }

    return details;
  });
}

export async function createDapp(data) {
  let newData = { ...data };

  // update data base on api requirements
  newData.banner = {
    path: data.banner[0].path,
    data_url: data.banner[0].dataUrl,
  };

  if (data.thumbnail) {
    const { path, dataUrl } = data.thumbnail[0];
    newData = {
      ...newData,
      thumbnail: {
        path,
        data_url: dataUrl,
      },
    };
  } else {
    newData = {
      ...newData,
      thumbnail: null,
    };
  }

  newData.screenshots = data.screenshots.map(item => {
    return {
      path: item.path,
      data_url: item.dataUrl,
    };
  });

  return axios
    .post(
      `/restricted/${data.category_id}/?user_id=${data.user_id || 0}`,
      newData
    )
    .catch(handleError);
}
