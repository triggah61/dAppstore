import React, { useEffect } from 'react';
import { connect as rrconnect } from 'react-redux';

import ConfirmEmail from '~/components/ConfirmEmail';
import Loader from '~/components/Common/Loader';

const ConfirmEmailContainer = props => {
  const { confirming, token, onConfirmEmail } = props;

  useEffect(() => {
    onConfirmEmail(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Loader height="15rem" xsHeight="18.75rem" loading={!confirming}>
      {!confirming && <ConfirmEmail {...props} />}
    </Loader>
  );
};

export const connect = ({ actions, selectors }) => {
  const mapStateToProps = state => {
    return {
      confirming: selectors.confirming(state),
      status: selectors.status(state),
      error: selectors.error(state),
    };
  };

  const mapDispatchToProps = {
    onConfirmEmail: actions.confirmEmail,
  };

  return rrconnect(mapStateToProps, mapDispatchToProps)(ConfirmEmailContainer);
};
