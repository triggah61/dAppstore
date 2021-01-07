import axios from 'utils/http';
import { API_URL, SESSION_ID } from 'constants/config';
import { loadSession } from 'session/localStorage';
import { handleError } from './error';

export async function fetchPresaleItemsApi() {
  return axios.get(`${API_URL}/voucher?count=10&page=1`).catch(handleError);
}

export async function updateMyVouchersApi(data) {
  const senderEmail = await loadSession(SESSION_ID);
  const payload = {
    paypal_order_id: data.details.id,
    total_amount: Number(data.details.purchase_units.map(i => i.amount.value)),
    paypal_payLoad: 'payload from paypal',
    user_id: data.id,
    email_address: data.email,
    sender: senderEmail.email_address,
    purchased_voucher: data.cartItems.map(i => ({
      voucher_id: i.id,
      quantity: Number(i.quantity),
    })),
  };
  return await axios.post(`${API_URL}/purchases/`, payload).catch(handleError);
}
