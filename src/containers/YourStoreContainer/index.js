import React from 'react';
import { connect as rrconnect } from 'react-redux';
import YourStoreForm from '~/components/YourStoreForm';

const YourStoreContainer = props => {
  return <YourStoreForm {...props} />;
};

export const connect = ({ actions, selectors }) => {
  const mapStateToProps = state => {
    return {
      dappDetails: selectors.dappDetails(state),
      createDappError: selectors.createDappError(state),
      createDappStatus: selectors.createDappStatus(state),
      dappSubmitClicked: selectors.submitClicked(state),
      submitting: selectors.submitting(state),
    };
  };

  const mapDispatchToProps = {
    onSubmitDapp: actions.createDapp,
    onSubmitClicked: actions.submitClicked,
  };

  return rrconnect(mapStateToProps, mapDispatchToProps)(YourStoreContainer);
};

export default YourStoreContainer;
