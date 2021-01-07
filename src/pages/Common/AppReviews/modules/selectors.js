export const reviews = state => state.reviewsReducer.reviews;
export const addStatus = state => state.reviewsReducer.addStatus;
export const submitting = state => state.reviewsReducer.submitting;
export const fetching = state => state.reviewsReducer.fetching;
export const reviewStatus = state => state.reviewsReducer.reviewStatus;
export const reviewId = state => state.reviewsReducer.reviewId;
export const error = state => state.reviewsReducer.error;
export const message = state => state.reviewsReducer.message;

export const appDetails = state => state.appDetailsReducer.app;
export const userProfile = state => state.sessionReducer.userProfile;
