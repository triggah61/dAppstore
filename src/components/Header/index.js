import React, { useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import { ENABLE_PRESALE } from 'constants/config';
import assets from 'utils/assets';
import * as SC from './styled';

import LanguageDropdown from './language-dropdown';
import AccountDropdown from './account-dropdown';
import Search from './search';

const LINKS = [
  {
    text: 'Register Dapp',
    link: '/your-store',
    icon: FiUpload,
  },
  {
    text: 'dApps',
    link: '/dapps',
  },
  {
    text: 'Apps',
    link: '/apps',
  },
  {
    text: 'Games',
    link: '/games',
  },
  {
    text: 'News',
    link: '/news',
  },
];

if (ENABLE_PRESALE) {
  LINKS.push({
    text: 'Presale',
    link: '/presale',
  });
}

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <SC.HeaderWrapper isOpen={isOpen}>
      <SC.HeaderInner>
        <SC.HeaderContainer>
          <SC.LogoWrapper to="/">
            <img src={assets`images/logo-beta.png`} alt="Dappstore Logo" />
          </SC.LogoWrapper>
          <SC.ToggleButton isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
            <i />
          </SC.ToggleButton>
        </SC.HeaderContainer>
        <SC.MenuWrapper isOpen={isOpen}>
          <div>
            <SC.LinksWrapper>
              {LINKS.map((item, i) => (
                <li key={i}>
                  <SC.LinkItem onClick={() => setOpen(false)} to={item.link}>
                    {item.icon && <item.icon />}
                    <span>{item.text}</span>
                  </SC.LinkItem>
                </li>
              ))}
            </SC.LinksWrapper>
            <SC.UtilsWrapper>
              <LanguageDropdown onClick={() => setOpen(false)} />
              <Search onClick={() => setOpen(false)} />
              <AccountDropdown onClick={() => setOpen(false)} />
            </SC.UtilsWrapper>
          </div>
        </SC.MenuWrapper>
      </SC.HeaderInner>
    </SC.HeaderWrapper>
  );
};
export default Header;
