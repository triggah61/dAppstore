import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';

import { CATEGORIES } from 'constants/config';
import IconAndLinks from 'components/Common/IconAndLinks';
import Button from 'components/Common/Button';
import ViewAppButton from 'components/Common/ViewAppButton';
import { SessionContext } from 'contexts/sessionContext';
import { statusSetting } from 'utils';
import * as SC from './styled';

// check if thumbnail path is valid
const hashumbnail = path => {
  return /\.(jpe?g|png|PNG|gif|bmp)$/i.test(path);
};

const DATE_FORMAT = 'MMM dd, yyyy';

const Card = props => {
  const {
    type,
    id,
    cols,
    isFullBanner,
    contentHeight,
    contentXsHeight,
    thumbnail,
    banner,
    link,
    twitter,
    weibo,
    telegram,
    discord,
    title,
    name,
    hideLinks,
    status,
    className,
  } = props;
  const isNews = type === CATEGORIES.NEWS;

  return (
    <SC.Container
      className={cols || 'col-6 col-sm-6 col-lg-4'}
      contentHeight={contentHeight}
      contentXsHeight={contentXsHeight}
    >
      <SC.InnerContainer
        isFullBanner={isFullBanner}
        bg={hashumbnail(thumbnail) ? thumbnail : banner}
      >
        <SC.Overlay>
          {isNews ? (
            <Button isRounded link={link}>
              Explore
            </Button>
          ) : (
            <ViewAppButton
              type={type} // app type
              id={id} // app id
              isRounded
            >
              > Explore
            </ViewAppButton>
          )}
        </SC.Overlay>
        <SessionContext.Consumer>
          {({ isAdmin }) => {
            const s = statusSetting(status);
            return (
              s &&
              isAdmin && (
                <SC.StatusIcon className={`text-${s.color} fas ${s.icon}`} />
              )
            );
          }}
        </SessionContext.Consumer>
        <SC.Content className="card-content">
          <SC.Name isNews={isNews} className={className}>
            {isNews ? title : name}
          </SC.Name>
        </SC.Content>
        <SC.LinksContainer className={className}>
          {hideLinks ? (
            <SC.DateContaner>
              <img src="assets/images/ic_watch.png" alt="Watch" />
              {format(new Date(), DATE_FORMAT)}
            </SC.DateContaner>
          ) : (
            <IconAndLinks
              twitter={twitter}
              weibo={weibo}
              telegram={telegram}
              discord={discord}
            />
          )}
        </SC.LinksContainer>
      </SC.InnerContainer>
    </SC.Container>
  );
};

Card.propTypes = {
  isFullBanner: PropTypes.bool,
  cols: PropTypes.string,
  contentHeight: PropTypes.string,
  contentXsHeight: PropTypes.string,
  hideDesc: PropTypes.bool,
  hideLinks: PropTypes.bool,
  centeredText: PropTypes.bool,
};

export default Card;
