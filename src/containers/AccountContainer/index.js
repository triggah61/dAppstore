import React, { useEffect, useContext } from 'react';
import { connect as rrconnect } from 'react-redux';

import { SessionContext } from 'contexts/sessionContext';
import AccountForm from '~/components/AccountForm';
import Loader from '~/components/Common/Loader';

const AccountContainer = props => {
  const { userId } = useContext(SessionContext);
  const { onFetch, account, fetching } = props;

  useEffect(() => {
    userId && onFetch(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return (
    <Loader height="58.5625rem" loading={!fetching}>
      {!fetching && account.id && <AccountForm {...props} />}
    </Loader>
  );
};

export const connect = ({ actions, selectors }) => {
  const mapStateToProps = state => {
    return {
      fetching: selectors.loading(state),
      account: selectors.account(state),
      message: selectors.successMessage(state),
      submitting: selectors.submitting(state),
      status: selectors.status(state),
      error: selectors.error(state),
    };
  };

  const mapDispatchToProps = {
    onSubmitUserAccount: actions.updateUserAccount,
    onFetch: actions.fetchUserAccount,
  };

  return rrconnect(mapStateToProps, mapDispatchToProps)(AccountContainer);
};
