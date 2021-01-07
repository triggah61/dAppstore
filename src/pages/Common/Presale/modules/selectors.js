export const items = state => state.commonReducer.items;
export const fetching = state => state.commonReducer.fetching;
export const fetchingItems = state => state.commonReducer.fetchingItems;
export const successMessage = state => state.commonReducer.success;
export const submitting = state => state.commonReducer.submitting;
export const loading = state => state.commonReducer.loading;
export const status = state => state.commonReducer.status;
export const statusItems = state => state.commonReducer.statusItems;
export const error = state => state.commonReducer.error;

export const cartItems = state => state.commonReducer.cartItems;
export const cartItemCount = state => state.commonReducer.cartItemCount;
export const cartTotalAmount = state => state.commonReducer.cartTotalAmount;
export const paypalTxDetails = state => state.commonReducer.paypalTxDetails;
export const txStatus = state => state.commonReducer.txStatus;
export const account = state => state.userAccountReducer.account;
