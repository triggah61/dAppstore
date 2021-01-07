import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import SectionTitle from 'components/Common/SectionTitle';
import assets from 'utils/assets';
import * as SC from './styled';

const MemberLogo = assets`images/member_logo.png`;

const EntryContainer = ({ children, title, pageHeight }) => {
  const [show, setShow] = useState(false);

  // Show component on mount
  useEffect(() => {
    setShow(true);
  }, [show]);

  return (
    <SC.Container pageHeight={pageHeight}>
      <SC.Content hasTitle={!!title} show={show}>
        <SectionTitle>
          {title || <img src={MemberLogo} alt="logo" />}
        </SectionTitle>
        {children}
      </SC.Content>
    </SC.Container>
  );
};

EntryContainer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  pageHeight: PropTypes.string,
};

const EntryNote = ({ children }) => <SC.NoteWrapper>{children}</SC.NoteWrapper>;

const FooterLinks = ({ children }) => (
  <SC.FooterLinksWrapper>{children}</SC.FooterLinksWrapper>
);

const Wrapper = ({ children, disabled }) => (
  <SC.Wrapper disabled={disabled}>{children}</SC.Wrapper>
);

const Title = ({ children, top }) => <SC.Title top={top}>{children}</SC.Title>;

EntryContainer.EntryNote = EntryNote;
EntryContainer.FooterLinks = FooterLinks;
EntryContainer.Wrapper = Wrapper;
EntryContainer.Title = Title;

export default EntryContainer;
