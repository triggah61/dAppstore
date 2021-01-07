import { Observable } from 'rxjs';

import { API_URL, SESSION_ID } from 'constants/config';
import { loadSession } from 'session/localStorage';
import axios from 'utils/http';

export function getCart(callback) {
  const session = JSON.parse(window.localStorage[SESSION_ID]);

  const observable = new Observable(observer => {
    return axios
      .get(`${API_URL}/carts?user_id=${session.id}`)
      .then(({ data }) => observer.next(data));
  });

  observable.subscribe(callback);
}

export async function setCart({ id: voucher_id, quantity }) {
  const session = loadSession(SESSION_ID);
  try {
    if (Object.keys(session).length > 0) {
      return await axios.post(`${API_URL}/carts`, {
        user_id: session?.id || null,
        voucher_id,
        quantity,
      });
    }

    return null;
  } catch (ex) {
    console.error(ex);
  }
}

export async function updateCart({ id: voucher_id, quantity, entryId }) {
  const session = loadSession(SESSION_ID) || null;

  try {
    if (Object.keys(session).length > 0) {
      await axios.put(`${API_URL}/carts/${entryId}`, {
        user_id: session.id,
        voucher_id,
        quantity,
      });
    }
  } catch (ex) {
    console.error(ex);
  }
}

export async function deleteCart(entryId) {
  // const { id: user_id } = JSON.parse(window.localStorage[SESSION_ID]);
  const session = loadSession(SESSION_ID) || null;

  try {
    if (Object.keys(session).length > 0) {
      await axios.delete(`${API_URL}/carts/${entryId}`);
    }
  } catch (ex) {
    console.error(ex);
  }
}
