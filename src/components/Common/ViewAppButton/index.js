import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';

import { SessionContext } from 'contexts/sessionContext';
import Button from '~/components/Common/Button';
import { recordStat } from 'pages/Common/Stats/modules/actions';

const ViewAppButton = props => {
  const { userId } = useContext(SessionContext);
  const { type, id, icon, isLight, isRounded, children, recordStat } = props;

  return (
    <Button
      type="button"
      icon={icon}
      isLight={isLight}
      isRounded={isRounded}
      onClick={() => {
        userId && recordStat(type, id, userId);
        navigate(`/app-details/${type}/${id}`);
      }}
    >
      {children}
    </Button>
  );
};

ViewAppButton.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.number,
  isLight: PropTypes.bool,
};

const mapDispatchToProps = {
  recordStat,
};

const ViewAppButtonContainer = connect(
  undefined,
  mapDispatchToProps
)(ViewAppButton);

export default ViewAppButtonContainer;
