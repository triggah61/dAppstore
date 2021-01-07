import React from 'react';
import PropTypes from 'prop-types';
import assets from 'utils/assets';
import * as SC from './styled';

const IconAndLinks = ({
  telegram,
  twitter,
  weibo,
  discord,
  isColumn = true,
}) => (
  <SC.Media isColumn={isColumn}>
    <div className="coins">
      {/* TODO: Confirm if this logos will be rendered from backend */}
      <SC.CryptoIcon src={assets`images/ic-spyce.png`} alt="Spyce Icon" />
      <SC.CryptoIcon src={assets`images/ic-ether.png`} alt="Ether Icon" />
    </div>
    <div className="socials">
      {!!telegram && (
        <SocialLink link={telegram} icon="fas fa-paper-plane" color="#0088cc" />
      )}
      {!!twitter && (
        <SocialLink link={twitter} icon="fab fa-twitter" color="#55acee" />
      )}
      {!!discord && (
        <SocialLink link={discord} icon="fab fa-discord" color="#7289da" />
      )}
      {!!weibo && (
        <SocialLink link={weibo} icon="fab fa-weibo" color="#df2029" />
      )}
    </div>
  </SC.Media>
);

IconAndLinks.propTypes = {
  tele: PropTypes.string,
  twitter: PropTypes.string,
  weibo: PropTypes.string,
  discord: PropTypes.string,
  isColumn: PropTypes.bool,
};

export default IconAndLinks;

const SocialLink = ({ link, icon, color }) => (
  <SC.SocialLink
    color={color}
    target="_blank"
    rel="noopener noreferrer"
    href={link}
  >
    <i className={icon} />
  </SC.SocialLink>
);
