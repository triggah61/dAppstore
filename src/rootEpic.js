import { combineEpics } from 'redux-observable';

import { login, relogin } from 'modules/session/epic';
import { signup } from 'pages/Signup/modules/epic';

import {
  fetchUserAccount,
  updateUserAccount,
} from 'pages/Account/modules/epics';
import { fetchAppDetails } from 'pages/Common/AppDetails/modules/epic';
import {
  fetchAppReviews,
  addAppReview,
} from 'pages/Common/AppReviews/modules/epic';
import { forgotPassword } from 'pages/ForgotPassword/modules/epic';
import { resetPassword } from 'pages/ResetPassword/modules/epic';
import { stats } from 'pages/Common/Stats/modules/epic';
import { yourStore } from 'pages/YourStore/modules/epic';
import { confirmEmail } from 'pages/ConfirmEmail/modules/epic';
import { fetchApps } from 'modules/apps/epic';
import {
  fetchPresaleItems,
  fetchCartItems,
  addItemIntoCart,
} from 'pages/Presale/PresaleItems/modules/epics';
import {
  fetchItemsInCart,
  updateQuantityByItemId,
  addToRemoveList,
  removeAllFromCart,
  addAllToRemoveList,
  addToPaypalTransaction,
  updateMyVouchers,
} from 'pages/Cart/modules/epics';
import * as api from 'api';

const rootEpic = (action$, store) =>
  combineEpics(
    login,
    relogin,
    signup,
    fetchUserAccount,
    updateUserAccount,
    fetchAppDetails,
    fetchAppReviews,
    addAppReview,
    forgotPassword,
    resetPassword,
    confirmEmail,
    ...yourStore,
    ...stats,
    fetchApps,
    fetchPresaleItems,
    fetchCartItems,
    addItemIntoCart,
    fetchItemsInCart,
    updateQuantityByItemId,
    addToRemoveList,
    addAllToRemoveList,
    removeAllFromCart,
    addToPaypalTransaction,
    updateMyVouchers
  )(action$, store, { api });

export default rootEpic;
