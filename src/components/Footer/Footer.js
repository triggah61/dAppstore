import React from 'react';

import assets from 'utils/assets';

import * as SC from './styled';

const DNET_EMIAL = 'info@decenternet.com';
const DAPPSTORE_LINK = 'https://decenternet.com/Dappstore.php';
const ABOUT_DAPPSTORE_LINK = 'https://decenternet.com/Dappstore.php';
const CONTACTS_LIST = [
  {
    title: 'Website',
    content: (
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://decenternet.com/"
      >
        decenternet.com
      </a>
    ),
  },
  {
    title: 'Email',
    content: (
      <a
        href={`mailto:${DNET_EMIAL}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        {DNET_EMIAL}
      </a>
    ),
  },
];

const LINKS_LIST = [
  {
    text: 'About dAppstore',
    link: ABOUT_DAPPSTORE_LINK,
  },
  {
    text: 'Legal',
    link: '/',
  },
  {
    text: 'Online Service Update',
    link: '/',
  },
  {
    text: 'User Agreement',
    link: '/terms-of-service',
  },
];

const Footer = () => (
  <SC.Footer>
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <SC.H2>
            <SC.Logo to="/">
              <img
                src={assets`images/logo-beta-alt.png`}
                alt="Dappstore Logo in Footer"
              />
            </SC.Logo>
          </SC.H2>
          <p>
            Decenternet’s Decentralized App’s Store (dAppstore) is another
            unique addition to the Osiris Web Browser. The dAppstore is
            completely integrated into the Osiris web browsing experience...
          </p>
          <SC.AnchorViewDetails
            target="_blank"
            rel="noopener noreferrer"
            href={DAPPSTORE_LINK}
          >
            View Detail <i className="fas fa-angle-right" />
          </SC.AnchorViewDetails>
        </div>
        <div className="col-md-4 col-sm-7">
          <SC.H2>Contacts</SC.H2>
          <SC.LinkContainer>
            {CONTACTS_LIST.map((item, i) => (
              <p key={i}>
                <b>{item.title} :</b>
                {item.content}
              </p>
            ))}
          </SC.LinkContainer>
        </div>
        <div className="col-md-4 col-sm-5">
          <SC.H2>Link</SC.H2>
          <SC.LinkContainer>
            {LINKS_LIST.map((item, i) => (
              <p key={i}>
                <a target="_blank" rel="noopener noreferrer" href={item.link}>
                  {item.text}
                </a>
              </p>
            ))}
          </SC.LinkContainer>
        </div>
      </div>
      <SC.Info className="row">
        <div className="col">
          <p>&copy;2019 dAppstore All rights reserved.</p>
        </div>
      </SC.Info>
    </div>
  </SC.Footer>
);

export default Footer;
