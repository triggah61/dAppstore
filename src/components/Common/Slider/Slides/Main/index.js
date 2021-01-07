import React from 'react';

import IconAndLinks from 'components/Common/IconAndLinks';
import Button from 'components/Common/Button';
import ViewAppButton from 'components/Common/ViewAppButton';
import VisitSiteButton from 'components/Common/VisitSiteButton';
import { SessionContext } from 'contexts/sessionContext';
import { statusSetting } from 'utils';

import * as SC from './styled';

const SliderMain = props => {
  const {
    id,
    name,
    description,
    website,
    twitter,
    weibo,
    telegram,
    discord,
    banner,
    banner_mobile: bannerMobile,
    type,
    status,
    action,
    buttons,
    slideCustomClass,
    customComponent,
  } = props;

  const nameClass = name
    ? name.toLowerCase().replace(/[^\w\s]| /gi, '-') // Note: check if we can replace this with slugify
    : slideCustomClass;

  return (
    <SC.Container
      className={`${slideCustomClass} main-slider`}
      bg={banner}
      bg_mb={bannerMobile}
    >
      {customComponent}
      <SC.Inner>
        <SC.ContentWrapper className={`cont-wrap-${nameClass}`}>
          {name && (
            <SC.H1>
              {name}
              <SessionContext.Consumer>
                {({ isAdmin }) => {
                  const s = statusSetting(status);
                  return (
                    isAdmin &&
                    !!s && (
                      <SC.StatusIcon
                        className={`text-${s.color} fas ${s.icon}`}
                      />
                    )
                  );
                }}
              </SessionContext.Consumer>
            </SC.H1>
          )}
          {description && (
            <SC.Description className={`desc-${nameClass}`}>
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </SC.Description>
          )}
        </SC.ContentWrapper>
        <SC.LinksWrapper className={`links-wrapper button-wrap-${nameClass}`}>
          {!buttons && (
            <IconAndLinks
              twitter={twitter}
              weibo={weibo}
              telegram={telegram}
              discord={discord}
              isColumn={false}
            />
          )}

          <SC.Links>
            {buttons ? (
              buttons.map((item, i) => (
                <Button
                  key={i}
                  icon={item.icon}
                  link={item.link}
                  type={item.type}
                  isLight={item.isLight}
                  className={item.className}
                >
                  {item.text}
                </Button>
              ))
            ) : (
              <>
                <ViewAppButton
                  type={type} // app type
                  id={id} // app id
                  isLight
                  icon="assets/images/ic-pc.png"
                >
                  view more
                </ViewAppButton>
                <VisitSiteButton link={website} action={action} type={type} />
              </>
            )}
          </SC.Links>
        </SC.LinksWrapper>
      </SC.Inner>
    </SC.Container>
  );
};

export default SliderMain;
