import { combineReducers } from 'redux';

import { sessionReducer } from 'modules/session/reducer';
import { signupReducer } from 'pages/Signup/modules/reducer';
import { userAccountReducer } from 'pages/Account/modules/reducer';
import { appDetailsReducer } from 'pages/Common/AppDetails/modules/reducer';
import { reviewsReducer } from 'pages/Common/AppReviews/modules/reducer';
import { statsReducer } from 'pages/Common/Stats/modules/reducer';
import { yourStoreReducer } from 'pages/YourStore/modules/reducer';
import { confirmEmailReducer } from 'pages/ConfirmEmail/modules/reducer';
import { forgotPasswordReducer } from 'pages/ForgotPassword/modules/reducer';
import { resetPasswordReducer } from 'pages/ResetPassword/modules/reducer';
import { fetchedAppsReducer } from 'modules/apps/reducer';

import { commonReducer } from 'pages/Common/Presale/modules/reducer';

const rootReducer = combineReducers({
  sessionReducer,
  signupReducer,
  userAccountReducer,
  appDetailsReducer,
  reviewsReducer,
  statsReducer,
  ...yourStoreReducer,
  fetchedAppsReducer,
  confirmEmailReducer,
  forgotPasswordReducer,
  resetPasswordReducer,
  commonReducer,
});

export default rootReducer;
