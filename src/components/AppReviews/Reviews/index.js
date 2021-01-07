import React from 'react';
import moment from 'moment';
import { Editor, EditorState, convertFromRaw } from 'draft-js';

import * as SC from './styled';
import ReviewStars from '../ReviewStars';
import { statusSetting } from '~/utils';

const convertToContentState = message => {
  const fromRaw = convertFromRaw(JSON.parse(message));
  const editorState = EditorState.createWithContent(fromRaw);
  return editorState;
};

export default ({ reviews, isAdmin }) =>
  reviews ? (
    <SC.ReviewListWrapper>
      {reviews.map(item => {
        const status = statusSetting(item.status);
        const editorState = convertToContentState(item.message);
        return (
          <SC.ReviewItem key={item.id}>
            <SC.ReviewHeader>
              <h3>
                {item.author_name.trim() || item.author_email.split('@')[0]}
              </h3>
              <SC.ReviewEvents>
                {isAdmin && (
                  <i className={`text-${status.color} fas ${status.icon}`} />
                )}
                {/* <SC.LikeButton>
                <i className="fas fa-thumbs-up"/>
                <span>1,200</span>
              </SC.LikeButton> */}
              </SC.ReviewEvents>
            </SC.ReviewHeader>
            <SC.RatingWrapper>
              <ReviewStars value={item.rating} />
              <span>
                {item.created_at ? moment(item.created_at).fromNow() : ''}
              </span>
            </SC.RatingWrapper>
            <Editor readOnly editorState={editorState} />
          </SC.ReviewItem>
        );
      })}
    </SC.ReviewListWrapper>
  ) : null;
