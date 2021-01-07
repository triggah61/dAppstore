import { from } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import * as actionFuncs from './actions';
import { FETCH_APP_REVIEWS, ADD_APP_REVIEW } from './actionTypes';

export const fetchAppReviews = (action$, store, { api }) => {
  return action$.pipe(
    ofType(FETCH_APP_REVIEWS),
    mergeMap(({ payload }) => {
      const { appType, appId, user_id } = payload;
      return from(api.fetchAppReviewsApi(appType, appId, user_id)).pipe(
        map(res => {
          const {
            status,
            data: { data: reviews },
          } = res;
          if (status === 200) {
            return actionFuncs.fetchAppReviewsSuccess(status, reviews);
          }
          return actionFuncs.fetchAppReviewsFailure(status, true);
        })
      );
    })
  );
};

export const addAppReview = (action$, store, { api }) => {
  return action$.pipe(
    ofType(ADD_APP_REVIEW),
    mergeMap(({ payload }) => {
      const { appType, data } = payload;
      return from(api.addAppReviewApi(appType, data)).pipe(
        map(res => {
          const { status, data } = res;
          if (status === 200) {
            const {
              data: { id: reviewId },
            } = data;
            return actionFuncs.addAppReviewSuccess(reviewId, status);
          }
          return actionFuncs.addAppReviewFailure(status, data.message);
        })
      );
    })
  );
};
