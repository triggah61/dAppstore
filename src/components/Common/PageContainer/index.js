import React, { useEffect, useState, useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import moment from 'moment';
import IdleTimer from 'react-idle-timer';
import { navigate } from '@reach/router';

import { SESSION_ID } from 'constants/config';
import { loadSession } from 'session/localStorage';
import { SessionContext } from 'contexts/sessionContext';
import { isEmpty } from 'utils';

const IDLE_TIME = 1000 * 60 * 15; // 15 mins

const SESSION_EXPIRED_TEXT = 'Your session has expired. Please re-login.';
const IDLED_TEXT = 'You were idle for 15 minutes. Would you like to continue?';

const PageContainer = ({ children }) => {
  const { userProfile, logout, isLogin, relogin } = useContext(SessionContext);
  const tokenExpiry = userProfile && moment.unix(userProfile.token_expiry);
  const [show, setShow] = useState(false);
  const localSession = loadSession(SESSION_ID);
  const noLocalData = isEmpty(localSession);
  const [isExpired, setExpired] = useState(
    moment().isSameOrAfter(tokenExpiry) && !noLocalData
  );
  let delayClick = null;

  useEffect(() => {
    // if expires show modal and change modal text
    if (isExpired) {
      setShow(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  useEffect(() => {
    return clearTimeout(delayClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <IdleTimer
        onIdle={() => isLogin && setShow(true)}
        debounce={250}
        timeout={IDLE_TIME}
      />
      {React.cloneElement(children, {
        children: React.Children.map(children.props.children, child => {
          return React.cloneElement(child, { userProfile });
        }),
      })}
      {isLogin && (
        <Modal
          show={show}
          onHide={() => setShow(false)}
          backdrop={isExpired ? 'static' : true}
        >
          <Modal.Header closeButton={!isExpired}>
            <Modal.Title>Session</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{isExpired ? SESSION_EXPIRED_TEXT : IDLED_TEXT}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                if (isExpired) {
                  relogin(userProfile.token);
                } else {
                  logout();
                  navigate('/login');
                }
                // add delay before updating state
                delayClick = setTimeout(() => {
                  setExpired(false);
                }, 300);
                setShow(false);
              }}
            >
              {isExpired ? 'Re-login' : 'No, Log me out'}
            </Button>
            {!isExpired && (
              <Button variant="primary" onClick={() => setShow(false)}>
                Yes
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default PageContainer;
